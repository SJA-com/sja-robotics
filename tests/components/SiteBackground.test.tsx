import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import SiteBackground, { backgroundVariantFor } from "@/components/SiteBackground";
import { BackgroundAnimator, backgroundConfig } from "@/lib/background";

/** A do-nothing 2D context: jsdom has no canvas implementation. */
function fakeContext() {
  const noop = vi.fn();
  const gradient = { addColorStop: vi.fn() };
  return new Proxy({} as CanvasRenderingContext2D, {
    get: (_t, key) => {
      if (key === "canvas") return undefined;
      if (key === "createRadialGradient" || key === "createLinearGradient") return () => gradient;
      return noop;
    },
    set: () => true,
  });
}

let rafQueue: FrameRequestCallback[] = [];
let ctx: CanvasRenderingContext2D;

function setReducedMotion(on: boolean) {
  window.matchMedia = ((q: string) => ({
    matches: on && q.includes("reduce"),
    media: q,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;
}

function setVisibility(state: DocumentVisibilityState) {
  Object.defineProperty(document, "visibilityState", { configurable: true, get: () => state });
  document.dispatchEvent(new Event("visibilitychange"));
}

const originalMatchMedia = window.matchMedia;

beforeEach(() => {
  rafQueue = [];
  ctx = fakeContext();
  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(
    (() => ctx) as unknown as HTMLCanvasElement["getContext"]
  );
  vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
    rafQueue.push(cb);
    return rafQueue.length;
  });
  vi.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
  setReducedMotion(false);
  setVisibility("visible");
});

afterEach(() => {
  vi.restoreAllMocks();
  window.matchMedia = originalMatchMedia;
});

describe("<SiteBackground />", () => {
  it("renders a decorative, aria-hidden layer with a canvas and aurora layers", () => {
    const { container } = render(<SiteBackground />);
    const bg = screen.getByTestId("site-background");
    expect(bg).toHaveAttribute("aria-hidden", "true");
    expect(bg.querySelector("canvas.site-bg__canvas")).toBeTruthy();
    expect(bg.querySelector("canvas.site-bg__aurora")).toBeTruthy();
    // Nothing focusable or readable inside.
    expect(container.querySelectorAll("a, button, [tabindex]")).toHaveLength(0);
    expect(bg.textContent).toBe("");
  });

  it("uses the full variant on home and /products/, the lighter one elsewhere", () => {
    expect(backgroundVariantFor("/")).toBe("full");
    expect(backgroundVariantFor("/products")).toBe("full");
    expect(backgroundVariantFor("/products/")).toBe("full");
    expect(backgroundVariantFor("/products/atiana/")).toBe("lite");
    expect(backgroundVariantFor("/divisions/sja-ai")).toBe("lite");
    expect(backgroundVariantFor(null)).toBe("full");

    vi.mocked(usePathname).mockReturnValue("/divisions/sja-ai");
    render(<SiteBackground />);
    const bg = screen.getByTestId("site-background");
    expect(bg).toHaveAttribute("data-variant", "lite");
    expect(bg.querySelector(".site-bg__scan")).toBeNull();
  });

  it("starts the animation loop when motion is allowed", () => {
    render(<SiteBackground />);
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });

  it("never starts the loop under prefers-reduced-motion (draws one static frame)", () => {
    setReducedMotion(true);
    render(<SiteBackground />);
    expect(window.requestAnimationFrame).not.toHaveBeenCalled();
    // A static frame was still drawn.
    expect(HTMLCanvasElement.prototype.getContext).toHaveBeenCalledWith("2d");
  });

  it("stops the loop on unmount", () => {
    const { unmount } = render(<SiteBackground />);
    unmount();
    expect(window.cancelAnimationFrame).toHaveBeenCalled();
  });
});

describe("BackgroundAnimator", () => {
  function make(opts: { reducedMotion?: boolean } = {}) {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    return new BackgroundAnimator(canvas, "full", {
      win: window,
      doc: document,
      reducedMotion: opts.reducedMotion ?? false,
    });
  }

  it("pauses while the tab is hidden and resumes when it is visible again", () => {
    const a = make();
    expect(a.running).toBe(true);
    setVisibility("hidden");
    expect(a.running).toBe(false);
    expect(window.cancelAnimationFrame).toHaveBeenCalled();
    setVisibility("visible");
    expect(a.running).toBe(true);
    a.destroy();
  });

  it("doesn't reschedule frames once the tab is hidden", () => {
    const a = make();
    const tick = rafQueue.shift()!;
    setVisibility("hidden");
    const before = rafQueue.length;
    tick(16);
    expect(rafQueue.length).toBe(before);
    expect(a.running).toBe(false);
    a.destroy();
  });

  it("pauses when the canvas scrolls off-screen", () => {
    const observers: { cb: IntersectionObserverCallback; el?: Element }[] = [];
    const Original = window.IntersectionObserver;
    window.IntersectionObserver = class {
      constructor(public cb: IntersectionObserverCallback) {
        observers.push(this as unknown as { cb: IntersectionObserverCallback });
      }
      observe(el: Element) {
        (this as unknown as { el: Element }).el = el;
      }
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    } as unknown as typeof IntersectionObserver;
    try {
      const a = make();
      expect(a.running).toBe(true);
      const io = observers.at(-1)!;
      io.cb([{ isIntersecting: false, target: io.el } as unknown as IntersectionObserverEntry], {} as IntersectionObserver);
      expect(a.running).toBe(false);
      io.cb([{ isIntersecting: true, target: io.el } as unknown as IntersectionObserverEntry], {} as IntersectionObserver);
      expect(a.running).toBe(true);
      a.destroy();
    } finally {
      window.IntersectionObserver = Original;
    }
  });

  it("never loops with reduced motion", () => {
    const a = make({ reducedMotion: true });
    expect(a.running).toBe(false);
    expect(rafQueue).toHaveLength(0);
    a.destroy();
  });

  it("keeps working (and does nothing) without a 2D context", () => {
    vi.mocked(HTMLCanvasElement.prototype.getContext).mockReturnValue(null);
    const a = make();
    expect(a.running).toBe(false);
    a.destroy();
  });

  it("stops and removes its listeners on destroy", () => {
    const a = make();
    a.destroy();
    expect(a.running).toBe(false);
    setVisibility("visible");
    expect(a.running).toBe(false);
  });

  it("draws the aurora on a canvas at 1/12 of the viewport size", () => {
    const canvas = document.createElement("canvas");
    const aurora = document.createElement("canvas");
    const a = new BackgroundAnimator(canvas, "full", { win: window, doc: document, reducedMotion: true }, aurora);
    expect(aurora.width).toBe(Math.ceil(window.innerWidth / 12));
    expect(aurora.height).toBe(Math.ceil(window.innerHeight / 12));
    a.destroy();
  });

  it("caps the pixel ratio and uses fewer nodes on small screens and inner pages", () => {
    const desktop = backgroundConfig("full", 1440);
    const phone = backgroundConfig("full", 390);
    const lite = backgroundConfig("lite", 1440);
    expect(phone.nodes).toBeLessThan(desktop.nodes);
    expect(lite.nodes).toBeLessThan(desktop.nodes);
    expect(desktop.nodes).toBeLessThanOrEqual(60);
    for (const c of [desktop, phone, lite, backgroundConfig("lite", 390)]) {
      expect(c.maxDpr).toBeLessThanOrEqual(1.5);
    }
  });

  it("sizes the canvas backing store with the capped device-pixel-ratio", () => {
    const dpr = Object.getOwnPropertyDescriptor(window, "devicePixelRatio");
    Object.defineProperty(window, "devicePixelRatio", { configurable: true, value: 3 });
    try {
      const canvas = document.createElement("canvas");
      const a = new BackgroundAnimator(canvas, "full", { win: window, doc: document, reducedMotion: true });
      expect(canvas.width).toBe(Math.round(window.innerWidth * backgroundConfig("full", window.innerWidth).maxDpr));
      a.destroy();
    } finally {
      if (dpr) Object.defineProperty(window, "devicePixelRatio", dpr);
    }
  });
});
