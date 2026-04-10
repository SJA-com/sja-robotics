export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-circuit overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-2/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-3/10 rounded-full blur-[80px]" />

        {/* Circuit trace decorative lines */}
        <div className="absolute top-20 left-10 w-60 h-px bg-gradient-to-r from-accent/40 to-transparent" />
        <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-accent/40 to-transparent" />
        <div className="absolute top-[232px] left-10 w-24 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        <div className="absolute bottom-32 right-16 w-72 h-px bg-gradient-to-l from-accent-2/40 to-transparent" />
        <div className="absolute bottom-32 right-16 w-px h-32 bg-gradient-to-t from-accent-2/40 to-transparent" />
        <div className="absolute bottom-[256px] right-16 w-20 h-px bg-gradient-to-l from-accent-2/30 to-transparent" />

        {/* Circuit nodes */}
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-accent/50" />
        <div className="absolute top-[232px] left-10 w-2 h-2 rounded-full bg-accent/40" />
        <div className="absolute bottom-32 right-16 w-2 h-2 rounded-full bg-accent-2/50" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full border-2 border-accent/30" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full border-2 border-accent-2/30" />
        <div className="absolute top-[45%] left-[15%] w-2 h-2 rounded-full bg-accent-3/30" />
        <div className="absolute top-[60%] right-[20%] w-2 h-2 rounded-full bg-accent/30" />

        {/* Robot / AI illustration - right side */}
        <svg
          className="absolute right-[2%] sm:right-[5%] top-1/2 -translate-y-1/2 w-[180px] h-[220px] sm:w-[260px] sm:h-[320px] lg:w-[340px] lg:h-[420px] opacity-[0.55]"
          viewBox="0 0 340 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Robot head */}
          <rect x="95" y="40" width="150" height="120" rx="20" stroke="#3b82f6" strokeWidth="2" />
          {/* Antenna */}
          <line x1="170" y1="10" x2="170" y2="40" stroke="#6366f1" strokeWidth="2" />
          <circle cx="170" cy="8" r="6" stroke="#818cf8" strokeWidth="2" />
          {/* Eyes */}
          <circle cx="135" cy="90" r="16" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="205" cy="90" r="16" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="135" cy="90" r="6" fill="#3b82f6" />
          <circle cx="205" cy="90" r="6" fill="#3b82f6" />
          {/* Mouth / speaker */}
          <rect x="140" y="125" width="60" height="8" rx="4" stroke="#6366f1" strokeWidth="1.5" />
          {/* Neck */}
          <rect x="155" y="160" width="30" height="25" rx="5" stroke="#818cf8" strokeWidth="1.5" />
          {/* Body */}
          <rect x="75" y="185" width="190" height="140" rx="16" stroke="#3b82f6" strokeWidth="2" />
          {/* Chest panel / AI core */}
          <circle cx="170" cy="245" r="30" stroke="#6366f1" strokeWidth="2" />
          <circle cx="170" cy="245" r="18" stroke="#818cf8" strokeWidth="1.5" />
          <circle cx="170" cy="245" r="6" fill="#6366f1" />
          {/* AI brain lines radiating from core */}
          <line x1="170" y1="215" x2="170" y2="200" stroke="#818cf8" strokeWidth="1" />
          <line x1="170" y1="275" x2="170" y2="290" stroke="#818cf8" strokeWidth="1" />
          <line x1="140" y1="245" x2="125" y2="245" stroke="#818cf8" strokeWidth="1" />
          <line x1="200" y1="245" x2="215" y2="245" stroke="#818cf8" strokeWidth="1" />
          <line x1="149" y1="224" x2="139" y2="214" stroke="#818cf8" strokeWidth="1" />
          <line x1="191" y1="224" x2="201" y2="214" stroke="#818cf8" strokeWidth="1" />
          <line x1="149" y1="266" x2="139" y2="276" stroke="#818cf8" strokeWidth="1" />
          <line x1="191" y1="266" x2="201" y2="276" stroke="#818cf8" strokeWidth="1" />
          {/* Chest details */}
          <rect x="95" y="198" width="30" height="6" rx="3" stroke="#3b82f6" strokeWidth="1" />
          <rect x="95" y="210" width="20" height="6" rx="3" stroke="#3b82f6" strokeWidth="1" />
          <rect x="215" y="198" width="30" height="6" rx="3" stroke="#3b82f6" strokeWidth="1" />
          <rect x="225" y="210" width="20" height="6" rx="3" stroke="#3b82f6" strokeWidth="1" />
          {/* Arms */}
          <rect x="30" y="195" width="40" height="100" rx="12" stroke="#6366f1" strokeWidth="2" />
          <rect x="270" y="195" width="40" height="100" rx="12" stroke="#6366f1" strokeWidth="2" />
          {/* Hand joints */}
          <circle cx="50" cy="305" r="10" stroke="#818cf8" strokeWidth="1.5" />
          <circle cx="290" cy="305" r="10" stroke="#818cf8" strokeWidth="1.5" />
          {/* Legs */}
          <rect x="105" y="325" width="45" height="70" rx="10" stroke="#3b82f6" strokeWidth="2" />
          <rect x="190" y="325" width="45" height="70" rx="10" stroke="#3b82f6" strokeWidth="2" />
          {/* Feet */}
          <rect x="95" y="395" width="65" height="16" rx="8" stroke="#6366f1" strokeWidth="1.5" />
          <rect x="180" y="395" width="65" height="16" rx="8" stroke="#6366f1" strokeWidth="1.5" />
        </svg>

        {/* AI brain network - left side */}
        <svg
          className="absolute left-[2%] sm:left-[5%] top-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] lg:w-[280px] lg:h-[280px] opacity-[0.50]"
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Brain outline */}
          <path
            d="M140 30 C80 30, 30 80, 30 140 C30 200, 80 250, 140 250 C200 250, 250 200, 250 140 C250 80, 200 30, 140 30Z"
            stroke="#6366f1"
            strokeWidth="1.5"
          />
          {/* Neural network nodes */}
          <circle cx="140" cy="140" r="8" fill="#3b82f6" />
          <circle cx="90" cy="100" r="5" fill="#6366f1" />
          <circle cx="190" cy="100" r="5" fill="#6366f1" />
          <circle cx="80" cy="160" r="5" fill="#818cf8" />
          <circle cx="200" cy="160" r="5" fill="#818cf8" />
          <circle cx="110" cy="70" r="4" fill="#3b82f6" />
          <circle cx="170" cy="70" r="4" fill="#3b82f6" />
          <circle cx="110" cy="210" r="4" fill="#6366f1" />
          <circle cx="170" cy="210" r="4" fill="#6366f1" />
          <circle cx="60" cy="130" r="3" fill="#818cf8" />
          <circle cx="220" cy="130" r="3" fill="#818cf8" />
          <circle cx="140" cy="60" r="4" fill="#6366f1" />
          <circle cx="140" cy="220" r="4" fill="#3b82f6" />
          {/* Connections */}
          <line x1="140" y1="140" x2="90" y2="100" stroke="#3b82f6" strokeWidth="1" />
          <line x1="140" y1="140" x2="190" y2="100" stroke="#3b82f6" strokeWidth="1" />
          <line x1="140" y1="140" x2="80" y2="160" stroke="#6366f1" strokeWidth="1" />
          <line x1="140" y1="140" x2="200" y2="160" stroke="#6366f1" strokeWidth="1" />
          <line x1="90" y1="100" x2="110" y2="70" stroke="#818cf8" strokeWidth="1" />
          <line x1="190" y1="100" x2="170" y2="70" stroke="#818cf8" strokeWidth="1" />
          <line x1="80" y1="160" x2="110" y2="210" stroke="#3b82f6" strokeWidth="1" />
          <line x1="200" y1="160" x2="170" y2="210" stroke="#3b82f6" strokeWidth="1" />
          <line x1="90" y1="100" x2="60" y2="130" stroke="#6366f1" strokeWidth="1" />
          <line x1="190" y1="100" x2="220" y2="130" stroke="#6366f1" strokeWidth="1" />
          <line x1="110" y1="70" x2="140" y2="60" stroke="#818cf8" strokeWidth="1" />
          <line x1="170" y1="70" x2="140" y2="60" stroke="#818cf8" strokeWidth="1" />
          <line x1="110" y1="210" x2="140" y2="220" stroke="#818cf8" strokeWidth="1" />
          <line x1="170" y1="210" x2="140" y2="220" stroke="#818cf8" strokeWidth="1" />
          <line x1="60" y1="130" x2="80" y2="160" stroke="#3b82f6" strokeWidth="1" />
          <line x1="220" y1="130" x2="200" y2="160" stroke="#3b82f6" strokeWidth="1" />
          {/* Pulse rings around center */}
          <circle cx="140" cy="140" r="25" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="140" cy="140" r="50" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="140" cy="140" r="80" stroke="#818cf8" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Pioneering the Future of Robotics
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="block">Empowering</span>
          <span className="block bg-gradient-to-r from-accent via-accent-2 to-accent-3 bg-clip-text text-transparent animate-gradient">
            Everyday Life
          </span>
          <span className="block">Through Automation</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/60 mb-10">
          SJA Robotics integrates AI and automation into everyday devices,
          creating smart, user-friendly products that improve quality of life.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#divisions"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-2 text-white font-semibold hover:opacity-90 transition-opacity glow-accent"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg border border-border text-foreground/80 hover:border-accent/50 hover:text-accent transition-all"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-foreground/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
