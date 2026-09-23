import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Fari from "@/components/Fari";

const CHECK = 'path[d="M5 13l4 4L19 7"]';
const CLOCK = 'path[d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"]';

describe("<Fari />", () => {
  it("renders the product header", () => {
    render(<Fari />);
    expect(screen.getByText("Product 02")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("FARI");
    expect(
      screen.getByText("Futuristic Artificial Reasoning Intelligence")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Every Kind of Help. One Companion. Your Life.")
    ).toBeInTheDocument();
    expect(screen.getByText("COMING SOON")).toBeInTheDocument();
  });

  it("uses defensible headline copy (no superlatives or rival claims)", () => {
    const { container } = render(<Fari />);
    expect(
      screen.getByRole("heading", { level: 3, name: "One Companion for Every Kind of Help" })
    ).toBeInTheDocument();
    const text = container.textContent!;
    expect(text).not.toMatch(/Ever Built/);
    expect(text).not.toMatch(/better than all of them/);
    expect(text).not.toMatch(/remembers you forever/);
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

  it("shows the routing architecture with six live routes", () => {
    render(<Fari />);
    expect(screen.getByText("INTELLIGENT ROUTING ENGINE")).toBeInTheDocument();
    expect(screen.getByText("USER-FACING COMPANION")).toBeInTheDocument();
    for (const [name, role] of [
      ["Coding", "Code, debugging, technical"],
      ["Reasoning", "Analysis, maths, planning"],
      ["Creative", "Writing, ideas, storytelling"],
      ["Research", "Facts, explanations, study"],
      ["Multimodal", "Images & PDFs you share"],
      ["Conversation", "Everyday chat & support"],
    ]) {
      const roleEl = screen.getByText(role);
      expect(roleEl.previousElementSibling).toHaveTextContent(name);
    }
  });

  it("marks open models as live and other providers as planned", () => {
    render(<Fari />);
    const today = screen.getByText("Today: efficient open models").parentElement!;
    expect(within(today).getByText("Live")).toBeInTheDocument();
    const roadmap = screen.getByText("Roadmap: more providers").closest("div.rounded-lg") as HTMLElement;
    expect(within(roadmap).getByText("Planned")).toBeInTheDocument();
    for (const p of ["Claude", "ChatGPT", "DeepSeek", "Gemini", "ElevenLabs voice"]) {
      expect(within(roadmap).getByText(p)).toBeInTheDocument();
    }
  });

  it("lists the Custom SJA Layer features with their status", () => {
    render(<Fari />);
    const layer = screen.getByText("Custom SJA Layer").closest("div.rounded-xl") as HTMLElement;
    for (const [f, status] of [
      ["Permanent Memory", "Live"],
      ["5 Specialized Modes", "Live"],
      ["Arabic-first Language", "Live"],
      ["Personality Engine", "Live"],
      ["Privacy & Data Ownership", "Live"],
      ["Atiana Integration", "Planned"],
    ]) {
      const el = within(layer).getByText(f);
      expect(el.parentElement).toHaveTextContent(status);
    }
  });

  describe("live vs. next table", () => {
    it("has Feature, What it does and Status columns", () => {
      render(<Fari />);
      expect(
        screen.getByRole("heading", { level: 3, name: "What's Live vs. What's Next" })
      ).toBeInTheDocument();
      expect(
        within(screen.getByRole("table"))
          .getAllByRole("columnheader")
          .map((th) => th.textContent)
      ).toEqual(["Feature", "What it does", "Status"]);
    });

    it("no longer names rival products as columns", () => {
      render(<Fari />);
      const headers = within(screen.getByRole("table"))
        .getAllByRole("columnheader")
        .map((th) => th.textContent);
      for (const rival of ["Claude", "ChatGPT", "DeepSeek"]) {
        expect(headers).not.toContain(rival);
      }
    });

    it.each([
      ["Smart routing", "Live"],
      ["5 specialized modes", "Live"],
      ["Permanent memory + task list", "Live"],
      ["Arabic-first", "Live"],
      ["Voice + Chat", "Live"],
      ["Images & PDFs", "Live"],
      ["Triage, scam checks & drafts", "Live"],
      ["Emergency contacts & location", "Live"],
      ["Your style & mood journal", "Live"],
      ["Reminders & notifications", "Planned"],
      ["Real-time web search", "Planned"],
      ["Additional AI providers", "Planned"],
      ["Natural neural voice", "Planned"],
      ["Actions on your behalf", "Planned"],
      ["Smart home & cameras", "Planned"],
      ["Automatic emergency alerts", "Planned"],
      ["Powers a robot", "Planned"],
    ])("row '%s' is marked %s", (feature, status) => {
      render(<Fari />);
      const row = within(screen.getByRole("table"))
        .getByRole("cell", { name: feature })
        .parentElement!;
      const cells = row.querySelectorAll("td");
      expect(cells).toHaveLength(3);
      expect(cells[1].textContent!.length).toBeGreaterThan(0);
      expect(cells[2].querySelector("[data-status]")).toHaveTextContent(status);
    });
  });

  it.each([
    ["Health Mode", "Your personal health Rafiq"],
    ["Security Mode", "Home-safety guidance, on call"],
    ["Assistant Mode", "Your organised right hand"],
    ["Emergency Mode", "Stays calm so you don't have to"],
    ["Companion Mode", "Your Rafiq — just talk"],
  ])("describes %s", (mode, tagline) => {
    render(<Fari />);
    const h = screen.getByRole("heading", { level: 4, name: mode });
    expect(h.nextElementSibling).toHaveTextContent(tagline);
    const card = h.closest("div.rounded-xl") as HTMLElement;
    expect(within(card).getAllByRole("listitem")).toHaveLength(4);
  });

  it.each([
    ["Health Mode", ["Connecting you with doctors"]],
    ["Security Mode", [
      "Real-time alerts for unusual activity",
      "Camera & sensor integration",
    ]],
    ["Assistant Mode", [
      "Reminders & push notifications",
      "Ordering online & sending emails for you",
    ]],
    ["Emergency Mode", ["Contacting emergency services automatically"]],
    ["Companion Mode", []],
  ])("marks only the not-yet-built %s features as Planned", (mode, planned) => {
    render(<Fari />);
    const card = screen
      .getByRole("heading", { level: 4, name: mode })
      .closest("div.rounded-xl") as HTMLElement;
    for (const li of within(card).getAllByRole("listitem")) {
      const isPlanned = planned.some((p) => li.textContent!.startsWith(p));
      if (isPlanned) {
        expect(li.querySelector("[data-status]")).toHaveTextContent("Planned");
        expect(li.querySelector(CLOCK)).toBeTruthy();
      } else {
        expect(li.querySelector("[data-status]")).toBeNull();
        expect(li.querySelector(CHECK)).toBeTruthy();
      }
    }
    expect(within(card).queryAllByText("Planned")).toHaveLength(planned.length);
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
      "Will power Atiana",
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

  it("shows the four forms Fari powers, with only devices live", () => {
    render(<Fari />);
    for (const [f, status] of [
      ["Fari on Your Devices", "Live"],
      ["Fari inside Atiana", "Planned"],
      ["Fari inside Sueen", "Planned"],
      ["SAM — Smart Automated Manager", "Planned"],
    ]) {
      const h = screen.getByRole("heading", { level: 4, name: f });
      const card = h.parentElement!;
      expect(card.querySelector("[data-status]")).toHaveTextContent(status);
    }
  });

  it("has two waitlist buttons and a demo link", () => {
    render(<Fari />);
    expect(screen.getAllByRole("button", { name: /Join Waitlist/ })).toHaveLength(2);
    const demo = screen.getByRole("link", { name: /Try Demo/ });
    expect(demo).toHaveAttribute("href", "https://robotics.sjapathway.com/fari/");
    expect(demo).toHaveAttribute("target", "_blank");
    expect(demo).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.getAllByRole("link")).toHaveLength(1);
  });
});
