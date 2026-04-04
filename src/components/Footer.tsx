const footerLinks = {
  Products: [
    { label: "Atiana Robot", href: "#products" },
    { label: "Sueen Drone", href: "#products" },
    { label: "Smart Scale", href: "#products" },
    { label: "Smart Bell", href: "#products" },
    { label: "Smart Kitchen", href: "#products" },
    { label: "Health Monitoring", href: "#products" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Vision", href: "#vision" },
    { label: "Careers", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
  Divisions: [
    { label: "SJA Tech", href: "#divisions" },
    { label: "SJA AI", href: "#divisions" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/sja-logo-circle.png"
                alt="SJA Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-lg font-bold">
                <span className="text-accent">Robotics</span>
              </span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed mb-4">
              Empowering everyday life through intelligent, automated solutions.
            </p>
            <p className="text-accent/60 text-xs font-mono">robotics.sja.com</p>
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
