import Image from "next/image";
import { motionDelay } from "@/lib/motion";

// Facts mirror the "Meet the Founder" section on sjapathway.com
// (sja-pathway-website/src/components/MeetTheFounder.tsx). Keep them in sync;
// don't add claims here that aren't there.

export const FOUNDER_NAME = "Syeda Juveria Afreen";
export const FOUNDER_PHOTO = "/sja-founder.jpeg";
export const FOUNDER_PHOTO_ALT = "Syeda Juveria Afreen, Founder of SJA Robotics";

export const experience = [
  {
    role: "Founder & CEO",
    org: "SJA Inc.",
    detail:
      "Building all three companies: SJA Robotics (AI products and the robots they will power), SJA Pathway (AI career platform) and SJA Verse (browser game studio).",
    current: true,
  },
  {
    role: "Product & Engineering Lead",
    org: "map.ca",
    detail: "Nov 2025 – Mar 2026 · impactful, community-driven technology solutions.",
    current: false,
  },
  {
    role: "Tech Support Engineer → Senior Software Engineer → Lead Software Engineer → CTO",
    org: "5+ years in the IT industry",
    detail: "Collaborating with teams across the USA, France, Australia and the UK.",
    current: false,
  },
];

export const education: { degree: string; status: string; detail?: string }[] = [
  {
    degree: "Master of Engineering (MEng) in Robotics",
    status: "In progress",
    detail: "Combining software expertise with a focus on AI and intelligent systems.",
  },
  {
    degree: "Master of Computer Applications (MCA)",
    status: "Completed",
  },
];

export const alsoA = ["Game Developer", "Content Writer", "Content Creator"];

export const founderLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sja-thedude/" },
  { label: "Instagram", href: "https://www.instagram.com/sja_thedude" },
  { label: "Telegram", href: "https://t.me/sjathedude" },
  { label: "Personal site", href: "https://ceo.sjapathway.com/" },
];

const stats = [
  { value: "5+", label: "Years in IT" },
  { value: "4", label: "Countries of collaboration" },
  { value: "MEng", label: "Robotics, in progress" },
];

function Corner({ className }: { className: string }) {
  return <span aria-hidden="true" className={`absolute w-5 h-5 border-accent-3/80 ${className}`} />;
}

