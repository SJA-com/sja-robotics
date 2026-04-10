/* ─── Voice Agent Data ─── */

const voiceUseCases = [
  {
    industry: "Restaurant",
    description: "AI takes reservations by phone",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    industry: "Clinic",
    description: "AI books appointments",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    industry: "Real Estate",
    description: "AI answers property enquiries 24/7",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    industry: "E-commerce",
    description: "AI handles customer support calls",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
];

const voiceFeatures = [
  "Custom voice",
  "Custom personality",
  "Multiple languages",
  "24/7 availability",
  "Call analytics dashboard",
];

const voicePricing = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses getting started with AI voice",
    highlight: false,
  },
  {
    name: "Business",
    price: "$199",
    period: "/month",
    description: "For growing businesses that need advanced voice capabilities",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large-scale deployments",
    highlight: false,
  },
];

// SJA Companion — merged into Fari (uncomment when needed)
// Full companion data preserved in git history

// AI Capabilities — commented out (uncomment when needed)
// Full capabilities data preserved in git history

/* ─── Imports ─── */

import Fari from "@/components/Fari";
import Mari from "@/components/Mari";
import MoussFeatures from "@/components/MoussFeatures";

/* ─── Component ─── */

export default function DivisionAI() {
  return (
    <div id="sja-ai">
      {/* ═══════════════════════════════════════════════════
          DIVISION HEADER
          ═══════════════════════════════════════════════════ */}
      <section className="py-24 pb-12 relative bg-hextech overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-2/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-3/8 rounded-full blur-[120px]" />
          <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-accent-2/10 to-transparent" />
          <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-accent-2/10 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-2/10 text-accent-2 text-xs font-mono mb-4 tracking-wider">
              DIVISION 02
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              SJA <span className="text-accent-2">AI</span>
            </h2>
            <p className="text-accent-2/70 text-sm font-mono mb-4">
              Artificial Intelligence
            </p>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Pioneering artificial intelligence research, building machine
              learning models, and developing intelligent software solutions
              that power every product across SJA Robotics.
            </p>
          </div>

          {/* Product Directory */}
          <div className="rounded-2xl bg-surface border border-border p-8 sm:p-10">
            <h3 className="text-xl font-bold mb-6 text-center">
              Products Under{" "}
              <span className="text-accent-2">SJA AI</span>
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  name: "Mouss",
                  tagline: "Multilingual Omnipresent Unified Speech System",
                  badge: "Coming Soon",
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                },
                {
                  name: "Fari",
                  tagline: "Futuristic Artificial Reasoning Intelligence",
                  badge: "Coming Soon",
                  icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
                },
                {
                  name: "MARI",
                  tagline: "Multi-Automated Routine Intelligence",
                  badge: "Coming Soon",
                  icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                },
              ].map((product) => (
                <div
                  key={product.name}
                  className="flex items-center gap-4 rounded-lg bg-surface-2 border border-border px-5 py-4 hover:border-accent-2/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-2/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-accent-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={product.icon}
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-bold truncate">
                        {product.name}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-accent-2/10 text-accent-2 text-[9px] font-mono tracking-wider shrink-0">
                        {product.badge.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-xs text-foreground/50 truncate">
                      {product.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PRODUCT 1 — MOUSS
          ═══════════════════════════════════════════════════ */}
      <section className="py-24 relative bg-datastream overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-2/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-3/8 rounded-full blur-[100px]" />
          <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-accent-2/12 to-transparent" />
          <div className="absolute top-0 left-[75%] w-px h-full bg-gradient-to-b from-transparent via-accent-3/12 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-accent-2 text-xs font-mono mb-2 tracking-wider uppercase">
              Product 01
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">
              <span className="text-accent-2">Mouss</span>
            </h3>
            <p className="text-accent-2/60 text-sm font-mono mb-3">
              Multilingual Omnipresent Unified Speech System
            </p>
            <p className="text-lg font-semibold text-foreground/90 mb-3">
              Give Your Business a Voice
            </p>
            <span className="inline-flex px-3 py-1 rounded-full bg-accent-2/10 text-accent-2 text-[10px] font-mono tracking-wider mb-4">
              COMING SOON
            </span>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Any business can deploy their own AI voice agent in minutes — no
              coding needed
            </p>
          </div>

          {/* Use Cases */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {voiceUseCases.map((useCase) => (
              <div
                key={useCase.industry}
                className="rounded-xl bg-surface border border-border p-6 hover:border-accent-2/30 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${useCase.bg} flex items-center justify-center mb-4`}
                >
                  <svg
                    className={`w-6 h-6 ${useCase.color}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={useCase.icon}
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-1">{useCase.industry}</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="rounded-2xl bg-surface border border-border p-8 sm:p-12 mb-12">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-3">
                Key <span className="text-accent-2">Features</span>
              </h4>
              <p className="text-foreground/60 text-sm max-w-xl mx-auto">
                Everything your business needs to deliver an exceptional voice
                experience
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {voiceFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-lg bg-surface-2 border border-border px-5 py-3 hover:border-accent-2/30 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-accent-2 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-foreground/80">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold mb-2">
              Simple <span className="text-accent-2">Pricing</span>
            </h4>
            <p className="text-foreground/60 text-sm">
              Choose the plan that fits your business
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {voicePricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-7 text-center transition-all ${
                  plan.highlight
                    ? "gradient-border bg-surface"
                    : "bg-surface border border-border hover:border-accent-2/30"
                }`}
              >
                <p className="text-accent-2 text-sm font-mono mb-2 tracking-wider uppercase">
                  {plan.name}
                </p>
                <div className="mb-3">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-foreground/50 text-sm">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-foreground/50 text-sm">{plan.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-accent-2 to-accent-3 text-white font-semibold hover:opacity-90 transition-opacity glow-accent mb-3">
              Join Waitlist
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <p className="text-foreground/40 text-sm">
              Launching soon — be among the first businesses to deploy
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT MAKES MOUSS DIFFERENT ─── */}
      <MoussFeatures />

      {/* ═══════════════════════════════════════════════════
          PRODUCT 2 — FARI
          ═══════════════════════════════════════════════════ */}
      <Fari />

      {/* ═══════════════════════════════════════════════════
          PRODUCT 3 — MARI
          ═══════════════════════════════════════════════════ */}
      <section className="py-24 relative bg-neural overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-20 w-64 h-64 bg-accent-2/8 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-16 w-48 h-48 bg-accent-3/8 rounded-full blur-3xl" />
          <div className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-accent-2/10 to-transparent" />
          <div className="absolute top-0 left-[70%] w-px h-full bg-gradient-to-b from-transparent via-accent-3/10 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Mari />
        </div>
      </section>
    </div>
  );
}
