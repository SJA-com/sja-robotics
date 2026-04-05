const divisions = [
  {
    name: "SJA Tech",
    tagline: "Consumer Electronics",
    description:
      "Designing and manufacturing next-generation consumer electronics — laptops, smartphones, tablets, and smart devices that seamlessly integrate with the SJA ecosystem.",
    features: [
      "Laptops & Desktops",
      "Smartphones & Tablets",
      "Smart Wearables",
      "Accessories & Peripherals",
    ],
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    gradient: "from-accent to-accent-2",
    accentColor: "text-accent",
    borderColor: "border-accent/30",
    bgColor: "bg-accent/5",
  },
  {
    name: "SJA AI",
    tagline: "Artificial Intelligence",
    description:
      "Pioneering artificial intelligence research, building machine learning models, and developing intelligent software solutions that power every product across SJA Robotics.",
    features: [
      "AI Research & Development",
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision & Perception",
    ],
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    gradient: "from-accent-2 to-accent-3",
    accentColor: "text-accent-2",
    borderColor: "border-accent-2/30",
    bgColor: "bg-accent-2/5",
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
            Specialized{" "}
            <span className="text-accent">Divisions</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            SJA Robotics operates through two focused divisions — each driving
            innovation in their domain while powering the broader ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {divisions.map((div) => (
            <div
              key={div.name}
              className={`group rounded-2xl bg-surface border ${div.borderColor} p-8 sm:p-10 hover:border-accent/50 transition-all`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${div.gradient} flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity`}
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

              {/* Header */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                {div.name}
              </h3>
              <p className={`${div.accentColor} text-sm font-mono mb-4`}>
                {div.tagline}
              </p>

              {/* Description */}
              <p className="text-foreground/60 leading-relaxed mb-6">
                {div.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {div.features.map((feature) => (
                  <div
                    key={feature}
                    className={`rounded-lg ${div.bgColor} border ${div.borderColor} px-4 py-3 text-sm font-medium text-foreground/70`}
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
