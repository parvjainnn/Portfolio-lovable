import { ArrowUpRight, Github } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Smart Web Application",
    description: "A responsive web app solving real-world problems with a clean, intuitive interface.",
    tech: ["React", "JavaScript", "CSS"],
    image: p1,
  },
  {
    title: "Data Analysis Tool",
    description: "A Python-powered tool that turns raw data into clear, actionable insights.",
    tech: ["Python", "Pandas", "Matplotlib"],
    image: p2,
  },
  {
    title: "Portfolio Website",
    description: "A personal branding website with modern UI, smooth motion, and a focus on craft.",
    tech: ["React", "Tailwind", "Design"],
    image: p3,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">03 — Projects</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Selected work.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A few things I've built recently — each one a chapter in learning the craft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group glass rounded-3xl overflow-hidden flex flex-col shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-5">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition"
                  >
                    <Github size={14} /> Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
                  >
                    Live <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
