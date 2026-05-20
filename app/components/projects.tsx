"use client";

import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Loopit",
      description:
        "A movie and TV show discovery platform featuring advanced search functionality and genre filtering. Seamlessly browse through thousands of titles and click on any to view detailed information including ratings, cast, synopsis, and more.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      link: "https://loopit-pi.vercel.app/",
      github: "https://github.com/nytkevin/loopit.git",
      icon: <FaGithub />,
    },
    {
      id: 2,
      name: "Spotify",
      description:
        "Music streaming integration project showcasing API integration and real-time data handling. Discover, play, and manage your favorite tracks.",
      tech: ["React", "TypeScript", "Spotify API", "Tailwind CSS"],
      link: "https://spotify-clone-two-fawn.vercel.app/",
      github: "https://github.com/nytkevin/spotify-clone.git",
      icon: <FaGithub />,
    },
    {
      id: 3,
      name: "Rwanda Address Hub",
      description:
        "An intuitive address selection tool for Rwanda. Select a province to view its districts, then progressively drill down to find your exact location. The final address is displayed in an easy-to-copy format for seamless integration.",
      tech: ["React", "TypeScript", "Rapid API", "Tailwind CSS"],
      link: "https://rwanda-address-hub.vercel.app/",
      github: "https://github.com/nytkevin/Rwanda-Address-Hub.git",
      icon: <FaGithub />,
    },
  ];

  return (
    <section id="projects" className=" py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
            <span className="text-cyan-400">02.</span>
            <span className="text-white">Projects</span>
            <div className="flex-1 h-0.5 bg-linear-to-r from-cyan-400 to-transparent ml-4"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-105"
            >
              <div className="bg-linear-to-r from-slate-700 to-slate-600 px-6 py-8 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {project.name}
                  </h2>
                </div>
                <div className="text-5xl">{project.icon}</div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-gray-400 text-sm font-semibold mb-3">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 rounded-lg text-center hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt size={16} />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 rounded-lg text-center hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 flex items-center justify-center gap-2"
                  >
                    <FaCode size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
