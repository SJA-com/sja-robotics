import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const NAV = [
  { label: "About", href: "/#about" },
  { label: "Founder", href: "/#founder" },
  { label: "Products", href: "/products/" },
  { label: "Features", href: "/features/" },
  { label: "Contact", href: "#contact" },
];

function onRoute(path: string) {
  vi.mocked(usePathname).mockReturnValue(path);
}

describe("<Navbar /> logo", () => {
  it("shows the SJA Inc. mark linking to the ecosystem site on the home page", () => {
    onRoute("/");
    render(<Navbar />);

    const logoLink = screen.getByRole("link", { name: "SJA Inc." });
    expect(logoLink).toHaveAttribute("href", "https://inc.sjapathway.com");
    expect(logoLink).toHaveAttribute("aria-label", "SJA Inc.");

    const img = within(logoLink).getByAltText("SJA Inc.");
    expect(img.getAttribute("src")).toContain("sja-inc-circle.png");

    // The Robotics branding is not shown on the home page.
    expect(screen.queryByAltText("SJA Robotics")).not.toBeInTheDocument();
    expect(screen.queryByText("Robotics")).not.toBeInTheDocument();
  });

  it.each([
    "/divisions/sja-ai",
    "/divisions/sja-autonomous",
    "/products/atiana",
    "/products/sueen",
    "/products/weighing-scale",
  ])("shows the Robotics mark + text linking home on %s", (path) => {
    onRoute(path);
    render(<Navbar />);

    const img = screen.getByAltText("SJA Robotics");
    expect(img.getAttribute("src")).toContain("sja-robotics-mark.png");

    const logoLink = img.closest("a");
    expect(logoLink).toHaveAttribute("href", "/");
    expect(within(logoLink!).getByText("Robotics")).toBeInTheDocument();

    expect(screen.queryByLabelText("SJA Inc.")).not.toBeInTheDocument();
    expect(screen.queryByAltText("SJA Inc.")).not.toBeInTheDocument();
    expect(
      document.querySelector('a[href="https://inc.sjapathway.com"]')
    ).toBeNull();
  });

  it("treats only the exact '/' path as home", () => {
    onRoute("/divisions/");
    render(<Navbar />);
    expect(screen.queryByLabelText("SJA Inc.")).not.toBeInTheDocument();
    expect(screen.getByAltText("SJA Robotics")).toBeInTheDocument();
  });

  it("falls back to the Robotics logo when the pathname is unavailable", () => {
    vi.mocked(usePathname).mockReturnValue(null as unknown as string);
    render(<Navbar />);
    expect(screen.getByAltText("SJA Robotics").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });
});

describe("<Navbar /> links", () => {
  it("renders the desktop nav links in order with the right hrefs", () => {
    const { container } = render(<Navbar />);
    const desktop = container.querySelector("div.hidden.md\\:flex");
    expect(desktop).toBeTruthy();
    const links = Array.from(desktop!.querySelectorAll("a")).map((a) => ({
      label: a.textContent?.trim(),
      href: a.getAttribute("href"),
    }));
    expect(links).toEqual(NAV);
  });

  it("does not expose the (disabled) SJA Tech division", () => {
    render(<Navbar />);
    expect(screen.queryByRole("link", { name: "Tech" })).toBeNull();
    expect(document.querySelector('a[href="/divisions/sja-tech"]')).toBeNull();
  });
});

describe("<Navbar /> mobile menu", () => {
  it("is closed initially and shows the hamburger icon", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: "Toggle menu" });
    expect(toggle.querySelector("path")).toHaveAttribute(
      "d",
      "M4 6h16M4 12h16M4 18h16"
    );
    // Only the desktop copy of each link exists.
    expect(screen.getAllByRole("link", { name: "About" })).toHaveLength(1);
  });

  it("opens on click, shows every nav link and switches to the close icon", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: "Toggle menu" });
    fireEvent.click(toggle);

    expect(toggle.querySelector("path")).toHaveAttribute(
      "d",
      "M6 18L18 6M6 6l12 12"
    );
    for (const { label, href } of NAV) {
      const links = screen.getAllByRole("link", { name: label });
      expect(links).toHaveLength(2);
      for (const l of links) expect(l).toHaveAttribute("href", href);
    }
  });

  it("closes again when the toggle is clicked a second time", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: "Toggle menu" });
    fireEvent.click(toggle);
    fireEvent.click(toggle);
    expect(screen.getAllByRole("link", { name: "About" })).toHaveLength(1);
  });

  it("closes when a mobile link is clicked", () => {
    render(<Navbar />);
    fireEvent.click(screen.getByRole("button", { name: "Toggle menu" }));
    const mobileAbout = screen.getAllByRole("link", { name: "About" })[1];
    fireEvent.click(mobileAbout);
    expect(screen.getAllByRole("link", { name: "About" })).toHaveLength(1);
  });

  it("works the same on non-home pages", () => {
    onRoute("/products/atiana");
    render(<Navbar />);
    fireEvent.click(screen.getByRole("button", { name: "Toggle menu" }));
    expect(screen.getAllByRole("link", { name: "Products" })).toHaveLength(2);
  });

  it("hides Divisions, AI and Autonomous from the navbar for now", () => {
    render(<Navbar />);
    fireEvent.click(screen.getByRole("button", { name: "Toggle menu" }));
    for (const name of ["Divisions", "AI", "Autonomous"]) {
      expect(screen.queryByRole("link", { name })).toBeNull();
    }
  });
});

describe("<Navbar /> products link", () => {
  it.each(["/", "/products/", "/divisions/sja-ai"])("points at the /products/ page on %s", (path) => {
    onRoute(path);
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Products" })).toHaveAttribute("href", "/products/");
  });

  it("sits right after Founder", () => {
    const { container } = render(<Navbar />);
    const labels = Array.from(container.querySelectorAll("div.hidden.md\\:flex a")).map((a) => a.textContent);
    expect(labels.indexOf("Products")).toBe(labels.indexOf("Founder") + 1);
  });
});

describe("<Navbar /> founder link", () => {
  it.each(["/", "/products/atiana", "/divisions/sja-ai"])(
    "links to the home-page founder section with an absolute /#founder href on %s",
    (path) => {
      onRoute(path);
      render(<Navbar />);
      const link = screen.getByRole("link", { name: "Founder" });
      expect(link).toHaveAttribute("href", "/#founder");
    }
  );

  it("sits right after About", () => {
    const { container } = render(<Navbar />);
    const labels = Array.from(
      container.querySelectorAll("div.hidden.md\\:flex a")
    ).map((a) => a.textContent);
    expect(labels.indexOf("Founder")).toBe(labels.indexOf("About") + 1);
  });

  it("reports the mobile menu state with aria-expanded", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: "Toggle menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
  });
});
