import { ArrowRight, Download, Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

import { url as resumeUrl } from "@/assets/resume.pdf.asset.json";

const focus = ["Data Analysis", "Machine Learning", "Software Engineering"];


const socials = [
  { href: "mailto:jainparv.cse@gmail.com", icon: Mail, label: "Email" },
  { href: "https://github.com/parvjainnn", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/parvjainnn", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/parvjainnn", icon: Twitter, label: "X" },
  { href: "https://instagram.com/parvjainnn", icon: Instagram, label: "Instagram" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center pt-28 pb-16 sm:pt-32"
    >
      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-col"
        >
          <div className="max-w-2xl">
            <p className="section-label">01 / Home</p>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Parv Jain<span className="text-primary">.</span>
            </h1>

            <p className="mt-3 font-mono text-[13px] text-muted-foreground">
              {focus.join("  ·  ")}
            </p>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Engineering student working across data analysis, machine learning and web
              development - building models, dashboards and small products end to end. I also do
              graphics and video work when a project needs it.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                data-cursor
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                View projects
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://github.com/parvjainnn"
                target="_blank"
                rel="noreferrer noopener"
                data-cursor
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground/85 transition hover:bg-foreground/5 hover:text-foreground"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href={resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                aria-label="Download Parv Jain's resume PDF"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground/85 transition hover:bg-foreground/5 hover:text-foreground"
              >
                <Download size={15} />
                Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-5">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-cursor
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
