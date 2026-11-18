"use client";

import { useEffect, useState } from "react";
import type { ThemeName } from "@/app/lib/terminal/themes";

type TerminalStatusProps = {
  theme: ThemeName;
};

function getTime() {
  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

export default function TerminalStatus({ theme }: TerminalStatusProps) {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const interval = window.setInterval(() => setTime(getTime()), 20_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <footer className="flex items-center justify-between gap-3 border-t border-term-line bg-term-bar px-3 py-1.5 font-mono text-xs text-term-dim">
      <span className="flex shrink-0 items-center gap-1.5">
        <span className="h-1.75 w-1.75 rounded-full bg-term-ok" />
        online
      </span>
      <span className="hidden truncate text-center min-[560px]:block">
        Tab completes. Up and Down recall history.
      </span>
      <span className="shrink-0">
        {theme} · {time}
      </span>
    </footer>
  );
}
