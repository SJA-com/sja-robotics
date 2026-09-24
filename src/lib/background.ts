/**
 * The animated "circuit network" drawn on the site background canvas.
 *
 * One small 2D canvas, fixed behind the page:
 *  - slowly drifting nodes (a sparse starfield) with faint links between near neighbours,
 *    offset by scroll at different depths for a gentle parallax;
 *  - a handful of right-angled circuit traces with light pulses travelling along them.
 *
 * Plus an optional second, tiny canvas (1/12 of the viewport) for the aurora: three soft
 * indigo / blue / gold glows that drift slowly. Radial gradients are smooth, so drawing
 * them at a twelfth of the resolution and letting CSS scale the canvas up is visually
 * identical to a blur, and costs almost nothing (redrawn every 4th frame).
 *
 * Performance rules: device-pixel-ratio capped, low node counts (fewer on small screens),
 * no filters or shadows, and the loop stops whenever the tab is hidden or the canvas is
 * scrolled off-screen. With reduced motion it draws a single static frame and never loops.
 */

export type BackgroundVariant = "full" | "lite";

export type BackgroundConfig = {
  nodes: number;
  traces: number;
  linkDistance: number;
  maxDpr: number;
  /** Overall strength multiplier for alphas. */
  intensity: number;
};

/** Node / trace budget for a variant at a given viewport width. */
export function backgroundConfig(variant: BackgroundVariant, width: number): BackgroundConfig {
  const small = width < 768;
  if (variant === "full") {
    return small
      ? { nodes: 22, traces: 4, linkDistance: 110, maxDpr: 1.5, intensity: 0.9 }
      : { nodes: 48, traces: 8, linkDistance: 150, maxDpr: 1, intensity: 1 };
  }
  return small
    ? { nodes: 12, traces: 2, linkDistance: 100, maxDpr: 1.25, intensity: 0.6 }
    : { nodes: 26, traces: 4, linkDistance: 130, maxDpr: 1, intensity: 0.65 };
}

type Node = { x: number; y: number; vx: number; vy: number; r: number; depth: number; gold: boolean; tw: number };
type Trace = { pts: [number, number][]; len: number; seg: number[]; speed: number; offset: number; gold: boolean };

export type AnimatorEnv = {
  win: Window & typeof globalThis;
  doc: Document;
  reducedMotion: boolean;
};

const INDIGO = "124,134,232"; // --accent-3
const BLUE = "76,87,200"; // --accent
const GOLD = "201,162,39"; // --gold
const AURORA_SCALE = 12;

