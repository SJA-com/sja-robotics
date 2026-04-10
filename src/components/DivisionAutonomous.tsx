import Link from "next/link";

/* ─── Atiana Data ─── */

const atianaFeatures = [
  {
    title: "Household Assistance",
    detail:
      "Manages daily chores, integrates with smart home systems, and offers personalized assistance based on user habits.",
  },
  {
    title: "Medical Expertise",
    detail:
      "Operates like a doctor, with AI for diagnostics, surgery, and emergency care, connecting in real-time with healthcare professionals.",
  },
  {
    title: "Combat and Security",
    detail:
      "Functions as a soldier or bodyguard, with military-grade defense, combat skills, and tactical awareness.",
  },
  {
    title: "Flight and Mobility",
    detail:
      "Uses advanced propulsion systems for flight, with the ability to navigate challenging terrains.",
  },
  {
    title: "Fire Resistance",
    detail:
      "Built with heat-resistant materials for operation in hazardous environments.",
  },
  {
    title: "Self-Charging",
    detail:
      "Employs renewable energy such as solar cells, kinetic energy, or thermoelectric generators, ensuring constant operation without reliance on traditional power sources.",
  },
];

const atianaVariants = [
  {
    name: "Atiana-H",
    purpose: "Healthcare",
    description:
      "Specialized in diagnostics, patient care, and medical assistance. AI-driven surgery support and real-time connection with healthcare professionals.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    name: "Atiana-S",
    purpose: "Security",
    description:
      "Focused on combat and protection with enhanced security features, military-grade defense, and tactical awareness for high-security areas.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    name: "Atiana-R",
    purpose: "Rescue",
    description:
      "Equipped for extreme conditions with fire-resistance and flight capabilities, ideal for emergency rescue missions in hazardous environments.",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

/* ─── Sueen Data ─── */

const sueenFeatures = [
  {
    title: "Intelligent Navigation",
    detail:
      "Uses sophisticated pathfinding algorithms to navigate through the house efficiently, avoiding obstacles while moving safely within the indoor environment.",
  },
  {
    title: "Object Recognition & Handling",
    detail:
      "Cutting-edge AI identifies various objects and securely picks them up without causing damage, ensuring safe delivery of items.",
  },
  {
    title: "Face & Voice Recognition",
    detail:
      "Equipped with facial recognition to identify household members and deliver items directly to the intended person. Recognizes voices for commands and personalized responses.",
  },
  {
    title: "Voice Integration",
    detail:
      "Users can control Sueen through simple voice commands, making it intuitive to request assistance for everyday errands.",
  },
  {
    title: "Safety & Stability",
    detail:
      "Prioritizes safety with quiet operation and built-in safety measures to avoid accidents during use.",
  },
  {
    title: "Energy Efficiency",
    detail:
      "Optimized for extended use, operates with minimal energy consumption, ensuring longer battery life and less frequent charging.",
  },
];

/* ─── Branding ─── */

const branding = [
  {
    name: "SJA Robotics",
    detail: "Simple, strong, and connected to the founder's vision.",
  },
  {
    name: "Atiana Robotics Corporation (ARC)",
    detail:
      "Highlights the flagship robot and establishes the company as a leader in robotics.",
  },
  {
    name: "Synergy Robotics Innovations",
    detail:
      "Focuses on creating a synergy between human needs and automated solutions.",
  },
];

/* ─── Component ─── */

export default function DivisionAutonomous() {
  return (
    <section id="sja-autonomous" className="py-24 relative bg-radar overflow-hidden">
      {/* Radar/scan background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-400/6 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent" />
        {/* Corner brackets */}
        <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-emerald-400/20 rounded-tl" />
        <div className="absolute top-12 right-12 w-8 h-8 border-t border-r border-emerald-400/20 rounded-tr" />
        <div className="absolute bottom-12 left-12 w-8 h-8 border-b border-l border-emerald-400/20 rounded-bl" />
        <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-emerald-400/20 rounded-br" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Division Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-mono mb-4 tracking-wider">
            DIVISION 03
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            SJA <span className="text-emerald-400">Autonomous</span>
          </h2>
          <p className="text-emerald-400/70 text-sm font-mono mb-4">
            Physical Robots & Drones
          </p>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Engineering autonomous machines that operate in the real world —
            from household robots and rescue drones to military-grade defense
            systems built for any environment.
          </p>
        </div>

        {/* ─── ATIANA ROBOT (FLAGSHIP) ─── */}
        <div className="mb-24">
          <div className="gradient-border rounded-2xl bg-surface p-8 sm:p-12 mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-mono">
                FLAGSHIP
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 text-[10px] font-mono tracking-wider">
                IN DEVELOPMENT
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">
              Atiana Robot
            </h3>
            <p className="text-emerald-400/70 text-sm font-mono mb-4">
              Automated Technology for Intelligent Assistance, Navigation, and
              Action
            </p>
            <p className="text-foreground/60 leading-relaxed mb-4 max-w-2xl">
              Atiana is a revolutionary robot designed to perform a wide variety
              of tasks, making it suitable for households, medical facilities,
              and even military applications. It embodies the future of
              intelligent robotics, with capabilities that exceed current
              limitations in the field.
            </p>
            <p className="text-emerald-400/70 text-sm font-semibold mb-8">
              Powered by Fari — the most advanced humanoid robot by SJA
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {atianaFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-lg bg-surface-2 border border-border px-4 py-3"
                >
                  <div className="text-sm font-semibold text-foreground mb-0.5">
                    {feature.title}
                  </div>
                  <p className="text-xs text-foreground/45 leading-snug line-clamp-2">
                    {feature.detail}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/products/atiana"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Learn More
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

          {/* Atiana Variants */}
          <h4 className="text-xl font-bold mb-6 text-center">
            Atiana <span className="text-emerald-400">Variants</span>
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            {atianaVariants.map((variant) => (
              <div
                key={variant.name}
                className="rounded-xl bg-surface border border-border p-8 hover:border-emerald-400/30 transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-xl ${variant.bg} flex items-center justify-center`}
                  >
                    <svg
                      className={`w-7 h-7 ${variant.color}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={variant.icon}
                      />
                    </svg>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 text-[10px] font-mono tracking-wider">
                    IN DEVELOPMENT
                  </span>
                </div>
                <h5 className="text-2xl font-bold mb-1">{variant.name}</h5>
                <p className="text-emerald-400/60 text-sm font-mono mb-3">
                  for {variant.purpose}
                </p>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {variant.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-24">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-emerald-400/50" />
          <div className="w-2 h-2 rounded-full bg-teal-500/50" />
          <div className="w-2 h-2 rounded-full bg-emerald-400/50" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
        </div>

        {/* ─── SUEEN DRONE ─── */}
        <div className="mb-24">
          <div className="rounded-2xl bg-surface border border-emerald-400/30 p-8 sm:p-10 hover:border-emerald-400/50 transition-all">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-mono">
                FEATURED
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 text-[10px] font-mono tracking-wider">
                IN DEVELOPMENT
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-1">Sueen</h3>
            <p className="text-foreground/50 text-sm mb-2">
              Next Generation Helper
            </p>
            <p className="text-emerald-400/70 text-sm font-mono mb-4">
              Smart Utility Efficient Errand Navigator
            </p>
            <p className="text-foreground/60 text-sm leading-relaxed mb-4 max-w-2xl">
              Sueen is a state-of-the-art drone designed by SJA Robotics to
              assist with everyday household tasks, seamlessly integrating into
              modern smart homes. Equipped with advanced AI, Sueen performs a
              variety of simple yet essential tasks, such as delivering items
              around the house — handing over a glass of water, delivering milk,
              or transporting small objects from one room to another.
            </p>
            <p className="text-emerald-400/70 text-sm font-semibold mb-4">
              Sueen works standalone as your household drone. Pair with Mari
              for the ultimate home experience — Mari thinks, Sueen acts.
            </p>
            <p className="text-foreground/40 text-xs font-mono mb-8">
              Powered by Fari. Part of the SJA Autonomous division.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {sueenFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-lg bg-surface-2 border border-border px-4 py-3"
                >
                  <div className="text-sm font-semibold text-foreground mb-0.5">
                    {feature.title}
                  </div>
                  <p className="text-xs text-foreground/45 leading-snug line-clamp-2">
                    {feature.detail}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/products/sueen"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-emerald-400/50 text-emerald-400 font-semibold text-sm hover:bg-emerald-400/10 transition-colors"
            >
              Learn More
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

        {/* ─── BRANDING ─── */}
        <div className="rounded-2xl bg-surface border border-border p-8 sm:p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Company <span className="text-emerald-400">Branding</span>
            </h3>
            <p className="text-foreground/60 text-sm max-w-xl mx-auto">
              To capture both the personal identity of SJA and the
              groundbreaking innovations the company will deliver, the following
              brand names are considered:
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {branding.map((brand) => (
              <div
                key={brand.name}
                className="rounded-lg bg-surface-2 border border-border p-5 hover:border-emerald-400/30 transition-colors"
              >
                <div className="text-sm font-bold mb-2">{brand.name}</div>
                <div className="text-xs text-foreground/50">{brand.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Waitlist */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold hover:opacity-90 transition-opacity mb-3">
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
            Be the first to witness SJA Autonomous in action
          </p>
        </div>
      </div>
    </section>
  );
}
