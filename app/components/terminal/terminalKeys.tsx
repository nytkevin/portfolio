"use client";

type TerminalKeysProps = {
  onCommand: (command: string) => void;
};

const keys = [
  "help",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
  "theme",
];

export default function TerminalKeys({ onCommand }: TerminalKeysProps) {
  return (
    <nav
      className="flex min-w-0 gap-2 overflow-x-auto px-3 py-2 scrollbar-none [&::-webkit-scrollbar]:hidden"
      aria-label="Quick commands"
    >
      {keys.map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => onCommand(key)}
          className="shrink-0 rounded-[7px] border border-term-line border-b-[3px] bg-term-bar px-2.5 py-1 font-mono text-[12.5px] text-term-fg transition hover:border-term-accent hover:text-term-accent active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-term-accent focus-visible:ring-offset-2 focus-visible:ring-offset-term-bar"
        >
          {key}
        </button>
      ))}
    </nav>
  );
}
