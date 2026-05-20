"use client";

import Link from "next/link";
//  from-slate-900 via-slate-800 to-slate-900

export default function Navbar() {
  return (
    <div className="bg-linear-to-r shadow-lg shadow-blue-500/20 border-b-2 border-b-blue-400/50 rounded-b-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition"
        >
          Portfolio
        </Link>
        <nav className="flex gap-6">
          <a
            href="#about"
            className="text-white font-medium transition duration-300 hover:text-cyan-400"
          >
            <span className="text-cyan-400">01.</span>
            About
          </a>
          <a
            href="#projects"
            className="text-white font-medium transition duration-300 hover:text-cyan-400"
          >
            <span className="text-cyan-400">02.</span>
            Projects
          </a>
          <a
            href="#contact"
            className="text-white font-medium transition duration-300 hover:text-cyan-400"
          >
            <span className="text-cyan-400">03.</span>
            Contact
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 pb-1 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 transform hover:scale-105"
          >
            resume
          </a>
        </nav>
      </div>
    </div>
  );
}
