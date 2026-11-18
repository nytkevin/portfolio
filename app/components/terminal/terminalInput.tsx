"use client";

import { useEffect, useRef } from "react";

type AutocompleteResult = {
  completedValue?: string;
  suggestions: string[];
};

type TerminalInputProps = {
  value: string;
  history: string[];
  isProcessing: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onAutocomplete: (value: string) => AutocompleteResult;
  onSuggestions: (suggestions: string[]) => void;
  onClearTerminal: () => void;
  onCancel: () => void;
};

export default function TerminalInput({
  value,
  history,
  isProcessing,
  onChange,
  onSubmit,
  onAutocomplete,
  onSuggestions,
  onClearTerminal,
  onCancel,
}: TerminalInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const historyIndex = useRef(-1);
  const unfinishedInput = useRef("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const updateValue = (nextValue: string) => {
    historyIndex.current = -1;
    unfinishedInput.current = nextValue;
    onChange(nextValue);
    onSuggestions([]);
  };

  const navigateHistory = (direction: "back" | "forward") => {
    if (history.length === 0) return;

    if (direction === "back") {
      if (historyIndex.current === -1) {
        unfinishedInput.current = value;
        historyIndex.current = history.length - 1;
      } else {
        historyIndex.current = Math.max(0, historyIndex.current - 1);
      }
    } else if (historyIndex.current !== -1) {
      if (historyIndex.current < history.length - 1) {
        historyIndex.current += 1;
      } else {
        historyIndex.current = -1;
        onChange(unfinishedInput.current);
        return;
      }
    }

    onChange(history[historyIndex.current]);
    onSuggestions([]);
  };

  return (
    <div className="relative min-w-0 flex-1">
      <input
        ref={inputRef}
        type="text"
        value={value}
        disabled={isProcessing}
        onChange={(event) => updateValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            onSuggestions([]);
            onSubmit();
            historyIndex.current = -1;
            unfinishedInput.current = "";
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            navigateHistory("back");
          } else if (event.key === "ArrowDown") {
            event.preventDefault();
            navigateHistory("forward");
          } else if (event.key === "Tab") {
            event.preventDefault();
            const result = onAutocomplete(value);

            if (result.completedValue !== undefined) {
              historyIndex.current = -1;
              unfinishedInput.current = result.completedValue;
              onChange(result.completedValue);
            }

            onSuggestions(result.suggestions);
          } else if (event.key === "Escape") {
            event.preventDefault();
            updateValue("");
          } else if (event.ctrlKey && event.key.toLowerCase() === "l") {
            event.preventDefault();
            onClearTerminal();
            onSuggestions([]);
          } else if (event.ctrlKey && event.key.toLowerCase() === "c") {
            event.preventDefault();
            onCancel();
            updateValue("");
          }
        }}
        aria-label="Terminal command input"
        autoComplete="off"
        spellCheck={false}
        className="w-full bg-transparent font-mono text-base leading-7 text-term-fg caret-transparent outline-none placeholder:text-term-dim disabled:opacity-60 sm:text-sm"
        placeholder="type a command"
      />
      <span
        className="pointer-events-none absolute left-0 top-1/2 flex -translate-y-1/2 items-center whitespace-pre font-mono text-base sm:text-sm"
        aria-hidden="true"
      >
        <span className="invisible">{value}</span>
        <span className="ml-0.5 h-4 w-2 shrink-0 bg-term-accent motion-safe:animate-[terminal-cursor_1.2s_steps(2)_infinite]" />
      </span>
    </div>
  );
}
