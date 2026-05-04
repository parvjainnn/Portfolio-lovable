export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">01 — About</p>
            <h2 className="text-4xl sm:text-5xl font-bold">A mindful maker.</h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a versatile and mindful engineering student with a knack for picking up new
              technologies quickly and shipping them with care. I blend technical skills with
              creativity to bring a fresh perspective to problem-solving.
            </p>
            <p>
              Outside of code, I'm exploring DHH culture, editing photos and videos, and chasing
              the next idea worth building. I believe great software feels effortless — and
              that's what I aim for in every project.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { k: "10+", v: "Projects built" },
                { k: "3", v: "Years coding" },
                { k: "∞", v: "Ideas brewing" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
