import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const services = [
  {
    tag: "Business",
    title: "Parv Gift",
    description:
      "A creative venture crafting customized gifts, sculpted statues, and one-of-a-kind products — handcrafted for what makes a gift actually memorable.",
    highlights: ["Custom Gifts", "Sculpted Statues", "Artistic Products", "Personalization"],
    cta: { label: "Browse Parv Gift →", href: "https://parvgift.lovable.app/", external: true },
  },
  {
    tag: "Creative",
    title: "Graphics Designing",
    description:
      "Branding systems, social media creatives, posters, thumbnails, and polished UI visuals — designed with intent, balance, and modern aesthetic sensibility.",
    highlights: ["Branding", "Social Creatives", "Posters", "Thumbnails", "UI Visuals"],
    cta: { label: "See design work →", href: "/graphics", external: false },
  },
  {
    tag: "Cinematic",
    title: "Video Editing",
    description:
      "Cinematic edits, reels, ads, transitions, and motion graphics — turning footage into a mood with a director's eye.",
    highlights: ["Reels", "Ads", "Color Grading", "Motion Graphics", "Premiere Pro"],
    cta: { label: "Watch the reel →", href: "/video", external: false },
    isVideo: true,
  },
  {
    tag: "Visual",
    title: "Photo Editing",
    description:
      "Retouching, cinematic edits, color grading, AI enhancement, and background manipulation — pixel-perfect every time.",
    highlights: ["Retouching", "Color Grading", "AI Enhancement", "Compositing", "Photoshop"],
    cta: { label: "See photo edits →", href: "/photo", external: false },
  },
];

export function Services() {
  return (
    <section id="services" style={{ padding: "var(--sp-20) 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1200, padding: "0 var(--sp-8)" }}>
        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="section-label" style={{ marginBottom: "var(--sp-6)" }}
        >
          <span className="num">06</span> — Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="display-heading" style={{ marginBottom: "var(--sp-12)" }}
        >
          Beyond code — a creative practice.
        </motion.h2>

        <div className="grid sm:grid-cols-2" style={{ gap: "var(--sp-5)" }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--sp-8)",
                transition: "border-color 200ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-default)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
            >
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "var(--sp-3)",
                }}
              >
                {s.tag}
              </p>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "var(--text-primary)",
                  marginBottom: "var(--sp-4)",
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "var(--sp-5)" }}>
                {s.description}
              </p>

              {s.isVideo && (
                <div
                  className="flex items-center justify-center"
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px dashed var(--border-default)",
                    borderRadius: "var(--radius-md)",
                    height: 180,
                    marginBottom: "var(--sp-5)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 13,
                    color: "var(--text-muted)",
                  }}
                >
                  ▶  Reel dropping soon
                </div>
              )}

              <div className="flex flex-wrap" style={{ gap: "var(--sp-2)", marginBottom: "var(--sp-6)" }}>
                {s.highlights.map((h) => (
                  <span key={h} className="skill-tag">{h}</span>
                ))}
              </div>

              <div className="mt-auto">
                {s.cta.external ? (
                  <a
                    href={s.cta.href}
                    data-cursor
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: 13,
                      color: "var(--accent)",
                      transition: "color 150ms ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-text)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  >
                    {s.cta.label}
                  </a>
                ) : (
                  <Link
                    to={s.cta.href}
                    data-cursor
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: 13,
                      color: "var(--accent)",
                      transition: "color 150ms ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-text)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  >
                    {s.cta.label}
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
