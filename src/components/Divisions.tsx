import Link from "next/link";

// SJA Tech division — commented out (uncomment when needed)
// {
//   name: "SJA Tech",
//   tagline: "Consumer Electronics",
//   description:
//     "Designing and manufacturing next-generation consumer electronics — laptops, smartphones, tablets, and smart devices that seamlessly integrate with the SJA ecosystem.",
//   productCount: "9 Products",
//   href: "/divisions/sja-tech",
//   icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
//   gradient: "from-accent to-accent-2",
//   accentColor: "text-accent",
//   borderColor: "border-accent/30",
//   bgColor: "bg-accent/5",
//   highlights: [
//     {
//       name: "Home Security & Monitoring",
//       detail: "AI-powered security with voice commands and real-time alerts",
//       badge: "In Development",
//     },
//     {
//       name: "Voice-Automated Weighing Scale",
//       detail: "Smart health tracking with voice recognition and AI insights",
//       badge: "In Development",
//     },
//     {
//       name: "Laptops & Desktops",
//       detail: "High-performance computing built for the AI era",
//       badge: "Coming Soon",
//     },
//   ],
// },

const divisions = [
  {
    name: "SJA AI",
    tagline: "Artificial Intelligence",
    description:
      "Pioneering artificial intelligence research, building machine learning models, and developing intelligent software solutions that power every product across SJA Robotics.",
    productCount: "2 Products",
    href: "/divisions/sja-ai",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    gradient: "from-accent-2 to-accent-3",
    accentColor: "text-accent-2",
    borderColor: "border-accent-2/30",
    bgColor: "bg-accent-2/5",
    highlights: [
      {
        name: "Mouss",
        detail: "AI voice agent platform — deploy in minutes, no coding needed",
        badge: "Coming Soon",
      },
      {
        name: "Fari",
        detail: "Multilingual AI companion — your Rafiq for life",
        badge: "Coming Soon",
      },
      // SJA Companion — merged into Fari (uncomment when needed)
      // {
      //   name: "SJA Companion",
      //   detail: "A personal AI that remembers everything about you — forever",
      //   badge: "Coming Soon",
      // },
    ],
  },
  {
    name: "SJA Autonomous",
    tagline: "Physical Robots & Drones",
    description:
      "Engineering autonomous machines that operate in the real world — from household robots and rescue drones to military-grade defense systems built for any environment.",
    productCount: "3 Products",
    href: "/divisions/sja-autonomous",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    gradient: "from-emerald-400 to-teal-500",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-400/30",
    bgColor: "bg-emerald-400/5",
    highlights: [
      {
        name: "Atiana Robot",
        detail: "Flagship autonomous robot for homes, hospitals, and defense",
        badge: "In Development",
      },
      {
        name: "Sueen Drone",
        detail: "Smart household drone for delivering items around your home",
        badge: "In Development",
      },
      {
        name: "MARI",
        detail: "Smart home AI controller — so you don't have to",
        badge: "Coming Soon",
      },
    ],
  },
];

export default function Divisions() {
  return (
    <section id="divisions" className="py-24 relative bg-hextech overflow-hidden">
      {/* Hexagonal tech background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-2/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-10 w-48 h-48 bg-accent-3/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-mono mb-3 tracking-wider uppercase">
            Our Divisions
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Two Specialized{" "}
            <span className="text-accent">Divisions</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            SJA Robotics operates through focused divisions — each driving
            innovation in their domain while powering the broader ecosystem.
          </p>
        </div>

        <div className="space-y-10">
          {divisions.map((div) => (
            <div
              key={div.name}
              className={`rounded-2xl bg-surface border ${div.borderColor} p-8 sm:p-10 hover:border-opacity-60 transition-all`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Left — Division info */}
                <div className="lg:w-1/3 shrink-0">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${div.gradient} flex items-center justify-center mb-5 opacity-80`}
                  >
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={div.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                    {div.name}
                  </h3>
                  <p className={`${div.accentColor} text-sm font-mono mb-4`}>
                    {div.tagline}
                  </p>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-5">
                    {div.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-lg ${div.bgColor} border ${div.borderColor} px-3 py-1.5 text-xs font-mono ${div.accentColor}`}
                    >
                      {div.productCount}
                    </span>
                  </div>
                </div>

                {/* Right — Featured products + Explore */}
                <div className="lg:flex-1">
                  <p className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-4">
                    Featured Products
                  </p>
                  <div className="space-y-3 mb-6">
                    {div.highlights.map((product) => (
                      <div
                        key={product.name}
                        className="flex items-center justify-between gap-4 rounded-lg bg-surface-2 border border-border px-5 py-3.5"
                      >
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-foreground truncate">
                            {product.name}
                          </div>
                          <p className="text-xs text-foreground/50 truncate">
                            {product.detail}
                          </p>
                        </div>
                        <span
                          className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider ${
                            product.badge === "In Development"
                              ? "bg-amber-400/10 text-amber-400"
                              : "bg-accent-2/10 text-accent-2"
                          }`}
                        >
                          {product.badge.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={div.href}
                    className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r ${div.gradient} text-white font-semibold text-sm hover:opacity-90 transition-opacity`}
                  >
                    Explore {div.name}
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
