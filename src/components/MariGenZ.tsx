const genZFeatures = [
  {
    title: "Built for People Who Love Sleep",
    emoji: "😴",
    points: [
      "MARI optimizes your sleep cycle so you wake up at the perfect moment",
      "Sets ideal room temperature while you sleep",
      "Dims lights automatically when you're dozing off",
      "Orders your breakfast before you even open your eyes",
    ],
    quote: "Sleep is not laziness. It's self care. MARI agrees.",
  },
  {
    title: "Zero Screen Time Required",
    emoji: "📱",
    points: [
      "Control everything by voice — no touching your phone",
      "No apps to open, no buttons to press, no effort required",
      "Just talk and MARI handles it",
    ],
    quote: "Your screen time goes down. Your vibe goes up.",
  },
  {
    title: "Auto Pilot Your Life",
    emoji: "🛒",
    points: [
      "Running low on snacks? MARI orders them",
      "Need something delivered? MARI handles it",
      "Forgot to pay a bill? MARI reminds you",
    ],
    quote: "MARI remembers everything you forget. Which is everything. 😄",
  },
  {
    title: "Your Home. Your Rules.",
    emoji: "🎮",
    points: [
      "Lights, temperature, music, TV — all controlled by voice",
      "Set moods automatically — study mode, chill mode, sleep mode, party mode",
    ],
    quote: "Your home adapts to your vibe. Not the other way around.",
  },
  {
    title: "Works With Sueen",
    emoji: "🤝",
    points: [
      "MARI tells Sueen what to do physically",
      "Digital + physical home management — completely hands free",
    ],
    quote:
      "Need water but don't want to get up? MARI tells Sueen. Sueen brings it. You stay horizontal. 😄",
  },
  {
    title: "Actually Affordable",
    emoji: "💸",
    points: [
      "Starting at $4.99/month",
      "Less than your monthly coffee",
      "Less than that app you forgot you subscribed to",
    ],
    quote: "Cheaper than doing things yourself. Literally.",
  },
];

const scenarios = [
  {
    emoji: "😩",
    situation: "It's 2am and you're hungry",
    you: "MARI order me food",
    mari: "Done. Arriving in 30 minutes. I added extra sauce. 🍕",
  },
  {
    emoji: "🥶",
    situation: "Room is freezing but blanket is too comfortable",
    you: "MARI make it warmer",
    mari: "Temperature adjusted. Stay cozy. 🌡️",
  },
  {
    emoji: "😴",
    situation: "Alarm goes off but you're not ready",
    you: "MARI 10 more minutes",
    mari: "Snooze set. But this is the third time. 😄",
  },
  {
    emoji: "📦",
    situation: "Running out of essentials",
    you: "MARI I need stuff",
    mari: "Already ordered your usual. Arriving tomorrow. ✅",
  },
];

export default function MariGenZ() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0c0e18]">
      {/* Fun gradient background — slightly lighter than main dark */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-violet-500/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/4 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-rose-500/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-emerald-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════
            HEADER
            ═══════════════════════════════════════════ */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-xs font-mono mb-3 tracking-wider uppercase">
            Why Gen Z Loves MARI
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Finally. An AI That{" "}
            <span className="bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Gets It.
            </span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg mb-6">
            MARI was designed for people who have better things to do than do
            things. 😄
          </p>
          <p className="text-foreground/50 max-w-xl mx-auto text-sm leading-relaxed">
            Let&apos;s be real. Nobody wants to get up. Nobody wants to remember
            things. Nobody wants to do boring tasks. MARI gets it — and she does
            it all for you.
          </p>
        </div>

        {/* ═══════════════════════════════════════════
            GEN Z FEATURE CARDS
            ═══════════════════════════════════════════ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {genZFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-[#10121e] border border-violet-400/10 p-7 hover:border-violet-400/25 transition-all group"
            >
              <div className="text-3xl mb-3">{feature.emoji}</div>
              <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
              <ul className="space-y-2 mb-4">
                {feature.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-foreground/55"
                  >
                    <span className="text-violet-400 mt-0.5 shrink-0">
                      &bull;
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-sm italic text-violet-400/70 border-t border-violet-400/10 pt-3">
                &ldquo;{feature.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            MARI IN REAL LIFE
            ═══════════════════════════════════════════ */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
            MARI in{" "}
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              Real Life
            </span>
          </h3>
          <p className="text-foreground/50 text-sm text-center mb-10">
            Actual conversations you&apos;ll have with MARI. Probably at 2am.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {scenarios.map((s) => (
              <div
                key={s.situation}
                className="rounded-2xl bg-[#10121e] border border-sky-400/10 p-6 hover:border-sky-400/20 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{s.emoji}</span>
                  <p className="text-sm font-semibold text-foreground/70">
                    {s.situation}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-sky-400/10 text-sky-400 text-[10px] font-mono h-fit mt-0.5">
                      YOU
                    </span>
                    <p className="text-sm text-foreground/60 italic">
                      &ldquo;{s.you}&rdquo;
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-violet-400/10 text-violet-400 text-[10px] font-mono h-fit mt-0.5">
                      MARI
                    </span>
                    <p className="text-sm text-foreground/80 font-medium">
                      &ldquo;{s.mari}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            BOLD STATEMENT
            ═══════════════════════════════════════════ */}
        <div className="rounded-2xl bg-gradient-to-r from-violet-400/5 via-sky-400/5 to-emerald-400/5 border border-violet-400/15 p-8 sm:p-10 mb-16 text-center">
          <p className="text-xl sm:text-2xl font-bold text-foreground/90 mb-3">
            MARI doesn&apos;t judge your lifestyle.{" "}
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              She enables it.
            </span>
          </p>
          <p className="text-foreground/50 text-sm">
            MARI — So you don&apos;t have to.
          </p>
        </div>

        {/* ═══════════════════════════════════════════
            CTA
            ═══════════════════════════════════════════ */}
        <div className="text-center">
          <p className="text-foreground/50 text-xs font-mono mb-6 tracking-wider">
            Designed for people who hate doing things. Powered by Fari. Loved by
            Gen Z.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-sky-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(139,92,246,0.25)]">
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
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-violet-400/40 text-violet-400 font-semibold hover:bg-violet-400/10 transition-colors">
              Request Early Access
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </button>
          </div>
          <p className="text-foreground/40 text-sm max-w-lg mx-auto">
            Join thousands of Gen Z early adopters who are already on the
            waitlist — because they signed up and went back to sleep. 😄
          </p>
        </div>
      </div>
    </section>
  );
}
