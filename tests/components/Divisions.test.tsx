import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Divisions from "@/components/Divisions";
import { divisions } from "@/data/products";

function card(name: string) {
  return screen.getByRole("heading", { level: 3, name }).closest("article") as HTMLElement;
}

describe("<Divisions />", () => {
  it("is the #divisions anchor target with its heading", () => {
    const { container } = render(<Divisions />);
    expect(container.querySelector("section")).toHaveAttribute("id", "divisions");
    expect(screen.getByText("Our Divisions")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Two Specialized Divisions");
  });

  it("lists exactly SJA AI and SJA Autonomous (SJA Tech disabled)", () => {
    render(<Divisions />);
    expect(screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent)).toEqual([
      "SJA AI",
      "SJA Autonomous",
    ]);
    expect(screen.queryByText("SJA Tech")).toBeNull();
  });

  it.each([
    ["SJA AI", "Artificial Intelligence", "3 Products", "/divisions/sja-ai", "sja-ai"],
    ["SJA Autonomous", "Physical Robots & Drones", "2 Products", "/divisions/sja-autonomous", "sja-autonomous"],
  ])("describes %s with its tagline, product count and links", (name, tagline, count, href, id) => {
    render(<Divisions />);
    const c = card(name);
    expect(within(c).getByText(tagline)).toBeInTheDocument();
    expect(within(c).getByRole("link", { name: new RegExp(`Explore ${name}`) })).toHaveAttribute("href", href);
    const countLink = within(c).getByRole("link", { name: count });
    expect(countLink.getAttribute("href")).toMatch(new RegExp(`^/products/?#${id}$`));
  });

  it("doesn't repeat the product list (that lives on /products/)", () => {
    render(<Divisions />);
    for (const p of divisions.flatMap((d) => d.products)) {
      expect(screen.queryByText(p.name)).toBeNull();
    }
    expect(screen.queryByRole("link", { name: "DEMO" })).toBeNull();
    expect(screen.getAllByRole("link", { name: /^Explore/ })).toHaveLength(2);
  });
});
