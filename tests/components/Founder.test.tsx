import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import fs from "node:fs";
import path from "node:path";
import Founder, {
  FOUNDER_PHOTO,
  FOUNDER_PHOTO_ALT,
  education,
  experience,
  founderLinks,
} from "@/components/Founder";

describe("<Founder />", () => {
  it("is the #founder anchor target, labelled by its heading", () => {
    const { container } = render(<Founder />);
    const section = container.querySelector("section")!;
    expect(section).toHaveAttribute("id", "founder");
    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toHaveTextContent("Meet the Founder");
    expect(section).toHaveAttribute("aria-labelledby", h2.id);
  });

  it("shows the founder photo with descriptive alt text, served from /public", () => {
    render(<Founder />);
    const img = screen.getByAltText(FOUNDER_PHOTO_ALT);
    expect(FOUNDER_PHOTO_ALT).toBe("Syeda Juveria Afreen, Founder of SJA Robotics");
    expect(img.getAttribute("src")).toContain("sja-founder.jpeg");
    expect(fs.existsSync(path.join(process.cwd(), "public", FOUNDER_PHOTO))).toBe(true);
  });

  it("introduces her as the founder of SJA Robotics", () => {
    const { container } = render(<Founder />);
    expect(container).toHaveTextContent(/I.m Syeda Juveria Afreen, founder of SJA Robotics/);
    expect(screen.getByText("Founder · SJA Robotics")).toBeInTheDocument();
  });

  it("keeps the same facts as the SJA Pathway founder section", () => {
    const { container } = render(<Founder />);
    const text = container.textContent!;
    expect(text).toMatch(/Master of Computer Applications \(MCA\)/);
    expect(text).toMatch(/pursuing a Master of Engineering in\s+Robotics/);
    expect(text).toMatch(/over 5 years of experience in the IT industry/);
    expect(text).toMatch(/USA, France, Australia and the UK/);
    expect(text).toMatch(/Today I lead SJA Inc\. full time as Founder & CEO, building all three companies/);
    expect(text).toMatch(/Product &\s+Engineering Lead at map\.ca \(Nov 2025 – Mar 2026\)/);
    expect(text).not.toMatch(/Currently, I serve/);
    for (const role of ["Tech Support Engineer", "Senior Software Engineer", "Lead Software Engineer", "CTO"]) {
      expect(text).toContain(role);
    }
    const also = within(screen.getByRole("list", { name: "Also a" })).getAllByRole("listitem");
    expect(also.map((li) => li.textContent)).toEqual(["Game Developer", "Content Writer", "Content Creator"]);
  });

  it("lists the education entries with their status", () => {
    render(<Founder />);
    const heading = screen.getByRole("heading", { level: 3, name: "Education" });
    const card = heading.parentElement!;
    const items = within(card.querySelector("ol")!).getAllByRole("listitem");
    expect(items).toHaveLength(education.length);
    expect(items[0]).toHaveTextContent("Master of Engineering (MEng) in Robotics");
    expect(items[0]).toHaveTextContent("In progress");
    expect(items[1]).toHaveTextContent("Master of Computer Applications (MCA)");
    expect(items[1]).toHaveTextContent("Completed");
  });

  it("lists the experience entries", () => {
    render(<Founder />);
    const heading = screen.getByRole("heading", { level: 3, name: "Experience" });
    const items = within(heading.parentElement!).getAllByRole("listitem");
    expect(items.map((li) => li.querySelector("p.font-mono")?.textContent)).toEqual(
      experience.map((e) => e.org)
    );
    expect(items.map((li) => li.textContent)).toEqual(
      expect.arrayContaining([
        expect.stringContaining("SJA Inc."),
        expect.stringContaining("map.ca"),
      ])
    );
    // Current role is SJA Inc. (all three companies); map.ca ended Mar 2026.
    expect(experience[0]).toMatchObject({ org: "SJA Inc.", current: true });
    expect(experience[0].detail).toMatch(/SJA Robotics.*SJA Pathway.*SJA Verse/);
    expect(experience.find((e) => e.org === "map.ca")).toMatchObject({ current: false });
    expect(experience.find((e) => e.org === "map.ca")!.detail).toContain("Nov 2025 – Mar 2026");
  });

  it("links to her profiles over https in a new tab", () => {
    render(<Founder />);
    const list = screen.getByRole("list", { name: "Founder links" });
    const links = within(list).getAllByRole("link");
    expect(links.map((a) => a.textContent)).toEqual(founderLinks.map((l) => l.label));
    for (const a of links) {
      expect(a.getAttribute("href")).toMatch(/^https:\/\//);
      expect(a).toHaveAttribute("target", "_blank");
      expect(a).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("doesn't add claims that the Pathway founder section doesn't make", () => {
    const { container } = render(<Founder />);
    expect(container.textContent).not.toMatch(/Stevens|PhD|award/i);
  });

  it("marks its content for scroll reveals but renders it visible by default", () => {
    const { container } = render(<Founder />);
    const reveals = container.querySelectorAll("[data-reveal], [data-reveal-stagger]");
    expect(reveals.length).toBeGreaterThan(5);
    for (const el of Array.from(reveals)) {
      expect(el).not.toHaveAttribute("data-reveal-state");
    }
  });
});
