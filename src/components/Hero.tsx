import Link from "next/link";
import { MOUS_DEMO_URL } from "./ProductShowcase";
import { motionDelay } from "@/lib/motion";

const DIALECTS = ["Gulf Arabic", "Egyptian", "Levantine", "Moroccan", "English"];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Decorative layer. The moving aurora / circuit network is the site-wide <SiteBackground />;
          this adds a soft halo behind the logo and the line-art robot and neural net at the sides (lg+ only,
          where there's room beside the headline). */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[min(90vw,760px)] aspect-square rounded-full bg-[radial-gradient(closest-side,rgba(76,87,200,0.28),rgba(76,87,200,0.08)_55%,transparent_75%)]" />

        {/* Robot / AI illustration - right side */}
        <div className="hidden lg:block absolute right-[2%] xl:right-[5%] top-[calc(50%-190px)] xl:top-[calc(50%-210px)]">
        <svg
          className="float-slow w-[260px] h-[320px] xl:w-[320px] xl:h-[400px] opacity-60"
          viewBox="0 0 340 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Robot head */}
          <rect x="95" y="40" width="150" height="120" rx="20" stroke="#4C57C8" strokeWidth="2" />
          {/* Antenna */}
          <line x1="170" y1="10" x2="170" y2="40" stroke="#3432C3" strokeWidth="2" />
          <circle cx="170" cy="8" r="6" stroke="#7C86E8" strokeWidth="2" />
          {/* Eyes */}
          <circle cx="135" cy="90" r="16" stroke="#4C57C8" strokeWidth="2" />
          <circle cx="205" cy="90" r="16" stroke="#4C57C8" strokeWidth="2" />
          <circle cx="135" cy="90" r="6" fill="#7C86E8" />
          <circle cx="205" cy="90" r="6" fill="#7C86E8" />
          {/* Mouth / speaker */}
          <rect x="140" y="125" width="60" height="8" rx="4" stroke="#3432C3" strokeWidth="1.5" />
          {/* Neck */}
          <rect x="155" y="160" width="30" height="25" rx="5" stroke="#7C86E8" strokeWidth="1.5" />
          {/* Body */}
          <rect x="75" y="185" width="190" height="140" rx="16" stroke="#4C57C8" strokeWidth="2" />
          {/* Chest panel / AI core */}
          <circle cx="170" cy="245" r="30" stroke="#3432C3" strokeWidth="2" />
          <circle cx="170" cy="245" r="18" stroke="#7C86E8" strokeWidth="1.5" />
          <circle cx="170" cy="245" r="6" fill="#C9A227" />
          {/* AI brain lines radiating from core */}
          <line x1="170" y1="215" x2="170" y2="200" stroke="#7C86E8" strokeWidth="1" />
          <line x1="170" y1="275" x2="170" y2="290" stroke="#7C86E8" strokeWidth="1" />
          <line x1="140" y1="245" x2="125" y2="245" stroke="#7C86E8" strokeWidth="1" />
          <line x1="200" y1="245" x2="215" y2="245" stroke="#7C86E8" strokeWidth="1" />
          <line x1="149" y1="224" x2="139" y2="214" stroke="#7C86E8" strokeWidth="1" />
          <line x1="191" y1="224" x2="201" y2="214" stroke="#7C86E8" strokeWidth="1" />
          <line x1="149" y1="266" x2="139" y2="276" stroke="#7C86E8" strokeWidth="1" />
          <line x1="191" y1="266" x2="201" y2="276" stroke="#7C86E8" strokeWidth="1" />
          {/* Chest details */}
          <rect x="95" y="198" width="30" height="6" rx="3" stroke="#4C57C8" strokeWidth="1" />
          <rect x="95" y="210" width="20" height="6" rx="3" stroke="#4C57C8" strokeWidth="1" />
          <rect x="215" y="198" width="30" height="6" rx="3" stroke="#4C57C8" strokeWidth="1" />
          <rect x="225" y="210" width="20" height="6" rx="3" stroke="#4C57C8" strokeWidth="1" />
          {/* Arms */}
          <rect x="30" y="195" width="40" height="100" rx="12" stroke="#3432C3" strokeWidth="2" />
          <rect x="270" y="195" width="40" height="100" rx="12" stroke="#3432C3" strokeWidth="2" />
          {/* Hand joints */}
          <circle cx="50" cy="305" r="10" stroke="#7C86E8" strokeWidth="1.5" />
          <circle cx="290" cy="305" r="10" stroke="#7C86E8" strokeWidth="1.5" />
          {/* Legs */}
          <rect x="105" y="325" width="45" height="70" rx="10" stroke="#4C57C8" strokeWidth="2" />
          <rect x="190" y="325" width="45" height="70" rx="10" stroke="#4C57C8" strokeWidth="2" />
          {/* Feet */}
          <rect x="95" y="395" width="65" height="16" rx="8" stroke="#3432C3" strokeWidth="1.5" />
          <rect x="180" y="395" width="65" height="16" rx="8" stroke="#3432C3" strokeWidth="1.5" />
        </svg>
        </div>

        {/* AI brain network - left side */}
        <div className="hidden lg:block absolute left-[2%] xl:left-[5%] top-[calc(50%-120px)] xl:top-[calc(50%-140px)]">
        <svg
          className="float-slow w-[240px] h-[240px] xl:w-[280px] xl:h-[280px] opacity-55"
          style={{ animationDelay: "-3.5s" }}
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Brain outline */}
          <path
            d="M140 30 C80 30, 30 80, 30 140 C30 200, 80 250, 140 250 C200 250, 250 200, 250 140 C250 80, 200 30, 140 30Z"
            stroke="#3432C3"
            strokeWidth="1.5"
          />
          {/* Neural network nodes */}
          <circle cx="140" cy="140" r="8" fill="#7C86E8" />
          <circle cx="90" cy="100" r="5" fill="#3432C3" />
          <circle cx="190" cy="100" r="5" fill="#3432C3" />
          <circle cx="80" cy="160" r="5" fill="#7C86E8" />
          <circle cx="200" cy="160" r="5" fill="#7C86E8" />
          <circle cx="110" cy="70" r="4" fill="#4C57C8" />
          <circle cx="170" cy="70" r="4" fill="#4C57C8" />
          <circle cx="110" cy="210" r="4" fill="#3432C3" />
          <circle cx="170" cy="210" r="4" fill="#3432C3" />
          <circle cx="60" cy="130" r="3" fill="#7C86E8" />
          <circle cx="220" cy="130" r="3" fill="#7C86E8" />
          <circle cx="140" cy="60" r="4" fill="#3432C3" />
          <circle cx="140" cy="220" r="4" fill="#4C57C8" />
          {/* Connections */}
          <line x1="140" y1="140" x2="90" y2="100" stroke="#4C57C8" strokeWidth="1" />
          <line x1="140" y1="140" x2="190" y2="100" stroke="#4C57C8" strokeWidth="1" />
          <line x1="140" y1="140" x2="80" y2="160" stroke="#3432C3" strokeWidth="1" />
          <line x1="140" y1="140" x2="200" y2="160" stroke="#3432C3" strokeWidth="1" />
          <line x1="90" y1="100" x2="110" y2="70" stroke="#7C86E8" strokeWidth="1" />
          <line x1="190" y1="100" x2="170" y2="70" stroke="#7C86E8" strokeWidth="1" />
          <line x1="80" y1="160" x2="110" y2="210" stroke="#4C57C8" strokeWidth="1" />
          <line x1="200" y1="160" x2="170" y2="210" stroke="#4C57C8" strokeWidth="1" />
          <line x1="90" y1="100" x2="60" y2="130" stroke="#3432C3" strokeWidth="1" />
          <line x1="190" y1="100" x2="220" y2="130" stroke="#3432C3" strokeWidth="1" />
          <line x1="110" y1="70" x2="140" y2="60" stroke="#7C86E8" strokeWidth="1" />
          <line x1="170" y1="70" x2="140" y2="60" stroke="#7C86E8" strokeWidth="1" />
          <line x1="110" y1="210" x2="140" y2="220" stroke="#7C86E8" strokeWidth="1" />
          <line x1="170" y1="210" x2="140" y2="220" stroke="#7C86E8" strokeWidth="1" />
          <line x1="60" y1="130" x2="80" y2="160" stroke="#4C57C8" strokeWidth="1" />
          <line x1="220" y1="130" x2="200" y2="160" stroke="#4C57C8" strokeWidth="1" />
          {/* Pulse rings around center */}
          <g>
            <circle cx="140" cy="140" r="25" stroke="#4C57C8" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="140" cy="140" r="50" stroke="#7C86E8" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="140" cy="140" r="80" stroke="#C9A227" strokeOpacity="0.6" strokeWidth="0.5" strokeDasharray="4 4" />
          </g>
        </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12">
        {/* Badge */}
        <div className="enter inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-3/30 bg-accent/10 text-accent-3 text-sm mb-8">
          <span className="relative flex w-2 h-2" aria-hidden="true">
            <span className="absolute inset-0 rounded-full bg-[#d4a853] animate-ping opacity-60" />
            <span className="relative w-2 h-2 rounded-full bg-[#d4a853]" />
          </span>
          AI · Voice · Robotics
        </div>

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/sja-robotics-logo-dark.png"
          alt="SJA Robotics"
          style={motionDelay(60)}
          className="enter mx-auto mb-8 h-28 w-auto sm:h-36 lg:h-44 drop-shadow-[0_0_40px_rgba(76,87,200,0.45)]"
        />

        <h1 style={motionDelay(120)} className="enter text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="block">AI products built</span>
          <span className="block text-shimmer pb-1">for the Arab world.</span>
        </h1>

        {/* Subtitle */}
        <p style={motionDelay(180)} className="enter max-w-2xl mx-auto text-lg sm:text-xl text-foreground/70 mb-10">
          Voice agents that speak your customers&apos; dialect, an AI engine that remembers what matters,
          and the robots it will power next.
        </p>

        {/* CTAs */}
        <div style={motionDelay(240)} className="enter flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
          <a
            href={MOUS_DEMO_URL}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-2 text-white font-semibold hover:opacity-90 glow-accent press"
          >
            Try the MOUS Demo
          </a>
          <Link
            href="/products/"
            className="px-8 py-3 rounded-lg border border-accent-3/30 bg-surface/40 text-foreground/85 hover:border-[#d4a853]/60 hover:text-[#e3c56a] press"
          >
            Explore Products
          </Link>
        </div>

        {/* Dialects MOUS speaks: fills the space under the CTAs with something real */}
        <ul
          style={motionDelay(320)}
          aria-label="Languages MOUS speaks"
          className="enter mt-12 flex flex-wrap justify-center gap-2 max-w-xl mx-auto"
        >
          {DIALECTS.map((d, i) => (
            <li
              key={d}
              className="float-slow px-3 py-1 rounded-full border border-accent-3/20 bg-surface/60 text-xs text-foreground/65"
              style={{ animationDelay: `${-i * 0.9}s` }}
            >
              {d}
            </li>
          ))}
        </ul>

        {/* Scroll indicator */}
        <div className="enter-fade mt-12 sm:mt-14" style={motionDelay(400)} aria-hidden="true">
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
