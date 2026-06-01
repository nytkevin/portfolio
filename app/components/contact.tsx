"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kevin-nyt/",
      icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nyt_kevin/",
      icon: FaInstagram,
    },
    {
      name: "Github",
      url: "https://github.com/nytkevin",
      icon: FaGithub,
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-16 md:py-24 pb-24 md:pb-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          className="mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          <h2 className="text-center text-2xl uppercase tracking-[0.35em] text-white font-bold pb-7">
            Contact Me
          </h2>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-white/15 bg-slate-950/70 p-6 md:p-8"
          variants={{
            hidden: { opacity: 0, y: 28 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, ease: "easeOut" },
            },
          }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <motion.div
              className="max-w-2xl"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                Get in touch
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                If you want to discuss a project, collaboration, or just say
                hello, send me an email and I’ll get back to you.
              </p>
            </motion.div>

            <motion.a
              href="mailto:nzayiutrikikevin@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white px-6 py-3 text-sm font-semibold text-slate-950"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <FaEnvelope size={14} />
              Contact Me
            </motion.a>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <motion.div
              className="mb-4 flex items-center justify-between gap-4"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: "easeOut" },
                },
              }}
            >
              <p className="text-sm font-medium text-white/70">
                Find me elsewhere
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-3 sm:grid-cols-3"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white"
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.55, ease: "easeOut" },
                      },
                    }}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-slate-900 text-white">
                      <Icon size={16} />
                    </span>
                    <span className="text-sm font-medium">{link.name}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
