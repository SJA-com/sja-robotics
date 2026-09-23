/**
 * robotics.sjapathway.com router.
 *
 * Static site assets are served directly by Workers Assets. Anything that
 * isn't an asset lands here: waitlist sign-ups (worker/waitlist.js), product
 * demos mounted under a path prefix — forwarded to their own Workers (via
 * service bindings) or Pages project — and everything else falls through to
 * the static 404 page.
 *
 * Each product reads X-Base-Path so its UI builds URLs under the prefix.
 */

import { handleWaitlist } from "./waitlist.js";

const PRODUCTS = {
  fari: { binding: "FARI" },
  mous: { binding: "MOUS" },
  sam: { binding: "SAM" },
  atiana: { binding: "ATIANA" },
  sueen: { origin: "https://sueen.pages.dev" },
};

const MOUNT_RE = new RegExp(`^/(${Object.keys(PRODUCTS).join("|")})(/.*)?$`);

const router = {
  async fetch(request, env) {
    const url = new URL(request.url);

    const waitlist = await handleWaitlist(request, env, url.pathname);
    if (waitlist) return waitlist;

    const match = url.pathname.match(MOUNT_RE);
    if (!match) return env.ASSETS.fetch(request);

    const [, name, rest] = match;
    // /fari → /fari/ so relative URLs inside the product resolve under the prefix.
    if (!rest) return Response.redirect(`${url.origin}/${name}/${url.search}`, 301);

    const product = PRODUCTS[name];
    const target = new URL(rest + url.search, product.origin || url.origin);
    const headers = new Headers(request.headers);
    headers.set("X-Base-Path", `/${name}`);
    headers.set("X-Forwarded-Host", url.host);

    const forwarded = new Request(target, {
      method: request.method,
      headers,
      body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
      redirect: "manual",
    });

    const service = product.binding && env[product.binding];
    if (product.binding && !service) {
      return new Response(`${name} is not available right now.`, { status: 503 });
    }
    return service ? service.fetch(forwarded) : fetch(forwarded);
  },
};

export default router;
