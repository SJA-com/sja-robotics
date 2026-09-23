import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import ProductPage from "@/components/ProductPage";

const base = {
  name: "Test Bot",
  fullForm: "Totally Excellent Service Terminal",
  tagline: "A bot for testing.",
  description: ["First paragraph.", "Second paragraph."],
  features: [
    { title: "Alpha", detail: "Does alpha things." },
    { title: "Beta", detail: "Does beta things." },
    { title: "Gamma", detail: "Does gamma things." },
  ],
  gradient: "from-accent to-accent-2",
  icon: "M1 1L2 2",
};

describe("<ProductPage />", () => {
  it("renders the product name as the h1 and its full form and tagline", () => {
    render(<ProductPage {...base} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Test Bot"
    );
    expect(
      screen.getByText("Totally Excellent Service Terminal")
    ).toBeInTheDocument();
    expect(screen.getByText("A bot for testing.")).toBeInTheDocument();
  });

  it("renders the subtitle only when provided", () => {
    const { rerender } = render(<ProductPage {...base} />);
    expect(screen.queryByText("Helper Subtitle")).toBeNull();
    rerender(<ProductPage {...base} subtitle="Helper Subtitle" />);
    expect(screen.getByText("Helper Subtitle")).toBeInTheDocument();
  });

  it("renders every description paragraph under Overview", () => {
    render(<ProductPage {...base} />);
    const overview = screen.getByRole("heading", { name: "Overview" });
    const paras = Array.from(
      overview.nextElementSibling!.querySelectorAll("p")
    ).map((p) => p.textContent);
    expect(paras).toEqual(["First paragraph.", "Second paragraph."]);
  });

  it("renders every feature under Key Features", () => {
    render(<ProductPage {...base} />);
    expect(screen.getByRole("heading", { name: "Key Features" })).toBeInTheDocument();
    const titles = screen
      .getAllByRole("heading", { level: 3 })
      .map((h) => h.textContent);
    expect(titles).toEqual(["Alpha", "Beta", "Gamma"]);
    for (const f of base.features) {
      expect(screen.getByText(f.detail)).toBeInTheDocument();
    }
  });

  it("renders the closing note only when provided", () => {
    const { rerender } = render(<ProductPage {...base} />);
    expect(screen.queryByText("A fine closing note.")).toBeNull();
    rerender(<ProductPage {...base} closingNote="A fine closing note." />);
    expect(screen.getByText("A fine closing note.")).toBeInTheDocument();
  });

  it("uses the supplied gradient and icon path", () => {
    const { container } = render(<ProductPage {...base} />);
    expect(container.querySelector(".bg-gradient-to-br.from-accent.to-accent-2")).toBeTruthy();
    expect(container.querySelector('path[d="M1 1L2 2"]')).toBeTruthy();
  });

  it("wraps the page in the Navbar and Footer", () => {
    vi.mocked(usePathname).mockReturnValue("/products/test-bot");
    const { container } = render(<ProductPage {...base} />);
    expect(container.querySelector("nav")).toBeTruthy();
    expect(container.querySelector("footer#contact")).toBeTruthy();
    // Non-home route -> Robotics logo linking home.
    expect(screen.getAllByAltText("SJA Robotics")[0].closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("has 'Back to Products' and 'Explore All Products' links that return to the home page", () => {
    render(<ProductPage {...base} />);
    for (const name of [/Back to Products/, /Explore All Products/]) {
      const href = screen.getByRole("link", { name }).getAttribute("href")!;
      expect(href).toBe("/#divisions");
    }
  });
});
