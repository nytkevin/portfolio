export default function TerminalHeader() {
  return (
    <header className="grid h-11 grid-cols-3 items-center border-b border-term-line bg-term-bar px-4 font-mono text-xs">
      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-term-bad" />
        <span className="h-2.5 w-2.5 rounded-full bg-term-accent2" />
        <span className="h-2.5 w-2.5 rounded-full bg-term-ok" />
      </div>
      <p className="pointer-events-none text-center">
        <span className="font-medium text-term-fg">admin@nytkevin</span>
        <span className="text-term-dim"> ~portfolio</span>
      </p>
      <p className="justify-self-end text-term-dim max-[559px]:hidden">zsh</p>
    </header>
  );
}
