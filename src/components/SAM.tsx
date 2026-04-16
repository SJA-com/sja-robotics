const samFeatures = [
  {
    name: "Smart Home Control",
    description:
      "Control every device at home by voice — lights, temperature, TV, locks, everything. Never touch a switch again.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    name: "Auto Ordering",
    description:
      "Running low on groceries? SAM orders automatically. Craving food at 2am? SAM handles it. You just eat.",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    name: "Sleep Optimization",
    description:
      "SAM calculates your perfect sleep cycle, dims lights automatically, sets ideal temperature, and wakes you at the perfect moment.",
    icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    name: "Life Management",
    description:
      "Manages your schedule, reminders, and tasks while you sleep. Wake up to a fully organized day — zero effort.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    name: "Zero Effort Living",
    description:
      "Everything controlled by voice. No touching your phone. No getting up. SAM does it all.",
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    name: "Works with Sueen",
    description:
      "SAM tells Sueen what to do — together they handle your entire home digitally and physically.",
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
  },
];

const samPricing = [
  {
    name: "Basic",
    price: "$4.99",
    period: "/month",
    description: "Smart home control + voice commands",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$14.99",
    period: "/month",
    description: "Everything including auto ordering + sleep optimization",
    highlight: true,
  },
  {
    name: "Ultimate",
    price: "$29.99",
    period: "/month",
    description: "Full life management + Sueen integration",
    highlight: false,
  },
];

export default function SAM() {
  return (
    <div className="mb-24">
      <div className="text-center mb-10">
        <p className="text-accent-2 text-xs font-mono mb-2 tracking-wider uppercase">
          Product 03
        </p>
        <h3 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="text-accent-2">SAM</span>
        </h3>
        <p className="text-accent-2/60 text-sm font-mono mb-3">
          Smart Automated Manager
        </p>
        <p className="text-lg font-semibold text-foreground/80 mb-3">
          SAM — So you don&apos;t have to.
        </p>
        <span className="inline-flex px-3 py-1 rounded-full bg-accent-2/10 text-accent-2 text-[10px] font-mono tracking-wider mb-4">
          COMING SOON
        </span>
        <p className="text-foreground/60 max-w-2xl mx-auto text-sm leading-relaxed mb-4">
          SJA&apos;s smart home AI controller — designed for people who hate
          doing things themselves. While you sleep, SAM manages your world.
        </p>
        <p className="text-foreground/60 max-w-2xl mx-auto text-sm leading-relaxed mb-4">
          SAM works standalone as your complete smart home AI. Connect Sueen
          for the full physical + digital home experience.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 text-xs font-mono tracking-wider">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          BETTER TOGETHER WITH SUEEN
        </div>
      </div>

      <p className="text-accent-2/50 text-xs font-mono text-center mb-10">
        Designed for people who hate doing things. Powered by Fari. Loved by Gen Z.
      </p>

      {/* SAM Features */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {samFeatures.map((feature) => (
          <div
            key={feature.name}
            className="rounded-lg bg-surface border border-border p-5 hover:border-accent-2/20 transition-colors"
          >
            <div
              className={`w-10 h-10 rounded-lg ${feature.bg} flex items-center justify-center mb-3`}
            >
              <svg
                className={`w-5 h-5 ${feature.color}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={feature.icon}
                />
              </svg>
            </div>
            <h5 className="text-sm font-bold mb-1">{feature.name}</h5>
            <p className="text-xs text-foreground/50 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* SAM Pricing */}
      <div className="text-center mb-8">
        <h4 className="text-xl font-bold mb-2">
          SAM <span className="text-accent-2">Pricing</span>
        </h4>
        <p className="text-foreground/50 text-xs">
          From smart home control to full life management
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {samPricing.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg p-6 text-center transition-all ${
              plan.highlight
                ? "gradient-border bg-surface"
                : "bg-surface border border-border hover:border-accent-2/20"
            }`}
          >
            <p className="text-accent-2 text-xs font-mono mb-1.5 tracking-wider uppercase">
              {plan.name}
            </p>
            <div className="mb-2">
              <span className="text-2xl font-bold">{plan.price}</span>
              <span className="text-foreground/50 text-xs">{plan.period}</span>
            </div>
            <p className="text-foreground/50 text-xs">{plan.description}</p>
          </div>
        ))}
      </div>

      {/* SAM CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-accent-2 to-accent-3 text-white font-semibold text-sm hover:opacity-90 transition-opacity glow-accent">
          Join Waitlist
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <a
          href="https://sam.sja-affu765.workers.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-accent-2/40 text-accent-2 font-semibold text-sm hover:bg-accent-2/10 transition-colors"
        >
          Try Demo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
