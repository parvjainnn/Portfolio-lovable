import { motion } from "framer-motion";

const profiles = [
  {
    name: "GitHub",
    handle: "@parvjainnn",
    href: "https://github.com/parvjainnn",
    command: "git clone parv-jain.dev",
    stats: [
      { label: "Repos", value: "12+" },
      { label: "Contribs", value: "200+" },
      { label: "Topics", value: "8+" },
    ],
  },
  {
    name: "LeetCode",
    handle: "u/parvjainnn",
    href: "https://leetcode.com/u/parvjainnn",
    command: "leetcode submit --lang java",
    stats: [
      { label: "Solved", value: "300+" },
      { label: "Focus", value: "DSA" },
      { label: "Rank", value: "Top 20%" },
    ],
  },
];

export function CodingProfiles() {
  return (
    <section id="coding" style={{ padding: "var(--sp-20) 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1200, padding: "0 var(--sp-8)" }}>
        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="section-label" style={{ marginBottom: "var(--sp-6)" }}
        >
          <span className="num">07</span> — Coding
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="display-heading" style={{ marginBottom: "var(--sp-12)" }}
        >
          Where the commits live.
        </motion.h2>

        <div className="grid sm:grid-cols-2" style={{ gap: "var(--sp-5)" }}>
          {profiles.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
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
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginBottom: "var(--sp-5)",
                }}
              >
                <span style={{ color: "var(--accent)" }}>$</span> {p.command}
              </div>

              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "var(--text-primary)",
                  marginBottom: "var(--sp-2)",
                }}
              >
                {p.name}
              </h3>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: "var(--accent)",
                  marginBottom: "var(--sp-6)",
                }}
              >
                {p.handle}
              </div>

              <div className="flex" style={{ gap: "var(--sp-6)", marginBottom: "var(--sp-6)" }}>
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: 28,
                        color: "var(--text-primary)",
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                data-cursor
                className="inline-block"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: 13,
                  color: "var(--text-muted)",
                  border: "1px solid var(--border-subtle)",
                  padding: "8px 20px",
                  borderRadius: "var(--radius-md)",
                  transition: "all 150ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                Visit
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
