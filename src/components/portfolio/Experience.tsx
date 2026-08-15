import { GraduationCap, Trophy, Music, Camera, Rocket } from "lucide-react";

export function Experience() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-8">
        <div>
          <p className="section-label mb-4">04 / Journey</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Experience.</h2>
          <ul className="space-y-5">
            {[
              { icon: GraduationCap, title: "Engineering Student", desc: "Actively building projects across web, programming, and data." },
              { icon: Trophy, title: "Technical Events", desc: "Participated in technical events and self-learning initiatives." },
              { icon: Rocket, title: "Continuous Learner", desc: "Always exploring new tech, frameworks, and creative tools." },
            ].map(({ icon: Icon, title, desc }) => (
              <li key={title} className="glass rounded-lg p-5 flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-label mb-4">05 / Off-screen</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Hobbies.</h2>
          <ul className="space-y-5">
            {[
              { icon: Music, title: "DHH Culture", desc: "Listening to and exploring Desi Hip-Hop - the rhythm of the new India." },
              { icon: Camera, title: "Photo & Video Editing", desc: "Crafting visual stories from raw moments." },
              { icon: Rocket, title: "Tech Trends", desc: "Hunting for the next idea worth building." },
            ].map(({ icon: Icon, title, desc }) => (
              <li key={title} className="glass rounded-lg p-5 flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
