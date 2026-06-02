"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const sections = ["home", "tech", "projects", "contact"];
    const navOffset = 160;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + navOffset;
      let currentSection = sections[0];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        menuRef.current &&
        toggleButtonRef.current &&
        !menuRef.current.contains(target) &&
        !toggleButtonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, [isOpen]);

  const linkClass = (section: string) =>
    `font-medium transition duration-300 ${
      activeSection === section
        ? "text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-white"
        : "text-white/65 hover:text-white"
    }`;

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <div className="fixed z-50 w-full border-b border-white/20 bg-slate-950/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="cursor-pointer text-xl font-bold text-white transition hover:text-white/80 sm:text-2xl"
        >
          N.K
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-center">
          <nav className="hidden gap-6 md:flex">
            <a
              href="#home"
              onClick={() => setActiveSection("home")}
              className={`relative ${linkClass("home")}`}
            >
              Home
            </a>
            <a
              href="#tech"
              onClick={() => setActiveSection("tech")}
              className={`relative ${linkClass("tech")}`}
            >
              Tech
            </a>
            <a
              href="#projects"
              onClick={() => setActiveSection("projects")}
              className={`relative ${linkClass("projects")}`}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setActiveSection("contact")}
              className={`relative ${linkClass("contact")}`}
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="ml-4 flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://www.linkedin.com/in/kevin-nyt/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition duration-300 hover:border-white/30 hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href="https://www.instagram.com/nyt_kevin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition duration-300 hover:border-white/30 hover:bg-white/10"
              aria-label="Instagram"
            >
              <FaInstagram size={15} />
            </a>
            <a
              href="https://github.com/nytkevin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition duration-300 hover:border-white/30 hover:bg-white/10"
              aria-label="GitHub"
            >
              <FaGithub size={15} />
            </a>
          </div>

          <a
            href="/Kevin_Nzayituriki_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-white bg-white px-4 pb-1 pt-1.5 font-medium text-slate-950 transition duration-300 hover:bg-white/90 hover:scale-105 md:inline-flex"
          >
            resume
          </a>

          <button
            onClick={toggleMenu}
            ref={toggleButtonRef}
            className="text-2xl text-white md:hidden"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="border-t border-white/10 bg-slate-950/75 backdrop-blur-md md:hidden"
        >
          <div className="space-y-3 px-4 py-4">
            <a
              href="#home"
              onClick={() => handleNavClick("home")}
              className={`block py-2 font-medium transition duration-300 ${
                activeSection === "home"
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Home
            </a>
            <a
              href="#tech"
              onClick={() => handleNavClick("tech")}
              className={`block py-2 font-medium transition duration-300 ${
                activeSection === "tech"
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Tech
            </a>
            <a
              href="#projects"
              onClick={() => handleNavClick("projects")}
              className={`block py-2 font-medium transition duration-300 ${
                activeSection === "projects"
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className={`block py-2 font-medium transition duration-300 ${
                activeSection === "contact"
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Contact
            </a>
            <div className="flex  flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/nyt_kevin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-nyt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={15} />
              </a>
              <a
                href="https://github.com/nytkevin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white"
                aria-label="GitHub"
              >
                <FaGithub size={15} />
              </a>
            </div>
            <a
              href="/Kevin_Nzayituriki_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-white bg-white px-4 py-2 text-center font-medium text-slate-950 transition duration-300 hover:bg-white/90"
            >
              resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
