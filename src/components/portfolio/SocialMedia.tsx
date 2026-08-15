import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    handle: "@parvjainnn",
    blurb: "Behind-the-scenes, frames & stories.",
    href: "https://instagram.com/parvjainnn",
    icon: Instagram,
  },
  {
    name: "X / Twitter",
    handle: "@parvjainnn",
    blurb: "Thoughts, builds & the occasional rant.",
    href: "https://x.com/parvjainnn",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    handle: "in/parvjainnn",
    blurb: "Career, collabs & professional notes.",
    href: "https://www.linkedin.com/in/parvjainnn",
    icon: Linkedin,
  },
];

export function SocialMedia() {
  return (
    <section id="social" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-4">08 / Social</p>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Follow my journey.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            The personal side of things - frames, thoughts, and everyday creative chaos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${s.name} - ${s.handle}`}
                data-cursor
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="group relative rounded-lg border border-border p-6 transition-colors hover:bg-foreground/[0.03]"
              >
                
                <div className="relative flex items-start justify-between">
                  <div
                    className={"h-11 w-11 rounded-md border border-border text-foreground/80 flex items-center justify-center"}
                  >
                    <Icon size={24} className="text-white drop-shadow" />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <div className="relative mt-6">
                  <div className="font-display font-semibold text-lg leading-tight">{s.name}</div>
                  <div className="mt-1 text-xs font-mono text-muted-foreground">{s.handle}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{s.blurb}</p>
                </div>
                <div className="relative mt-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/90 border-b border-foreground/20 group-hover:border-foreground transition pb-0.5">
                    Connect with me
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
