import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import { usePathname } from "next/navigation";

import Home from "@/app/page";
import SJAAIPage from "@/app/divisions/sja-ai/page";
import SJAAutonomousPage from "@/app/divisions/sja-autonomous/page";
import Atiana from "@/app/products/atiana/page";
import Sueen from "@/app/products/sueen/page";
import SmartBell from "@/app/products/smart-bell/page";
import SmartKitchen from "@/app/products/smart-kitchen/page";
import HomeSecurity from "@/app/products/home-security/page";
import HealthMonitoring from "@/app/products/health-monitoring/page";
import WeighingScale from "@/app/products/weighing-scale/page";

const APP_DIR = path.join(process.cwd(), "src", "app");

/** Does a route exist as a page.tsx under src/app? */
function routeExists(pathname: string) {
  const clean = pathname.replace(/\/$/, "");
  return fs.existsSync(path.join(APP_DIR, clean, "page.tsx"));
}

const pages: [string, ComponentType][] = [
  ["/", Home],
  ["/divisions/sja-ai", SJAAIPage],
  ["/divisions/sja-autonomous", SJAAutonomousPage],
  ["/products/atiana", Atiana],
  ["/products/sueen", Sueen],
  ["/products/smart-bell", SmartBell],
  ["/products/smart-kitchen", SmartKitchen],
  ["/products/home-security", HomeSecurity],
  ["/products/health-monitoring", HealthMonitoring],
  ["/products/weighing-scale", WeighingScale],
];

describe.each(pages)("links on %s", (route, Page) => {
  it("point only at routes that exist in src/app", () => {
    vi.mocked(usePathname).mockReturnValue(route);
    const { container } = render(<Page />);
    const internal = Array.from(container.querySelectorAll("a"))
      .map((a) => a.getAttribute("href")!)
      .filter((h) => h.startsWith("/"));
    for (const href of new Set(internal)) {
      const { pathname } = new URL(href, "https://robotics.sjapathway.com");
      expect(routeExists(pathname), `${href} has no page`).toBe(true);
    }
  });

  it("use https for every external link", () => {
    vi.mocked(usePathname).mockReturnValue(route);
    const { container } = render(<Page />);
    const external = Array.from(container.querySelectorAll("a"))
      .map((a) => a.getAttribute("href")!)
      .filter((h) => /^[a-z]+:/i.test(h));
    for (const href of external) expect(href).toMatch(/^https:\/\//);
  });

  it("have no empty hrefs", () => {
    vi.mocked(usePathname).mockReturnValue(route);
    const { container } = render(<Page />);
    for (const a of Array.from(container.querySelectorAll("a"))) {
      expect(a.getAttribute("href")).toBeTruthy();
    }
  });
});

describe("static routes", () => {
  it("every page referenced by the division pages exists", () => {
    for (const r of ["/products/atiana", "/products/sueen"]) {
      expect(routeExists(r)).toBe(true);
    }
  });
});
