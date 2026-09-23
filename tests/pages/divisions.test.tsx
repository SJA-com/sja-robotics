import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { redirect, usePathname } from "next/navigation";
import SJAAIPage, { metadata as aiMeta } from "@/app/divisions/sja-ai/page";
import SJAAutonomousPage, {
  metadata as autoMeta,
} from "@/app/divisions/sja-autonomous/page";
import SJATechPage from "@/app/divisions/sja-tech/page";

describe("/divisions/sja-ai", () => {
  it("exports page metadata", () => {
    expect(aiMeta.title).toBe("SJA AI — Artificial Intelligence | SJA Robotics");
    expect(aiMeta.description).toMatch(/AI voice agents/);
  });

  it("renders the Navbar, the AI division inside main and the Footer", () => {
    vi.mocked(usePathname).mockReturnValue("/divisions/sja-ai");
    const { container } = render(<SJAAIPage />);
    const main = container.querySelector("main")!;
    expect(main).toHaveClass("pt-16");
    expect(main.querySelector("#sja-ai")).toBeTruthy();
    expect(container.querySelector("nav")).toBeTruthy();
    expect(container.querySelector("footer#contact")).toBeTruthy();
    // Non-home route shows the Robotics logo linking home.
    const logo = screen.getAllByAltText("SJA Robotics")[0];
    expect(logo.closest("a")).toHaveAttribute("href", "/");
    expect(screen.queryByLabelText("SJA Inc.")).toBeNull();
  });
});

describe("/divisions/sja-autonomous", () => {
  it("exports page metadata", () => {
    expect(autoMeta.title).toBe(
      "SJA Autonomous — Physical Robots & Drones | SJA Robotics"
    );
    expect(autoMeta.description).toMatch(/Atiana robot, Sueen drone/);
  });

  it("renders the Navbar, the Autonomous division inside main and the Footer", () => {
    vi.mocked(usePathname).mockReturnValue("/divisions/sja-autonomous");
    const { container } = render(<SJAAutonomousPage />);
    const main = container.querySelector("main")!;
    expect(main).toHaveClass("pt-16");
    expect(main.querySelector("#sja-autonomous")).toBeTruthy();
    expect(container.querySelector("nav")).toBeTruthy();
    expect(container.querySelector("footer#contact")).toBeTruthy();
    expect(screen.queryByLabelText("SJA Inc.")).toBeNull();
  });
});

describe("/divisions/sja-tech (disabled)", () => {
  it("redirects to the home page", () => {
    SJATechPage();
    expect(redirect).toHaveBeenCalledWith("/");
  });
});
