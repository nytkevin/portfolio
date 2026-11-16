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
      name: "Preston Day Clinic",
      image: "/prestondayclinic.png",
      description:
        "A fictional clinic website created to showcase frontend development and UI design skills. Features a modern healthcare interface with responsive layouts, service sections, doctor profiles, and appointment-focused user experience.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      link: "https://prestondayclinic.vercel.app/",
      github: "https://github.com/nytkevin/preston-day-clinic.git",
      icon: <FaGithub />,
    },
    {
      id: 4,
      name: "Cinepoint",
      image: "/cinepoint.png",
      description:
        "A full-stack movie booking application that lets users explore movies, browse showtimes, select seats, and book tickets securely. Features a responsive Next.js frontend, an Express REST API, PostgreSQL database integration, and Stripe payment processing.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Stripe",
      ],
      link: "https://cine-point-ca.vercel.app/",
      github: "https://github.com/nytkevin/cine-point",
      icon: <FaGithub />,
    },
    {
      id: 5,
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
      id: 6,
      name: "Rwanda Address Hub",
      image: "/rah.png",
      description:
        "An intuitive address selection tool for Rwanda. Select a province to view its districts, then progressively drill down to find your exact location. The final address is displayed in an easy-to-copy format for seamless integration.",
      tech: ["React", "TypeScript", "Rapid API", "Tailwind CSS"],
      link: "https://rwanda-address-hub.vercel.app/",
      github: "https://github.com/nytkevin/Rwanda-Address-Hub.git",
      icon: <FaGithub />,
    },
    {
      id: 7,
      name: "Stock Market Stak",
      image: "/marketstack.png",
      description:
        "A market data lookup and dashboard app offering tickers, exchanges, end-of-day and historical data, splits, dividends, and currency/timezone information via internal API routes.",
      tech: ["React", "TypeScript", "redux", "MarketStack API", "Tailwind CSS"],
      link: "https://martek-stack.vercel.app/",
      github: "https://github.com/nytkevin/martek-Stack",
      icon: <FaGithub />,
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-16 md:py-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <p className="roboto-mono text-sm text-yellow-300">$ build_log</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
            A selection of interfaces and applications I&apos;ve built to solve
            practical problems.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-900/70 shadow-lg shadow-black/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/25"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-100"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-slate-950/80 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-bold tracking-tight text-white">
                    {project.name}
                  </h2>
                  <span className="roboto-mono pt-1 text-[10px] text-yellow-300/70">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-3 min-h-24 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/60">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex gap-3 pt-7">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-300 px-3 py-2.5 text-sm font-bold text-slate-950 transition duration-300 hover:bg-yellow-200"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live demo
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
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 px-3 py-2.5 text-sm font-semibold text-slate-200 transition duration-300 hover:bg-white/8 hover:text-white ${
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
        </motion.div>
      </div>
    </section>
  );
}
