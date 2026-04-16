const uniqueFeatures = [
  {
    name: "Dialect Intelligence",
    description:
      "MOUS doesn't just speak Arabic — she speaks YOUR Arabic. Understands Saudi, Egyptian, Emirati, Lebanese and Moroccan dialects natively. Your Riyadh customers and Cairo customers both feel at home. No more generic Arabic that sounds foreign to your customers.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    color: "text-accent-2",
    bg: "bg-accent-2/10",
  },
  {
    name: "Cultural Intelligence",
    description:
      "The first voice agent that understands BOTH Arab and Western cultures deeply. Muslim businesses — knows prayer times, Islamic greetings, Ramadan hours, Halal requirements. Christian businesses — church hours, Christmas and Easter seasons. Secular businesses — neutral, professional. Respects Friday, Saturday OR Sunday as weekend depending on your business.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    name: "Emotion Detection",
    description:
      "MOUS detects if your caller is angry, confused, sad or happy in real time. Automatically adjusts her tone to match the situation. Escalates to a human agent if the caller is very upset. Soothes anxious callers — perfect for clinics and hospitals. Your customers always feel heard.",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    name: "WhatsApp + Voice Combined",
    description:
      "Middle East runs on WhatsApp — MOUS knows this. One AI handling both WhatsApp messages AND phone calls seamlessly. Customer sends WhatsApp at 2am — MOUS responds instantly. Customer calls at 9am — same MOUS, same context, remembers everything. Switches between Arabic and English mid-conversation naturally.",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    name: "Arabic + English Document Intelligence",
    description:
      "Caller asking about their invoice? MOUS reads it instantly — in Arabic or English. Understands contracts, receipts, medical reports, booking confirmations. Answers billing and document questions without a human. First voice agent in the world to read and understand Arabic documents in real time.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    name: "Business Personality Modes",
    description:
      "Every business gets a MOUS that fits their brand perfectly. Medical mode — calm, professional, empathetic. Restaurant mode — warm, friendly. Real estate mode — confident, persuasive. Banking mode — formal, trustworthy. Faith-based mode — respectful, warm, community focused. Your MOUS sounds like YOUR business.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
  },
];

const firsts = [
  {
    title: "Cultural intelligence for both Muslim and Christian businesses",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    title: "WhatsApp + voice agent seamlessly combined",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20",
  },
  {
    title: "Arabic + English document reading in real time",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
  },
];

