"use client";

import { useMemo, useState } from "react";
import {
  fariBacklog,
  mousBacklog,
  type Difficulty,
  type ProductBacklog,
} from "@/data/intern-features";

const backlogs: ProductBacklog[] = [fariBacklog, mousBacklog];
const difficulties: Difficulty[] = ["Beginner", "Intermediate", "Advanced"];

const difficultyStyle: Record<Difficulty, string> = {
  Beginner: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
  Intermediate: "text-accent-3 border-accent-3/30 bg-accent-3/10",
  Advanced: "text-gold border-gold/30 bg-gold/10",
};

type ProductFilter = "All" | ProductBacklog["product"];

export default function FeaturesBoard() {
  const [product, setProduct] = useState<ProductFilter>("All");
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const visibleBacklogs = backlogs.filter((b) => product === "All" || b.product === product);

  const categories = useMemo(() => {
    const set = new Set<string>();
    visibleBacklogs.forEach((b) => b.features.forEach((f) => set.add(f.category)));
    return ["All", ...Array.from(set)];
  }, [visibleBacklogs]);

  const q = query.trim().toLowerCase();
  const filtered = visibleBacklogs.map((b) => ({
    ...b,
    features: b.features.filter(
      (f) =>
        (difficulty === "All" || f.difficulty === difficulty) &&
        (category === "All" || f.category === category) &&
        (!q ||
          `${f.id} ${f.title} ${f.detail} ${f.skills.join(" ")}`.toLowerCase().includes(q))
    ),
  }));
  const shown = filtered.reduce((n, b) => n + b.features.length, 0);

  const pill = (active: boolean) =>
    `px-3 py-1.5 rounded-full text-xs border transition-colors ${
      active
        ? "bg-accent/20 border-accent text-foreground"
        : "border-border text-foreground/60 hover:text-foreground hover:border-accent/60"
    }`;

  return (
    <div>
      {/* Filters */}
      <div className="sticky top-16 z-30 -mx-4 px-4 py-4 bg-background/90 backdrop-blur-xl border-b border-border mb-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {(["All", "Fari", "MOUS"] as ProductFilter[]).map((p) => (
              <button
                key={p}
                onClick={() => {
                  setProduct(p);
                  setCategory("All");
                }}
                className={pill(product === p)}
              >
                {p === "All" ? "Both products" : p}
              </button>
            ))}
            <span className="w-px h-5 bg-border mx-1 hidden sm:block" />
            {(["All", ...difficulties] as (Difficulty | "All")[]).map((d) => (
              <button key={d} onClick={() => setDifficulty(d)} className={pill(difficulty === d)}>
                {d === "All" ? "Any level" : d}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-surface border border-border rounded-lg px-3 py-2 text-sm text-foreground/80 focus:outline-none focus:border-accent"
              aria-label="Category"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "All categories" : c}
                </option>
              ))}
            </select>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search features, skills or IDs…"
              className="flex-1 bg-surface border border-border rounded-lg px-3 py-2 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-accent"
            />
          </div>
          <p className="text-xs text-foreground/50">
            Showing {shown} of {backlogs.reduce((n, b) => n + b.features.length, 0)} features
          </p>
        </div>
      </div>

      {/* Lists */}
      <div className="space-y-16">
        {filtered.map((b) => (
          <section key={b.product} id={b.product.toLowerCase()} className="scroll-mt-40">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  {b.product} <span className="text-foreground/40 font-normal">· {b.features.length}</span>
                </h2>
                <p className="text-foreground/60 mt-1">{b.tagline}</p>
                <p className="text-xs text-foreground/40 mt-1 font-mono">{b.stack}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={b.demo}
                  className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-2 transition-colors"
                >
                  Try {b.product}
                </a>
                <a
                  href={b.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-border text-sm text-foreground/80 hover:border-accent transition-colors"
                >
                  Repository
                </a>
              </div>
            </div>

            {b.features.length === 0 ? (
              <p className="text-foreground/50 text-sm">No features match these filters.</p>
            ) : (
              <ol className="grid gap-3 md:grid-cols-2">
                {b.features.map((f) => (
                  <li
                    key={f.id}
                    className="p-5 rounded-xl bg-surface border border-border hover:border-accent/50 transition-colors flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold leading-snug">
                        <span className="font-mono text-xs text-foreground/40 mr-2">{f.id}</span>
                        {f.title}
                      </h3>
                      <span
                        className={`shrink-0 text-[11px] px-2 py-0.5 rounded-full border ${difficultyStyle[f.difficulty]}`}
                      >
                        {f.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed flex-1">{f.detail}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-surface-2 text-foreground/60">
                        {f.category}
                      </span>
                      {f.skills.map((s) => (
                        <span key={s} className="text-[11px] px-2 py-0.5 rounded border border-border text-foreground/50">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-foreground/50">
                      Start here: <code className="font-mono text-accent-3">{f.startHere}</code>
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
