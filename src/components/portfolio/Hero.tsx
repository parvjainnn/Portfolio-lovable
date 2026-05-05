import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero3D = lazy(() => import("./Hero3D").then((m) => ({ default: m.Hero3D })));

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
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow" />
            Available for opportunities
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">Parv Jain</span>.
            <br />
            <span className="text-muted-foreground">Building the</span>{" "}
            <span className="text-foreground">future</span>, mindfully.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Engineering student, developer, and creative technologist crafting clean, performant,
            and human digital experiences — where logic meets design.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" data-cursor className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 font-medium shadow-glow hover:translate-y-[-2px] transition-all">
              View my work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume.pdf" download data-cursor target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 font-medium hover:bg-foreground/5 hover:shadow-glow transition">
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com/" data-cursor aria-label="GitHub" className="hover:text-foreground transition" target="_blank" rel="noreferrer"><Github size={20} /></a>
            <a href="https://linkedin.com/" data-cursor aria-label="LinkedIn" className="hover:text-foreground transition" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
            <a href="mailto:example@email.com" data-cursor aria-label="Email" className="hover:text-foreground transition"><Mail size={20} /></a>
          </div>
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
