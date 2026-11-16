import { FaAngleDoubleUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 px-4 pb-8 pt-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <a
              href="#home"
              className="roboto-mono text-lg font-bold tracking-tight text-white transition-colors hover:text-yellow-300"
            >
              <span className="text-yellow-300">N.</span>K
            </a>
            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">
              Software Developer building thoughtful, useful web experiences.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300"
            aria-label="Footer navigation"
          >
            <a href="#home" className="transition-colors hover:text-yellow-300">
              Home
            </a>
            <a href="#tech" className="transition-colors hover:text-yellow-300">
              Tech
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-yellow-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-yellow-300"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/6 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kevin Nzayituriki</p>

          <a
            href="#home"
            className="inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-yellow-300"
          >
            Back to top
            <span aria-hidden="true">
              <FaAngleDoubleUp />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
