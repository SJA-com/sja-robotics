import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import SocialProof, { visibleStats, type PublicStats } from "@/components/SocialProof";

const stats = (over: Partial<PublicStats> = {}): PublicStats => ({
  conversations_30d: 0, demo_conversations_30d: 0, businesses: 0, waitlist: 0, ...over,
});

afterEach(() => vi.unstubAllGlobals());

describe("visibleStats", () => {
  it("hides numbers that are too small to be meaningful", () => {
    expect(visibleStats(null)).toEqual([]);
    expect(visibleStats(stats({ conversations_30d: 9, waitlist: 4 }))).toEqual([]);
  });

  it("shows each number once it passes its threshold", () => {
    const items = visibleStats(stats({ conversations_30d: 120, businesses: 1, waitlist: 5 }));
    expect(items.map((i) => i.value)).toEqual([120, 1, 5]);
    expect(items[1].label).toBe("business has set up MOUS");
  });
});

describe("<SocialProof />", () => {
  it("renders nothing without data", () => {
    const { container } = render(<SocialProof initial={stats()} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("loads live numbers from /api/stats", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => stats({ conversations_30d: 1234, businesses: 3 }) });
    vi.stubGlobal("fetch", fetchMock);
    render(<SocialProof />);
    await waitFor(() => expect(screen.getByText("1,234")).toBeInTheDocument());
    expect(fetchMock).toHaveBeenCalledWith("/api/stats");
    expect(screen.getByText("businesses have set up MOUS")).toBeInTheDocument();
  });

  it("stays hidden when the stats request fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    const { container } = render(<SocialProof />);
    await new Promise((r) => setTimeout(r, 10));
    expect(container).toBeEmptyDOMElement();
  });
});
