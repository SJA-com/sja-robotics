/**
 * Waitlist sign-ups for robotics.sjapathway.com.
 *
 *   POST /api/waitlist        public — {name, email, company?, note?, product, page?}
 *   GET  /api/waitlist        admin  — all sign-ups (header X-Admin-Key: <ADMIN_KEY secret>)
 *   GET  /admin/waitlist      admin page (asks for the key in the browser)
 *
 * Each sign-up is one KV key, wl:<product>:<email>, so re-submitting is idempotent.
 * The fields are also written as KV metadata so listing needs no per-key reads.
 */

import ADMIN_HTML from "./admin-html.js";

const PRODUCTS = new Set(["Fari", "MOUS", "SAM", "Autonomous"]);
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;
const hits = new Map();

const json = (data, status = 200) =>
  Response.json(data, { status, headers: { "Cache-Control": "no-store" } });
const clip = (v, n) => (typeof v === "string" ? v.trim().slice(0, n) : "");

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT;
}

async function isAdmin(request, env) {
  const given = request.headers.get("X-Admin-Key") || "";
  if (!env.ADMIN_KEY || !given) return false;
  const enc = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", enc.encode(given)),
    crypto.subtle.digest("SHA-256", enc.encode(env.ADMIN_KEY)),
  ]);
  return crypto.subtle.timingSafeEqual(a, b);
}

async function signUp(request, env) {
  if (!env.ROBOTICS_KV) return json({ error: "Waitlist is not available right now." }, 503);
  const ip = request.headers.get("CF-Connecting-IP") || "local";
  if (rateLimited(ip)) return json({ error: "Too many attempts — please try again in a minute." }, 429);

  let body;
  try { body = await request.json(); } catch { return json({ error: "Invalid request." }, 400); }

  // Honeypot filled in → almost certainly a bot. Pretend it worked.
  if (clip(body.website, 200)) return json({ ok: true });

  const name = clip(body.name, 100);
  const email = clip(body.email, 200).toLowerCase();
  const product = PRODUCTS.has(body.product) ? body.product : null;
  if (!name) return json({ error: "Please enter your name." }, 400);
  if (!EMAIL_RE.test(email)) return json({ error: "Please enter a valid email address." }, 400);
  if (!product) return json({ error: "Unknown product." }, 400);

  const key = `wl:${product}:${email}`;
  if (await env.ROBOTICS_KV.get(key)) return json({ ok: true, already: true });

  const entry = {
    name,
    email,
    product,
    company: clip(body.company, 120),
    note: clip(body.note, 500),
    page: clip(body.page, 120),
    country: request.cf?.country || "",
    created: new Date().toISOString(),
  };
  // Metadata is capped at 1 KB, so the note is shortened there; the value keeps it whole.
  const metadata = { ...entry, note: entry.note.slice(0, 250) };
  await env.ROBOTICS_KV.put(key, JSON.stringify(entry), { metadata });
  return json({ ok: true });
}

async function listSignUps(env) {
  const entries = [];
  let cursor;
  do {
    const page = await env.ROBOTICS_KV.list({ prefix: "wl:", cursor });
    for (const k of page.keys) if (k.metadata) entries.push(k.metadata);
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  entries.sort((a, b) => (a.created < b.created ? 1 : -1));

  const byProduct = {};
  for (const e of entries) byProduct[e.product] = (byProduct[e.product] || 0) + 1;
  return json({ total: entries.length, byProduct, entries });
}

/** Returns a Response for waitlist routes, or null if the path isn't one. */
export async function handleWaitlist(request, env, path) {
  if (path === "/api/waitlist") {
    if (request.method === "POST") return signUp(request, env);
    if (request.method === "GET") {
      if (!(await isAdmin(request, env))) return json({ error: "Unauthorized" }, 401);
      if (!env.ROBOTICS_KV) return json({ total: 0, byProduct: {}, entries: [] });
      return listSignUps(env);
    }
    return json({ error: "Method not allowed" }, 405);
  }
  if (path === "/admin/waitlist" || path === "/admin/waitlist/") {
    return new Response(ADMIN_HTML, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex",
      },
    });
  }
  return null;
}
