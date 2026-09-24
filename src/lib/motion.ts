import type { CSSProperties } from "react";

/** Inline style that delays a `data-reveal` / `.enter` animation (see globals.css). */
export function motionDelay(ms: number): CSSProperties {
  return { "--delay": `${ms}ms` } as CSSProperties;
}

export const REVEAL_SELECTOR = "[data-reveal], [data-reveal-stagger]";

/** Reveals only run with IntersectionObserver support and no reduced-motion preference. */
export function canAnimateReveals(win: Window & typeof globalThis = window): boolean {
  if (typeof win.IntersectionObserver !== "function") return false;
  if (win.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return false;
  return true;
}

/**
 * Scroll reveals. Finds every `[data-reveal]` / `[data-reveal-stagger]` element
 * that is below (or above) the viewport, marks it `data-reveal-state="pending"`
 * (which the CSS hides) and uses ONE shared IntersectionObserver to flip it to
 * "shown" (which plays a short transform/opacity animation) the first time it
 * scrolls into view, then stops observing it.
 *
 * Elements already on screen are left untouched, so nothing visible ever
 * flickers. If reveals can't run, nothing is hidden. Returns a cleanup that
 * disconnects the observer and un-hides anything still pending.
 */
export function setupReveals(root: ParentNode = document, win: Window & typeof globalThis = window): () => void {
  if (!canAnimateReveals(win)) return () => {};

  const targets = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
    (el) => !el.dataset.revealState
  );
  if (!targets.length) return () => {};

  // Read all positions first, then write, to avoid layout thrashing.
  const vh = win.innerHeight || document.documentElement.clientHeight;
  const offscreen = targets.map((el) => {
    const r = el.getBoundingClientRect();
    return r.bottom <= 0 || r.top >= vh;
  });

  const pending = new Set<HTMLElement>();
  const observer = new win.IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.dataset.revealState = "shown";
        pending.delete(el);
        observer.unobserve(el);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0 }
  );

  targets.forEach((el, i) => {
    if (offscreen[i]) {
      el.dataset.revealState = "pending";
      pending.add(el);
      observer.observe(el);
    } else {
      el.dataset.revealState = "visible";
    }
  });

  return () => {
    observer.disconnect();
    for (const el of pending) delete el.dataset.revealState;
    pending.clear();
  };
}
