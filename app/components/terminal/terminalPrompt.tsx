export default function TerminalPrompt() {
  return (
    <span className="inline-flex shrink-0 items-center font-mono text-[13px] leading-7 sm:text-sm">
      <span className="text-term-ok">visitor@kevin</span>
      <span className="text-term-dim"> :</span>
      <span className="text-term-accent"> ~</span>
      <span className="text-term-accent2"> $</span>
    </span>
  );
}
