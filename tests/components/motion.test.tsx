import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import fs from "node:fs";
import path from "node:path";
import { canAnimateReveals, setupReveals, motionDelay } from "@/lib/motion";
import RevealController from "@/components/RevealController";
import Home from "@/app/page";
import Founder from "@/components/Founder";

type IOCallback = (entries: Partial<IntersectionObserverEntry>[]) => void;

let observers: FakeIO[] = [];
class FakeIO {
  cb: IOCallback;
  observed = new Set<Element>();
  unobserve = vi.fn((el: Element) => this.observed.delete(el));
  disconnect = vi.fn(() => this.observed.clear());
  constructor(cb: IOCallback) {
    this.cb = cb;
    observers.push(this);
  }
  observe(el: Element) {
    this.observed.add(el);
  }
  fire(el: Element, isIntersecting = true) {
    this.cb([{ target: el, isIntersecting }]);
  }
}

const originalIO = globalThis.IntersectionObserver;
const originalMatchMedia = window.matchMedia;

function setReducedMotion(reduce: boolean) {
  window.matchMedia = ((q: string) => ({
    matches: reduce && q.includes("reduce"),
    media: q,
    addEventListener() {},
    removeEventListener() {},
  })) as unknown as typeof window.matchMedia;
}

/** Places an element at a vertical position (jsdom has no layout). */
function at(el: HTMLElement, top: number, height = 100) {
  el.getBoundingClientRect = () =>
    ({ top, bottom: top + height, left: 0, right: 0, width: 0, height, x: 0, y: top, toJSON() {} }) as DOMRect;
  return el;
}

function page() {
  document.body.innerHTML = `
    <h2 data-reveal id="onscreen">Visible now</h2>
    <div data-reveal="left" id="below">Below the fold</div>
    <ul data-reveal-stagger id="group"><li>a</li><li>b</li></ul>
    <p id="plain">Not animated</p>`;
  const $ = (id: string) => document.getElementById(id)!;
  at($("onscreen"), 100);
  at($("below"), 2000);
  at($("group"), 3000);
  return $;
}

beforeEach(() => {
  observers = [];
  setReducedMotion(false);
  // @ts-expect-error test double
  globalThis.IntersectionObserver = FakeIO;
});

afterEach(() => {
  globalThis.IntersectionObserver = originalIO;
  window.matchMedia = originalMatchMedia;
  document.body.innerHTML = "";
});

describe("canAnimateReveals", () => {
  it("is true with IntersectionObserver and no reduced-motion preference", () => {
    expect(canAnimateReveals()).toBe(true);
  });

  it("is false when the user prefers reduced motion", () => {
    setReducedMotion(true);
    expect(canAnimateReveals()).toBe(false);
  });

  it("is false without IntersectionObserver", () => {
    // @ts-expect-error simulate an old browser
    delete globalThis.IntersectionObserver;
    expect(canAnimateReveals()).toBe(false);
  });
});

describe("setupReveals", () => {
  it("hides only off-screen targets and watches them with one shared observer", () => {
    const $ = page();
    setupReveals();
    expect(observers).toHaveLength(1);
    expect($("onscreen").dataset.revealState).toBe("visible");
    expect($("below").dataset.revealState).toBe("pending");
    expect($("group").dataset.revealState).toBe("pending");
    expect($("plain")).not.toHaveAttribute("data-reveal-state");
    expect([...observers[0].observed]).toEqual([$("below"), $("group")]);
  });

  it("reveals an element when it scrolls into view, then stops observing it", () => {
    const $ = page();
    setupReveals();
    const io = observers[0];
    io.fire($("below"), false);
    expect($("below").dataset.revealState).toBe("pending");
    io.fire($("below"));
    expect($("below").dataset.revealState).toBe("shown");
    expect(io.unobserve).toHaveBeenCalledWith($("below"));
    expect($("group").dataset.revealState).toBe("pending");
  });

  it("leaves everything visible (untouched) under prefers-reduced-motion", () => {
    setReducedMotion(true);
    const $ = page();
    setupReveals();
    expect(observers).toHaveLength(0);
    for (const id of ["onscreen", "below", "group"]) {
      expect($(id)).not.toHaveAttribute("data-reveal-state");
    }
  });

  it("leaves everything visible (untouched) without IntersectionObserver", () => {
    // @ts-expect-error simulate an old browser
    delete globalThis.IntersectionObserver;
    const $ = page();
    expect(() => setupReveals()).not.toThrow();
    for (const id of ["onscreen", "below", "group"]) {
      expect($(id)).not.toHaveAttribute("data-reveal-state");
    }
  });

  it("un-hides anything still pending on cleanup", () => {
    const $ = page();
    const cleanup = setupReveals();
    cleanup();
    expect(observers[0].disconnect).toHaveBeenCalled();
    expect($("below")).not.toHaveAttribute("data-reveal-state");
    expect($("onscreen").dataset.revealState).toBe("visible");
  });

  it("does not re-process elements it has already handled", () => {
    page();
    setupReveals();
    setupReveals();
    expect(observers).toHaveLength(1);
  });
});

