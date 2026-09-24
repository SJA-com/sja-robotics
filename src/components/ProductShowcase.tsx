import Link from "next/link";
import WaitlistButton from "./WaitlistButton";

// Product apps are served by the site router (worker/index.js), not by Next pages,
// so they are linked with absolute URLs.
const SITE = "https://robotics.sjapathway.com";
export const MOUS_DEMO_URL = `${SITE}/mous/?demo=1`;
export const MOUS_PRICING_URL = `${SITE}/mous/pricing`;
export const MOUS_SETUP_URL = `${SITE}/mous/#setup`;
export const FARI_URL = `${SITE}/fari/`;

const mousPoints = [
  "Speaks Gulf, Egyptian, Levantine and Moroccan Arabic — and English",
  "Takes bookings, reads invoices, knows your opening hours",
  "Detects upset callers and hands off to your team",
];

const comingSoon = [
  { name: "Atiana", tagline: "AI assistant robot", status: "In Development", href: "/products/atiana" },
  { name: "SAM", tagline: "Smart home & security", status: "Coming 2027", href: "/divisions/sja-ai" },
  { name: "Sueen", tagline: "Logistics automation", status: "Coming 2027", href: "/products/sueen" },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="relative py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal className="text-center mb-14">
          <p className="text-xs font-mono tracking-widest text-[#d4a853] uppercase mb-3">Products</p>
          <h2 className="text-3xl sm:text-4xl font-bold">One engine. Products that speak your language.</h2>
        </div>

        {/* Main product */}
        <article
          data-reveal="scale"
          aria-labelledby="mous-title"
          className="relative overflow-hidden rounded-3xl border border-[#1a4fd6]/40 bg-gradient-to-br from-[#1a4fd6]/15 via-surface to-surface p-8 sm:p-12 mb-6"
        >
          <div className="glow-breathe absolute -top-24 -right-24 w-80 h-80 bg-[#1a4fd6]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#d4a853]/15 text-[#d4a853] border border-[#d4a853]/30">
                  Main product
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/30">
                  Live demo · Early access
                </span>
              </div>
              <h3 id="mous-title" className="text-4xl sm:text-5xl font-bold mb-3">
                MOUS
              </h3>
              <p className="text-xl sm:text-2xl text-foreground/90 mb-4">Give your business a voice</p>
              <p className="text-foreground/70 leading-relaxed mb-6 max-w-xl">
                An AI receptionist built for WhatsApp and phone calls. Set it up in five minutes with no code —
                MOUS answers only from your business information, in your customers&apos; own dialect.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={MOUS_DEMO_URL}
                  className="inline-flex justify-center items-center px-7 py-3 rounded-lg bg-[#1a4fd6] text-white font-semibold hover:bg-[#1a4fd6]/85 press"
                >
                  Try Demo
                </a>
                <a
                  href={MOUS_PRICING_URL}
                  className="inline-flex justify-center items-center px-7 py-3 rounded-lg border border-[#d4a853]/50 text-[#d4a853] font-semibold hover:bg-[#d4a853]/10 press"
                >
                  View Pricing
                </a>
              </div>
            </div>
            <ul data-reveal-stagger className="space-y-3">
              {mousPoints.map((p) => (
                <li key={p} className="lift lift-gold flex gap-3 items-start p-4 rounded-xl bg-background/60 border border-border">
                  <span className="mt-0.5 text-[#d4a853]" aria-hidden="true">✦</span>
                  <span className="text-sm text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Technology */}
          <article data-reveal="left" aria-labelledby="fari-title" className="lift rounded-2xl border border-border bg-surface p-8">
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/15 text-accent-3 border border-accent/30">
              Technology
            </span>
            <h3 id="fari-title" className="text-3xl font-bold mt-4 mb-2">
              Fari
            </h3>
            <p className="text-lg text-foreground/90 mb-3">Our core AI engine</p>
            <p className="text-foreground/70 leading-relaxed mb-5">
              Arabic-first reasoning, permanent memory and specialised modes — try it as a personal companion.
            </p>
            <p className="text-sm font-semibold text-[#d4a853] mb-6">Powers MOUS today. Powers Atiana tomorrow.</p>
            <a
              href={FARI_URL}
              className="inline-flex items-center px-6 py-2.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-2 press"
            >
              Try Fari
            </a>
          </article>

          {/* Coming soon */}
          <div data-reveal-stagger className="grid gap-3" aria-label="Coming soon">
            {comingSoon.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="flex items-center justify-between gap-4 p-5 rounded-xl border border-border bg-surface/60 opacity-75 hover:opacity-100 hover:border-accent/40 lift"
              >
                <div>
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-sm text-foreground/60">{p.tagline}</p>
                </div>
                <span className="shrink-0 text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-border text-foreground/60">
                  {p.status}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Early access */}
        <div data-reveal className="mt-10 rounded-2xl border border-[#d4a853]/40 bg-[#d4a853]/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-lg font-semibold">
            <span aria-hidden="true">🚀 </span>First 10 businesses get MOUS free for 3 months
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={MOUS_SETUP_URL}
              className="inline-flex justify-center items-center px-6 py-2.5 rounded-lg bg-[#d4a853] text-black font-semibold hover:bg-[#d4a853]/90 press"
            >
              Set up now →
            </a>
            <WaitlistButton
              product="MOUS"
              className="inline-flex justify-center items-center px-6 py-2.5 rounded-lg border border-[#d4a853]/50 text-[#d4a853] font-semibold hover:bg-[#d4a853]/10 press"
            >
              Join Waitlist
            </WaitlistButton>
          </div>
        </div>
      </div>
    </section>
  );
}