const comparisonRows = [
  { feature: "Arabic Dialects", bland: false, vapi: false, retell: false, mous: true },
  { feature: "Cultural Intelligence", bland: false, vapi: false, retell: false, mous: true },
  { feature: "Emotion Detection", bland: false, vapi: false, retell: "Partial", mous: true },
  { feature: "WhatsApp + Voice", bland: false, vapi: false, retell: false, mous: true },
  { feature: "Arabic + English Docs", bland: false, vapi: false, retell: false, mous: true },
  { feature: "Muslim + Christian Aware", bland: false, vapi: false, retell: false, mous: true },
  { feature: "Dialect Specific", bland: false, vapi: false, retell: false, mous: true },
  { feature: "Arab World Focus", bland: false, vapi: false, retell: false, mous: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === false) {
    return (
      <svg className="w-5 h-5 text-red-400/60 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  }
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-accent-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  return <span className="text-xs font-medium">{value}</span>;
}

export default function MousFeatures() {
  return (
    <section className="py-24 relative bg-hextech overflow-hidden">
      {/* Background accents matching AI division */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-2/6 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-3/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent-2/4 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-accent-2/10 to-transparent" />
        <div className="absolute top-0 left-[75%] w-px h-full bg-gradient-to-b from-transparent via-accent-3/10 to-transparent" />
        <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-accent-2/15 rounded-tl-lg" />
        <div className="absolute top-10 right-10 w-12 h-12 border-t-2 border-r-2 border-accent-2/15 rounded-tr-lg" />
        <div className="absolute bottom-10 left-10 w-12 h-12 border-b-2 border-l-2 border-accent-3/15 rounded-bl-lg" />
        <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-accent-2/15 rounded-br-lg" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════
            HEADER
            ═══════════════════════════════════════════ */}
        <div className="text-center mb-16">
          <p className="text-accent-2 text-xs font-mono mb-3 tracking-wider uppercase">
            What Makes MOUS Different
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            MOUS — Built for the{" "}
            <span className="bg-gradient-to-r from-accent via-accent-2 to-accent-3 bg-clip-text text-transparent">
              Arab World
            </span>
            . Built for{" "}
            <span className="bg-gradient-to-r from-accent via-accent-2 to-accent-3 bg-clip-text text-transparent">
              Everyone
            </span>
            .
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Every other voice agent was built for the West. MOUS was built for
            you — regardless of culture, religion or language.
          </p>
        </div>

        {/* ═══════════════════════════════════════════
            6 UNIQUE FEATURES
            ═══════════════════════════════════════════ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {uniqueFeatures.map((feature) => (
            <div
              key={feature.name}
              className="rounded-xl bg-surface border border-accent-2/10 p-7 hover:border-accent-2/25 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}
              >
                <svg
                  className={`w-6 h-6 ${feature.color}`}
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
              <h4 className="text-lg font-bold mb-2">{feature.name}</h4>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            WORLD FIRSTS
            ═══════════════════════════════════════════ */}
        <div className="rounded-2xl bg-surface border border-accent-2/15 p-8 sm:p-12 mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Three things{" "}
              <span className="text-accent-2">nobody in the world</span>{" "}
              has built before
            </h3>
            <p className="text-foreground/50 text-sm">Until MOUS.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {firsts.map((item) => (
              <div
                key={item.title}
                className={`rounded-xl bg-surface-2 border ${item.border} p-6 text-center`}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mx-auto mb-4`}
                >
                  <svg
                    className={`w-7 h-7 ${item.color}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
                    />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-foreground/80 leading-relaxed">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            COMPARISON TABLE
            ═══════════════════════════════════════════ */}
        <div className="rounded-2xl bg-surface border border-accent-2/15 p-6 sm:p-10 mb-20 overflow-x-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
            MOUS vs{" "}
            <span className="text-accent-2">The Rest</span>
          </h3>
          <p className="text-foreground/50 text-sm text-center mb-8 max-w-lg mx-auto">
            No other voice agent was built for the Arab world like this
          </p>
          <div className="min-w-[500px]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-accent-2/10">
                  <th className="text-left text-sm font-semibold text-foreground/70 py-3 pr-4">
                    Feature
                  </th>
                  <th className="text-center text-sm font-medium text-foreground/40 py-3 px-3">
                    Bland.ai
                  </th>
                  <th className="text-center text-sm font-medium text-foreground/40 py-3 px-3">
                    Vapi.ai
                  </th>
                  <th className="text-center text-sm font-medium text-foreground/40 py-3 px-3">
                    Retell AI
                  </th>
                  <th className="text-center text-sm font-bold text-accent-2 py-3 pl-3">
                    MOUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-accent-2/5 hover:bg-accent-2/[0.02] transition-colors"
                  >
                    <td className="text-sm font-medium text-foreground/70 py-3.5 pr-4">
                      {row.feature}
                    </td>
                    <td className="text-center py-3.5 px-3 text-foreground/40">
                      <Cell value={row.bland} />
                    </td>
                    <td className="text-center py-3.5 px-3 text-foreground/40">
                      <Cell value={row.vapi} />
                    </td>
                    <td className="text-center py-3.5 px-3 text-foreground/40">
                      <Cell value={row.retell} />
                    </td>
                    <td className="text-center py-3.5 pl-3">
                      <div className="text-accent-2 font-semibold">
                        <Cell value={row.mous} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            TAGLINE + CTA
            ═══════════════════════════════════════════ */}
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl font-semibold text-foreground/80 mb-2 max-w-3xl mx-auto leading-relaxed">
            MOUS — The world&apos;s first culturally intelligent,
            dialect-aware, WhatsApp-enabled voice agent.
          </p>
          <p className="text-accent-2/70 text-sm mb-8">
            Built for the Arab world. Built for everyone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-accent-2 to-accent-3 text-white font-semibold hover:opacity-90 transition-opacity glow-accent">
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
            <a
              href="https://mous.sja-affu765.workers.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-accent-2/40 text-accent-2 font-semibold hover:bg-accent-2/10 transition-colors"
            >
              Try Demo
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
          <p className="text-foreground/40 text-sm max-w-xl mx-auto">
            Currently in development. Built for Saudi Arabia, UAE, Qatar, Egypt
            and the entire Arab world — serving businesses of all cultures and
            backgrounds.
          </p>
        </div>
      </div>
    </section>
  );
}
