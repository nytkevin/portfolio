"use client";

import Image from "next/image";
import { useState } from "react";

export default function TerminalProfile() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      aria-label="Developer profile"
      className="mt-6 flex flex-col gap-4 rounded-xl border border-term-accent/35 bg-term-bar/40 p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5"
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-term-accent/70 sm:h-24 sm:w-24 md:h-28 md:w-28">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center bg-term-bar text-xl font-bold text-term-accent sm:text-2xl">
            KN
          </div>
        ) : (
          <Image
            src="/profile.jpg"
            alt="Kevin Nzayituriki"
            fill
            sizes="112px"
            className="object-cover"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <div className="min-w-0">
        <h2 className="font-mono text-base font-bold text-white sm:text-lg">
          Kevin Nzayituriki
        </h2>
        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs sm:text-sm">
          <span className="text-term-accent">Full-Stack Developer</span>
          <span className="text-term-accent2">2+ Years Coding</span>
        </div>
        <p className="mt-2 max-w-4xl font-mono text-xs leading-6 text-term-dim sm:text-sm">
          I&apos;m a full-stack developer with 2 years of hands-on experience
          building modern web applications. I enjoy working across the frontend
          and backend, turning ideas into functional, user-friendly products.
          I work with technologies like React, Next.js, TypeScript, Node.js,
          Python, FastAPI, and PostgreSQL, and I&apos;m always exploring better
          ways to build reliable and maintainable software.
        </p>
      </div>
    </section>
  );
}
