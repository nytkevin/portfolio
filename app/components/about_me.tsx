"use client";

export default function AboutMe() {
  const technologies = {
    Frontend: ["Tailwind CSS", "TypeScript", "React JS", "React Native"],
    Backend: ["Python", "NodeJS", "PHP", "GraphQL"],
    Database: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    DevOps: ["Docker", "Kubernetes", "CircleCI", "AWS"],
  };

  return (
    <section id="about" className="pb-20 md:pb-40 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span className="text-cyan-400">01.</span>
            <span className="text-white">About Me</span>
            <div className="hidden sm:flex flex-1 h-0.5 bg-linear-to-r from-cyan-400 to-transparent ml-4"></div>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_140px] lg:grid-cols-[1fr_160px] gap-8 md:gap-12 items-start mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-[2.4rem] font-medium text-slate-100 leading-tight mb-5">
              Hi, I&apos;m Kevin.
              <br />
              <span className="text-cyan-400">Frontend Dev</span>
              <br />
              based in Canada.
            </h2>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              Seasoned frontend developer with a focus on building clean,
              user-friendly web applications. Experienced with React,
              TypeScript, and Python.i&apos;m comfortable leading teams across
              the full stack.
            </p>
          </div>
          <div className="bg-[#0f1f35] border border-cyan-400/10 rounded-lg aspect-3/4 flex flex-col items-center justify-center gap-2 min-w-30 md:min-w-35">
            <span className="font-mono text-[10px] sm:text-[11px] text-cyan-400/30 text-center px-2">
              photo coming soon
            </span>
          </div>
        </div>
        <div className="h-px bg-white/4 mb-4" />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {Object.entries(technologies).map(([category, techs], i) => (
            <div
              key={category}
              className={`${i > 0 && "md:border-l"} ${i > 0 ? "md:pl-6 md:pr-4" : "md:pr-6"} border-white/4 sm:pr-4`}
            >
              <p className="font-mono text-[10px] sm:text-[11px] text-cyan-400 tracking-wide mb-3">
                {category}
              </p>
              {techs.map((tech) => (
                <p
                  key={tech}
                  className="text-[12px] sm:text-[13px] text-slate-500 hover:text-slate-300 transition-colors py-0.5"
                >
                  {tech}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
