import { describe, expect, it } from "vitest";
import { isValidElement, type ReactElement } from "react";
import RootLayout, { metadata } from "@/app/layout";
import RevealController from "@/components/RevealController";

describe("Root layout", () => {
  it("sets the canonical metadata base to the production domain", () => {
    expect(metadata.metadataBase?.toString()).toBe(
      "https://robotics.sjapathway.com/"
    );
  });

  it("sets the site title and description", () => {
    expect(metadata.title).toBe(
      "Robotics | Empowering Everyday Life Through Automation"
    );
    expect(metadata.description).toMatch(/Atiana, Sueen/);
  });

  it("declares icons that exist in /public", async () => {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const icons = metadata.icons as { icon: string; apple: string };
    expect(icons).toEqual({
      icon: "/icon-64.png",
      apple: "/apple-touch-icon.png",
    });
    for (const p of [icons.icon, icons.apple]) {
      expect(fs.existsSync(path.join(process.cwd(), "public", p))).toBe(true);
    }
  });

  it("includes the key SEO keywords", () => {
    expect(metadata.keywords).toEqual(
      expect.arrayContaining(["SJA Robotics", "Atiana Robot", "Sueen Drone"])
    );
  });

  it("renders <html lang='en'> with the font variables, wraps children in <body> and mounts the reveal controller", () => {
    const child = <p>child</p>;
    const html = RootLayout({ children: child }) as ReactElement<{
      lang: string;
      className: string;
      children: ReactElement<{ className: string; children: unknown }>;
    }>;
    expect(html.type).toBe("html");
    expect(html.props.lang).toBe("en");
    expect(html.props.className).toContain("--font-geist-sans");
    expect(html.props.className).toContain("--font-geist-mono");
    const body = html.props.children;
    expect(isValidElement(body)).toBe(true);
    expect(body.type).toBe("body");
    const kids = body.props.children as ReactElement[];
    expect(kids[0]).toBe(child);
    expect(kids[1].type).toBe(RevealController);
  });
});
