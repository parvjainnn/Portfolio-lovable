import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#developer", label: "Dev", id: "developer" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#services", label: "Services", id: "services" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(8, 11, 15, 0.85)" : "var(--bg-base)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: 1200, padding: "0 var(--sp-8)" }}>
        <nav className="flex items-center justify-between" style={{ height: 60 }}>
          <a
            href="#home"
            data-cursor
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            parv.
          </a>

          <ul className="hidden lg:flex items-center" style={{ gap: "var(--sp-8)" }}>
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.href} className="relative">
                  <a
                    href={l.href}
                    data-cursor
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: 13,
                      letterSpacing: "0.02em",
                      color: isActive ? "var(--accent)" : "var(--text-muted)",
                      transition: "color 150ms ease",
                      padding: "6px 0",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = "var(--text-muted)";
                    }}
                  >
                    {l.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-0 right-0"
                      style={{
                        bottom: -4,
                        height: 1,
                        background: "var(--accent)",
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              data-cursor
              className="hidden sm:inline-flex items-center"
              style={{
                background: "transparent",
                border: "1px solid var(--border-default)",
                color: "var(--text-primary)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: 13,
                padding: "8px 20px",
                borderRadius: "var(--radius-md)",
                transition: "all 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-default)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              Hire me
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2"
              style={{ color: "var(--text-muted)" }}
            >
              {open ? <X size={20} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-50 flex flex-col"
            style={{ background: "var(--bg-base)" }}
          >
            <div className="flex items-center justify-between" style={{ height: 60, padding: "0 var(--sp-8)", borderBottom: "1px solid var(--border-subtle)" }}>
              <span style={{ fontWeight: 700, fontSize: 18, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>parv.</span>
              <button aria-label="Close" onClick={() => setOpen(false)} style={{ color: "var(--text-muted)" }}>
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col items-start" style={{ padding: "var(--sp-12) var(--sp-8)", gap: "var(--sp-5)" }}>
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: 32,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
