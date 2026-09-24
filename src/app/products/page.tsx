import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBadge from "@/components/StatusBadge";
import { divisions, allProducts, productCount, type Division, type Product } from "@/data/products";
import { motionDelay } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Products | SJA Robotics",
  description:
    "Every SJA Robotics product in one place: MOUS, Fari and SAM from SJA AI, and the Atiana robot and Sueen drone from SJA Autonomous.",
};

function ProductCard({ product, division }: { product: Product; division: Division }) {
  return (
    <li className="h-full">
      <article
        aria-labelledby={`product-${product.slug}`}
        data-product={product.slug}
        className={`lift glass relative h-full overflow-hidden rounded-2xl border border-border p-6 sm:p-7 flex flex-col`}
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${division.tone.gradient} flex items-center justify-center shrink-0`}
            aria-hidden="true"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.icon} />
            </svg>
          </div>
          <div className="flex flex-wrap justify-end gap-1.5">
            <StatusBadge status={product.status} />
            {product.eta && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-border text-[9px] font-mono uppercase tracking-wider text-foreground/55 whitespace-nowrap">
                {product.eta}
              </span>
            )}
          </div>
        </div>
        <h3 id={`product-${product.slug}`} className="text-2xl font-bold mb-1">
          {product.name}
        </h3>
        <p className={`text-xs font-mono ${division.tone.text} mb-3 leading-relaxed`}>{product.fullForm}</p>
        <p className="font-medium text-foreground/90 mb-2">{product.tagline}</p>
        <p className="text-sm text-foreground/65 leading-relaxed mb-6 flex-1">{product.description}</p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={product.href}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-2 border border-border text-sm font-semibold hover:border-accent-3/50 press"
            aria-label={`Learn more about ${product.name}`}
          >
            Learn more
            <svg className="nudge w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {product.demo && (
            <a
              href={product.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#d4a853]/40 text-[#e3c56a] text-sm font-semibold hover:bg-[#d4a853]/10 press"
              aria-label={`Try the ${product.name} demo`}
            >
              Try demo
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </article>
    </li>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative pt-36 pb-16 text-center overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-24 -translate-x-1/2 w-[min(90vw,700px)] aspect-square rounded-full pointer-events-none bg-[radial-gradient(closest-side,rgba(76,87,200,0.22),transparent_70%)]"
          />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="enter eyebrow mb-4">Products</p>
            <h1 style={motionDelay(80)} className="enter text-4xl sm:text-6xl font-bold tracking-tight mb-5">
              Everything we&apos;re <span className="text-brand">building</span>
            </h1>
            <p style={motionDelay(160)} className="enter text-lg text-foreground/70 mb-8">
              {allProducts.length} products across two divisions: AI you can talk to today, and the robots it
              will power next.
            </p>
            <nav style={motionDelay(240)} aria-label="Divisions" className="enter flex flex-wrap justify-center gap-3">
              {divisions.map((d) => (
                <a
                  key={d.id}
                  href={`#${d.id}`}
                  className={`press inline-flex items-center gap-2 px-4 py-2 rounded-full border ${d.tone.border} ${d.tone.bg} text-sm ${d.tone.text}`}
                >
                  {d.name}
                  <span className="text-foreground/50 font-mono text-xs">{d.products.length}</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {divisions.map((d) => (
          <section key={d.id} id={d.id} aria-labelledby={`${d.id}-title`} className="relative py-16 sm:py-20 scroll-mt-16">
            <div aria-hidden="true" className="section-rule" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div data-reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                <div className="max-w-2xl">
                  <p className={`text-sm font-mono ${d.tone.text} mb-2`}>
                    {d.tagline} · {productCount(d)}
                  </p>
                  <h2 id={`${d.id}-title`} className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                    {d.name}
                  </h2>
                  <p className="text-foreground/65 leading-relaxed">{d.description}</p>
                </div>
                <Link
                  href={d.href}
                  className={`group shrink-0 self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r ${d.tone.gradient} text-white text-sm font-semibold hover:opacity-90 press`}
                >
                  Explore {d.name}
                  <svg className="nudge w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <ul
                data-reveal-stagger
                className={`grid gap-6 md:grid-cols-2 ${d.products.length % 3 === 0 ? "lg:grid-cols-3" : ""}`}
              >
                {d.products.map((p) => (
                  <ProductCard key={p.slug} product={p} division={d} />
                ))}
              </ul>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
