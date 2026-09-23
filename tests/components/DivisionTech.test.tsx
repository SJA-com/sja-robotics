import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DivisionTech from "@/components/DivisionTech";

describe("<DivisionTech />", () => {
  // The SJA Tech division is intentionally disabled (its content is commented
  // out in the source); the component renders nothing until re-enabled.
  it("renders nothing while the division is disabled", () => {
    const { container } = render(<DivisionTech />);
    expect(container).toBeEmptyDOMElement();
  });
});
