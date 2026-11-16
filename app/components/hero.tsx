"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(250,204,21,0.08),transparent_28%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-8 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 max-w-4xl md:order-1"
        >
          <p className="roboto-mono mb-6 text-sm text-yellow-300 sm:text-base">
            $ whoami
          </p>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            <span className="inline-flex items-baseline whitespace-nowrap">
              Kevin Nzayituriki
              <span
                className="ml-2 h-5 w-3 translate-y-1 bg-yellow-300 motion-safe:animate-[cursor-blink_2.0s_ease-in-out_infinite] hidden lg:inline-block lg:h-5 lg:w-5 pl-5"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="mt-6 text-xl font-medium text-slate-300 sm:text-2xl">
            Full-stack Software Developer
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I&apos;ve spent the last 2+ years building web applications,
            exploring new technologies, and solving problems through code. I
            enjoy creating responsive, intuitive experiences and turning complex
            ideas into software that makes people&apos;s lives easier.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl bg-yellow-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-yellow-200"
            >
              View projects
            </motion.a>
            <motion.a
              href="/Kevin_Nzayituriki_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:border-yellow-300/60 hover:bg-white/10"
            >
              Download resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-none"
        >
          <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-slate-900/60 p-2 shadow-2xl shadow-black/40">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/kevin-nyt.jpeg"
                alt="Illustrated portrait of Kevin Nzayituriki"
                fill
                priority
                sizes="(max-width: 767px) 80vw, 36vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
