import { url as resumeUrl } from "@/assets/resume.pdf.asset.json";
import { motion } from "framer-motion";
import { Download, Mail, Sparkles, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "[Add real quote here] Parv pairs solid engineering with a designer's eye - rare combo. He shipped fast and the result felt thought-through end to end.",
    name: "[Add name]",
    role: "Collaborator, Class Project",
    initials: "AB",
  },
  {
    quote: "[Add real quote here] The gift was absolutely beautiful and the personalization was spot on. You can tell every detail was cared for.",
    name: "[Add name]",
    role: "Parv Gift Customer",
    initials: "CD",
  },
];

export function Socials() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* TESTIMONIALS - unhide when quotes are ready. Replace AB/CD initials and placeholder text first. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
          style={{ display: "none" }}
        >
          <p className="section-label mb-4 text-center">What people say</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Words from <span className="text-gradient">collaborators</span>.
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-lg p-6 shadow-card border border-border relative"
              >
                <Quote size={20} className="text-primary/40 mb-3" />
                <p className="text-sm text-foreground/85 leading-relaxed">{t.quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">- {t.name}</div>
                    <div className="text-xs font-mono text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-label mb-4 inline-flex items-center gap-2">
            <Sparkles size={12} /> 09 / Contact
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Let's <span className="text-gradient">talk</span>.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Available for internships, freelance projects, and creative collaborations. I reply within 24 hours.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:jainparv.cse@gmail.com"
              data-cursor
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:translate-y-[-2px] transition-all"
            >
              <Mail size={18} />
              jainparv.cse@gmail.com
            </a>
            <a
              href={resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Parv Jain's resume PDF"
              data-cursor
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium hover:bg-foreground/5  transition-all"
            >
              <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              Resume (Updated 2026) ↓
            </a>
          </div>
        </motion.div>

        <footer className="mt-20 flex items-center justify-center text-sm text-muted-foreground border-t border-border pt-8">
          <p>© 2026 Parv Jain · Designed & built by Parv.</p>
        </footer>
      </div>
    </section>
  );
}