/** Deterministic PRNG so the layout is stable between frames/resizes. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class BackgroundAnimator {
  private ctx: CanvasRenderingContext2D | null;
  private actx: CanvasRenderingContext2D | null = null;
  private frame = 0;
  private nodes: Node[] = [];
  private traces: Trace[] = [];
  private w = 0;
  private h = 0;
  private cfg: BackgroundConfig;
  private raf = 0;
  private last = 0;
  private t = 0;
  private visible = true; // canvas on screen
  private pageVisible = true; // tab visible
  private destroyed = false;
  private io: IntersectionObserver | null = null;
  private resizeTimer: ReturnType<typeof setTimeout> | undefined;

  constructor(
    private canvas: HTMLCanvasElement,
    private variant: BackgroundVariant,
    private env: AnimatorEnv,
    private aurora?: HTMLCanvasElement | null
  ) {
    this.ctx = canvas.getContext("2d");
    this.actx = aurora?.getContext("2d") ?? null;
    this.cfg = backgroundConfig(variant, env.win.innerWidth);
    this.pageVisible = env.doc.visibilityState !== "hidden";
    this.resize();
    this.drawFrame();
    this.drawAurora();

    env.doc.addEventListener("visibilitychange", this.onVisibility);
    env.win.addEventListener("resize", this.onResize, { passive: true });
    if (typeof env.win.IntersectionObserver === "function") {
      this.io = new env.win.IntersectionObserver((entries) => {
        for (const e of entries) this.visible = e.isIntersecting;
        this.sync();
      });
      this.io.observe(canvas);
    }
    this.sync();
  }

  /** True while the requestAnimationFrame loop is scheduled. */
  get running() {
    return this.raf !== 0;
  }

  destroy() {
    this.destroyed = true;
    this.stop();
    clearTimeout(this.resizeTimer);
    this.env.doc.removeEventListener("visibilitychange", this.onVisibility);
    this.env.win.removeEventListener("resize", this.onResize);
    this.io?.disconnect();
  }

  private onVisibility = () => {
    this.pageVisible = this.env.doc.visibilityState !== "hidden";
    this.sync();
  };

  private onResize = () => {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.cfg = backgroundConfig(this.variant, this.env.win.innerWidth);
      this.resize();
      this.drawFrame();
      this.drawAurora();
    }, 150);
  };

  private shouldRun() {
    return !this.destroyed && !this.env.reducedMotion && !!this.ctx && this.visible && this.pageVisible;
  }

  private sync() {
    if (this.shouldRun()) this.start();
    else this.stop();
  }

  private start() {
    if (this.raf) return;
    this.last = 0;
    this.raf = this.env.win.requestAnimationFrame(this.tick);
  }

  private stop() {
    if (!this.raf) return;
    this.env.win.cancelAnimationFrame(this.raf);
    this.raf = 0;
  }

  private tick = (now: number) => {
    // Clamp dt so a long pause (tab switch) doesn't make things jump.
    const dt = this.last ? Math.min(50, now - this.last) : 16;
    this.last = now;
    this.step(dt);
    this.drawFrame();
    if (++this.frame % 4 === 0) this.drawAurora();
    this.raf = this.shouldRun() ? this.env.win.requestAnimationFrame(this.tick) : 0;
  };

  private resize() {
    const { win } = this.env;
    const dpr = Math.min(win.devicePixelRatio || 1, this.cfg.maxDpr);
    const widthChanged = win.innerWidth !== this.w;
    this.w = win.innerWidth;
    this.h = win.innerHeight;
    this.canvas.width = Math.round(this.w * dpr);
    this.canvas.height = Math.round(this.h * dpr);
    this.ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (this.aurora) {
      this.aurora.width = Math.max(1, Math.ceil(this.w / AURORA_SCALE));
      this.aurora.height = Math.max(1, Math.ceil(this.h / AURORA_SCALE));
    }
    // Height-only changes (mobile URL bar showing/hiding) keep the layout; nodes simply wrap.
    if (widthChanged || !this.nodes.length) this.seed();
  }

  private seed() {
    const rand = mulberry32(this.variant === "full" ? 7 : 13);
    const { w, h, cfg } = this;
    this.nodes = Array.from({ length: cfg.nodes }, () => {
      const depth = 0.3 + rand() * 0.7;
      const speed = 0.006 + rand() * 0.012; // px per ms
      const a = rand() * Math.PI * 2;
      return {
        x: rand() * w,
        y: rand() * h,
        vx: Math.cos(a) * speed * depth,
        vy: Math.sin(a) * speed * depth,
        r: 0.6 + depth * 1.4,
        depth,
        gold: rand() < 0.12,
        tw: rand() * Math.PI * 2,
      };
    });

    // Right-angled traces snapped to a 40px grid, like PCB routing.
    const G = 40;
    const snap = (v: number) => Math.round(v / G) * G;
    this.traces = Array.from({ length: cfg.traces }, (_, i) => {
      const pts: [number, number][] = [];
      let x = snap(rand() * w);
      let y = snap(rand() * h);
      pts.push([x, y]);
      const turns = 3 + Math.floor(rand() * 3);
      for (let k = 0; k < turns; k++) {
        const len = snap((2 + rand() * 6) * G) * (rand() < 0.5 ? -1 : 1);
        if (k % 2 === 0) x = Math.max(0, Math.min(w, x + len));
        else y = Math.max(0, Math.min(h, y + len));
        pts.push([x, y]);
      }
      const seg: number[] = [];
      let total = 0;
      for (let k = 1; k < pts.length; k++) {
        const d = Math.abs(pts[k][0] - pts[k - 1][0]) + Math.abs(pts[k][1] - pts[k - 1][1]);
        seg.push(d);
        total += d;
      }
      return { pts, len: Math.max(total, 1), seg, speed: 0.05 + rand() * 0.05, offset: rand() * total, gold: i % 3 === 1 };
    });
  }

  private step(dt: number) {
    this.t += dt;
    const { w, h } = this;
    const pad = 20;
    for (const n of this.nodes) {
      n.x += n.vx * dt;
      n.y += n.vy * dt;
      if (n.x < -pad) n.x = w + pad;
      else if (n.x > w + pad) n.x = -pad;
      if (n.y < -pad) n.y = h + pad;
      else if (n.y > h + pad) n.y = -pad;
    }
  }

  private pointAt(tr: Trace, d: number): [number, number] {
    let rem = ((d % tr.len) + tr.len) % tr.len;
    for (let k = 0; k < tr.seg.length; k++) {
      if (rem <= tr.seg[k]) {
        const [x0, y0] = tr.pts[k];
        const [x1, y1] = tr.pts[k + 1];
        const f = tr.seg[k] ? rem / tr.seg[k] : 0;
        return [x0 + (x1 - x0) * f, y0 + (y1 - y0) * f];
      }
      rem -= tr.seg[k];
    }
    return tr.pts[tr.pts.length - 1];
  }

  /** Soft drifting glows on the low-resolution aurora canvas. */
  drawAurora() {
    const a = this.actx;
    const c = this.aurora;
    if (!a || !c) return;
    const W = c.width;
    const H = c.height;
    const M = Math.max(W, H);
    const t = this.t;
    const TAU = Math.PI * 2;
    const k = this.variant === "full" ? 1 : 0.6;
    const small = this.w < 768;
    a.clearRect(0, 0, W, H);
    const blob = (x: number, y: number, r: number, rgb: string, alpha: number) => {
      const g = a.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb},${alpha * k})`);
      g.addColorStop(0.45, `rgba(${rgb},${alpha * 0.35 * k})`);
      g.addColorStop(1, `rgba(${rgb},0)`);
      a.fillStyle = g;
      a.fillRect(0, 0, W, H);
    };
    blob(
      W * (0.12 + 0.16 * Math.sin((TAU * t) / 38000)),
      H * (0.1 + 0.18 * Math.sin((TAU * t) / 29000 + 1)),
      M * 0.62,
      "52,50,195",
      0.5
    );
    blob(
      W * (0.9 - 0.16 * Math.sin((TAU * t) / 46000 + 2)),
      H * (0.45 + 0.2 * Math.cos((TAU * t) / 33000)),
      M * 0.55,
      "76,87,200",
      0.38
    );
    if (this.variant === "full" && !small) {
      blob(
        W * (0.45 + 0.22 * Math.sin((TAU * t) / 52000 + 4)),
        H * (1.05 - 0.15 * Math.sin((TAU * t) / 41000)),
        M * 0.45,
        "201,162,39",
        0.2
      );
    }
  }

  /** Draws the current state. Public for the reduced-motion static frame and tests. */
  drawFrame() {
    const ctx = this.ctx;
    if (!ctx) return;
    const { w, h, cfg, t } = this;
    const k = cfg.intensity;
    ctx.clearRect(0, 0, w, h);

    // Parallax: deeper nodes move less with scroll. Wrapped so the field never runs out.
    const scroll = this.env.win.scrollY || 0;

    // Circuit traces + pulses
    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    for (const tr of this.traces) {
      const oy = -((scroll * 0.15) % h);
      ctx.beginPath();
      for (let copy = 0; copy < 2; copy++) {
        const yy = oy + copy * h;
        ctx.moveTo(tr.pts[0][0], tr.pts[0][1] + yy);
        for (let i = 1; i < tr.pts.length; i++) ctx.lineTo(tr.pts[i][0], tr.pts[i][1] + yy);
      }
      ctx.strokeStyle = `rgba(${BLUE},${0.14 * k})`;
      ctx.stroke();

      const head = tr.offset + t * tr.speed;
      const color = tr.gold ? GOLD : INDIGO;
      for (let copy = 0; copy < 2; copy++) {
        const yy = oy + copy * h;
        // tail: a few fading dots behind the head
        for (let s = 5; s >= 0; s--) {
          const [px, py] = this.pointAt(tr, head - s * 7);
          const a = (1 - s / 6) * 0.75 * k;
          ctx.fillStyle = `rgba(${color},${a})`;
          ctx.beginPath();
          ctx.arc(px, py + yy, s === 0 ? 2.2 : 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
        // soft halo on the head (a cheap radial disc, no shadowBlur)
        const [hx, hy] = this.pointAt(tr, head);
        ctx.fillStyle = `rgba(${color},${0.12 * k})`;
        ctx.beginPath();
        ctx.arc(hx, hy + yy, 7, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Nodes: compute parallaxed positions once
    const n = this.nodes.length;
    const xs = new Float32Array(n);
    const ys = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const nd = this.nodes[i];
      xs[i] = nd.x;
      let y = nd.y - scroll * 0.25 * nd.depth;
      y = ((y % h) + h) % h;
      ys[i] = y;
    }

    // Links between near neighbours (O(n²) on ≤48 nodes)
    const L = cfg.linkDistance;
    const L2 = L * L;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = xs[i] - xs[j];
        const dy = ys[i] - ys[j];
        const d2 = dx * dx + dy * dy;
        if (d2 > L2) continue;
        const a = (1 - Math.sqrt(d2) / L) * 0.22 * k;
        ctx.strokeStyle = `rgba(${INDIGO},${a})`;
        ctx.beginPath();
        ctx.moveTo(xs[i], ys[i]);
        ctx.lineTo(xs[j], ys[j]);
        ctx.stroke();
      }
    }

    for (let i = 0; i < n; i++) {
      const nd = this.nodes[i];
      const twinkle = 0.55 + 0.45 * Math.sin(nd.tw + t * 0.0012 * (0.5 + nd.depth));
      ctx.fillStyle = `rgba(${nd.gold ? GOLD : INDIGO},${(0.35 + 0.5 * nd.depth) * twinkle * k})`;
      ctx.beginPath();
      ctx.arc(xs[i], ys[i], nd.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
