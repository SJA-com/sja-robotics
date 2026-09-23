import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page (/)", () => {
  it("renders Navbar, Hero, Products, About, Divisions and Footer in order", () => {
    const { container } = render(<Home />);
    const nav = container.querySelector("nav")!;
    const main = container.querySelector("main")!;
    const footer = container.querySelector("footer")!;
    expect(nav).toBeTruthy();
    expect(main).toBeTruthy();
    expect(footer).toHaveAttribute("id", "contact");

    const sections = Array.from(main.querySelectorAll(":scope > section"));
    // SocialProof renders nothing until live stats exist, so it isn't counted here.
    expect(sections).toHaveLength(4);
    expect(sections[0]).toContainElement(screen.getByRole("heading", { level: 1 }));
    expect(sections[1]).toHaveAttribute("id", "products");
    expect(sections[2]).toHaveAttribute("id", "about");
    expect(sections[3]).toHaveAttribute("id", "divisions");
  });

  it("has a single h1 with the site headline", () => {
    render(<Home />);
    const h1s = screen.getAllByRole("heading", { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent(/AI products built.*for the Arab world\./);
  });

  it("shows the SJA Inc. mark in the navbar (home route)", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "SJA Inc." })).toHaveAttribute(
      "href",
      "https://inc.sjapathway.com"
    );
  });

  it("resolves every in-page hash link to an element on the page", () => {
    const { container } = render(<Home />);
    const hashes = Array.from(container.querySelectorAll('a[href^="#"]')).map(
      (a) => a.getAttribute("href")!
    );
    expect(hashes.length).toBeGreaterThan(0);
    for (const h of new Set(hashes)) {
      expect(
        container.querySelector(h),
        `missing anchor target for ${h}`
      ).toBeTruthy();
    }
  });

  it("links to both division pages", () => {
    const { container } = render(<Home />);
    const internal = Array.from(container.querySelectorAll('a[href^="/"]')).map(
      (a) => a.getAttribute("href")
    );
    expect(internal).toContain("/divisions/sja-ai");
    expect(internal).toContain("/divisions/sja-autonomous");
    expect(internal).not.toContain("/divisions/sja-tech");
  });
});
