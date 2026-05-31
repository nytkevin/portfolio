"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="py-40 md:py-40 min-h-screen w-full">
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            scale: 1.03,
            y: -6,
            transition: { type: "spring", stiffness: 100, damping: 20 },
          }}
          whileTap={{ scale: 0.98 }}
          className="relative flex items-center justify-center h-56 w-56 md:h-56 md:w-56 lg:h-72 lg:w-72 rounded-full"
        >
          <Image
            src="/nyt-kevin.jpeg"
            alt="NZAYITURIKI Kevin"
            fill
            className="rounded-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto w-full max-w-4xl px-4 sm:px-6"
        >
          <h1 className="roboto-mono mb-4 text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Kevin Nzayituriki
          </h1>
          <h1 className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl my-5">
            Web developer
          </h1>
          <p className="inter-desc mx-auto max-w-2xl leading-relaxed text-gray-400 text-sm md:text-lg">
            A Frontend focused web Developer building the frontend of websites
            and web applications that leads to the success of the overall
            product.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
