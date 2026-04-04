import Link from "next/link";

const products = [
  {
    name: "Atiana Robot",
    slug: "atiana",
    fullForm:
      "Automated Technology for Intelligent Assistance, Navigation, and Action",
    description:
      "Atiana is a revolutionary robot designed to perform a wide variety of tasks, making it suitable for households, medical facilities, and even military applications. It embodies the future of intelligent robotics, with capabilities that exceed current limitations in the field.",
    features: [
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
    ],
    gradient: "from-accent to-accent-2",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    flagship: true,
  },
  {
    name: "Sueen",
    slug: "sueen",
    subtitle: "Next Generation Helper",
    fullForm: "Smart Utility Efficient Errand Navigator",
    description:
      "Sueen is a state-of-the-art drone designed by SJA Robotics to assist with everyday household tasks, seamlessly integrating into modern smart homes. Equipped with advanced AI, Sueen performs a variety of simple yet essential tasks, such as delivering items around the house — handing over a glass of water, delivering milk, or transporting small objects from one room to another.",
    features: [
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
    ],
    gradient: "from-accent-2 to-accent-3",
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
    featured: true,
  },
  {
    name: "Voice-Automated Weighing Scale",
    slug: "weighing-scale",
    fullForm: "Smart Health Monitoring",
    description:
      "A smart weighing scale that does more than just measure weight. When a user stands on the scale, it asks for their identity, records the data, and provides historical trends and personalized health feedback. This product integrates voice recognition and AI to give detailed insights.",
    features: [
      {
        title: "Voice Identification",
        detail: "Asks for user identity and records personalized data.",
      },
      {
        title: "Weight Trends",
        detail:
          "Tracks last recorded weight and weight trends over time with historical analysis.",
      },
      {
        title: "Smart Reminders",
        detail: "Provides reminders for regular weigh-ins to maintain consistency.",
      },
      {
        title: "Health App Connectivity",
        detail:
          "Connects with health apps to track fitness goals and offer personalized health advice.",
      },
    ],
    gradient: "from-accent-3 to-accent",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  },
  {
    name: "AI-Driven Doorbell",
    slug: "smart-bell",
    subtitle: "Smart Bell",
    fullForm: "Intelligent Doorbell System",
    description:
      "A doorbell that interacts with visitors through AI technology. When pressed, it asks the visitor who they are, records the response, and sends a notification to the homeowner's mobile device.",
    features: [
      {
        title: "Voice Interaction",
        detail:
          "The AI system engages with visitors, collects their details, and alerts the homeowner in real-time.",
      },
      {
        title: "Mobile Connectivity",
        detail:
          "Instant notifications and two-way communication through the connected mobile app.",
      },
      {
        title: "Security Features",
        detail:
          "Facial recognition, voice verification, and integration with home security systems.",
      },
    ],
    gradient: "from-accent to-accent-2",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
  {
    name: "Smart Kitchen Appliances",
    slug: "smart-kitchen",
    fullForm: "AI-Powered Kitchen Suite",
    description:
      "Your smart home wouldn't be complete without appliances that understand your needs. SJA Robotics brings AI to the kitchen with devices that make cooking effortless.",
    features: [
      {
        title: "Smart Fridge",
        detail:
          "Tracks food expiration dates, suggests recipes based on available ingredients, and can be controlled through voice commands.",
      },
      {
        title: "Voice-Controlled Oven",
        detail:
          "Allows users to preheat, adjust temperatures, and start cooking just by speaking.",
      },
    ],
    gradient: "from-accent-2 to-accent-3",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    name: "Home Security & Monitoring",
    slug: "home-security",
    fullForm: "AI-Powered Protection",
    description:
      "AI-powered security systems designed to make homes safer and smarter. With voice commands and real-time alerts, these systems provide comprehensive monitoring, track entry and exit points, and recognize patterns to alert users of any unusual activity.",
    features: [
      {
        title: "Voice-Controlled Security",
        detail: "Manage your entire security system through voice commands.",
      },
      {
        title: "Real-Time Alerts",
        detail: "Instant notifications for any detected activity or anomalies.",
      },
      {
        title: "Pattern Recognition",
        detail:
          "AI recognizes behavioral patterns and alerts users of unusual activity.",
      },
      {
        title: "Entry & Exit Tracking",
        detail: "Comprehensive monitoring of all entry and exit points in the home.",
      },
    ],
    gradient: "from-accent-3 to-accent",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    name: "Personal Health Monitoring",
    slug: "health-monitoring",
    fullForm: "AI Health Device Ecosystem",
    description:
      "Beyond the smart weighing scale, SJA Robotics is developing a series of health-monitoring devices that provide comprehensive health insights and sync with medical records to assist in medical care.",
    features: [
      {
        title: "AI Blood Pressure Monitors",
        detail: "Track readings and detect anomalies in real-time.",
      },
      {
        title: "Sleep Trackers",
        detail: "Monitor sleep patterns and offer advice for better rest.",
      },
      {
        title: "Personal Health Assistants",
        detail:
          "AI-powered devices that provide feedback on vital statistics and trends.",
      },
      {
        title: "Medical Record Sync",
        detail:
          "Syncs with health records to assist healthcare professionals in medical care.",
      },
    ],
    gradient: "from-accent to-accent-3",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

type Feature = { title: string; detail: string };
type Product = {
  name: string;
  slug: string;
  subtitle?: string;
  fullForm: string;
  description: string;
  features: Feature[];
  gradient: string;
  icon: string;
  flagship?: boolean;
  featured?: boolean;
};

function FlagshipCard({ product }: { product: Product }) {
  return (
    <div className="gradient-border rounded-2xl bg-surface p-8 sm:p-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono mb-4">
        FLAGSHIP
      </div>
      <h3 className="text-3xl sm:text-4xl font-bold mb-2">
        {product.name}
      </h3>
      <p className="text-accent/70 text-sm font-mono mb-4">
        {product.fullForm}
      </p>
      <p className="text-foreground/60 leading-relaxed mb-8 max-w-2xl">
        {product.description}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {product.features.map((feature) => (
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
        href={`/products/${product.slug}`}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-accent to-accent-2 text-white font-semibold text-sm hover:opacity-90 transition-opacity glow-accent"
      >
        Learn More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

function FeaturedCard({ product }: { product: Product }) {
  return (
    <div className="rounded-2xl bg-surface border border-border p-8 sm:p-10 hover:border-accent/30 transition-all">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-2/10 text-accent-2 text-xs font-mono mb-4">
        FEATURED
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-1">
        {product.name}
      </h3>
      {product.subtitle && (
        <p className="text-foreground/50 text-sm mb-2">
          {product.subtitle}
        </p>
      )}
      <p className="text-accent/70 text-sm font-mono mb-4">
        {product.fullForm}
      </p>
      <p className="text-foreground/60 text-sm leading-relaxed mb-8 max-w-2xl">
        {product.description}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {product.features.map((feature) => (
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
        href={`/products/${product.slug}`}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-accent/50 text-accent font-semibold text-sm hover:bg-accent/10 transition-colors"
      >
        Learn More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-xl bg-surface border border-border hover:border-accent/30 p-6 transition-all hover:bg-surface-2">
      <div
        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}
      >
        <svg
          className="w-6 h-6 text-white"
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
      <h3 className="text-lg font-bold mb-1">{product.name}</h3>
      {product.subtitle && (
        <p className="text-foreground/40 text-xs mb-1">{product.subtitle}</p>
      )}
      <p className="text-accent/60 text-xs font-mono mb-3">
        {product.fullForm}
      </p>
      <p className="text-foreground/60 text-sm leading-relaxed mb-4">
        {product.description}
      </p>
      <ul className="space-y-2 mb-5">
        {product.features.map((feature) => (
          <li key={feature.title} className="text-xs">
            <div className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">&#8226;</span>
              <div>
                <span className="font-semibold text-foreground/70">
                  {feature.title}:
                </span>{" "}
                <span className="text-foreground/50">{feature.detail}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link
        href={`/products/${product.slug}`}
        className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:text-accent/80 transition-colors"
      >
        Learn More
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

export default function Products() {
  const flagship = products.filter((p) => p.flagship);
  const featured = products.filter((p) => p.featured);
  const regular = products.filter((p) => !p.flagship && !p.featured);

  return (
    <section id="products" className="py-24 relative grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-mono mb-3 tracking-wider uppercase">
            Our Products
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Key Products &{" "}
            <span className="text-accent">Innovations</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            From intelligent robots to smart home devices, our products are
            designed to transform everyday life through AI-driven automation.
          </p>
        </div>

        {/* Flagship Product - Atiana */}
        <div className="mb-8 space-y-8">
          {flagship.map((product) => (
            <FlagshipCard key={product.name} product={product} />
          ))}
        </div>

        {/* Featured Product - Sueen */}
        <div className="mb-8 space-y-8">
          {featured.map((product) => (
            <FeaturedCard key={product.name} product={product} />
          ))}
        </div>

        {/* Other Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regular.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
