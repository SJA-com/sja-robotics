import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("<Hero />", () => {
  it("renders the main headline as the page h1", () => {
    render(<Hero />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent(
      /Empowering\s*Everyday Life\s*Through Automation/
    );
  });

  it("shows the badge, logo and subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByText("Pioneering the Future of Robotics")
    ).toBeInTheDocument();
    expect(screen.getByAltText("SJA Robotics")).toHaveAttribute(
      "src",
      "/sja-robotics-logo-dark.png"
    );
    expect(
      screen.getByText(/integrates AI and automation into everyday devices/)
    ).toBeInTheDocument();
  });

  it("links the CTAs to the in-page sections", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: "Explore Products" })
    ).toHaveAttribute("href", "#divisions");
    expect(screen.getByRole("link", { name: "Learn More" })).toHaveAttribute(
      "href",
      "#about"
    );
  });

  it("has exactly the two CTA links", () => {
    render(<Hero />);
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
