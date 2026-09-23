import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import ProductShowcase from "@/components/ProductShowcase";

describe("<ProductShowcase />", () => {
  it("leads with MOUS as the main product with demo and pricing buttons", () => {
    render(<ProductShowcase />);
    const card = screen.getByRole("heading", { name: "MOUS" }).closest("article")!;
    expect(within(card).getByText("Give your business a voice")).toBeInTheDocument();
    expect(within(card).getByText("Main product")).toBeInTheDocument();
    expect(within(card).getByRole("link", { name: "Try Demo" })).toHaveAttribute("href", "https://robotics.sjapathway.com/mous/?demo=1");
    expect(within(card).getByRole("link", { name: "View Pricing" })).toHaveAttribute("href", "https://robotics.sjapathway.com/mous/pricing");
  });

  it("presents Fari as the core AI engine", () => {
    render(<ProductShowcase />);
    const card = screen.getByRole("heading", { name: "Fari" }).closest("article")!;
    expect(within(card).getByText("Our core AI engine")).toBeInTheDocument();
    expect(within(card).getByText("Powers MOUS today. Powers Atiana tomorrow.")).toBeInTheDocument();
    expect(within(card).getByRole("link", { name: "Try Fari" })).toHaveAttribute("href", "https://robotics.sjapathway.com/fari/");
  });

  it.each([
    ["Atiana", "AI assistant robot", "In Development", "/products/atiana"],
    ["SAM", "Smart home & security", "Coming 2027", "/divisions/sja-ai"],
    ["Sueen", "Logistics automation", "Coming 2027", "/products/sueen"],
  ])("lists %s as coming soon", (name, tagline, status, href) => {
    render(<ProductShowcase />);
    const link = screen.getByRole("heading", { name }).closest("a")!;
    expect(link).toHaveAttribute("href", href);
    expect(link).toHaveTextContent(tagline);
    expect(link).toHaveTextContent(status);
  });

  it("offers early access to the first 10 businesses", () => {
    render(<ProductShowcase />);
    expect(screen.getByText(/First 10 businesses get MOUS free for 3 months/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Set up now →" })).toHaveAttribute("href", "https://robotics.sjapathway.com/mous/#setup");
    expect(screen.getByRole("button", { name: "Join Waitlist" })).toBeInTheDocument();
  });
});
