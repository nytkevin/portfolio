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

const navigation = [
  { label: "Home", section: "home" },
  { label: "Tech", section: "tech" },
  { label: "Projects", section: "projects" },
  { label: "Contact", section: "contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kevin-nyt/",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nyt_kevin/",
    icon: FaInstagram,
  },
  {
    label: "GitHub",
    href: "https://github.com/nytkevin",
    icon: FaGithub,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 120;
      let currentSection = navigation[0].section;

      for (const { section } of navigation) {
        const element = document.getElementById(section);

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
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

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as Node;

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

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="roboto-mono text-lg font-bold tracking-tight text-white transition-colors hover:text-yellow-300 sm:text-xl"
        >
          <span className="text-yellow-300">N.</span>K
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigation.map(({ label, section }) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => handleNavClick(section)}
              className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                activeSection === section
                  ? "text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:mx-auto after:h-0.5 after:w-4 after:rounded-full after:bg-yellow-300"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 md:flex">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 transition-colors hover:text-yellow-300"
                aria-label={label}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <a
            href="/Kevin_Nzayituriki_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-yellow-300 px-3.5 py-2 text-xs font-bold text-slate-950 transition-colors hover:bg-yellow-200 md:inline-flex"
          >
            Resume
          </a>

          <button
            onClick={() => setIsOpen((open) => !open)}
            ref={toggleButtonRef}
            className="text-xl text-slate-300 transition-colors hover:text-yellow-300 md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="border-t border-white/[0.06] bg-black/95 px-4 py-4 backdrop-blur-xl md:hidden"
        >
          <nav className="space-y-1" aria-label="Mobile navigation">
            {navigation.map(({ label, section }) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => handleNavClick(section)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  activeSection === section
                    ? "bg-yellow-300/10 text-yellow-300"
                    : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 transition-colors hover:text-yellow-300"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <a
              href="/Kevin_Nzayituriki_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-yellow-300 px-3.5 py-2 text-xs font-bold text-slate-950 transition-colors hover:bg-yellow-200"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
