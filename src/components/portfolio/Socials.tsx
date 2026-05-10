import { motion } from "framer-motion";
import { Download, Mail, Sparkles } from "lucide-react";

export function Socials() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3 inline-flex items-center gap-2">
            <Sparkles size={12} /> 07 --- Contact
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Let's build something <span className="text-gradient">memorable</span>.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Open to internships, freelance briefs, and collaborations. Reach out --- I usually reply fast.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:preeti.parv17@gmail.com"
              data-cursor
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 font-medium shadow-glow hover:translate-y-[-2px] transition-all"
            >
              <Mail size={18} />
              Email me
            </a>
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noreferrer noopener"
              data-cursor
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium hover:bg-foreground/5 hover:shadow-glow transition-all"
            >
              <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </div>
        </motion.div>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground border-t border-border pt-8">
          <p>© {new Date().getFullYear()} Parv Jain. Crafted with care.</p>
          <p className="font-mono text-xs">Designed & built by Parv.</p>
        </footer>
      </div>
    </section>
  );
}
