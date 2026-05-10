import { Gift, Palette, Film, Camera, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { TiltCard } from "./TiltCard";

const services = [
  {
    icon: Gift,
    tag: "Business",
    title: "Parv Gift",
    description:
      "A creative venture crafting customized gifts, sculpted statues, and one-of-a-kind artistic products — built on creativity, quality, and customer delight.",
    highlights: ["Custom Gifts", "Sculpted Statues", "Artistic Products", "Personalization"],
    cta: { label: "Visit Store", href: "https://parvgift.lovable.app/", external: true },
    accent: "from-fuchsia-500/20 via-primary/10 to-transparent",
    iconRing: "from-fuchsia-500 to-primary",
  },
  {
    icon: Palette,
    tag: "Creative",
    title: "Graphics Designing",
    description:
      "Branding systems, social media creatives, posters, thumbnails, and polished UI visuals — designed with intent, balance, and modern aesthetic sensibility.",
    highlights: ["Branding", "Social Creatives", "Posters", "Thumbnails", "UI Visuals"],
    cta: { label: "View Work", href: "/graphics", external: false },
    accent: "from-primary/20 via-accent/10 to-transparent",
    iconRing: "from-primary to-accent",
  },
  {
    icon: Film,
    tag: "Cinematic",
    title: "Video Editing",
    description:
      "Cinematic edits, reels, ads, transitions, and motion graphics — turning footage into a mood with a director's eye.",
    highlights: ["Reels", "Ads", "Color Grading", "Motion Graphics", "Premiere Pro"],
    cta: { label: "Watch Reel", href: "/video", external: false },
    accent: "from-accent/20 via-cyan-400/10 to-transparent",
    iconRing: "from-accent to-cyan-400",
  },
  {
    icon: Camera,
    tag: "Visual",
    title: "Photo Editing",
    description:
      "Retouching, cinematic edits, color grading, AI enhancement, and background manipulation — pixel-perfect every time.",
    highlights: ["Retouching", "Color Grading", "AI Enhancement", "Compositing", "Photoshop"],
    cta: { label: "View Gallery", href: "/photo", external: false },
    accent: "from-rose-400/20 via-amber-400/10 to-transparent",
    iconRing: "from-rose-400 to-amber-400",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3 inline-flex items-center gap-2">
              <Sparkles size={12} /> 04 — Professional Services
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Beyond code — a creative practice.
            </h2>
          </motion.div>
          <p className="text-muted-foreground max-w-md">
            Distinct from engineering work, these are the crafts I run as a creative — built around storytelling, taste, and detail.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map(({ icon: Icon, ...s }, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TiltCard className="glass rounded-3xl p-6 sm:p-7 shadow-card h-full flex flex-col overflow-hidden relative">
                <div
                  aria-hidden
                  className={`absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl opacity-60 bg-gradient-to-br ${s.accent}`}
                />

                <div className="flex items-center justify-between mb-6 relative">
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${s.iconRing} text-primary-foreground flex items-center justify-center shadow-glow`}>
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-2 relative">{s.title}</h3>
                <p className="text-sm text-muted-foreground relative">{s.description}</p>

                <div className="flex flex-wrap gap-2 mt-5 relative">
                  {s.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-foreground/5 border border-border text-muted-foreground"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 relative">
                  {s.cta.external ? (
                    <a
                      href={s.cta.href}
                      data-cursor
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/btn inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-glow transition-all"
                    >
                      {s.cta.label}
                      <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  ) : (
                    <Link
                      to={s.cta.href}
                      data-cursor
                      className="group/btn inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 hover:shadow-glow transition-all"
                    >
                      {s.cta.label}
                      <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
