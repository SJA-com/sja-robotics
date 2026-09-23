import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SAMGenZ from "@/components/SAMGenZ";

describe("<SAMGenZ />", () => {
  it("renders the header", () => {
    render(<SAMGenZ />);
    expect(screen.getByText("Why Gen Z Loves SAM")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Finally. An AI That Gets It."
    );
  });

  it("renders the six Gen Z feature cards", () => {
    render(<SAMGenZ />);
    expect(
      screen.getAllByRole("heading", { level: 4 }).map((h) => h.textContent)
    ).toEqual([
      "Built for People Who Love Sleep",
      "Zero Screen Time Required",
      "Auto Pilot Your Life",
      "Your Home. Your Rules.",
      "Works With Sueen",
      "Actually Affordable",
    ]);
  });

  it("keeps the 'Actually Affordable' price in sync with SAM Basic ($4.99)", () => {
    render(<SAMGenZ />);
    expect(screen.getByText(/Starting at \$4\.99\/month/)).toBeInTheDocument();
  });

  it.each([
    ["It's 2am and you're hungry", "SAM order me food"],
    ["Room is freezing but blanket is too comfortable", "SAM make it warmer"],
    ["Alarm goes off but you're not ready", "SAM 10 more minutes"],
    ["Running out of essentials", "SAM I need stuff"],
  ])("shows the '%s' scenario", (situation, you) => {
    render(<SAMGenZ />);
    expect(screen.getByText(situation)).toBeInTheDocument();
    expect(screen.getByText(`“${you}”`)).toBeInTheDocument();
  });

  it("labels each scenario with YOU and SAM speakers", () => {
    render(<SAMGenZ />);
    expect(screen.getAllByText("YOU")).toHaveLength(4);
    expect(screen.getAllByText("SAM")).toHaveLength(4);
  });

  it("has a waitlist button and a demo link", () => {
    render(<SAMGenZ />);
    expect(screen.getByRole("button", { name: /Join Waitlist/ })).toBeInTheDocument();
    const demo = screen.getByRole("link", { name: /Try Demo/ });
    expect(demo).toHaveAttribute("href", "https://robotics.sjapathway.com/sam/");
    expect(demo).toHaveAttribute("target", "_blank");
    expect(demo).toHaveAttribute("rel", "noopener noreferrer");
  });
});
