import { Code2, Palette, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";

const groups = [
  {
    icon: Code2,
    title: "Engineering",
    items: ["Java (Primary)", "Python", "C++", "DSA", "React", "TypeScript", "HTML/CSS"],
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
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">03 - Skills</p>
          <h2 className="text-4xl sm:text-5xl font-bold">A toolbox built for momentum.</h2>
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
              <TiltCard className="glass rounded-2xl p-6 shadow-card h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((it) => (
                    <span key={it} className="text-xs font-mono px-3 py-1 rounded-full bg-foreground/5 border border-border text-muted-foreground">
                      {it}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
