import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative glass rounded-[2rem] p-10 sm:p-16 overflow-hidden shadow-elegant"
        >
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/40 blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-accent/40 blur-[100px]" />

          <div className="relative">
            <p className="section-label mb-4">04 / Contact</p>
            <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
              Let's build <span className="text-gradient">something</span> together.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Open to internships, collaborations, and good conversations. Drop a line - I usually
              reply within a day.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="mailto:example@email.com" data-cursor className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:-translate-y-0.5 transition">
                <Mail size={18} /> example@email.com
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
              <a href="https://github.com/" data-cursor target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass rounded-full px-5 py-3 hover:bg-foreground/5 transition">
                <Github size={18} /> GitHub
              </a>
              <a href="https://linkedin.com/" data-cursor target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass rounded-full px-5 py-3 hover:bg-foreground/5 transition">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Parv Jain. Crafted with care.</p>
          <p className="font-mono text-xs">Designed & built by Parv.</p>
        </footer>
      </div>
    </section>
  );
}
