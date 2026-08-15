import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { url as resumeUrl } from "@/assets/resume.pdf.asset.json";

const Hero3D = lazy(() => import("./Hero3D").then((m) => ({ default: m.Hero3D })));

const roles = ["Developer", "Designer", "Video Editor", "Creative Technologist"];

function RoleCycler() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="mt-6 font-mono text-sm text-muted-foreground flex items-center gap-2 h-6" aria-live="polite">
      <span className="text-primary">›</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[i]}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.3 }}
          className="inline-block text-foreground/80"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
      <span className="opacity-50 hidden sm:inline">· {roles.filter((_, idx) => idx !== i).join(" · ")}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none [mask-image:linear-gradient(180deg,black,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="section-label">01 / Home</span>
            <span className="h-px w-10 bg-border" />
            <span className="font-mono text-[11px] text-muted-foreground inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow" />
              Available for opportunities
            </span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-semibold leading-[0.94] tracking-[-0.035em]">
            Parv Jain<span className="text-primary">.</span>
          </h1>

          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
            I build software that works and visuals that land - Java, AI, and cinematic creative
            work. Engineering student. Open to internships and freelance.
          </p>

          <RoleCycler />

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" data-cursor className="group inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
              See what I've built
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={resumeUrl}
              download
              data-cursor
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Parv Jain's resume PDF"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground/85 hover:text-foreground hover:bg-foreground/5 transition"
            >
              <Download size={16} />
              Resume (PDF)
            </a>
          </div>


          <div className="mt-10 flex flex-wrap items-center gap-3">
            {[
              { href: "mailto:jainparv.cse@gmail.com", icon: Mail, label: "Email" },
              { href: "https://github.com/parvjainnn", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/parvjainnn", icon: Linkedin, label: "LinkedIn" },
              { href: "https://x.com/parvjainnn", icon: Twitter, label: "X" },
              { href: "https://instagram.com/parvjainnn", icon: Instagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                data-cursor
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 min-h-[40px] px-3 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
              >
                <Icon size={16} />
                <span className="text-xs font-mono">{label}</span>
              </a>
            ))}
          </div>

          {/* Currently building strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 inline-flex flex-wrap items-center gap-2 border-l-2 border-primary/60 pl-3 text-xs font-mono text-muted-foreground"
          >
            <span>
              <span className="text-foreground/80">Currently building:</span>{" "}
              <span className="text-foreground">HealthTwin AI v2</span>
            </span>
            <span className="opacity-40">·</span>
            <span>Open to internship roles for Summer/Fall 2026</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative h-[420px] sm:h-[500px] lg:h-[560px] order-first lg:order-last"
        >
          <Suspense fallback={<div className="h-full w-full rounded-lg border border-border" />}>
            <Hero3D />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}
