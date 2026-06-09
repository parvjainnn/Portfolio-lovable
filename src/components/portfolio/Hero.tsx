import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter, Instagram, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Hero3D = lazy(() => import("./Hero3D").then((m) => ({ default: m.Hero3D })));

const roles = ["Developer", "Designer", "Video Editor", "Creative Technologist"];

function RoleCycler() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="mt-5 font-mono text-sm text-muted-foreground flex items-center gap-2 h-6" aria-live="polite">
      <span className="text-primary">›</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[i]}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35 }}
          className="inline-block"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
      <span className="opacity-60">· {roles.filter((_, idx) => idx !== i).join(" · ")}</span>
    </div>
  );
}

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <motion.div
        style={{ y: scrollY * 0.3 }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: scrollY * -0.15 }}
        className="absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-accent/30 blur-[100px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">01 - Home</p>

          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow" />
            Available for opportunities
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-[0.95] tracking-[-0.04em]">
            <span className="text-gradient">Parv Jain</span>
            <span className="text-foreground">.</span>
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
            I build software that works and visuals that land - Java, AI, and cinematic creative
            work. Engineering student. Open to internships and freelance.
          </p>

          <RoleCycler />

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" data-cursor className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 font-medium shadow-glow hover:translate-y-[-2px] transition-all">
              See what I've built
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              data-cursor
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Parv Jain's resume PDF"
              className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 font-medium hover:bg-foreground/5 hover:shadow-glow transition"
            >
              <Download size={18} />
              Resume (Updated 2026) ↓
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {[
              { href: "mailto:hello@parvjain.dev", icon: Mail, label: "Email" },
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
                className="group relative inline-flex items-center gap-2 min-h-[44px] min-w-[44px] px-3 rounded-full glass text-muted-foreground hover:text-foreground hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                <Icon size={20} />
                <span className="text-xs font-mono">{label}</span>
              </a>
            ))}
          </div>

          {/* Currently building strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-muted-foreground shadow-glow"
          >
            <Sparkles size={12} className="text-primary" />
            <span>
              <span className="text-foreground/80">Currently building:</span>{" "}
              <span className="text-gradient font-semibold">HealthTwin AI v2</span>
            </span>
            <span className="opacity-40">·</span>
            <span>Open to internship roles for Summer/Fall 2026</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative h-[420px] sm:h-[500px] lg:h-[560px] order-first lg:order-last"
        >
          <Suspense fallback={<div className="h-full w-full rounded-3xl glass animate-pulse" />}>
            <Hero3D />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}
