"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close on Escape, and whenever we grow back to desktop width.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width:768px)");
    const onDesktop = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onDesktop);
    };
  }, []);

  return (
    <div className="sticky top-0 z-40 border-b border-line-15 bg-paper">
      <div className="relative">
        <div className="flex items-center justify-between gap-4 px-5 py-4 text-xs tracking-[0.02em] sm:px-7">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="font-bold transition-colors duration-200 hover:text-ink-60"
          >
            joeren.lee
          </a>

          <div className="flex items-center gap-3 sm:gap-5">
            {/* desktop links */}
            <nav className="hidden items-center gap-5 md:flex">
              {nav.map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  className="text-ink-70 transition-colors duration-200 hover:text-ink"
                >
                  {i.label}
                </a>
              ))}
            </nav>

            {/* theme controls live in the bar on desktop, in the menu on mobile */}
            <span className="hidden md:block">
              <ThemeToggle />
            </span>

            {/* hamburger — hover lightens grey→white, open flips to a dark X */}
            <button
              type="button"
              aria-label="Menu"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`grid h-9 w-9 place-items-center rounded-[3px] border transition-all duration-300 ease-out active:scale-95 md:hidden ${
                open
                  ? "rotate-90 border-ink bg-ink text-paper shadow-[0_2px_10px_rgba(14,14,14,0.25)]"
                  : "border-line-18 bg-line-10 text-ink hover:border-line-30 hover:bg-paper"
              }`}
            >
              <span className="relative block h-4 w-[22px]">
                <span
                  className={`absolute inset-x-0 top-1/2 -mt-px block h-[2px] origin-center bg-current transition-transform duration-300 ease-out ${
                    open ? "rotate-45" : "-translate-y-[6px]"
                  }`}
                />
                <span
                  className={`absolute inset-x-0 top-1/2 -mt-px block h-[2px] bg-current transition-all duration-200 ease-out ${
                    open ? "scale-x-0 opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute inset-x-0 top-1/2 -mt-px block h-[2px] origin-center bg-current transition-transform duration-300 ease-out ${
                    open ? "-rotate-45" : "translate-y-[6px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* mobile dropdown — smooth height/opacity/translate transition */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full z-30 overflow-hidden border-b border-line bg-paper transition-all duration-300 ease-out md:hidden ${
            open
              ? "max-h-96 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-1 opacity-0"
          }`}
        >
          <nav className="flex flex-col">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="border-t border-line-10 px-5 py-3.5 text-xs text-ink-70 transition-colors duration-200 first:border-t-0 hover:bg-paper-hover hover:text-ink"
              >
                {i.label}
              </a>
            ))}
          </nav>

          {/* theme controls, mobile home */}
          <div className="flex items-center justify-between border-t border-line-15 px-5 py-3.5">
            <span className="text-[11px] tracking-[0.08em] text-ink-55">theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
