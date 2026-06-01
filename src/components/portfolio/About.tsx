import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] as const },
};

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <motion.div {...fadeUp} className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">02 - About</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Engineer. Designer. Storyteller.</h2>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="md:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a versatile creator and engineering student - comfortable shipping clean
              software, designing brand systems, and editing photos and videos with a cinematic eye.
              A fast learner who thrives on going from blank canvas to finished craft.
            </p>
            <p>
              By day I write Java, grind DSA, and explore data and AI. By night I'm in the studio -
              colour-grading reels, sketching posters, and chasing the next idea worth building.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Software Developer", "Graphic Designer", "Photo & Video Editor", "Creative Problem Solver"].map((t) => (
                <span key={t} className="text-xs font-mono px-3 py-1 rounded-full glass text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { k: "10+", v: "Projects" },
                { k: "3", v: "Years coding" },
                { k: "5+", v: "Clients served" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-2xl p-4 text-center shadow-card">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
