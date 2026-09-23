import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Footer from "@/components/Footer";

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
        ["Fari", "/divisions/sja-ai"],
        ["MOUS", "/divisions/sja-ai"],
        ["SAM", "/divisions/sja-ai"],
      ],
    ],
    [
      "SJA Autonomous",
      [
        ["Atiana Robot", "/divisions/sja-autonomous"],
        ["Sueen Drone", "/divisions/sja-autonomous"],
      ],
    ],
    [
      "Company",
      [
        ["About", "#about"],
        ["Divisions", "#divisions"],
        ["Careers", "#contact"],
        ["Contact", "#contact"],
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

  it("does not link to the disabled SJA Tech products", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('a[href^="/products/"]')).toBeNull();
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

  it("credits the founder", () => {
    render(<Footer />);
    expect(
      screen.getByText("Founded by Syeda Juveria Afreen")
    ).toBeInTheDocument();
  });
});
