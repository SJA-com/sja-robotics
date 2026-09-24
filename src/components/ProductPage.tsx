import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motionDelay } from "@/lib/motion";

type Feature = {
  title: string;
  detail: string;
};

type ProductPageProps = {
  name: string;
  subtitle?: string;
  fullForm: string;
  tagline: string;
  description: string[];
  features: Feature[];
  gradient: string;
  icon: string;
  closingNote?: string;
};

export default function ProductPage({
  name,
  subtitle,
  fullForm,
  tagline,
  description,
  features,
  gradient,
  icon,
  closingNote,
}: ProductPageProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="glow-breathe absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="glow-breathe absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-2/10 rounded-full blur-3xl" style={{ animationDelay: "-3s" }} />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/products/"
              className="enter group inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-accent transition-colors mb-8"
            >
              <svg
                className="nudge-back w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Products
            </Link>

            <div style={motionDelay(70)} className="enter flex items-center gap-4 mb-6">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center glow-accent`}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={icon}
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold">{name}</h1>
                {subtitle && (
                  <p className="text-foreground/50 text-lg">{subtitle}</p>
                )}
              </div>
            </div>

            <p style={motionDelay(140)} className="enter text-accent/70 font-mono text-sm mb-4">
              {fullForm}
            </p>
            <p style={motionDelay(210)} className="enter text-xl sm:text-2xl text-foreground/70 font-light leading-relaxed">
              {tagline}
            </p>
          </div>
        </section>

        {/* Description */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 data-reveal className="text-2xl font-bold mb-6">Overview</h2>
            <div data-reveal-stagger className="space-y-4">
              {description.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-foreground/70 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 grid-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 data-reveal className="text-2xl font-bold mb-8">Key Features</h2>
            <div data-reveal-stagger className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="lift rounded-xl bg-surface border border-border p-6 hover:border-accent/30"
                >
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-foreground/60 leading-relaxed">
                        {feature.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Note */}
        {closingNote && (
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div data-reveal="scale" className="gradient-border rounded-2xl bg-surface p-8 sm:p-10">
                <p className="text-foreground/70 leading-relaxed text-lg italic">
                  {closingNote}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16">
          <div data-reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/products/"
              className="inline-flex px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-2 text-white font-semibold hover:opacity-90 glow-accent press"
            >
              Explore All Products
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
