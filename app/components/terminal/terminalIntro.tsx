"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { nytAscii } from "@/app/lib/terminal/nytAscii";

const bootMessages = [
  "Initializing kernel",
  "Loading developer profile",
  "Mounting project directory",
  "Establishing environment",
  "Initializing interactive terminal",
];

const assemblyDuration = 900;
const introDuration = 3500;

function getVisibleAscii(revealedCharacters: number) {
  let characterIndex = 0;

  return nytAscii.map((line) =>
    [...line]
      .map((character) => {
        const isVisible = characterIndex < revealedCharacters;
        characterIndex += 1;
        return isVisible ? character : " ";
      })
      .join(""),
  );
}

type TerminalIntroProps = {
  onComplete: () => void;
};

export default function TerminalIntro({ onComplete }: TerminalIntroProps) {
  const [revealedCharacters, setRevealedCharacters] = useState(0);
  const [bootMessageCount, setBootMessageCount] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const hasCompleted = useRef(false);

  const completeIntro = useCallback(() => {
    if (hasCompleted.current) return;
    hasCompleted.current = true;
    onComplete();
  }, [onComplete]);

  const totalCharacters = useMemo(
    () => nytAscii.reduce((total, line) => total + line.length, 0),
    [],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      const reducedStateTimer = window.setTimeout(() => {
        setRevealedCharacters(totalCharacters);
        setBootMessageCount(bootMessages.length);
        setIsReady(true);
      }, 0);
      const reducedTimer = window.setTimeout(() => {
        setIsFading(true);
      }, 500);
      const completionTimer = window.setTimeout(() => {
        completeIntro();
      }, 900);

      return () => {
        window.clearTimeout(reducedStateTimer);
        window.clearTimeout(reducedTimer);
        window.clearTimeout(completionTimer);
        document.body.style.overflow = previousOverflow;
      };
    }

    let animationFrame = 0;
    const timers: number[] = [];
    const assemblyStartedAt = window.performance.now() + 500;

    const animateAssembly = (now: number) => {
      const elapsed = now - assemblyStartedAt;
      const progress = Math.min(Math.max(elapsed / assemblyDuration, 0), 1);
      setRevealedCharacters(Math.floor(progress * totalCharacters));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animateAssembly);
      }
    };

    timers.push(
      window.setTimeout(() => {
        animationFrame = window.requestAnimationFrame(animateAssembly);
      }, 500),
    );
    timers.push(window.setTimeout(() => setIsGlitching(true), 1500));
    timers.push(window.setTimeout(() => setIsGlitching(false), 1950));

    bootMessages.forEach((_, index) => {
      timers.push(
        window.setTimeout(
          () => {
            setBootMessageCount(index + 1);
          },
          2000 + index * 180,
        ),
      );
    });

    timers.push(window.setTimeout(() => setIsReady(true), 2890));
    timers.push(
      window.setTimeout(() => {
        setIsFading(true);
      }, introDuration - 700),
    );
    timers.push(
      window.setTimeout(() => {
        completeIntro();
      }, introDuration),
    );

    return () => {
      window.cancelAnimationFrame(animationFrame);
      timers.forEach((timer) => window.clearTimeout(timer));
      document.body.style.overflow = previousOverflow;
    };
  }, [completeIntro, totalCharacters]);

  const visibleAscii = getVisibleAscii(
    isFading ? totalCharacters : revealedCharacters,
  );

  return (
    <div
      className={`terminal-intro fixed inset-0 z-100 overflow-y-auto bg-term-bg px-4 py-8 text-term-accent transition-opacity duration-700 sm:px-8 ${
        isFading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-label="Portfolio startup animation"
      role="status"
    >
      <div className="flex min-h-full items-center justify-center">
        <div className="w-full max-w-4xl font-mono">
          <div className="mb-5 flex items-center gap-2 text-sm text-term-accent">
            <span className="terminal-intro-cursor" aria-hidden="true">
              _
            </span>
            <span>booting visitor@kevin</span>
          </div>

          <pre
            className={`terminal-intro-ascii overflow-x-auto text-center text-[clamp(0.35rem,1.35vw,0.9rem)] leading-[1.15] ${
              isGlitching ? "terminal-intro-glitch" : ""
            }`}
            aria-label="NYT ASCII logo"
          >
            {visibleAscii.join("\n")}
          </pre>

          <div className="mx-auto mt-6 max-w-xl space-y-1 text-xs leading-6 sm:text-sm">
            {bootMessages.slice(0, bootMessageCount).map((message) => (
              <p key={message} className="terminal-intro-boot">
                <span className="font-semibold">[ OK ]</span>{" "}
                <span className="text-term-dim">{message}</span>
              </p>
            ))}
          </div>

          {isReady && (
            <div className="mt-7 text-center terminal-intro-ready">
              <p className="text-sm font-bold tracking-[0.3em] sm:text-base">
                SYSTEM READY
              </p>
              <p className="mt-2 text-xs tracking-[0.18em] text-term-dim sm:text-sm">
                WELCOME TO MY DIGITAL WORKSPACE
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
