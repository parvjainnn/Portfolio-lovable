import { motion } from "framer-motion";
import { Github, Code2, ExternalLink, Terminal } from "lucide-react";

const lines = [
  { p: "$", c: "whoami", out: "parv-jain --- engineer 路 creative 路 builder" },
  { p: "$", c: "cat stack.json", out: '{ "lang": ["Java","Python","C++"], "web": ["React","TS"], "focus": "DSA 路 Analytics 路 AI" }' },
  { p: "$", c: "ls ./now", out: "leetcode-grind/  airbnb-analysis/  plant-disease/  healthtwin-ai/" },
  { p: "$", c: "echo $MISSION", out: "Ship clean, fast, human software." },
];

const stats = [
  { k: "300+", v: "DSA problems solved" },
  { k: "Java", v: "Primary language" },
  { k: "10+", v: "Repositories shipped" },
  { k: "-垶", v: "Curiosity index" },
];

export function Developer() {
  return (
    <section id="developer" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3 inline-flex items-center gap-2">
              <Terminal size={12} /> 03 --- Developer
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Engineer mode: <span className="text-gradient">always on</span>.
            </h2>
          </motion.div>
          <p className="text-muted-foreground max-w-md">
            Java-first thinker. DSA grinder. Building data and AI projects with pragmatism over hype.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-3xl overflow-hidden shadow-elegant"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-foreground/[0.03]">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-300/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-[11px] font-mono text-muted-foreground">parv@portfolio --- zsh</span>
            </div>
            <div className="p-5 sm:p-6 font-mono text-[13px] leading-relaxed">
              {lines.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  className="mb-3"
                >
                  <div>
                    <span className="text-primary">{l.p}</span>{" "}
                    <span className="text-foreground">{l.c}</span>
                  </div>
                  <div className="text-muted-foreground pl-4">{l.out}</div>
                </motion.div>
              ))}
              <div className="flex items-center gap-2">
                <span className="text-primary">$</span>
                <span className="inline-block h-4 w-2 bg-foreground/80 animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Stats + profiles */}
          <div className="lg:col-span-2 grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass rounded-2xl p-4 shadow-card"
                >
                  <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-3">
              <a
                href="https://github.com/parvjainnn"
                target="_blank"
                rel="noreferrer noopener"
                data-cursor
                className="group glass rounded-2xl p-4 flex items-center gap-3 hover:shadow-glow transition"
              >
                <div className="h-10 w-10 rounded-xl bg-foreground/5 flex items-center justify-center">
                  <Github size={18} />
                </div>
                <div className="flex-1">
                  <div className="font-display font-semibold text-sm">GitHub</div>
                  <div className="text-[11px] font-mono text-muted-foreground">@parvjainnn</div>
                </div>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-foreground transition" />
              </a>
              <a
                href="https://leetcode.com/u/parvjainnn"
                target="_blank"
                rel="noreferrer noopener"
                data-cursor
                className="group glass rounded-2xl p-4 flex items-center gap-3 hover:shadow-glow transition"
              >
                <div className="h-10 w-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
                  <Code2 size={18} />
                </div>
                <div className="flex-1">
                  <div className="font-display font-semibold text-sm">LeetCode</div>
                  <div className="text-[11px] font-mono text-muted-foreground">u/parvjainnn</div>
                </div>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-foreground transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
