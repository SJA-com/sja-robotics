import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import fs from "node:fs";
import path from "node:path";
import { usePathname } from "next/navigation";
import ProductsPage, { metadata } from "@/app/products/page";
import { divisions, allProducts } from "@/data/products";

const APP_DIR = path.join(process.cwd(), "src", "app");
const routeExists = (p: string) => fs.existsSync(path.join(APP_DIR, p.replace(/\/$/, ""), "page.tsx"));

function renderPage() {
  vi.mocked(usePathname).mockReturnValue("/products/");
  return render(<ProductsPage />);
}

const EXPECTED: Record<string, string[]> = {
  "SJA AI": ["MOUS", "Fari", "SAM"],
  "SJA Autonomous": ["Atiana Robot", "Sueen Drone"],
};

describe("/products/", () => {
  it("exists as a route (trailingSlash export → /products/index.html)", () => {
    expect(routeExists("/products")).toBe(true);
  });

  it("exports a title and description", () => {
    expect(metadata.title).toBe("Products | SJA Robotics");
    expect(String(metadata.description)).toMatch(/MOUS.*Fari.*SAM.*Atiana.*Sueen/);
  });

  it("has a single h1 and one section per division", () => {
    const { container } = renderPage();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent)).toEqual([
      "SJA AI",
      "SJA Autonomous",
    ]);
    expect(container.querySelector("section#sja-ai")).toBeTruthy();
    expect(container.querySelector("section#sja-autonomous")).toBeTruthy();
  });

  it.each(Object.entries(EXPECTED))("lists every %s product under its division", (division, names) => {
    const { container } = renderPage();
    const d = divisions.find((x) => x.name === division)!;
    const section = container.querySelector(`section#${d.id}`) as HTMLElement;
    expect(within(section).getAllByRole("heading", { level: 3 }).map((h) => h.textContent)).toEqual(names);
  });

  it("lists every product exactly once", () => {
    renderPage();
    const names = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(names).toHaveLength(allProducts.length);
    expect(new Set(names).size).toBe(names.length);
  });

  it.each(allProducts.map((p) => [p.name, p] as const))(
    "%s card has its full form, tagline, description, status and a valid link",
    (_name, p) => {
      const { container } = renderPage();
      const card = container.querySelector(`article[data-product="${p.slug}"]`) as HTMLElement;
      expect(card).toBeTruthy();
      expect(card).toHaveTextContent(p.fullForm);
      expect(card).toHaveTextContent(p.tagline);
      expect(card).toHaveTextContent(p.description);
      expect(card.querySelector("[data-status]")).toHaveAttribute("data-status", p.status);

      const more = within(card).getByRole("link", { name: `Learn more about ${p.name}` });
      const { pathname, hash } = new URL(more.getAttribute("href")!, "https://robotics.sjapathway.com");
      expect(routeExists(pathname), `${pathname} has no page`).toBe(true);
      if (hash) {
        // Deep links point at a real section id on the division page.
        const src = fs.readFileSync(path.join(process.cwd(), "src", "components", "DivisionAI.tsx"), "utf8") +
          fs.readFileSync(path.join(process.cwd(), "src", "components", "Fari.tsx"), "utf8");
        expect(src).toContain(`id="${hash.slice(1)}"`);
      }

      if (p.demo) {
        const demo = within(card).getByRole("link", { name: `Try the ${p.name} demo` });
        expect(demo).toHaveAttribute("href", p.demo);
        expect(demo.getAttribute("href")).toMatch(/^https:\/\/robotics\.sjapathway\.com\//);
        expect(demo).toHaveAttribute("target", "_blank");
        expect(demo).toHaveAttribute("rel", "noopener noreferrer");
      }
    }
  );

  it("links Atiana and Sueen to their product pages", () => {
    const { container } = renderPage();
    for (const slug of ["atiana", "sueen"]) {
      const card = container.querySelector(`article[data-product="${slug}"]`) as HTMLElement;
      expect(within(card).getByRole("link", { name: /Learn more/ }).getAttribute("href")).toMatch(
        new RegExp(`^/products/${slug}/?$`)
      );
    }
  });

  it("has in-page division jump links that resolve", () => {
    const { container } = renderPage();
    const nav = screen.getByRole("navigation", { name: "Divisions" });
    for (const a of within(nav).getAllByRole("link")) {
      expect(container.querySelector(a.getAttribute("href")!)).toBeTruthy();
    }
  });

  it("uses the reveal system and the Robotics navbar", () => {
    const { container } = renderPage();
    expect(container.querySelectorAll("[data-reveal], [data-reveal-stagger]").length).toBeGreaterThanOrEqual(4);
    expect(screen.getAllByAltText("SJA Robotics")[0].closest("a")).toHaveAttribute("href", "/");
  });
});
