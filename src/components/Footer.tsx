import { divisions } from "@/data/products";

// Product columns come from the shared product data so they always match /products/.
// (SJA Tech is disabled; its links return with it in src/data/products.ts.)
const footerLinks: Record<string, { label: string; href: string }[]> = {
  ...Object.fromEntries(
    divisions.map((d) => [d.name, d.products.map((p) => ({ label: p.name, href: p.href }))])
  ),
  Company: [
    { label: "About", href: "/#about" },
    { label: "All Products", href: "/products/" },
    { label: "Divisions", href: "/#divisions" },
    { label: "Careers", href: "#contact" },
    { label: "Contact", href: "#contact" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/sjarobotics" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border bg-surface/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div data-reveal-stagger className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/sja-robotics-logo-dark.png"
                alt="SJA Robotics"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed mb-4">
              Empowering everyday life through intelligent, automated solutions.
            </p>
            <p className="text-accent/60 text-xs font-mono">robotics.sjapathway.com</p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-foreground/50 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} SJA Robotics. All rights reserved.
          </p>
          <p className="text-xs text-foreground/40">
            Founded by Syeda Juveria Afreen
          </p>
        </div>
      </div>
    </footer>
  );
}
