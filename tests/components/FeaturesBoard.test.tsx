import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import FeaturesBoard from "@/components/FeaturesBoard";
import { fariBacklog, mousBacklog } from "@/data/intern-features";

const all = [...fariBacklog.features, ...mousBacklog.features];
const shipped = all.filter((f) => f.shipped);
const open = all.filter((f) => !f.shipped);

const items = () => screen.getAllByRole("listitem").filter((li) => li.closest("ol")?.className.includes("grid"));

describe("intern features data", () => {
  it("has 50 features per product with unique ids", () => {
    expect(fariBacklog.features).toHaveLength(50);
    expect(mousBacklog.features).toHaveLength(50);
    expect(new Set(all.map((f) => f.id)).size).toBe(100);
  });

  it("marks shipped features with the release they shipped in", () => {
    expect(shipped.length).toBeGreaterThan(0);
    for (const f of shipped) expect(f.shipped).toMatch(/^(Fari|MOUS|Fari app) \d+\.\d+$/);
    expect(fariBacklog.features.find((f) => f.id === "F-24")?.shipped).toBe("Fari 2.1");
    expect(mousBacklog.features.find((f) => f.id === "M-15")?.shipped).toBe("MOUS 2.1");
  });

  it("links demos to the live product paths", () => {
    expect(fariBacklog.demo).toBe("https://robotics.sjapathway.com/fari/");
    expect(mousBacklog.demo).toBe("https://robotics.sjapathway.com/mous/");
  });
});

describe("<FeaturesBoard />", () => {
  it("shows only open features by default, with accurate counts", () => {
    render(<FeaturesBoard />);
    expect(items()).toHaveLength(open.length);
    expect(screen.getByText(`Showing ${open.length} of 100 features · ${open.length} open · ${shipped.length} shipped`)).toBeInTheDocument();
    expect(screen.queryByText("✓ Shipped")).toBeNull();
  });

  it("filters to shipped features and labels them", () => {
    render(<FeaturesBoard />);
    fireEvent.click(screen.getByRole("button", { name: "Shipped" }));
    expect(items()).toHaveLength(shipped.length);
    expect(screen.getAllByText("✓ Shipped")).toHaveLength(shipped.length);
    const f24 = items().find((li) => li.textContent!.includes("F-24"))!;
    expect(within(f24).getByText(/Shipped in Fari 2.1/)).toBeInTheDocument();
  });

  it("combines product, difficulty and search filters", () => {
    render(<FeaturesBoard />);
    fireEvent.click(screen.getByRole("button", { name: "Any status" }));
    fireEvent.click(screen.getByRole("button", { name: "MOUS" }));
    fireEvent.click(screen.getByRole("button", { name: "Beginner" }));
    const expected = mousBacklog.features.filter((f) => f.difficulty === "Beginner");
    expect(items()).toHaveLength(expected.length);
    fireEvent.change(screen.getByPlaceholderText(/Search features/), { target: { value: "M-19" } });
    expect(items()).toHaveLength(1);
    expect(items()[0]).toHaveTextContent("Opening-hours editor");
  });
});
