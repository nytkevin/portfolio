"use client";

import { useEffect, useRef } from "react";
import type { CommandEntry } from "@/app/lib/terminal/commands";
import TerminalInput from "./terminalInput";
import TerminalOutput, { CommandButton } from "./terminalOutput";
import TerminalPrompt from "./terminalPrompt";

type AutocompleteResult = { completedValue?: string; suggestions: string[] };
type TerminalBodyProps = {
  entries: CommandEntry[];
  input: string;
  history: string[];
  suggestions: string[];
  isProcessing: boolean;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  onAutocomplete: (value: string) => AutocompleteResult;
  onSuggestions: (suggestions: string[]) => void;
  onClearTerminal: () => void;
  onCancel: () => void;
  onCommand: (command: string) => void;
};

export default function TerminalBody({
  entries,
  input,
  history,
  suggestions,
  isProcessing,
  onInputChange,
  onSubmit,
  onAutocomplete,
  onSuggestions,
  onClearTerminal,
  onCancel,
  onCommand,
}: TerminalBodyProps) {
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({
      top: bodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [entries, suggestions, isProcessing]);
  return (
    <div
      ref={bodyRef}
      className="terminal-scrollbar flex min-h-0 flex-1 flex-col overflow-y-auto bg-term-win px-4 pb-1 pt-4 font-mono text-[13px] leading-[1.6] sm:px-6 sm:pb-2 sm:pt-5 sm:text-sm"
      aria-busy={isProcessing}
    >
      <div role="log" aria-live="polite" className="min-w-0 wrap-anywhere">
        <div className="font-mono text-start leading-none">
          <pre
            aria-label="NK ASCII logo"
            className="font-mono text-[10px] leading-[1.2] font-bold text-white sm:text-xs md:text-sm"
          >
            {String.raw` __    __      __    __ 
|  \  |  \    |  \  /  \
| $$\ | $$    | $$ /  $$
| $$$\| $$    | $$/  $$ 
| $$$$\ $$    | $$  $$  
| $$\$$ $$    | $$$$$\  
| $$ \$$$$ __ | $$ \$$\ 
| $$  \$$$|  \| $$  \$$\
 \$$   \$$ \$$ \$$   \$$`}
          </pre>
        </div>
        <p className="mt-3 font-bold text-white">
          Welcome to Kevin&apos;s Interactive Portfolio.
        </p>
        <p className="text-term-dim">
          Explore my projects, technical skills, and experience using this
          terminal.
        </p>

        <p className="mt-2 text-term-dim">
          Type{" "}
          <CommandButton command="help" onCommand={onCommand}>
            help
          </CommandButton>{" "}
          to see commands, or start with{" "}
          {["about", "projects", "contact"].map((item) => (
            <span key={item}>
              {
                <CommandButton command={item} onCommand={onCommand}>
                  {item}
                </CommandButton>
              }{" "}
            </span>
          ))}
          .
        </p>
        {entries.map((entry, index) => (
          <div
            key={`${entry.command}-${index}`}
            className="terminal-command-line mt-4"
          >
            <div className="flex min-w-0 items-start">
              <TerminalPrompt />
              <span className="min-w-0 wrap-break-word pl-2 text-term-fg">
                {entry.command}
              </span>
            </div>
            <TerminalOutput result={entry.result} onCommand={onCommand} />
          </div>
        ))}
        {suggestions.length > 0 && (
          <p className="mt-3 text-term-dim">
            Suggestions:{" "}
            {suggestions.map((item) => (
              <span key={item}>
                {
                  <CommandButton command={item} onCommand={onCommand}>
                    {item}
                  </CommandButton>
                }{" "}
              </span>
            ))}
          </p>
        )}
        {isProcessing && (
          <p className="mt-3 text-term-dim motion-safe:animate-pulse">
            processing...
          </p>
        )}
        <div className="mt-3 flex min-w-0 items-start">
          <TerminalPrompt />
          <TerminalInput
            value={input}
            history={history}
            isProcessing={isProcessing}
            onChange={onInputChange}
            onSubmit={onSubmit}
            onAutocomplete={onAutocomplete}
            onSuggestions={onSuggestions}
            onClearTerminal={onClearTerminal}
            onCancel={onCancel}
          />
        </div>
      </div>
    </div>
  );
}
