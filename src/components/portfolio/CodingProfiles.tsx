import { motion } from "framer-motion";
import { Github, Code2, ArrowUpRight, Terminal, GitCommitHorizontal, ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    handle: "@parvjainnn",
    href: "https://github.com/parvjainnn",
    icon: Github,
    accent: "var(--primary)",
    stats: [
      { label: "Repositories", value: "12+" },
      { label: "Contributions", value: "200+" },
      { label: "Stars", value: "-" },
    ],
    tag: "git remote",
    command: "git clone parv-jain.dev",
  },
  {
    name: "LeetCode",
    handle: "u/parvjainnn",
    href: "https://leetcode.com/u/parvjainnn",
    icon: Code2,
    accent: "#FFA116",
    stats: [
      { label: "Problems", value: "300+" },
      { label: "Topics", value: "DSA" },
      { label: "Streak", value: "-" },
    ],
    tag: "dsa.runner",
    command: "leetcode submit --lang java",
  },
];

export function CodingProfiles() {
  return (
    <section id="coding" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* faint code-grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3 inline-flex items-center gap-2">
              <Terminal size={12} /> 06 --- Coding Profiles
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Where the <span className="text-gradient">commits</span> live.
            </h2>
          </motion.div>
          <p className="text-muted-foreground max-w-md font-mono text-sm">
            <span className="text-primary">$</span> open ~/profiles --view=public
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {profiles.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${p.name} profile`}
                data-cursor
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl overflow-hidden glass shadow-card hover:shadow-elegant transition-shadow"
                style={{ ['--accent-glow' as string]: p.accent }}
              >
                {/* glowing border on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${p.accent}66, 0 0 40px -8px ${p.accent}55`,
                  }}
                />

                {/* terminal header */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-foreground/[0.03]">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-2 text-[10px] font-mono text-muted-foreground truncate">
                    ~/{p.tag}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="h-12 w-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${p.accent}33, ${p.accent}10)`,
                        boxShadow: `0 0 0 1px ${p.accent}55, 0 10px 30px -12px ${p.accent}aa`,
                      }}
                    >
                      <Icon size={22} style={{ color: p.accent }} />
                    </div>
                    <div>
                      <div className="font-display font-semibold leading-none">{p.name}</div>
                      <div className="mt-1.5 text-[11px] font-mono text-muted-foreground">{p.handle}</div>
                    </div>
                  </div>

                  {/* command line */}
                  <div className="font-mono text-[11px] text-muted-foreground bg-foreground/[0.04] border border-border rounded-lg px-3 py-2 mb-5 overflow-hidden">
                    <span className="text-primary">$</span>{" "}
                    <span className="text-foreground/90">{p.command}</span>
                  </div>

                  {/* stats */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {p.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-border bg-foreground/[0.02] px-2.5 py-2 text-center"
                      >
                        <div className="text-sm font-display font-bold text-foreground">{s.value}</div>
                        <div className="mt-0.5 text-[9px] font-mono uppercase tracking-wider text-muted-foreground">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full font-medium transition-all duration-300 group-hover:gap-3 group-hover:shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${p.accent}, ${p.accent}cc)`,
                        color: "#0a0a0a",
                        boxShadow: `0 8px 24px -10px ${p.accent}cc`,
                      }}
                    >
                      Visit
                      <ExternalLink size={12} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <GitCommitHorizontal
                      size={16}
                      className="text-muted-foreground group-hover:text-foreground transition"
                    />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
