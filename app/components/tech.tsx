"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiSupabase,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

type TechnologyItem = {
  name: string;
  icon: IconType;
  accent: string;
};

type TechnologyCategory = {
  title: string;
  description: string;
  items: TechnologyItem[];
};

const technologies: TechnologyCategory[] = [
  {
    title: "Frontend",
    description: "Modern UI and interactive app layers.",
    items: [
      { name: "Tailwind CSS", icon: SiTailwindcss, accent: "text-cyan-300" },
      { name: "TypeScript", icon: SiTypescript, accent: "text-sky-400" },
      { name: "React JS", icon: FaReact, accent: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, accent: "text-sky-400" },
    ],
  },
  {
    title: "Backend",
    description: "Server-side logic and APIs.",
    items: [
      { name: "Node.js", icon: SiNodedotjs, accent: "text-green-400" },
      { name: "Express.js", icon: SiExpress, accent: "text-white" },
      { name: "Python", icon: SiPython, accent: "text-blue-300" },
      { name: "Supabase", icon: SiSupabase, accent: "text-emerald-400" },
    ],
  },
  {
    title: "Database",
    description: "Data storage and retrieval.",
    items: [
      { name: "MySQL", icon: SiMysql, accent: "text-sky-300" },
      { name: "PostgreSQL", icon: SiPostgresql, accent: "text-indigo-300" },
      { name: "MongoDB", icon: SiMongodb, accent: "text-emerald-400" },
      { name: "Oracle", icon: FaDatabase, accent: "text-red-500" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Tech() {
  return (
    <section id="tech" className="pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="roboto-mono text-sm text-yellow-300">$ toolkit</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
            A practical set of tools I use to design, build, and ship reliable
            digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {technologies.map((category, categoryIndex) => (
            <motion.article
              key={category.title}
              variants={cardVariants}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 240, damping: 20 },
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-lg shadow-black/10 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-black/20 sm:p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-slate-300">
                    {category.description}
                  </p>
                </div>
                <span className="roboto-mono text-xs text-yellow-300/70">
                  0{categoryIndex + 1}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.name}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group/item flex min-h-24 flex-col justify-between rounded-xl bg-slate-950/45 p-3 transition-colors duration-300 hover:bg-slate-950/75"
                    >
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-lg bg-white/6 ${item.accent}`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="mt-3 text-xs font-medium text-slate-200 sm:text-sm">
                        {item.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
