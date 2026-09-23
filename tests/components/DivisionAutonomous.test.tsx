import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import DivisionAutonomous from "@/components/DivisionAutonomous";

function productCard(name: string) {
  return screen
    .getByRole("heading", { level: 3, name })
    .closest("div.rounded-2xl") as HTMLElement;
}

describe("<DivisionAutonomous />", () => {
  it("is the #sja-autonomous section with its division header", () => {
    const { container } = render(<DivisionAutonomous />);
    expect(container.querySelector("section")).toHaveAttribute(
      "id",
      "sja-autonomous"
    );
    expect(screen.getByText("DIVISION 03")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "SJA Autonomous"
    );
    expect(screen.getByText("Physical Robots & Drones")).toBeInTheDocument();
  });

  describe("Atiana", () => {
    it("is the flagship, in development, with its full form", () => {
      render(<DivisionAutonomous />);
      const c = productCard("Atiana Robot");
      expect(within(c).getByText("FLAGSHIP")).toBeInTheDocument();
      expect(within(c).getByText("IN DEVELOPMENT")).toBeInTheDocument();
      expect(
        within(c).getByText(
          /Automated Technology for Intelligent Assistance, Navigation, and\s+Action/
        )
      ).toBeInTheDocument();
    });

    it("lists all six features", () => {
      render(<DivisionAutonomous />);
      const c = productCard("Atiana Robot");
      for (const f of [
        "Household Assistance",
        "Medical Expertise",
        "Combat and Security",
        "Flight and Mobility",
        "Fire Resistance",
        "Self-Charging",
      ]) {
        expect(within(c).getByText(f)).toBeInTheDocument();
      }
    });

    it("links to its demo and product page", () => {
      render(<DivisionAutonomous />);
      const c = productCard("Atiana Robot");
      const demo = within(c).getByRole("link", { name: "TRY DEMO" });
      expect(demo).toHaveAttribute("href", "https://robotics.sjapathway.com/atiana/");
      expect(demo).toHaveAttribute("target", "_blank");
      expect(demo).toHaveAttribute("rel", "noopener noreferrer");
      expect(within(c).getByRole("link", { name: /Learn More/ })).toHaveAttribute(
        "href",
        "/products/atiana"
      );
    });

    it.each([
      ["Atiana-H", "for Healthcare"],
      ["Atiana-S", "for Security"],
      ["Atiana-R", "for Rescue"],
    ])("shows the %s variant %s", (name, purpose) => {
      render(<DivisionAutonomous />);
      const h = screen.getByRole("heading", { level: 5, name });
      expect(h.nextElementSibling).toHaveTextContent(purpose);
    });
  });

  describe("Sueen", () => {
    it("is featured, in development, with its full form and subtitle", () => {
      render(<DivisionAutonomous />);
      const c = productCard("Sueen");
      expect(within(c).getByText("FEATURED")).toBeInTheDocument();
      expect(within(c).getByText("IN DEVELOPMENT")).toBeInTheDocument();
      expect(within(c).getByText("Next Generation Helper")).toBeInTheDocument();
      expect(
        within(c).getByText("Smart Utility Efficient Errand Navigator")
      ).toBeInTheDocument();
    });

    it("lists all six features", () => {
      render(<DivisionAutonomous />);
      const c = productCard("Sueen");
      for (const f of [
        "Intelligent Navigation",
        "Object Recognition & Handling",
        "Face & Voice Recognition",
        "Voice Integration",
        "Safety & Stability",
        "Energy Efficiency",
      ]) {
        expect(within(c).getByText(f)).toBeInTheDocument();
      }
    });

    it("links to its demo and product page", () => {
      render(<DivisionAutonomous />);
      const c = productCard("Sueen");
      const demo = within(c).getByRole("link", { name: "TRY DEMO" });
      expect(demo).toHaveAttribute("href", "https://robotics.sjapathway.com/sueen/");
      expect(demo).toHaveAttribute("target", "_blank");
      expect(within(c).getByRole("link", { name: /Learn More/ })).toHaveAttribute(
        "href",
        "/products/sueen"
      );
    });
  });

  it("lists the three brand name candidates", () => {
    render(<DivisionAutonomous />);
    const c = productCard("Company Branding");
    for (const name of [
      "SJA Robotics",
      "Atiana Robotics Corporation (ARC)",
      "Synergy Robotics Innovations",
    ]) {
      expect(within(c).getByText(name)).toBeInTheDocument();
    }
  });

  it("offers a Join Waitlist button", () => {
    render(<DivisionAutonomous />);
    expect(screen.getByRole("button", { name: /Join Waitlist/ })).toBeInTheDocument();
  });

  it("contains exactly these links", () => {
    const { container } = render(<DivisionAutonomous />);
    expect(
      Array.from(container.querySelectorAll("a")).map((a) => a.getAttribute("href"))
    ).toEqual([
      "https://robotics.sjapathway.com/atiana/",
      "/products/atiana",
      "https://robotics.sjapathway.com/sueen/",
      "/products/sueen",
    ]);
  });
});
