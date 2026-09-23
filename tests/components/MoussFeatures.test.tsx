import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import MousFeatures from "@/components/MoussFeatures";

describe("<MousFeatures />", () => {
  it("renders the header", () => {
    render(<MousFeatures />);
    expect(screen.getByText("What Makes MOUS Different")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "MOUS — Built for the Arab World. Built for Everyone."
    );
  });

  it("lists the six unique features", () => {
    render(<MousFeatures />);
    expect(
      screen.getAllByRole("heading", { level: 4 }).map((h) => h.textContent)
    ).toEqual([
      "Dialect Intelligence",
      "Cultural Intelligence",
      "Emotion Detection",
      "WhatsApp + Voice Combined",
      "Arabic + English Document Intelligence",
      "Business Personality Modes",
    ]);
  });

  it.each([
    ["Dialect Intelligence", "Live in demo"],
    ["Cultural Intelligence", "Live in demo"],
    ["Emotion Detection", "Live in demo"],
    ["WhatsApp + Voice Combined", "In development"],
    ["Arabic + English Document Intelligence", "Live in demo"],
    ["Business Personality Modes", "Live in demo"],
  ])("marks the %s feature as %s", (name, status) => {
    render(<MousFeatures />);
    const card = screen.getByRole("heading", { level: 4, name }).parentElement!;
    expect(card.querySelector("[data-status]")).toHaveTextContent(status);
  });

  it("avoids unverifiable 'world first' claims", () => {
    const { container } = render(<MousFeatures />);
    const text = container.textContent!;
    expect(text).not.toMatch(/world's first|nobody in the world|first voice agent/i);
  });

  it("lists the three core pillars with their status", () => {
    render(<MousFeatures />);
    expect(
      screen.getByRole("heading", { level: 3, name: "Three things MOUS is built around" })
    ).toBeInTheDocument();
    for (const [t, status] of [
      ["Cultural intelligence for both Muslim and Christian businesses", "Live in demo"],
      ["WhatsApp + voice in one agent", "In development"],
      ["Arabic + English document reading", "Live in demo"],
    ]) {
      const el = screen.getByText(t);
      expect(el.parentElement!.querySelector("[data-status]")).toHaveTextContent(status);
    }
  });

  describe("live vs. next table", () => {
    it("has Feature, What it does and Status columns (no competitor columns)", () => {
      render(<MousFeatures />);
      expect(
        screen.getByRole("heading", { level: 3, name: "What's Live vs. What's Next" })
      ).toBeInTheDocument();
      const headers = within(screen.getByRole("table"))
        .getAllByRole("columnheader")
        .map((th) => th.textContent);
      expect(headers).toEqual(["Feature", "What it does", "Status"]);
      for (const rival of ["Bland.ai", "Vapi.ai", "Retell AI"]) {
        expect(headers).not.toContain(rival);
      }
    });

    it("lists every feature with an honest status", () => {
      render(<MousFeatures />);
      const rows = within(screen.getByRole("table")).getAllByRole("row").slice(1);
      expect(
        rows.map((r) => {
          const cells = r.querySelectorAll("td");
          return [cells[0].textContent, cells[2].textContent];
        })
      ).toEqual([
        ["No-code business setup", "Live in demo"],
        ["Business personality modes", "Live in demo"],
        ["Arabic dialects", "Live in demo"],
        ["Cultural settings", "Live in demo"],
        ["Emotion detection", "Live in demo"],
        ["Bookings & appointments", "Live in demo"],
        ["Arabic + English documents", "Live in demo"],
        ["Voice", "Live in demo"],
        ["Call analytics dashboard", "Live in demo"],
        ["Opening hours", "Live in demo"],
        ["Customer link & website widget", "Live in demo"],
        ["Menu & price-list import", "Live in demo"],
        ["Conversation summaries", "Live in demo"],
        ["WhatsApp", "In development"],
        ["Real phone numbers", "Planned"],
        ["Custom cloned voices", "Planned"],
        ["Shared memory across channels", "Planned"],
      ]);
      for (const row of rows) {
        expect(row.querySelectorAll("td")[1].textContent!.length).toBeGreaterThan(0);
      }
    });

    it("explains the WhatsApp status in the table", () => {
      render(<MousFeatures />);
      const row = screen.getByRole("cell", { name: "WhatsApp" }).parentElement!;
      expect(row).toHaveTextContent("not yet connected to a live number");
    });
  });

  it("has a waitlist button and a demo link", () => {
    render(<MousFeatures />);
    expect(screen.getByRole("button", { name: /Join Waitlist/ })).toBeInTheDocument();
    const demo = screen.getByRole("link", { name: /Try Demo/ });
    expect(demo).toHaveAttribute("href", "https://robotics.sjapathway.com/mous/");
    expect(demo).toHaveAttribute("target", "_blank");
    expect(demo).toHaveAttribute("rel", "noopener noreferrer");
  });
});
