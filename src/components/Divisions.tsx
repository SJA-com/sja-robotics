import Link from "next/link";
import { divisions, productCount } from "@/data/products";

// SJA Tech division is disabled (see src/components/DivisionTech.tsx); add it to
// src/data/products.ts when it comes back.

/**
 * Home-page overview of the divisions. It deliberately doesn't list the products again
 * (MOUS and Fari are showcased above; the full lineup lives on /products/).
 */
export default function Divisions() {
  return (
    <section id="divisions" className="py-24 relative scroll-mt-16">
      <div aria-hidden="true" className="section-rule" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal className="text-center mb-14">
          <p className="eyebrow mb-4">Our Divisions</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Two Specialized <span className="text-brand">Divisions</span>
          </h2>
          <p className="text-foreground/65 max-w-2xl mx-auto">
            SJA Robotics operates through focused divisions — each driving
            innovation in their domain while powering the broader ecosystem.
          </p>
        </div>

        <div data-reveal-stagger className="grid gap-6 lg:grid-cols-2">
          {divisions.map((div) => (
            <article
              key={div.id}
              aria-labelledby={`division-${div.id}`}
              className={`lift glass relative overflow-hidden rounded-2xl border ${div.tone.border} p-6 sm:p-10 flex flex-col`}
            >
              <div
                aria-hidden="true"
                className={`absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-25 bg-gradient-to-br ${div.tone.gradient} [mask-image:radial-gradient(closest-side,#000,transparent)]`}
              />
              <div className="relative flex items-start gap-5 mb-5">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${div.tone.gradient} flex items-center justify-center shrink-0 shadow-lg`}
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={div.icon} />
                  </svg>
                </div>
                <div>
                  <h3 id={`division-${div.id}`} className="text-2xl sm:text-3xl font-bold mb-1">
                    {div.name}
                  </h3>
                  <p className={`${div.tone.text} text-sm font-mono`}>{div.tagline}</p>
                </div>
              </div>
              <p className="relative text-foreground/70 leading-relaxed mb-8 flex-1">{div.description}</p>
              <div className="relative flex flex-wrap items-center gap-3">
                <Link
                  href={div.href}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r ${div.tone.gradient} text-white font-semibold text-sm hover:opacity-90 press group`}
                >
                  Explore {div.name}
                  <svg className="nudge w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href={`/products/#${div.id}`}
                  className={`inline-flex items-center rounded-lg ${div.tone.bg} border ${div.tone.border} px-4 py-2.5 text-xs font-mono ${div.tone.text} hover:opacity-80 transition-opacity`}
                >
                  {productCount(div)}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
