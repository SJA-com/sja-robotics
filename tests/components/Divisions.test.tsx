import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Divisions from "@/components/Divisions";

function card(name: string) {
  const h = screen.getByRole("heading", { level: 3, name });
  // Walk up to the division card (the rounded-2xl container).
  return h.closest("div.rounded-2xl") as HTMLElement;
}

describe("<Divisions />", () => {
  it("is the #divisions anchor target with its heading", () => {
    const { container } = render(<Divisions />);
    expect(container.querySelector("section")).toHaveAttribute(
      "id",
      "divisions"
    );
    expect(screen.getByText("Our Divisions")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Two Specialized Divisions"
    );
  });

  it("lists exactly SJA AI and SJA Autonomous (SJA Tech disabled)", () => {
    render(<Divisions />);
    expect(
      screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent)
    ).toEqual(["SJA AI", "SJA Autonomous"]);
    expect(screen.queryByText("SJA Tech")).toBeNull();
  });

  it("describes SJA AI with its tagline, product count and explore link", () => {
    render(<Divisions />);
    const c = card("SJA AI");
    expect(within(c).getByText("Artificial Intelligence")).toBeInTheDocument();
    expect(within(c).getByText("3 Products")).toBeInTheDocument();
    expect(
      within(c).getByRole("link", { name: /Explore SJA AI/ })
    ).toHaveAttribute("href", "/divisions/sja-ai");
  });

  it("describes SJA Autonomous with its tagline, product count and explore link", () => {
    render(<Divisions />);
    const c = card("SJA Autonomous");
    expect(within(c).getByText("Physical Robots & Drones")).toBeInTheDocument();
    expect(within(c).getByText("2 Products")).toBeInTheDocument();
    expect(
      within(c).getByRole("link", { name: /Explore SJA Autonomous/ })
    ).toHaveAttribute("href", "/divisions/sja-autonomous");
  });

  it.each([
    ["SJA AI", "Fari", "COMING SOON", "https://fari.sja-affu765.workers.dev/"],
    ["SJA AI", "MOUS", "COMING SOON", "https://mous.sja-affu765.workers.dev/"],
    ["SJA AI", "SAM", "COMING SOON", "https://sam.sja-affu765.workers.dev/"],
    [
      "SJA Autonomous",
      "Atiana Robot",
      "IN DEVELOPMENT",
      "https://atiana.sja-affu765.workers.dev/",
    ],
    [
      "SJA Autonomous",
      "Sueen Drone",
      "IN DEVELOPMENT",
      "https://sueen.pages.dev/",
    ],
  ])("%s features %s (%s) with a demo link", (division, product, badge, demo) => {
    render(<Divisions />);
    const c = card(division);
    const row = within(c).getByText(product).closest(
      "div.flex.items-center.justify-between"
    ) as HTMLElement;
    expect(row).toBeTruthy();
    expect(within(row).getByText(badge)).toBeInTheDocument();
    const demoLink = within(row).getByRole("link", { name: "DEMO" });
    expect(demoLink).toHaveAttribute("href", demo);
    expect(demoLink).toHaveAttribute("target", "_blank");
    expect(demoLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("styles In Development badges amber and Coming Soon badges accent", () => {
    render(<Divisions />);
    for (const b of screen.getAllByText("IN DEVELOPMENT")) {
      expect(b.className).toContain("text-amber-400");
    }
    for (const b of screen.getAllByText("COMING SOON")) {
      expect(b.className).toContain("text-accent-2");
    }
  });

  it("has 5 demo links and 2 explore links in total", () => {
    render(<Divisions />);
    expect(screen.getAllByRole("link", { name: "DEMO" })).toHaveLength(5);
    expect(screen.getAllByRole("link", { name: /^Explore/ })).toHaveLength(2);
  });
});
