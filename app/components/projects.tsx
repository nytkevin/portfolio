"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Auspicious Woman",
      image: "/auspicious.png",
      description:
        "An entrepreneur learning platform offering courses from beginner to expert level, with certificates after completion. It helps women and gender-diverse learners build, scale, and grow their businesses through practical, accessible education.",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "shadcn",
        "Supabase",
      ],
      link: "https://learn.auspiciousapp.com/",
      github: "",
      icon: <FaGithub />,
    },
    {
      id: 2,
      name: "Loopit",
      image: "/loopit.png",
      description:
        "A movie and TV show discovery platform featuring advanced search functionality and genre filtering. Seamlessly browse through thousands of titles and click on any to view detailed information including ratings, cast, synopsis, and more.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Next.js", "TMDB API"],
      link: "https://loopit-pi.vercel.app/",
      github: "https://github.com/nytkevin/loopit.git",
      icon: <FaGithub />,
    },
    {
      id: 3,
      name: "Spotify",
      image: "/spotify.png",
      description:
        "Music streaming integration project showcasing API integration and real-time data handling. Discover, play, and manage your favorite tracks.",
      tech: [
        "React",
        "TypeScript",
        "Spotify API",
        "Tailwind CSS",
        "SPOTIFY FREE API",
      ],
      link: "https://spotify-clone-two-fawn.vercel.app/",
      github: "https://github.com/nytkevin/spotify-clone.git",
      icon: <FaGithub />,
    },
    {
      id: 4,
      name: "Rwanda Address Hub",
      image: "/rah.png",
      description:
        "An intuitive address selection tool for Rwanda. Select a province to view its districts, then progressively drill down to find your exact location. The final address is displayed in an easy-to-copy format for seamless integration.",
      tech: ["React", "TypeScript", "Rapid API", "Tailwind CSS"],
      link: "https://rwanda-address-hub.vercel.app/",
      github: "https://github.com/nytkevin/Rwanda-Address-Hub.git",
      icon: <FaGithub />,
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-16 md:py-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-center text-2xl uppercase tracking-[0.35em] text-white font-bold pb-5">
            Projects
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                delay: idx * 0.08,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex w-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-slate-900/70 transition duration-300 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 md:flex-row"
            >
              <div className="w-full border-white/10 bg-slate-950/10 md:w-[42%] md:border-b-0">
                <div className="relative aspect-16/11 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
                <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  {project.name}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold text-white/55 sm:text-sm">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/30 hover:bg-white/15"
                  >
                    <FaExternalLinkAlt size={14} />
                    Demo
                  </a>

                  <a
                    href={project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!project.github) {
                        e.preventDefault();
                      }
                    }}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-slate-950/60 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/30 hover:bg-slate-950 ${
                      !project.github ? "cursor-not-allowed opacity-50" : ""
                    }`}
                  >
                    <FaGithub size={14} />
                    Git
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
