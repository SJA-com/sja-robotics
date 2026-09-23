import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesBoard from "@/components/FeaturesBoard";
import { fariBacklog, mousBacklog } from "@/data/intern-features";

const allFeatures = [...fariBacklog.features, ...mousBacklog.features];
const shippedCount = allFeatures.filter((f) => f.shipped).length;

export const metadata: Metadata = {
  title: "Features Roadmap — Fari & MOUS | SJA Robotics",
  description:
    "100 scoped features for interns to build on Fari, the AI companion, and MOUS, the AI voice agent — with difficulty levels, skills, where to start and what has already shipped.",
};

const steps = [
  {
    title: "Pick one",
    detail: "Choose a feature that matches your level. Beginners: start with a Beginner task to learn the codebase.",
  },
  {
    title: "Claim it",
    detail: "Tell your mentor the feature ID (e.g. F-12 or M-08) so two people don't build the same thing.",
  },
  {
    title: "Build on a branch",
    detail: "Branch from dev, start at the file listed under “Start here”, and test locally with wrangler dev.",
  },
  {
    title: "Open a PR",
    detail: "Include screenshots or a short screen recording, and how you tested it. Keep AI costs low — cheapest models only.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative pt-16 pb-10 grid-bg overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-mono tracking-widest text-accent-3 uppercase mb-3">
              Intern Program · SJA AI
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Features <span className="text-accent">Roadmap</span>
            </h1>
            <p className="mt-4 max-w-2xl text-foreground/70 text-lg">
              {allFeatures.length} scoped features for Fari and MOUS — {shippedCount} already shipped, the rest open for you. Both
              products are live today; every item here makes them more useful for real people and businesses.
            </p>

            <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="p-4 rounded-xl bg-surface/80 border border-border">
                  <p className="text-xs font-mono text-accent-3 mb-1">Step {i + 1}</p>
                  <p className="font-semibold mb-1">{s.title}</p>
                  <p className="text-sm text-foreground/60 leading-relaxed">{s.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <FeaturesBoard />
        </section>
      </main>
      <Footer />
    </>
  );
}
