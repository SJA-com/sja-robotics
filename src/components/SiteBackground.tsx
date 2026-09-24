"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { BackgroundAnimator, type BackgroundVariant } from "@/lib/background";

export function prefersReducedMotion(win: Window = window) {
  return !!win.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

/** Pages that get the full background; every other page gets the lighter one. */
export const FULL_BACKGROUND_PATHS = ["/", "/products"];

export function backgroundVariantFor(pathname: string | null): BackgroundVariant {
  const clean = (pathname ?? "").replace(/\/+$/, "") || "/";
  return FULL_BACKGROUND_PATHS.includes(clean) ? "full" : "lite";
}

/**
 * The living backdrop behind every page, fixed to the viewport:
 *  - an aurora of three soft indigo / blue / gold glows, drawn on a tiny (1/12-size) canvas
 *    that CSS scales up, so it is pre-blurred for free and never uses `filter`;
 *  - a faint static circuit grid (CSS);
 *  - one lightweight canvas with drifting nodes, links and light pulses on circuit traces.
 *  Both canvases are driven by one rAF loop (src/lib/background.ts) that pauses when the tab
 *  is hidden or the canvas is off-screen;
 *  - a slow scanline sweep (full variant only).
 * Home and /products/ get the full version; inner pages a lighter one. Reduced motion → static.
 */
export default function SiteBackground({ variant: forced }: { variant?: BackgroundVariant }) {
  const pathname = usePathname();
  const variant: BackgroundVariant = forced ?? backgroundVariantFor(pathname);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const auroraRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const animator = new BackgroundAnimator(canvas, variant, {
      win: window,
      doc: document,
      reducedMotion: prefersReducedMotion(),
    }, auroraRef.current);
    return () => animator.destroy();
  }, [variant]);

  return (
    <div aria-hidden="true" className="site-bg" data-variant={variant} data-testid="site-background">
      <canvas ref={auroraRef} className="site-bg__aurora" />
      <div className="site-bg__grid" />
      <canvas ref={canvasRef} className="site-bg__canvas" />
      {variant === "full" && <div className="site-bg__scan" />}
    </div>
  );
}
