"use client";

import { useEffect, useState } from "react";

type Mode = "system" | "light" | "dark";

const MODES: Mode[] = ["system", "light", "dark"];

const icons: Record<Mode, React.ReactNode> = {
  system: (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  light: (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
  dark: (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A8 8 0 1111 3a6 6 0 009 9.8z" />
    </svg>
  ),
};

function isDark(mode: Mode): boolean {
  if (mode === "dark") return true;
  if (mode === "light") return false;
  return window.matchMedia("(prefers-color-scheme:dark)").matches;
}

function applyTheme(mode: Mode) {
  document.documentElement.setAttribute("data-theme", isDark(mode) ? "dark" : "light");
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");

  useEffect(() => {
    let stored: Mode = "system";
    try {
      stored = (localStorage.getItem("jl-theme") as Mode) || "system";
    } catch {}
    setMode(stored);

    const mq = window.matchMedia("(prefers-color-scheme:dark)");
    const onChange = () => {
      let current: Mode = "system";
      try {
        current = (localStorage.getItem("jl-theme") as Mode) || "system";
      } catch {}
      if (current === "system") applyTheme("system");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function choose(next: Mode) {
    setMode(next);
    try {
      localStorage.setItem("jl-theme", next);
    } catch {}
    applyTheme(next);
  }

  return (
    <div className="inline-flex items-center overflow-hidden rounded-[3px] border border-line">
      {MODES.map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => choose(m)}
          aria-label={`${m} theme`}
          aria-pressed={mode === m}
          title={m.charAt(0).toUpperCase() + m.slice(1)}
          className={`flex items-center cursor-pointer px-[9px] py-[5px] leading-none transition-colors duration-200 ${
            mode === m ? "bg-ink text-paper" : "text-ink hover:bg-line-12"
          }`}
        >
          {icons[m]}
        </button>
      ))}
    </div>
  );
}
