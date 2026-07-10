import Cursor from "@/components/Cursor";
import { hero, socials } from "@/data/portfolio";

export default function Hero() {
  return (
    <header className="relative flex min-h-[calc(100svh-68px)] flex-col items-center justify-center border-b border-line-15 px-5 py-14 text-center sm:px-7">
      <div className="mb-5 text-xs text-ink-55">{hero.prompt}</div>

      <h1 className="mb-5 text-[clamp(30px,6vw,64px)] font-bold leading-[1.05] tracking-[-0.02em]">
        Joeren&nbsp;Lee
        <Cursor />
      </h1>

      <p className="max-w-[60ch] text-[clamp(15px,2.4vw,20px)] font-medium leading-snug">
        {hero.tagline}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
        <a
          href="#contact"
          className="bg-ink px-4 py-2.5 text-paper transition-[opacity,transform] duration-150 hover:opacity-80 active:translate-y-px active:opacity-100"
        >
          get in touch →
        </a>
        <a
          href={hero.cv}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="border border-ink px-4 py-2.5 transition-[background-color,color,transform] duration-150 hover:bg-ink hover:text-paper active:translate-y-px"
        >
          download resume
        </a>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] text-ink-60">
        {socials.map((social, i) => (
          <span key={social.label} className="flex items-center gap-x-3">
            {i > 0 && (
              <span aria-hidden className="text-ink-40">
                ·
              </span>
            )}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-ink"
            >
              {social.label}
            </a>
          </span>
        ))}
      </div>

      {/* scroll hint — invites the visitor below the fold */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] text-ink-45 transition-colors duration-200 hover:text-ink"
      >
        <span className="flex flex-col items-center gap-1 motion-safe:[animation:drift_2s_ease-in-out_infinite]">
          <span>scroll</span>
          <span aria-hidden>↓</span>
        </span>
      </a>
    </header>
  );
}