describe("<RevealController />", () => {
  it("leaves the home page fully visible under reduced motion", () => {
    setReducedMotion(true);
    const { container } = render(
      <>
        <Home />
        <RevealController />
      </>
    );
    expect(container.querySelectorAll("[data-reveal-state]")).toHaveLength(0);
    expect(container.querySelectorAll("[data-reveal], [data-reveal-stagger]").length).toBeGreaterThan(10);
  });

  it("leaves the founder section fully visible without IntersectionObserver", () => {
    // (next/link itself needs IntersectionObserver in jsdom, so use a Link-free section.)
    // @ts-expect-error simulate an old browser
    delete globalThis.IntersectionObserver;
    const { container } = render(
      <>
        <Founder />
        <RevealController />
      </>
    );
    expect(container.querySelectorAll("[data-reveal]").length).toBeGreaterThan(3);
    expect(container.querySelectorAll("[data-reveal-state]")).toHaveLength(0);
  });

  it("marks off-screen sections pending when motion is allowed", () => {
    const { container } = render(
      <>
        <Home />
        <RevealController />
      </>
    );
    // jsdom has no layout, so every target reports a 0×0 box at the top edge (= off-screen).
    expect(container.querySelectorAll('[data-reveal-state="pending"]').length).toBeGreaterThan(10);
    // One shared observer for every reveal target (next/link creates its own for prefetching).
    const revealObservers = observers.filter((o) =>
      [...o.observed].some((el) => el.hasAttribute("data-reveal-state"))
    );
    expect(revealObservers).toHaveLength(1);
  });
});

describe("motion CSS", () => {
  const css = fs
    .readFileSync(path.join(process.cwd(), "src/app/globals.css"), "utf8")
    .replace(/\/\*[\s\S]*?\*\//g, ""); // drop comments

  /** Text of every `@media (prefers-reduced-motion: no-preference) { … }` block. */
  function noPreferenceBlocks() {
    const blocks: string[] = [];
    const re = /@media \(prefers-reduced-motion: no-preference\)\s*\{/g;
    while (re.exec(css)) {
      let depth = 1;
      let i = re.lastIndex;
      for (; i < css.length && depth; i++) {
        if (css[i] === "{") depth++;
        else if (css[i] === "}") depth--;
      }
      blocks.push(css.slice(re.lastIndex, i));
    }
    return blocks.join("\n");
  }

  it("only hides reveal targets inside a no-preference reduced-motion query", () => {
    const outside = css.replace(/@media \(prefers-reduced-motion: no-preference\)\s*\{[\s\S]*?\n\}/g, "");
    expect(outside).not.toMatch(/data-reveal-state="pending"/);
    expect(noPreferenceBlocks()).toMatch(/\[data-reveal\]\[data-reveal-state="pending"\][\s\S]*?opacity: 0/);
  });

  it("never hides plain [data-reveal] elements (content stays visible without JS)", () => {
    // Any rule that targets data-reveal must also require a JS-set state.
    const selectors = css.match(/[^{}]*\[data-reveal[^{}]*\{/g) ?? [];
    for (const sel of selectors) expect(sel).toMatch(/data-reveal-state/);
  });

  it("animates only transform and opacity in the reveal keyframes", () => {
    const keyframes = css.match(/@keyframes reveal-[\w-]+\s*\{[^}]*\}/g) ?? [];
    expect(keyframes.length).toBeGreaterThanOrEqual(4);
    for (const k of keyframes) {
      const props = [...k.matchAll(/([a-z-]+)\s*:/g)].map((m) => m[1]);
      for (const p of props) expect(["opacity", "transform"]).toContain(p);
    }
  });
});

describe("motionDelay", () => {
  it("sets the --delay custom property", () => {
    expect(motionDelay(120)).toEqual({ "--delay": "120ms" });
  });
});
