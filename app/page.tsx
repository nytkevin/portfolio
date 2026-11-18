"use client";

import { useCallback, useState } from "react";
import Terminal from "./components/terminal/terminal";
import TerminalIntro from "./components/terminal/terminalIntro";

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false);
  const handleIntroComplete = useCallback(() => {
    setShowTerminal(true);
  }, []);

  if (!showTerminal) {
    return <TerminalIntro onComplete={handleIntroComplete} />;
  }

  return <Terminal />;
}
