import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

const roles = ["Software Developer", "Graphic Designer", "Photo & Video Editor", "Creative Problem Solver"];

const stats = [
  { k: "10+", v: "Projects" },
  { k: "3", v: "Years coding" },
  { k: "5+", v: "Clients served" },
];

export function About() {
  return (
    <section id="about" style={{ padding: "var(--sp-20) 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1200, padding: "0 var(--sp-8)" }}>
        <motion.p {...fadeUp} className="section-label" style={{ marginBottom: "var(--sp-6)" }}>
          <span className="num">02</span> — About
        </motion.p>
        <motion.h2 {...fadeUp} className="display-heading" style={{ marginBottom: "var(--sp-8)" }}>
          Engineer. Designer. Storyteller.
        </motion.h2>

        <motion.div {...fadeUp} style={{ maxWidth: 640, marginBottom: "var(--sp-8)" }}>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.8, marginBottom: "var(--sp-4)" }}>
            I'm a versatile creator and engineering student — comfortable shipping clean
            software, designing brand systems, and editing photos and videos with a cinematic eye.
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.8 }}>
            By day I write Java, grind DSA, and explore data and AI. By night I'm in the studio —
            colour-grading reels, sketching posters, and chasing the next idea worth building.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="flex flex-wrap" style={{ gap: "var(--sp-2)", marginBottom: "var(--sp-12)" }}>
          {roles.map((r) => (
            <span
              key={r}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "var(--text-muted)",
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                padding: "4px 12px",
                borderRadius: "var(--radius-sm)",
              }}
            >
              {r}
            </span>
          ))}
        </motion.div>

        <div className="grid grid-cols-3" style={{ gap: "var(--sp-4)" }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--sp-6) var(--sp-8)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: 40,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "var(--sp-1)",
                }}
              >
                {s.k}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {s.v}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
