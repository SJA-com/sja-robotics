import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import StatusBadge, { type Status } from "@/components/StatusBadge";

describe("<StatusBadge />", () => {
  it.each<[Status, string]>([
    ["Live", "text-emerald-400"],
    ["Live in demo", "text-sky-400"],
    ["In development", "text-amber-400"],
    ["Planned", "text-foreground/45"],
  ])("renders %s with its own colour", (status, colour) => {
    render(<StatusBadge status={status} />);
    const badge = screen.getByText(status);
    expect(badge).toHaveAttribute("data-status", status);
    expect(badge.className).toContain(colour);
  });
});
