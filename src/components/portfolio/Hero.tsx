import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-60 pointer-events-none"
      />
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow" />
            Available for opportunities
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">Parv Jain</span>.
            <br />
            <span className="text-muted-foreground">Building the</span>{" "}
            <span className="text-foreground">thoughtful</span> web.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Engineering student, developer, and creative technologist crafting clean, performant,
            and human digital experiences — where logic meets design.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-glow hover:translate-y-[-2px] transition-all"
            >
              View my work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 font-medium hover:bg-white/10 transition"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/" aria-label="GitHub" className="hover:text-foreground transition" target="_blank" rel="noreferrer">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/" aria-label="LinkedIn" className="hover:text-foreground transition" target="_blank" rel="noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:example@email.com" aria-label="Email" className="hover:text-foreground transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
