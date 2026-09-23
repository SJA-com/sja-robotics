import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("<Hero />", () => {
  it("renders the main headline as the page h1", () => {
    render(<Hero />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent(/AI products built\s*for the Arab world\./);
  });

  it("shows the badge, logo and subtitle", () => {
    render(<Hero />);
    expect(screen.getByText("AI · Voice · Robotics")).toBeInTheDocument();
    expect(screen.getByAltText("SJA Robotics")).toHaveAttribute("src", "/sja-robotics-logo-dark.png");
    expect(screen.getByText(/Voice agents that speak your customers/)).toBeInTheDocument();
  });

  it("sends visitors to the MOUS demo and the product showcase", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "Try the MOUS Demo" })).toHaveAttribute(
      "href",
      "https://robotics.sjapathway.com/mous/?demo=1"
    );
    expect(screen.getByRole("link", { name: "Explore Products" })).toHaveAttribute("href", "#products");
  });

  it("has exactly the two CTA links", () => {
    render(<Hero />);
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