export default function Founder() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-title"
      className="relative py-24 scroll-mt-16"
    >
      <div aria-hidden="true" className="section-rule" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-reveal className="max-w-3xl mb-14">
          <p className="eyebrow mb-4">Founder</p>
          <h2 id="founder-title" className="text-4xl sm:text-5xl font-bold tracking-tight">
            Meet the <span className="text-brand">Founder</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start mb-14">
          {/* Photo */}
          <div data-reveal="left" className="lg:col-span-2">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="gradient-border glow-accent relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface">
                <Image
                  src={FOUNDER_PHOTO}
                  alt={FOUNDER_PHOTO_ALT}
                  fill
                  sizes="(max-width: 1024px) 384px, 40vw"
                  className="object-cover object-top"
                />
                {/* HUD overlay: scan line, tint and corner brackets */}
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <div className="scanline absolute inset-0 bg-[linear-gradient(to_bottom,transparent_46%,rgba(124,134,232,0.16)_50%,transparent_54%)]" />
                  <Corner className="top-3 left-3 border-t-2 border-l-2 rounded-tl-md" />
                  <Corner className="top-3 right-3 border-t-2 border-r-2 rounded-tr-md" />
                  <Corner className="bottom-3 left-3 border-b-2 border-l-2 rounded-bl-md" />
                  <Corner className="bottom-3 right-3 border-b-2 border-r-2 rounded-br-md" />
                </div>
                {/* Name plate */}
                <div className="absolute left-4 right-4 bottom-4 rounded-xl bg-background/75 backdrop-blur-md border border-border px-4 py-3">
                  <p className="font-semibold">{FOUNDER_NAME}</p>
                  <p className="text-xs font-mono text-accent-3 tracking-wider uppercase">Founder · SJA Robotics</p>
                </div>
              </div>

              {/* Links */}
              <ul data-reveal-stagger className="flex flex-wrap justify-center gap-2 mt-6" aria-label="Founder links">
                {founderLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="press inline-flex items-center px-3.5 py-1.5 rounded-full border border-border bg-surface/80 text-xs font-medium text-foreground/70 hover:text-accent-3 hover:border-accent/50"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3">
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p data-reveal="right" className="text-lg sm:text-xl text-foreground/85">
                I&apos;m <strong className="text-foreground">{FOUNDER_NAME}</strong>, founder of SJA Robotics.
                I hold a Master of Computer Applications (MCA) and am pursuing a Master of Engineering in
                Robotics, combining software expertise with a focus on AI and intelligent systems.
              </p>
              <p data-reveal="right" style={motionDelay(80)}>
                With over 5 years of experience in the IT industry, I&apos;ve worked across roles including
                Tech Support Engineer, Senior Software Engineer, Lead Software Engineer and CTO,
                collaborating with teams across the USA, France, Australia and the UK.
              </p>
              <p data-reveal="right" style={motionDelay(160)}>
                Today I lead SJA Inc. full time as Founder &amp; CEO, building all three companies: SJA
                Robotics, bringing AI and automation into everyday devices; SJA Pathway, the AI career
                platform; and SJA Verse, a browser game studio. Before this, I was the Product &amp;
                Engineering Lead at map.ca (Nov 2025 &ndash; Mar 2026).
              </p>
              <p data-reveal="right" style={motionDelay(240)}>
                Beyond engineering, I&apos;m also a Game Developer, Content Writer and Content Creator,
                passionate about innovation, storytelling, and empowering others to grow with clarity,
                confidence and purpose.
              </p>
            </div>

            {/* Quick stats */}
            <div data-reveal-stagger className="grid grid-cols-3 gap-3 mt-8">
              {stats.map((s) => (
                <div key={s.label} className="lift glass gradient-border rounded-xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent-3">{s.value}</div>
                  <div className="text-[11px] sm:text-xs text-foreground/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Experience + Education */}
        <div className="grid md:grid-cols-2 gap-6">
          <div data-reveal className="lift glass rounded-2xl border border-border p-6 sm:p-8">
            <h3 className="flex items-center gap-3 text-xl font-bold mb-6">
              <span className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center" aria-hidden="true">
                <svg className="w-5 h-5 text-accent-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Experience
            </h3>
            <ol data-reveal-stagger className="relative space-y-5 border-l border-border pl-6">
              {experience.map((e) => (
                <li key={e.org} className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-surface ${
                      e.current ? "bg-accent-3" : "bg-border"
                    }`}
                  />
                  <p className="font-semibold text-foreground leading-snug">{e.role}</p>
                  <p className="text-sm font-mono text-accent-3/90">{e.org}</p>
                  <p className="text-sm text-foreground/55 mt-1 leading-relaxed">{e.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          <div data-reveal style={motionDelay(100)} className="lift glass rounded-2xl border border-border p-6 sm:p-8">
            <h3 className="flex items-center gap-3 text-xl font-bold mb-6">
              <span className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center" aria-hidden="true">
                <svg className="w-5 h-5 text-accent-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education
            </h3>
            <ol data-reveal-stagger className="space-y-4">
              {education.map((ed) => (
                <li key={ed.degree} className="rounded-xl bg-surface-2/70 border border-border p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <p className="font-semibold text-foreground leading-snug">{ed.degree}</p>
                    <span
                      className={`shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border ${
                        ed.status === "In progress"
                          ? "border-accent-3/40 text-accent-3 bg-accent/10"
                          : "border-border text-foreground/50"
                      }`}
                    >
                      {ed.status}
                    </span>
                  </div>
                  {ed.detail && <p className="text-sm text-foreground/55 leading-relaxed">{ed.detail}</p>}
                </li>
              ))}
            </ol>
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-sm font-mono uppercase tracking-wider text-foreground/40 mb-3">Beyond engineering</h4>
              <ul data-reveal-stagger className="flex flex-wrap gap-2" aria-label="Also a">
                {alsoA.map((t) => (
                  <li
                    key={t}
                    className="px-3 py-1 rounded-full text-xs border border-accent/30 bg-accent/5 text-accent-3"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
