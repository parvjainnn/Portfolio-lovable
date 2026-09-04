import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, X, Sparkles, Instagram, Twitter, Mail } from "lucide-react";

export type ServiceProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  cover: string; // gradient or image url
  meta?: Record<string, string>;
  details: {
    overview: string;
    process: string[];
    palette?: string[];
    typography?: string[];
    challenges?: string;
    outcome?: string;
    images?: { before?: string; after?: string; gallery?: string[] };
    video?: string;
  };
};

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  stats: { label: string; value: string }[];
  process: { step: string; desc: string }[];
  testimonials: { quote: string; author: string; role: string }[];
  projects: ServiceProject[];
  categories: string[];
  accent: string; // tailwind gradient
};

export function ServicePage(p: ServicePageProps) {
  const [active, setActive] = useState<ServiceProject | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return p.projects.filter((proj) => {
      const matchCat = filter === "All" || proj.category === filter;
      const q = query.toLowerCase();
      const matchQ =
        !q ||
        proj.title.toLowerCase().includes(q) ||
        proj.description.toLowerCase().includes(q) ||
        proj.tools.join(" ").toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [p.projects, filter, query]);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className={`absolute inset-0 -z-10 opacity-70 ${p.accent}`} />
        <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label inline-flex items-center gap-2"
          >
            <Sparkles size={12} /> {p.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl"
          >
            {p.title} <span className="text-gradient">{p.highlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl"
          >
            {p.subtitle}
          </motion.p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {p.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                className="glass rounded-lg p-5"
              >
                <div className="text-3xl font-display font-semibold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER + SEARCH */}
      <section className="relative" aria-labelledby="browse-heading">
        <h2 id="browse-heading" className="sr-only">Browse and filter work</h2>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-wrap gap-3 items-center justify-between">

          <div className="flex flex-wrap gap-2">
            {["All", ...p.categories].map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-transparent"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="group relative w-full sm:w-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-focus-within:opacity-40 blur-md transition-opacity duration-500 pointer-events-none" />
            <div className="relative flex items-center glass rounded-full pl-4 pr-2 py-1.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50 focus-within:shadow-glow">
              <Search size={15} className="text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="bg-transparent outline-none text-sm placeholder:text-muted-foreground/70 px-3 py-1 w-full sm:w-56 focus:sm:w-72 transition-[width] duration-300 font-mono"
              />
              {query && (
                <button onClick={() => setQuery("")} aria-label="Clear" className="h-7 w-7 rounded-full hover:bg-foreground/10 flex items-center justify-center transition">
                  <X size={13} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="relative py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="section-label mb-4">Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 max-w-2xl">Selected projects.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {filtered.map((proj, i) => (
                <motion.button
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActive(proj)}
                  className="group text-left glass rounded-lg overflow-hidden hover:shadow-elegant transition-all"
                  data-cursor
                >
                  <div className={`relative aspect-[4/3] overflow-hidden ${proj.cover}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full glass">
                      {proj.category}
                    </div>
                    {proj.meta?.duration && (
                      <div className="absolute top-3 right-3 text-[10px] font-mono px-2.5 py-1 rounded-full bg-background/70 backdrop-blur">
                        {proj.meta.duration}
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold">{proj.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{proj.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {proj.tools.slice(0, 4).map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-foreground/5 border border-border text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.button>
              ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">No projects match your search.</p>
          )}
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="section-label mb-4">Workflow</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 max-w-2xl">A process built for precision.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {p.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-lg p-6 relative"
              >
                <div className="text-xs font-mono text-muted-foreground">0{i + 1}</div>
                <h3 className="font-display text-lg font-semibold mt-2">{step.step}</h3>
                <p className="text-sm text-muted-foreground mt-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="section-label mb-4">Kind words</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 max-w-2xl">Trusted by collaborators.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {p.testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-lg p-6"
              >
                <p className="text-sm leading-relaxed">"{t.quote}"</p>
                <footer className="mt-4 text-xs font-mono text-muted-foreground">
                  - {t.author}, <span className="opacity-70">{t.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative overflow-hidden glass rounded-[2rem] p-10 sm:p-14 text-center">
            <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
            <h2 className="relative font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Let's <span className="text-gradient">work together</span>.
            </h2>
            <p className="relative mt-4 text-muted-foreground max-w-xl mx-auto">
              Have a project, brand, or story to bring to life? I'd love to hear about it.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:jainparv.cse@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-95 hover:-translate-y-0.5 transition-all"
              >
                <Mail size={16} /> Start a project
              </a>
              <a
                href="https://instagram.com/parvjainnn"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 font-medium hover:bg-foreground/5 transition-all"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href="https://x.com/parvjainnn"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 font-medium hover:bg-foreground/5 transition-all"
              >
                <Twitter size={16} /> X (Twitter)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DETAIL MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md flex items-start sm:items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl glass rounded-lg overflow-hidden my-8"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-foreground/10 transition"
              >
                <X size={18} />
              </button>
              <div className={`relative aspect-[16/8] ${active.cover}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-primary">{active.category}</div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold mt-1">{active.title}</h3>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">{active.details.overview}</p>

                {active.details.video && (
                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                    <iframe
                      src={active.details.video}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}

                {active.details.images?.before && active.details.images?.after && (
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">Before</div>
                      <div className={`aspect-square rounded-lg ${active.details.images.before}`} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-2">After</div>
                      <div className={`aspect-square rounded-lg ${active.details.images.after}`} />
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-display font-semibold mb-3">Process</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {active.details.process.map((p) => (
                        <li key={p} className="flex gap-2"><span className="text-primary">→</span>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-display font-semibold mb-3">Tools</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {active.tools.map((t) => (
                          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-foreground/5 border border-border text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    {active.details.palette && (
                      <div>
                        <h4 className="font-display font-semibold mb-3">Palette</h4>
                        <div className="flex gap-2">
                          {active.details.palette.map((c) => (
                            <div key={c} className="h-10 w-10 rounded-xl border border-border" style={{ background: c }} title={c} />
                          ))}
                        </div>
                      </div>
                    )}
                    {active.details.typography && (
                      <div>
                        <h4 className="font-display font-semibold mb-3">Typography</h4>
                        <div className="text-sm text-muted-foreground">{active.details.typography.join(" · ")}</div>
                      </div>
                    )}
                  </div>
                </div>

                {(active.details.challenges || active.details.outcome) && (
                  <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-border">
                    {active.details.challenges && (
                      <div>
                        <h4 className="font-display font-semibold mb-2">Challenges</h4>
                        <p className="text-sm text-muted-foreground">{active.details.challenges}</p>
                      </div>
                    )}
                    {active.details.outcome && (
                      <div>
                        <h4 className="font-display font-semibold mb-2">Outcome</h4>
                        <p className="text-sm text-muted-foreground">{active.details.outcome}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
