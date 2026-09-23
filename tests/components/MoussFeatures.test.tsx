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

  it("lists the three world firsts", () => {
    render(<MousFeatures />);
    for (const t of [
      "Cultural intelligence for both Muslim and Christian businesses",
      "WhatsApp + voice agent seamlessly combined",
      "Arabic + English document reading in real time",
    ]) {
      expect(screen.getByText(t)).toBeInTheDocument();
    }
  });

  describe("comparison table", () => {
    it("compares MOUS against Bland.ai, Vapi.ai and Retell AI", () => {
      render(<MousFeatures />);
      const table = screen.getByRole("table");
      expect(
        within(table)
          .getAllByRole("columnheader")
          .map((th) => th.textContent)
      ).toEqual(["Feature", "Bland.ai", "Vapi.ai", "Retell AI", "MOUS"]);
    });

    it("has eight feature rows where MOUS always has a check", () => {
      render(<MousFeatures />);
      const rows = within(screen.getByRole("table")).getAllByRole("row").slice(1);
      expect(rows.map((r) => r.querySelector("td")!.textContent)).toEqual([
        "Arabic Dialects",
        "Cultural Intelligence",
        "Emotion Detection",
        "WhatsApp + Voice",
        "Arabic + English Docs",
        "Muslim + Christian Aware",
        "Dialect Specific",
        "Arab World Focus",
      ]);
      for (const row of rows) {
        const mousCell = row.querySelectorAll("td")[4];
        expect(mousCell.querySelector('path[d="M5 13l4 4L19 7"]')).toBeTruthy();
      }
    });

    it("renders string values as text and false as a cross", () => {
      render(<MousFeatures />);
      const emotion = screen.getByRole("cell", { name: "Emotion Detection" })
        .parentElement!;
      const cells = emotion.querySelectorAll("td");
      expect(cells[1].querySelector('path[d="M6 18L18 6M6 6l12 12"]')).toBeTruthy();
      expect(cells[3]).toHaveTextContent("Partial");
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
