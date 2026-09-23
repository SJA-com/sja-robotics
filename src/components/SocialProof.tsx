"use client";

import { useEffect, useState } from "react";

export type PublicStats = {
  conversations_30d: number;
  demo_conversations_30d: number;
  businesses: number;
  waitlist: number;
};

// Numbers only appear once they are big enough to be worth showing.
export const MIN_TO_SHOW = { conversations_30d: 10, businesses: 1, waitlist: 5 };

export function visibleStats(s: PublicStats | null) {
  if (!s) return [];
  const out: { label: string; value: number }[] = [];
  if (s.conversations_30d >= MIN_TO_SHOW.conversations_30d) {
    out.push({ label: "customer conversations handled by MOUS in the last 30 days", value: s.conversations_30d });
  }
  if (s.businesses >= MIN_TO_SHOW.businesses) {
    out.push({ label: s.businesses === 1 ? "business has set up MOUS" : "businesses have set up MOUS", value: s.businesses });
  }
  if (s.waitlist >= MIN_TO_SHOW.waitlist) {
    out.push({ label: "people on the early-access waitlist", value: s.waitlist });
  }
  return out;
}

/** Live traction numbers from /api/stats (site worker). Renders nothing until there's something real to show. */
export default function SocialProof({ initial = null }: { initial?: PublicStats | null }) {
  const [stats, setStats] = useState<PublicStats | null>(initial);

  useEffect(() => {
    if (initial) return;
    let cancelled = false;
    fetch("/api/stats")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (!cancelled && d) setStats(d); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [initial]);

  const items = visibleStats(stats);
  if (!items.length) return null;

  return (
    <section aria-label="MOUS in numbers" className="py-12 border-y border-border bg-surface/40">
      <div className="max-w-5xl mx-auto px-4 grid gap-6 sm:grid-cols-3 text-center">
        {items.map((i) => (
          <div key={i.label}>
            <p className="text-4xl font-bold text-[#d4a853] tabular-nums">{i.value.toLocaleString("en-US")}</p>
            <p className="text-sm text-foreground/60 mt-1">{i.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
