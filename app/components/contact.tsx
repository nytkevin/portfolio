"use client";

import { motion, type Variants } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

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

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="pb-24 pt-16 md:pb-32 md:pt-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div variants={reveal} className="mb-8">
          <p className="roboto-mono text-sm text-yellow-300">$ contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s work together
          </h2>
        </motion.div>

        <motion.div
          variants={reveal}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-xl shadow-black/15"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-6 sm:p-8 md:p-10">
              <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                If you want to discuss a project, collaboration, or just say
                hello, send me an email and I&apos;ll get back to you.
              </p>

              <motion.a
                href="mailto:nzayiutrikikevin@gmail.com"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-yellow-300 px-5 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-yellow-200"
              >
                <FaEnvelope size={15} />
                Send an email
              </motion.a>

              <p className="mt-4 text-sm text-slate-300">
                nzayiutrikikevin@gmail.com
              </p>
            </div>

            <div className="border-t border-white/6 bg-slate-950/35 p-6 sm:p-8 lg:border-l lg:border-t-0">
              <p className="text-sm font-medium text-slate-300">
                Find me elsewhere
              </p>
              <motion.div
                className="mt-4 space-y-3"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
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
                      variants={reveal}
                      className="flex items-center justify-between rounded-xl bg-white/4 px-4 py-3 text-slate-300 transition-colors hover:bg-white/8 hover:text-yellow-300"
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={16} />
                        <span className="text-sm font-medium">{link.name}</span>
                      </span>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
