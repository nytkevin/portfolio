import Image from "next/image";
import type { ReactNode } from "react";
import {
  availableCommands,
  type CommandResult,
} from "@/app/lib/terminal/commands";
import { themeNames } from "@/app/lib/terminal/themes";

type TerminalOutputProps = {
  result: Exclude<CommandResult, { type: "clear" }>;
  onCommand: (command: string) => void;
};

export function CommandButton({
  command,
  onCommand,
  children,
}: {
  command: string;
  onCommand: (command: string) => void;
  children?: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => onCommand(command)}
      className="text-term-accent underline decoration-dashed decoration-term-accent/50 underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-term-accent focus-visible:ring-offset-2 focus-visible:ring-offset-term-win"
    >
      {children ?? command}
    </button>
  );
}

const muted = "text-term-dim";
const text = "text-term-fg";

export default function TerminalOutput({
  result,
  onCommand,
}: TerminalOutputProps) {
  const command = (name: string) => (
    <CommandButton command={name} onCommand={onCommand} />
  );
  switch (result.type) {
    case "help":
      return (
        <div className="mt-2 space-y-2 font-mono text-sm leading-6">
          <p className={text}>Available Commands</p>
          <div className="grid grid-cols-[12ch_minmax(0,1fr)] gap-x-4 gap-y-1">
            {availableCommands.map((item) => (
              <div key={item.name} className="contents">
                <span>{command(item.name)}</span>
                <span className={muted}>{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case "about":
      return (
        <div className="mt-2 space-y-2 font-mono text-sm leading-6">
          <p className="font-bold text-white">Kevin Nzayituriki</p>
          <p className={muted}>Full-stack Software Developer</p>
          <p className={text}>{result.text}</p>
          <p className={muted}>
            Next: {command("projects")} · {command("skills")} ·{" "}
            {command("contact")}
          </p>
        </div>
      );
    case "projects":
      return (
        <div className="mt-6 w-full space-y-8">
          {result.projects.map((project) => (
            <article
              key={project.id}
              className="border-l-2 border-term-line py-4 pl-6"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="relative aspect-video w-full shrink-0 sm:w-64 md:w-72 lg:w-80">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-mono text-sm font-bold text-white">
                    {project.name}
                  </h3>
                  <p className={`mt-2 font-mono text-xs leading-6 ${muted}`}>
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-term-accent/35 px-3 py-1 font-mono text-[10px] text-term-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-term-accent underline decoration-dashed underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-term-accent"
                    >
                      live demo
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-term-accent underline decoration-dashed underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-term-accent"
                      >
                        source code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      );
    case "skills":
      return (
        <div className="mt-2 space-y-3 font-mono text-sm">
          {result.technologies.map((category) => (
            <div key={category.title}>
              <p className="font-bold text-term-accent2">{category.title}</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item.name}
                    className="rounded-full border border-term-accent/35 px-2 py-0.5 text-xs text-term-accent"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case "experience":
      return (
        <div className="mt-2 border-l-2 border-term-line pl-3 font-mono text-sm leading-6 text-term-fg">
          {result.lines.map((line, index) => (
            <p key={`${line}-${index}`}>{line || "\u00a0"}</p>
          ))}
        </div>
      );
    case "contact":
      return (
        <div className="mt-2 grid gap-2 font-mono text-sm sm:grid-cols-2">
          <p>
            <span className="text-term-accent2">email</span>{" "}
            <a
              href={`mailto:${result.email}`}
              className="text-term-accent underline decoration-dashed underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-term-accent"
            >
              {result.email}
            </a>
          </p>
          {result.socialLinks.map((link) => (
            <p key={link.name}>
              <span className="text-term-accent2">
                {link.name.toLowerCase()}
              </span>{" "}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-term-accent underline decoration-dashed underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-term-accent"
              >
                {link.name}
              </a>
            </p>
          ))}
          <p className={`sm:col-span-2 ${muted}`}>
            Email is the fastest way to reach me.
          </p>
        </div>
      );
    case "ls":
      return (
        <div className="mt-2 grid gap-1 font-mono text-sm sm:grid-cols-2">
          {result.files.map((file) => (
            <span key={file}>
              {file === "projects/" ? (
                <>{command("projects")}/</>
              ) : (
                <CommandButton command={`cat ${file}`} onCommand={onCommand}>
                  {file}
                </CommandButton>
              )}
            </span>
          ))}
        </div>
      );
    case "cat-error":
      return (
        <div className="mt-2 space-y-1 font-mono text-sm">
          <p className="text-term-bad">{result.message}</p>
          <p className={muted}>Run {command("ls")} to see available files.</p>
        </div>
      );
    case "theme-list":
      return (
        <div className="mt-2 space-y-1 font-mono text-sm">
          <p className={muted}>
            Current theme:{" "}
            <span className="text-term-fg">{result.currentTheme}</span>
          </p>
          <p>
            Available:{" "}
            {result.themes.map((name) => (
              <span key={name}>{command(`theme ${name}`)} </span>
            ))}
          </p>
        </div>
      );
    case "theme-set":
      return (
        <p className="mt-2 font-mono text-sm text-term-ok">
          Theme changed to {result.theme}.
        </p>
      );
    case "theme-error":
      return (
        <div className="mt-2 space-y-1 font-mono text-sm">
          <p className="text-term-bad">Unknown theme: {result.theme}</p>
          <p className={muted}>
            Available:{" "}
            {themeNames.map((name) => (
              <span key={name}>{command(`theme ${name}`)} </span>
            ))}
          </p>
        </div>
      );
    case "neofetch":
      return (
        <div className="mt-2 grid max-w-sm grid-cols-[10ch_1fr] font-mono text-sm">
          {[
            ["user", "visitor"],
            ["host", "nytkevin"],
            ["role", "Full-stack Software Developer"],
            ["location", "Canada"],
            ["shell", "portfolio-sh 1.0"],
            ["theme", result.currentTheme],
            ["uptime", `${result.uptime}s`],
          ].map(([key, value]) => (
            <div key={key} className="contents">
              <span className="text-term-accent2">{key}</span>
              <span className={text}>{value}</span>
            </div>
          ))}
        </div>
      );
    case "text":
      return (
        <p className={`mt-2 font-mono text-sm ${result.muted ? muted : text}`}>
          {result.text}
        </p>
      );
    case "history":
      return (
        <div className="mt-2 font-mono text-sm">
          {result.commands.length ? (
            result.commands.map((item, index) => (
              <p key={`${item}-${index}`} className={text}>
                {index + 1} {item}
              </p>
            ))
          ) : (
            <p className={muted}>No commands yet.</p>
          )}
        </div>
      );
    case "error": {
      const suggestions = availableCommands
        .filter((item) => item.name.startsWith(result.command.toLowerCase()))
        .slice(0, 3);
      return (
        <div className="mt-2 space-y-1 font-mono text-sm">
          <p className="text-term-bad">command not found: {result.command}</p>
          <p className={muted}>
            Did you mean
            {suggestions.length ? (
              suggestions.map((item) => (
                <span key={item.name}>{command(item.name)} </span>
              ))
            ) : (
              <>{command("help")}.</>
            )}
          </p>
        </div>
      );
    }
  }
}
