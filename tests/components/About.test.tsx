import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "@/components/About";

describe("<About />", () => {
  it("is the #about anchor target", () => {
    const { container } = render(<About />);
    expect(container.querySelector("section")).toHaveAttribute("id", "about");
  });

  it("renders the section heading", () => {
    render(<About />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Building the Future of Intelligent Living"
    );
  });

  it("quotes the mission statement", () => {
    const { container } = render(<About />);
    const quote = container.querySelector("blockquote");
    expect(quote).toHaveTextContent(
      /To revolutionize everyday life through intelligent, automated solutions/
    );
  });

  it("credits the founder", () => {
    render(<About />);
    expect(screen.getByText("Syeda Juveria Afreen (SJA)")).toBeInTheDocument();
    expect(screen.getByText(/Atiana Robot/)).toBeInTheDocument();
  });

  it.each([
    ["7+", "Product Lines"],
    ["AI", "Driven Solutions"],
    ["360°", "Home Integration"],
    ["∞", "Possibilities"],
  ])("shows the %s / %s stat", (number, label) => {
    render(<About />);
    const labelEl = screen.getByText(label);
    expect(labelEl.previousElementSibling).toHaveTextContent(number);
  });
});
