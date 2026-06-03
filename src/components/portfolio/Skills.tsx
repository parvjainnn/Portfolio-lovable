import { motion } from "framer-motion";

const groups = [
  {
    title: "Engineering",
    items: ["Java", "Python", "C++", "DSA", "React", "TypeScript", "HTML/CSS"],
    primary: "Java",
  },
  {
    title: "Creative Tools",
    items: ["Premiere Pro", "Photoshop", "After Effects", "Figma", "Canva", "Lightroom"],
  },
  {
    title: "Workflow",
    items: ["Git", "GitHub", "VS Code", "Jupyter"],
  },
];

export function Skills() {
  return (
    <section id="skills" style={{ padding: "var(--sp-20) 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1200, padding: "0 var(--sp-8)" }}>
        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="section-label" style={{ marginBottom: "var(--sp-6)" }}
        >
          <span className="num">03</span> — Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="display-heading" style={{ marginBottom: "var(--sp-12)" }}
        >
          A toolbox built for momentum.
        </motion.h2>

        <div className="grid md:grid-cols-3" style={{ gap: "var(--sp-6)" }}>
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--sp-8)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "var(--sp-5)",
                  paddingBottom: "var(--sp-4)",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                {g.title}
              </h3>
              <div className="flex flex-wrap" style={{ gap: "var(--sp-2)" }}>
                {g.items.map((it) => {
                  const isPrimary = g.primary === it;
                  return (
                    <span
                      key={it}
                      className="skill-tag"
                      style={
                        isPrimary
                          ? {
                              borderColor: "rgba(88, 166, 255, 0.4)",
                              color: "var(--accent-text)",
                            }
                          : undefined
                      }
                    >
                      {it}
                      {isPrimary ? " (Primary)" : ""}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
