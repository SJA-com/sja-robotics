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

export default function ProductShowcase() {
  return (
    <section id="products" className="relative py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal className="text-center mb-14">
          <p className="eyebrow mb-4">Products</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            One engine. <span className="text-brand">Products that speak your language.</span>
          </h2>
        </div>

        {/* Main product */}
        <article
          data-reveal="scale"
          aria-labelledby="mous-title"
          className="relative overflow-hidden rounded-3xl border border-accent-3/30 bg-gradient-to-br from-accent-2/25 via-surface/85 to-surface/90 p-6 sm:p-12 mb-6 shadow-[0_30px_80px_-40px_rgba(52,50,195,0.8)]"
        >
          <div aria-hidden="true" className="glow-breathe absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full pointer-events-none bg-[radial-gradient(closest-side,rgba(201,162,39,0.18),transparent_70%)]" />
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
                  className="inline-flex justify-center items-center px-7 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-2 text-white font-semibold hover:opacity-90 glow-accent press"
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
                <li key={p} className="lift lift-gold flex gap-3 items-start p-4 rounded-xl bg-background/70 border border-border">
                  <span className="mt-0.5 text-[#d4a853]" aria-hidden="true">✦</span>
                  <span className="text-sm text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Technology */}
          <article data-reveal="left" aria-labelledby="fari-title" className="lift glass relative overflow-hidden rounded-2xl border border-border p-6 sm:p-8">
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

          {/* The rest of the lineup lives on /products/ (no duplicate product lists here) */}
          <div data-reveal="right" className="flex">
          <Link
            href="/products/"
            className="lift lift-gold group glass relative overflow-hidden rounded-2xl border border-[#d4a853]/25 p-6 sm:p-8 flex flex-1 flex-col justify-between gap-8"
          >
            <div aria-hidden="true" className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[radial-gradient(closest-side,rgba(124,134,232,0.25),transparent_70%)]" />
            <div className="relative">
              <p className="eyebrow mb-4">Full lineup</p>
              <p className="text-2xl font-bold mb-3">Every product, one page.</p>
              <p className="text-foreground/70 leading-relaxed">
                Voice agents, AI companions, smart-home intelligence, household robots and drones, across our SJA
                AI and SJA Autonomous divisions.
              </p>
            </div>
            <span className="relative inline-flex items-center gap-2 font-semibold text-[#e3c56a]">
              Browse all products
              <svg className="nudge w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
          </div>
        </div>

        {/* Early access */}
        <div data-reveal className="mt-10 rounded-2xl border border-[#d4a853]/40 bg-gradient-to-r from-[#d4a853]/15 via-[#d4a853]/8 to-surface/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
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
