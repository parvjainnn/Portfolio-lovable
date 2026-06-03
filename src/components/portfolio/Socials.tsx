import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Socials() {
  return (
    <section id="contact" style={{ padding: "var(--sp-20) 0 var(--sp-12)" }}>
      <div className="mx-auto" style={{ maxWidth: 1200, padding: "0 var(--sp-8)" }}>
        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="section-label" style={{ marginBottom: "var(--sp-6)" }}
        >
          <span className="num">09</span> — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(40px, 6vw, 72px)",
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "var(--sp-4)",
          }}
        >
          Let's talk.
        </motion.h2>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: 18,
            color: "var(--text-muted)",
            maxWidth: 480,
            lineHeight: 1.6,
            marginBottom: "var(--sp-10)",
          }}
        >
          Available for internships, freelance projects, and creative collaborations. I reply within 24 hours.
        </p>

        <div className="flex flex-wrap items-center" style={{ gap: "var(--sp-4)" }}>
          <a
            href="mailto:hello@parvjain.dev"
            data-cursor
            className="inline-flex items-center"
            style={{
              gap: 12,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: 16,
              color: "var(--accent)",
              border: "1px solid rgba(88, 166, 255, 0.3)",
              padding: "14px var(--sp-8)",
              borderRadius: "var(--radius-md)",
              transition: "all 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(88, 166, 255, 0.08)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(88, 166, 255, 0.3)";
            }}
          >
            <Mail size={18} />
            hello@parvjain.dev
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
              fontSize: 16,
              padding: "14px var(--sp-8)",
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
      </div>

      {/* Footer */}
      <footer
        className="mx-auto flex flex-wrap items-center justify-between"
        style={{
          maxWidth: 1200,
          padding: "var(--sp-8)",
          marginTop: "var(--sp-20)",
          borderTop: "1px solid var(--border-subtle)",
          gap: "var(--sp-4)",
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          parv.
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 400,
            fontSize: 12,
            color: "var(--text-muted)",
          }}
        >
          © 2026 Parv Jain · Designed & built by Parv.
        </span>
      </footer>
    </section>
  );
}
