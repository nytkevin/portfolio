"use client";

export default function Hero() {
  return (
    <section className="pb-30 flex items-center pt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <p className="text-cyan-400 text-lg mb-4">Hi, my name is</p>

          <h1 className="text-7xl md:text-8xl font-bold text-white mb-6">
            Kevin NZAYITURIKI.
          </h1>

          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-6">
            I build things for the web.
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mb-8 leading-relaxed">
            A Frontend focused web Developer building the frontend of websites
            and web applications that leads to the success of the overall
            product
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
