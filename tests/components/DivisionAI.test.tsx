import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import DivisionAI from "@/components/DivisionAI";

describe("<DivisionAI />", () => {
  it("is the #sja-ai wrapper with its division header", () => {
    const { container } = render(<DivisionAI />);
    expect(container.firstElementChild).toHaveAttribute("id", "sja-ai");
    expect(screen.getByText("DIVISION 02")).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", { level: 2 })[0]
    ).toHaveTextContent("SJA AI");
  });

  it("lists the three products in the directory", () => {
    render(<DivisionAI />);
    const directory = screen
      .getByRole("heading", { name: "Products Under SJA AI" })
      .parentElement!;
    for (const [name, tagline] of [
      ["MOUS", "Multilingual Omnipresent Unified System"],
      ["Fari", "Futuristic Artificial Reasoning Intelligence"],
      ["SAM", "Smart Automated Manager"],
    ]) {
      expect(within(directory).getByText(name)).toBeInTheDocument();
      expect(within(directory).getByText(tagline)).toBeInTheDocument();
    }
    expect(within(directory).getAllByText("COMING SOON")).toHaveLength(3);
  });

  it("renders the MOUS product section", () => {
    render(<DivisionAI />);
    expect(screen.getByText("Product 01")).toBeInTheDocument();
    expect(screen.getByText("MOUS — Give Your Business a Voice")).toBeInTheDocument();
  });

  it.each([
    ["Restaurant", "AI takes reservations by phone"],
    ["Clinic", "AI books appointments"],
    ["Real Estate", "AI answers property enquiries 24/7"],
    ["E-commerce", "AI handles customer support calls"],
  ])("lists the %s MOUS use case", (industry, description) => {
    render(<DivisionAI />);
    const h = screen.getByRole("heading", { level: 4, name: industry });
    expect(h.nextElementSibling).toHaveTextContent(description);
  });

  it("lists the MOUS key features", () => {
    render(<DivisionAI />);
    for (const f of [
      "Custom voice",
      "Custom personality",
      "Multiple languages",
      "24/7 availability",
      "Call analytics dashboard",
    ]) {
      expect(screen.getByText(f)).toBeInTheDocument();
    }
  });

  it.each([
    ["Starter", "$99", "/month"],
    ["Business", "$199", "/month"],
    ["Enterprise", "Custom", ""],
  ])("prices the MOUS %s plan", (name, price, period) => {
    render(<DivisionAI />);
    const card = screen.getByText(name, { selector: "p" }).parentElement!;
    expect(card).toHaveTextContent(price + period);
  });

  it("composes MOUS features, Fari, SAM and the Gen Z section", () => {
    render(<DivisionAI />);
    expect(screen.getByText("What Makes MOUS Different")).toBeInTheDocument();
    expect(screen.getByText("Product 02")).toBeInTheDocument();
    expect(screen.getByText("Product 03")).toBeInTheDocument();
    expect(screen.getByText("Why Gen Z Loves SAM")).toBeInTheDocument();
  });

  it("orders the products MOUS -> Fari -> SAM", () => {
    const { container } = render(<DivisionAI />);
    const text = container.textContent!;
    expect(text.indexOf("Product 01")).toBeLessThan(text.indexOf("Product 02"));
    expect(text.indexOf("Product 02")).toBeLessThan(text.indexOf("Product 03"));
  });

  it("links every Try Demo to the right product demo", () => {
    render(<DivisionAI />);
    const demos = screen
      .getAllByRole("link", { name: /Try Demo/ })
      .map((a) => a.getAttribute("href"));
    expect(demos).toEqual([
      "https://mous.sja-affu765.workers.dev/", // MOUS pricing CTA
      "https://mous.sja-affu765.workers.dev/", // MousFeatures CTA
      "https://fari.sja-affu765.workers.dev/", // Fari CTA
      "https://sam.sja-affu765.workers.dev/", // SAM CTA
      "https://sam.sja-affu765.workers.dev/", // SAM Gen Z CTA
    ]);
  });

  it("opens every external link in a new tab safely", () => {
    const { container } = render(<DivisionAI />);
    const external = Array.from(container.querySelectorAll("a"));
    expect(external.length).toBeGreaterThan(0);
    for (const a of external) {
      expect(a.getAttribute("href")).toMatch(/^https:\/\//);
      expect(a).toHaveAttribute("target", "_blank");
      expect(a).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
