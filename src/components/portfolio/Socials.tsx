import { motion } from "framer-motion";
import { Github, Linkedin, Code2 } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    handle: "@parvjainnn",
    href: "https://github.com/parvjainnn",
    icon: Github,
    color: "#ffffff",
    bg: "#181717",
  },
  {
    name: "LeetCode",
    handle: "u/parvjainnn",
    href: "https://leetcode.com/u/parvjainnn",
    icon: Code2,
    color: "#FFA116",
    bg: "#1a1a1a",
  },
  {
    name: "LinkedIn",
    handle: "in/parvjainnn",
    href: "https://www.linkedin.com/in/parvjainnn",
    icon: Linkedin,
    color: "#ffffff",
    bg: "#0A66C2",
  },
];

export function Socials() {
  return (
    <section id="socials" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            Connect
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Find me <span className="text-gradient">around the web</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            I'm active on these platforms — feel free to reach out, follow, or check my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${s.name} profile`}
                data-cursor
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative glass rounded-2xl p-6 flex items-center gap-4 overflow-hidden transition-shadow hover:shadow-elegant"
                style={{ ['--brand' as string]: s.bg }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(120% 120% at 0% 0%, ${s.bg}33, transparent 60%)`,
                  }}
                />
                <span
                  className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: s.bg,
                    boxShadow: `0 0 0 1px ${s.bg}55, 0 10px 30px -10px ${s.bg}99`,
                  }}
                >
                  <Icon size={22} style={{ color: s.color }} />
                </span>
                <div className="relative">
                  <div className="font-display font-semibold leading-none">{s.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground font-mono">{s.handle}</div>
                </div>
                <span className="relative ml-auto text-xs text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1 transition-all">
                  Visit ↗
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
