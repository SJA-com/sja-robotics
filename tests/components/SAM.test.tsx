import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SAM from "@/components/SAM";

describe("<SAM />", () => {
  it("renders the product header", () => {
    render(<SAM />);
    expect(screen.getByText("Product 03")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("SAM");
    expect(screen.getByText("Smart Automated Manager")).toBeInTheDocument();
    expect(screen.getByText("SAM — So you don't have to.")).toBeInTheDocument();
    expect(screen.getByText("COMING SOON")).toBeInTheDocument();
    expect(screen.getByText("BETTER TOGETHER WITH SUEEN")).toBeInTheDocument();
  });

  it("lists all six features", () => {
    render(<SAM />);
    expect(
      screen.getAllByRole("heading", { level: 5 }).map((h) => h.textContent)
    ).toEqual([
      "Smart Home Control",
      "Auto Ordering",
      "Sleep Optimization",
      "Life Management",
      "Zero Effort Living",
      "Works with Sueen",
    ]);
  });

  it.each([
    ["Basic", "$4.99", "Smart home control + voice commands"],
    ["Pro", "$14.99", "Everything including auto ordering + sleep optimization"],
    ["Ultimate", "$29.99", "Full life management + Sueen integration"],
  ])("prices the %s plan at %s/month", (name, price, desc) => {
    render(<SAM />);
    const card = screen.getByText(name).parentElement!;
    expect(card).toHaveTextContent(`${price}/month`);
    expect(card).toHaveTextContent(desc);
  });

  it("highlights the Pro plan", () => {
    render(<SAM />);
    expect(screen.getByText("Pro").parentElement!.className).toContain(
      "gradient-border"
    );
    expect(screen.getByText("Basic").parentElement!.className).not.toContain(
      "gradient-border"
    );
  });

  it("has a waitlist button and a demo link", () => {
    render(<SAM />);
    expect(screen.getByRole("button", { name: "Join Waitlist" })).toBeInTheDocument();
    const demo = screen.getByRole("link", { name: "Try Demo" });
    expect(demo).toHaveAttribute("href", "https://sam.sja-affu765.workers.dev/");
    expect(demo).toHaveAttribute("target", "_blank");
    expect(demo).toHaveAttribute("rel", "noopener noreferrer");
  });
});
