import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Fari from "@/components/Fari";

const CHECK = 'path[d="M5 13l4 4L19 7"]';
const CROSS = 'path[d="M6 18L18 6M6 6l12 12"]';

describe("<Fari />", () => {
  it("renders the product header", () => {
    render(<Fari />);
    expect(screen.getByText("Product 02")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("FARI");
    expect(
      screen.getByText("Futuristic Artificial Reasoning Intelligence")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Every Intelligence. One Companion. Your Life.")
    ).toBeInTheDocument();
    expect(screen.getByText("COMING SOON")).toBeInTheDocument();
  });

  it("lists the four capabilities", () => {
    render(<Fari />);
    for (const cap of [
      "Reasoning & Analysis",
      "Coding & Technical",
      "Creative & Writing",
      "Knowledge & Research",
    ]) {
      expect(screen.getByRole("heading", { level: 4, name: cap })).toBeInTheDocument();
    }
  });

  it("shows the routing architecture with five AI providers", () => {
    render(<Fari />);
    expect(screen.getByText("INTELLIGENT ROUTING ENGINE")).toBeInTheDocument();
    expect(screen.getByText("USER-FACING COMPANION")).toBeInTheDocument();
    for (const [name, role] of [
      ["Claude", "Reasoning, Writing, Analysis"],
      ["ChatGPT", "General Knowledge, Conversation"],
      ["DeepSeek", "Coding, Technical, Math"],
      ["Gemini", "Multimodal, Search, Real-time"],
      ["ElevenLabs", "Voice Synthesis, Natural Speech"],
    ]) {
      const roleEl = screen.getByText(role);
      expect(roleEl.previousElementSibling).toHaveTextContent(name);
    }
  });

  it("lists the Custom SJA Layer features", () => {
    render(<Fari />);
    const layer = screen.getByText("Custom SJA Layer").closest("div.rounded-xl") as HTMLElement;
    for (const f of [
      "Permanent Memory",
      "5 Specialized Modes",
      "Arabic-first Language",
      "Personality Engine",
      "Privacy & Data Ownership",
      "Atiana Integration",
    ]) {
      expect(within(layer).getByText(f)).toBeInTheDocument();
    }
  });

  describe("comparison table", () => {
    it("has Claude, ChatGPT, DeepSeek and Fari columns", () => {
      render(<Fari />);
      expect(
        within(screen.getByRole("table"))
          .getAllByRole("columnheader")
          .map((th) => th.textContent)
      ).toEqual(["Feature", "Claude", "ChatGPT", "DeepSeek", "Fari"]);
    });

    it.each([
      ["Permanent Memory", ["Limited", "Limited", CROSS, "Forever"]],
      ["Arabic First", [CROSS, CROSS, CROSS, CHECK]],
      ["5 Specialized Modes", [CROSS, CROSS, CROSS, CHECK]],
      ["Voice + Chat", [CROSS, "Partial", CROSS, "Full"]],
      ["Powers a Robot", [CROSS, CROSS, CROSS, "Atiana"]],
      ["Culturally Aware", [CROSS, CROSS, CROSS, CHECK]],
      ["Truly Personal", [CROSS, CROSS, CROSS, CHECK]],
    ])("row '%s' renders the right values", (feature, expected) => {
      render(<Fari />);
      const row = within(screen.getByRole("table"))
        .getByRole("cell", { name: feature })
        .parentElement!;
      const cells = Array.from(row.querySelectorAll("td")).slice(1);
      expected.forEach((value, i) => {
        if (value === CHECK || value === CROSS) {
          expect(cells[i].querySelector(value)).toBeTruthy();
        } else {
          expect(cells[i]).toHaveTextContent(value);
          expect(cells[i].querySelector("svg")).toBeNull();
        }
      });
    });
  });

  it.each([
    ["Health Mode", "Your personal health Rafiq"],
    ["Security Mode", "Your home, always watched"],
    ["Assistant Mode", "Your digital errand runner"],
    ["Emergency Mode", "Stays calm so you don't have to"],
    ["Companion Mode", "Your Rafiq — just talk"],
  ])("describes %s", (mode, tagline) => {
    render(<Fari />);
    const h = screen.getByRole("heading", { level: 4, name: mode });
    expect(h.nextElementSibling).toHaveTextContent(tagline);
    const card = h.closest("div.rounded-xl") as HTMLElement;
    expect(within(card).getAllByRole("listitem")).toHaveLength(4);
  });

  it("lists the seven differentiators", () => {
    render(<Fari />);
    for (const d of [
      "Multilingual",
      "Permanent memory",
      "5 specialized modes",
      "Voice + Chat",
      "Built for the world",
      "Privacy first",
      "Powers Atiana",
    ]) {
      expect(screen.getAllByText(d).length).toBeGreaterThan(0);
    }
  });

  it.each([
    ["Personal", "$9.99", "/month"],
    ["Family", "$19.99", "/month"],
    ["Lifetime", "$299", "one-time"],
  ])("prices the %s plan at %s", (name, price, period) => {
    render(<Fari />);
    const card = screen.getByText(name, { selector: "p" }).parentElement!;
    expect(card).toHaveTextContent(price);
    expect(card).toHaveTextContent(period);
  });

  it("shows the four forms Fari powers", () => {
    render(<Fari />);
    for (const f of [
      "Fari on Your Devices",
      "Fari inside Atiana",
      "Fari inside Sueen",
      "SAM — Smart Automated Manager",
    ]) {
      expect(screen.getByRole("heading", { level: 4, name: f })).toBeInTheDocument();
    }
  });

  it("has two waitlist buttons and a demo link", () => {
    render(<Fari />);
    expect(screen.getAllByRole("button", { name: /Join Waitlist/ })).toHaveLength(2);
    const demo = screen.getByRole("link", { name: /Try Demo/ });
    expect(demo).toHaveAttribute("href", "https://fari.sja-affu765.workers.dev/");
    expect(demo).toHaveAttribute("target", "_blank");
    expect(demo).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.getAllByRole("link")).toHaveLength(1);
  });
});
