export default function About() {
  return (
    <section id="about" className="py-24 relative bg-neural overflow-hidden">
      {/* Neural network decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-16 w-48 h-48 bg-accent-2/10 rounded-full blur-3xl" />
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#3b82f6" strokeWidth="1" />
          <line x1="30%" y1="40%" x2="60%" y2="30%" stroke="#6366f1" strokeWidth="1" />
          <line x1="60%" y1="30%" x2="85%" y2="55%" stroke="#818cf8" strokeWidth="1" />
          <line x1="85%" y1="55%" x2="70%" y2="80%" stroke="#3b82f6" strokeWidth="1" />
          <line x1="20%" y1="70%" x2="50%" y2="60%" stroke="#6366f1" strokeWidth="1" />
          <line x1="50%" y1="60%" x2="30%" y2="40%" stroke="#818cf8" strokeWidth="1" />
          <circle cx="10%" cy="20%" r="3" fill="#3b82f6" />
          <circle cx="30%" cy="40%" r="3" fill="#6366f1" />
          <circle cx="60%" cy="30%" r="3" fill="#818cf8" />
          <circle cx="85%" cy="55%" r="3" fill="#3b82f6" />
          <circle cx="70%" cy="80%" r="3" fill="#6366f1" />
          <circle cx="20%" cy="70%" r="3" fill="#818cf8" />
          <circle cx="50%" cy="60%" r="3" fill="#3b82f6" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-accent text-sm font-mono mb-3 tracking-wider uppercase">
            About Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Building the Future of{" "}
            <span className="text-accent">Intelligent</span> Living
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <blockquote className="border-l-2 border-accent/50 pl-4 text-foreground/60 italic mb-8">
              &ldquo;To revolutionize everyday life through intelligent,
              automated solutions that bring convenience, efficiency, and
              innovation to every home and individual. We empower users by
              transforming ordinary tasks into extraordinary experiences with
              AI-driven products that anticipate needs and personalize
              interactions.&rdquo;
            </blockquote>
            <p className="text-foreground/70 leading-relaxed">
              Founded by{" "}
              <strong className="text-foreground">
                Syeda Juveria Afreen (SJA)
              </strong>
              , SJA Robotics is at the forefront of integrating AI and
              automation into everyday devices, focusing on creating smart,
              user-friendly products that improve quality of life. The
              company&apos;s vision extends to developing cutting-edge robotics
              and automation technologies for both domestic and specialized
              applications.
            </p>
          </div>
          <div>
            <p className="text-foreground/70 leading-relaxed mb-6">
              With innovations like voice-automated devices, intelligent
              health-tracking tools, and AI-driven household assistants, SJA
              Robotics aims to redefine convenience and interactivity in the
              digital age.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              SJA Robotics is more than just a tech company &mdash; it&apos;s a
              movement towards a smarter, more efficient future where AI and
              automation work hand-in-hand to enhance daily life. Through
              innovative products like the Atiana Robot, voice-automated
              devices, and smart home solutions, we are setting a new standard
              in intelligent technology, helping to build a world where tasks
              are simplified, and innovation knows no bounds.
            </p>
          </div>
        </div>

        {/* Stats - 4 in a row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            {
              number: "7+",
              label: "Product Lines",
              icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
            },
            {
              number: "AI",
              label: "Driven Solutions",
              icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            },
            {
              number: "360\u00B0",
              label: "Home Integration",
              icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
            },
            {
              number: "\u221E",
              label: "Possibilities",
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="gradient-border rounded-xl p-6 bg-surface hover:bg-surface-2 transition-colors text-center"
            >
              <svg
                className="w-8 h-8 text-accent mb-3 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={stat.icon}
                />
              </svg>
              <div className="text-3xl font-bold text-accent mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-foreground/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
