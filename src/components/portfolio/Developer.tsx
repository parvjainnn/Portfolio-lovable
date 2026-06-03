import { motion } from "framer-motion";

const lines = [
  { p: "$", c: "whoami", out: "parv-jain — engineer · creative · builder", kind: "text" as const },
  { p: "$", c: "cat stack.json", out: '{ "lang": ["Java","Python","C++"], "web": ["React","TS"], "focus": "DSA · Analytics · AI" }', kind: "json" as const },
  { p: "$", c: "ls ./now", out: "leetcode-grind/  airbnb-analysis/  plant-disease/  healthtwin-ai/", kind: "ls" as const },
  { p: "$", c: "echo $MISSION", out: "Ship clean, fast, human software.", kind: "mission" as const },
];

const stats = [
  { k: "300+", v: "DSA solved" },
  { k: "Java", v: "Primary language" },
  { k: "10+", v: "Repos shipped" },
  { k: "Top 20%", v: "LeetCode" },
];

function renderOut(kind: "text" | "json" | "ls" | "mission", out: string) {
  if (kind === "mission") return <span style={{ color: "var(--green)" }}>{out}</span>;
  if (kind === "ls") {
    return (
      <>
        {out.split(/\s{2}/).map((part, i) => (
          <span key={i}>
            <span style={{ color: "var(--accent)" }}>{part}</span>
            {i < out.split(/\s{2}/).length - 1 ? "  " : ""}
          </span>
        ))}
      </>
    );
  }
  if (kind === "json") {
    // crude colorization for keys (red) and string values (light blue)
    const parts = out.split(/("[^"]*")/g);
    return (
      <>
        {parts.map((p, i) => {
          if (!/^"[^"]*"$/.test(p)) return <span key={i}>{p}</span>;
          const after = parts[i + 1] ?? "";
          const isKey = after.trimStart().startsWith(":");
          return (
            <span key={i} style={{ color: isKey ? "var(--red)" : "#A5D6FF" }}>
              {p}
            </span>
          );
        })}
      </>
    );
  }
  return <span style={{ color: "var(--text-secondary)" }}>{out}</span>;
}

export function Developer() {
  return (
    <section id="developer" style={{ padding: "var(--sp-20) 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1200, padding: "0 var(--sp-8)" }}>
        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="section-label" style={{ marginBottom: "var(--sp-6)" }}
        >
          <span className="num">04</span> — Developer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="display-heading" style={{ marginBottom: "var(--sp-12)" }}
        >
          Engineer mode: always on.
        </motion.h2>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: "#0D1117",
            border: "1px solid var(--border-default)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            marginBottom: "var(--sp-8)",
          }}
        >
          {/* Title bar */}
          <div
            className="relative flex items-center"
            style={{
              height: 40,
              background: "var(--bg-elevated)",
              borderBottom: "1px solid var(--border-subtle)",
              padding: "0 var(--sp-4)",
            }}
          >
            <div className="flex items-center" style={{ gap: 8 }}>
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840" }} />
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "var(--text-muted)",
              }}
            >
              parv@portfolio — zsh
            </div>
          </div>

          {/* Body */}
          <div
            style={{
              padding: "var(--sp-6) var(--sp-8)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              color: "var(--text-secondary)",
              lineHeight: 1.8,
            }}
          >
            {lines.map((l, i) => (
              <div key={i} style={{ marginBottom: "var(--sp-3)" }}>
                <div>
                  <span style={{ color: "var(--accent)" }}>{l.p}</span>{" "}
                  <span style={{ color: "var(--text-primary)" }}>{l.c}</span>
                </div>
                <div style={{ paddingLeft: 16 }}>{renderOut(l.kind, l.out)}</div>
              </div>
            ))}
            <div className="flex items-center" style={{ gap: 8 }}>
              <span style={{ color: "var(--accent)" }}>$</span>
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 16,
                  background: "var(--text-primary)",
                  animation: "blink 1s steps(2) infinite",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "var(--sp-4)" }}>
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
