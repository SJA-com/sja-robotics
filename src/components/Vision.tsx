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

export default function Vision() {
  return (
    <section id="vision" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-mono mb-3 tracking-wider uppercase">
            Future Vision
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Expanding Horizons with{" "}
            <span className="text-accent">Atiana</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            The crown jewel of SJA Robotics, Atiana represents the future of
            autonomous technology, integrating into homes, hospitals, and
            high-security areas.
          </p>
        </div>

        {/* Atiana Variants */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {atianaVariants.map((variant) => (
            <div
              key={variant.name}
              className="rounded-xl bg-surface border border-border p-8 hover:border-accent/30 transition-all group"
            >
              <div
                className={`w-14 h-14 rounded-xl ${variant.bg} flex items-center justify-center mb-5`}
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
              <h3 className="text-2xl font-bold mb-1">{variant.name}</h3>
              <p className="text-accent/60 text-sm font-mono mb-3">
                for {variant.purpose}
              </p>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {variant.description}
              </p>
            </div>
          ))}
        </div>

        {/* Branding */}
        <div className="rounded-2xl bg-surface border border-border p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Company <span className="text-accent">Branding</span>
            </h3>
            <p className="text-foreground/60 text-sm max-w-xl mx-auto">
              To capture both the personal identity of SJA and the
              groundbreaking innovations the company will deliver, the following
              brand names are considered:
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "SJA Robotics",
                detail:
                  "Simple, strong, and connected to the founder's vision.",
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
            ].map((brand) => (
              <div
                key={brand.name}
                className="rounded-lg bg-surface-2 border border-border p-5 hover:border-accent/30 transition-colors"
              >
                <div className="text-sm font-bold mb-2">{brand.name}</div>
                <div className="text-xs text-foreground/50">
                  {brand.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
