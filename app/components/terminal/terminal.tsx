"use client";

import { useEffect, useRef, useState } from "react";
import {
  getCommandSuggestions,
  handleCommand,
} from "@/app/lib/terminal/commandHandler";
import type { CommandEntry } from "@/app/lib/terminal/commands";
import TerminalBody from "./terminalBody";
import TerminalHeader from "./terminalHeader";
// import TerminalKeys from "./terminalKeys";
import TerminalStatus from "./terminalStatus";
import { isThemeName, type ThemeName, THEMES } from "@/app/lib/terminal/themes";

export default function Terminal() {
  const [entries, setEntries] = useState<CommandEntry[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [theme, setTheme] = useState<ThemeName>("ice");
  const [startedAt] = useState(() => Date.now());
  const windowRef = useRef<HTMLDivElement | null>(null);
  const hasRestoredTheme = useRef(false);

  useEffect(() => {
    let storedTheme: string | null = null;
    try {
      storedTheme = window.localStorage.getItem("kevin-theme");
    } catch {
      storedTheme = null;
    }
    const initialTheme =
      storedTheme && isThemeName(storedTheme) ? storedTheme : "ice";
    const timer = window.setTimeout(() => {
      const definition = THEMES[initialTheme];
      document.documentElement.style.setProperty(
        "--term-accent",
        definition.accent,
      );
      document.documentElement.style.setProperty(
        "--term-accent2",
        definition.accent2,
      );
      try {
        window.localStorage.setItem("kevin-theme", initialTheme);
      } catch {
        // Theme still applies for this session when storage is unavailable.
      }
      hasRestoredTheme.current = true;
      setTheme(initialTheme);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasRestoredTheme.current) return;
    const definition = THEMES[theme];
    document.documentElement.style.setProperty(
      "--term-accent",
      definition.accent,
    );
    document.documentElement.style.setProperty(
      "--term-accent2",
      definition.accent2,
    );
    try {
      window.localStorage.setItem("kevin-theme", theme);
    } catch {
      // Theme still applies for this session when storage is unavailable.
    }
  }, [theme]);

  const executeCommand = (rawCommand: string) => {
    const command = rawCommand.trim();

    if (!command || isProcessing) return;

    setIsProcessing(true);
    const result = handleCommand(command, {
      currentTheme: theme,
      history,
      startedAt,
    });

    setHistory((currentHistory) => {
      if (currentHistory.at(-1) === command) return currentHistory;
      return [...currentHistory, command];
    });

    if (result.type === "clear") {
      setEntries([]);
    } else {
      setEntries((currentEntries) => [...currentEntries, { command, result }]);
    }

    if (result.type === "theme-set") setTheme(result.theme);

    setInput("");
    setSuggestions([]);
    setIsProcessing(false);
  };

  const submitCommand = () => executeCommand(input);

  const autocomplete = (value: string) => {
    const matches = getCommandSuggestions(value);
    const normalizedValue = value.trim().toLowerCase();

    if (matches.length === 1 && normalizedValue !== matches[0]) {
      return { completedValue: matches[0], suggestions: [] };
    }

    return {
      suggestions: matches.length > 1 ? matches : [],
    };
  };

  return (
    <section
      aria-label="Interactive terminal"
      className="h-dvh overflow-hidden bg-term-bg bg-[radial-gradient(circle,var(--color-term-dots)_1px,transparent_1px)] bg-size-[22px_22px] px-4 py-4 sm:px-6"
    >
      <div className="flex h-full items-center justify-center">
        <div
          ref={windowRef}
          onMouseDown={(event) => {
            const target = event.target as HTMLElement;
            if (
              !window.getSelection()?.toString() &&
              !target.closest("button, a, input")
            ) {
              windowRef.current
                ?.querySelector<HTMLInputElement>("input")
                ?.focus();
            }
          }}
          className="flex h-full min-h-0 w-full max-w-245 flex-col overflow-hidden rounded-[14px] border border-term-line bg-term-win shadow-[0_20px_80px_rgba(0,0,0,0.45)] focus-within:border-term-accent/45 focus-within:shadow-[0_20px_80px_rgba(0,0,0,0.45),0_0_60px_rgba(124,199,255,0.1)] sm:max-h-175"
        >
          <TerminalHeader />
          <TerminalBody
            entries={entries}
            input={input}
            history={history}
            suggestions={suggestions}
            isProcessing={isProcessing}
            onInputChange={setInput}
            onSubmit={submitCommand}
            onAutocomplete={autocomplete}
            onSuggestions={setSuggestions}
            onClearTerminal={() => {
              setEntries([]);
              setSuggestions([]);
            }}
            onCancel={() => setIsProcessing(false)}
            onCommand={executeCommand}
          />
          {/* <TerminalKeys onCommand={executeCommand} /> */}
          <TerminalStatus theme={theme} />
        </div>
      </div>
    </section>
  );
}
