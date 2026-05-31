"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiCircleci,
  SiDocker,
  SiGraphql,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaReact } from "react-icons/fa6";

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
      { name: "React Native", icon: FaReact, accent: "text-sky-300" },
    ],
  },
  {
    title: "Backend",
    description: "Server-side logic and APIs.",
    items: [
      { name: "Python", icon: SiPython, accent: "text-blue-300" },
      { name: "NodeJS", icon: SiNodedotjs, accent: "text-green-400" },
      { name: "PHP", icon: SiPhp, accent: "text-indigo-300" },
      { name: "GraphQL", icon: SiGraphql, accent: "text-pink-400" },
    ],
  },
  {
    title: "Database",
    description: "Data storage and retrieval.",
    items: [
      { name: "MySQL", icon: SiMysql, accent: "text-sky-300" },
      { name: "PostgreSQL", icon: SiPostgresql, accent: "text-indigo-300" },
      { name: "MongoDB", icon: SiMongodb, accent: "text-emerald-400" },
      { name: "Redis", icon: SiRedis, accent: "text-red-400" },
    ],
  },
  {
    title: "DevOps",
    description: "Delivery, orchestration, and cloud tools.",
    items: [
      { name: "Docker", icon: SiDocker, accent: "text-sky-300" },
      { name: "Kubernetes", icon: SiKubernetes, accent: "text-blue-300" },
      { name: "CircleCI", icon: SiCircleci, accent: "text-slate-300" },
      { name: "AWS", icon: FaAws, accent: "text-amber-300" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 44, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Tech() {
  return (
    <section id="tech" className="min-h-screen pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-20 ">
        <div className="mb-8">
          <p className="text-center text-2xl uppercase tracking-[0.35em] text-white font-bold pb-7">
            Technologies
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {technologies.map((category) => (
            <motion.article
              key={category.title}
              variants={cardVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 240, damping: 18 },
              }}
              className="group rounded-3xl border border-white/15 bg-slate-900/70 p-6 backdrop-blur-sm transition-colors hover:border-white/30 md:p-7"
            >
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  {category.description}
                </p>
              </div>

              <div className="space-y-3">
                {category.items.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5"
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/70 ${item.accent}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium text-slate-200 sm:text-[15px]">
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
