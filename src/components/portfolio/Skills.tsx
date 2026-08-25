import { Code2, Palette, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const groups = [
  {
    icon: Code2,
    title: "Engineering",
    items: ["Python (Primary)", "SQL", "Java", "C++", "DSA", "React", "TypeScript", "HTML/CSS"],
  },
  {
    icon: Palette,
    title: "Creative Tools",
    items: ["Premiere Pro", "Photoshop", "After Effects", "Figma", "Canva", "Lightroom"],
  },
  {
    icon: Wrench,
    title: "Workflow",
    items: ["Git", "GitHub", "VS Code", "Jupyter"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="section-label mb-4">03 / Skills</p>
          <h2 className="text-3xl sm:text-4xl font-semibold">A toolbox built for momentum.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {groups.map(({ icon: Icon, title, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="rounded-lg border border-border p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-9 w-9 rounded-md border border-border text-primary flex items-center justify-center">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-display font-medium tracking-tight">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((it) => (
                    <span key={it} className="text-xs font-mono px-2.5 py-1 rounded-md bg-foreground/[0.04] border border-border text-muted-foreground">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
