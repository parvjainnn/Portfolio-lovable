import { Code2, Globe, Wrench, Sparkles, Brain } from "lucide-react";

const groups = [
  { icon: Code2, title: "Programming", items: ["Java", "Python", "C++"] },
  { icon: Globe, title: "Web Development", items: ["HTML", "CSS", "JavaScript", "React"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "VS Code"] },
  { icon: Sparkles, title: "Creative", items: ["Photo Editing", "Video Editing"] },
  { icon: Brain, title: "Mindset", items: ["Problem Solving", "Fast Learner", "Adaptability"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">02 — Skills</p>
          <h2 className="text-4xl sm:text-5xl font-bold">A toolbox built for momentum.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="group glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all hover:-translate-y-1 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center group-hover:scale-110 transition">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <span
                    key={it}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
