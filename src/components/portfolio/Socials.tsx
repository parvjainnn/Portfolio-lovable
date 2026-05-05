import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Download, Twitter, Instagram } from "lucide-react";

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
  {
    name: "X (Twitter)",
    handle: "@parvjainnn",
    href: "https://x.com/parvjainnn",
    icon: Twitter,
    color: "#ffffff",
    bg: "#000000",
  },
  {
    name: "Instagram",
    handle: "@parvjainnn",
    href: "https://instagram.com/parvjainnn",
    icon: Instagram,
    color: "#ffffff",
    bg: "#E1306C",
  },
];

export function Socials() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            04 — Connect
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Open to internships, collaborations, and good conversations. Find me on:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
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

        <div className="mt-12 flex justify-center">
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noreferrer noopener"
            data-cursor
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 font-medium shadow-glow hover:translate-y-[-2px] hover:opacity-95 transition-all"
          >
            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>
        </div>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground border-t border-border pt-8">
          <p>© {new Date().getFullYear()} Parv Jain. Crafted with care.</p>
          <p className="font-mono text-xs">Designed & built by Parv.</p>
        </footer>
      </div>
    </section>
  );
}
