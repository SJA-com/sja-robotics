import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Footer from "@/components/Footer";
import { divisions } from "@/data/products";

describe("<Footer />", () => {
  afterEach(() => vi.useRealTimers());

  it("is the #contact anchor target", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("footer")).toHaveAttribute("id", "contact");
  });

  it("shows the brand logo and tagline", () => {
    render(<Footer />);
    expect(screen.getByAltText("SJA Robotics")).toHaveAttribute(
      "src",
      "/sja-robotics-logo-dark.png"
    );
    expect(
      screen.getByText(
        "Empowering everyday life through intelligent, automated solutions."
      )
    ).toBeInTheDocument();
  });

  it("renders the three link columns in order", () => {
    render(<Footer />);
    const headings = screen
      .getAllByRole("heading", { level: 4 })
      .map((h) => h.textContent);
    expect(headings).toEqual(["SJA AI", "SJA Autonomous", "Company"]);
  });

  it.each([
    [
      "SJA AI",
      [
        ["MOUS", "/divisions/sja-ai/#mous"],
        ["Fari", "/divisions/sja-ai/#fari"],
        ["SAM", "/divisions/sja-ai/#sam"],
      ],
    ],
    [
      "SJA Autonomous",
      [
        ["Atiana Robot", "/products/atiana/"],
        ["Sueen Drone", "/products/sueen/"],
      ],
    ],
    [
      "Company",
      [
        ["About", "/#about"],
        ["All Products", "/products/"],
        ["Divisions", "/#divisions"],
        ["Careers", "#contact"],
        ["Contact", "#contact"],
        ["LinkedIn", "https://www.linkedin.com/company/sjarobotics"],
      ],
    ],
  ])("'%s' column links", (title, expected) => {
    render(<Footer />);
    const column = screen.getByRole("heading", { name: title }).parentElement!;
    const links = within(column)
      .getAllByRole("link")
      .map((a) => [a.textContent, a.getAttribute("href")]);
    expect(links).toEqual(expected);
  });

  it("opens the LinkedIn page in a new tab", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: "LinkedIn" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("builds its product columns from the shared product data", () => {
    render(<Footer />);
    for (const d of divisions) {
      const column = screen.getByRole("heading", { name: d.name }).parentElement!;
      expect(within(column).getAllByRole("link").map((a) => a.getAttribute("href"))).toEqual(
        d.products.map((p) => p.href)
      );
    }
  });

  it("does not link to the disabled SJA Tech products", () => {
    const { container } = render(<Footer />);
    for (const slug of ["weighing-scale", "smart-bell", "smart-kitchen", "home-security", "health-monitoring"]) {
      expect(container.querySelector(`a[href*="${slug}"]`)).toBeNull();
    }
    expect(screen.queryByText("SJA Tech")).toBeNull();
  });

  it("shows the current year in the copyright line", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2031-06-01T00:00:00Z"));
    render(<Footer />);
    expect(
      screen.getByText(/© 2031 SJA Robotics\. All rights reserved\./)
    ).toBeInTheDocument();
  });

  it("shows the site's real domain", () => {
    render(<Footer />);
    expect(screen.getByText("robotics.sjapathway.com")).toBeInTheDocument();
    expect(screen.queryByText("robotics.sja.com")).toBeNull();
  });

  it("credits the founder", () => {
    render(<Footer />);
    expect(
      screen.getByText("Founded by Syeda Juveria Afreen")
    ).toBeInTheDocument();
  });
});
