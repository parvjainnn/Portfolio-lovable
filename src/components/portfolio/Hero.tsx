import { lazy, Suspense, useEffect, useState } from "react";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Hero3D = lazy(() => import("./Hero3D").then((m) => ({ default: m.Hero3D })));

const roles = ["Developer", "Designer", "Video Editor", "Creative Technologist"];

function RoleCycler() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div
      className="flex items-center"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 14,
        height: 22,
        gap: 6,
        marginBottom: "var(--sp-10)",
      }}
      aria-live="polite"
    >
      <span style={{ color: "var(--text-muted)" }}>→</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[i]}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.3 }}
          style={{ color: "var(--accent)" }}
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

const socials = [
  { href: "mailto:hello@parvjain.dev", icon: Mail, label: "Email" },
  { href: "https://github.com/parvjainnn", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/parvjainnn", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/parvjainnn", icon: Twitter, label: "X" },
  { href: "https://instagram.com/parvjainnn", icon: Instagram, label: "Instagram" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center"
      style={{
        minHeight: "100vh",
        paddingTop: 120,
        paddingBottom: "var(--sp-16)",
        background:
          "radial-gradient(ellipse 800px 600px at 10% 50%, rgba(31, 111, 235, 0.06) 0%, transparent 70%)",
      }}
    >
      <div
        className="mx-auto w-full grid lg:grid-cols-[1fr_400px] gap-10 items-center"
        style={{ maxWidth: 1200, padding: "0 var(--sp-8)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 900 }}
        >
          {/* Status badge */}
          <div
            className="inline-flex items-center"
            style={{
              background: "rgba(63, 185, 80, 0.1)",
              border: "1px solid rgba(63, 185, 80, 0.3)",
              color: "var(--green)",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
              fontSize: 12,
              padding: "4px 12px",
              borderRadius: "var(--radius-full, 9999px)",
              gap: 6,
              marginBottom: "var(--sp-6)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--green)",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            Available for opportunities
          </div>

          {/* Display name */}
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(56px, 9vw, 96px)",
              color: "var(--text-primary)",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              marginBottom: "var(--sp-6)",
            }}
          >
            Parv Jain.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(18px, 2.5vw, 22px)",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: 560,
              marginBottom: "var(--sp-6)",
            }}
          >
            I build software that works and visuals that land — Java, AI, and cinematic creative
            work. Engineering student open to internships and freelance.
          </p>

          <RoleCycler />

          {/* CTAs */}
          <div className="flex flex-wrap items-center" style={{ gap: "var(--sp-3)", marginBottom: "var(--sp-10)" }}>
            <a
              href="#projects"
              data-cursor
              className="inline-flex items-center"
              style={{
                background: "var(--accent)",
                color: "#080B0F",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                padding: "12px var(--sp-6)",
                borderRadius: "var(--radius-md)",
                transition: "all 150ms ease",
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#79C0FF";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              See what I've built
            </a>
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="inline-flex items-center"
              style={{
                background: "transparent",
                border: "1px solid var(--border-default)",
                color: "var(--text-secondary)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                padding: "12px var(--sp-6)",
                borderRadius: "var(--radius-md)",
                transition: "all 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-strong)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-default)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              Resume (2026) ↓
            </a>
          </div>

          {/* Social row */}
          <div className="flex flex-wrap items-center" style={{ gap: "var(--sp-5)", marginBottom: "var(--sp-8)" }}>
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                data-cursor
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center"
                style={{
                  minWidth: 44,
                  minHeight: 44,
                  color: "var(--text-muted)",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Status strip */}
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 400,
              fontSize: 12,
              color: "var(--text-muted)",
            }}
          >
            Currently building: HealthTwin AI v2  ·  Open to internship & freelance — Summer/Fall 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative hidden lg:block"
          style={{ height: 460 }}
        >
          <Suspense fallback={<div className="h-full w-full editorial-card animate-pulse" />}>
            <Hero3D />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}
