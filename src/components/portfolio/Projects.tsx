import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Diabetes Prediction Model",
    description: "Machine learning model that predicts diabetes based on health parameters with high accuracy and clean preprocessing.",
    tech: ["Python", "scikit-learn", "Pandas"],
    image: p1,
    href: "https://github.com/parvjainnn/Diabetes_Prediction_Model",
  },
  {
    title: "Plant Disease Detection",
    description: "AI-based system that detects plant diseases from leaf images using deep learning and image processing.",
    tech: ["Python", "TensorFlow", "CNN"],
    image: p2,
    href: "https://github.com/parvjainnn/Plant_Disease_Detection",
  },
  {
    title: "HealthTwin AI",
    description: "AI-powered health assistant providing personalized insights, predictions, and a digital twin of your wellbeing.",
    tech: ["Python", "AI", "LLM"],
    image: p3,
    href: "https://github.com/parvjainnn/HealthTwin_AI",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">03 — Projects</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Selected work.</h2>
          </motion.div>
          <p className="text-muted-foreground max-w-md">A few things I've built recently — each one a chapter in learning the craft.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <TiltCard className="glass rounded-3xl overflow-hidden shadow-card h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-5">
                    <a href="https://github.com/" data-cursor target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-full bg-foreground/5 hover:bg-foreground/10 border border-border transition">
                      <Github size={14} /> Code
                    </a>
                    <a href="#" data-cursor className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition">
                      Live <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
