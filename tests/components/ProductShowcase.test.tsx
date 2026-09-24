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

  it("points to the full lineup instead of repeating the other products", () => {
    render(<ProductShowcase />);
    const link = screen.getByRole("link", { name: /Browse all products/ });
    expect(link.getAttribute("href")).toMatch(/^\/products\/?$/);
    // Only MOUS and Fari are showcased on the home page; the rest live on /products/.
    expect(screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent)).toEqual(["MOUS", "Fari"]);
    for (const name of ["SAM", "Atiana", "Sueen"]) {
      expect(screen.queryByRole("heading", { name })).toBeNull();
    }
  });

  it("offers early access to the first 10 businesses", () => {
    render(<ProductShowcase />);
    expect(screen.getByText(/First 10 businesses get MOUS free for 3 months/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Set up now →" })).toHaveAttribute("href", "https://robotics.sjapathway.com/mous/#setup");
    expect(screen.getByRole("button", { name: "Join Waitlist" })).toBeInTheDocument();
  });
});
