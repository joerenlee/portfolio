import Cursor from "@/components/Cursor";
import { hero, socials } from "@/data/portfolio";

export default function Hero() {
  return (
    <header className="border-b border-line-15 px-5 pb-16 pt-16 sm:px-7">
      <div className="mb-5 text-xs text-ink-55">{hero.prompt}</div>

      <h1 className="mb-4 text-[clamp(34px,7vw,72px)] font-bold leading-[1.04] tracking-[-0.02em]">
        Joeren&nbsp;Lee
        <Cursor />
      </h1>

      <p className="mb-6 text-[clamp(18px,2.8vw,26px)] font-medium leading-tight text-ink-80">
        {hero.tagline}
      </p>

      <p className="max-w-[62ch] text-[15px] leading-relaxed text-ink-70">
        {hero.intro}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs">
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
          download resume ↓
        </a>

        <div className="ml-1 flex items-center gap-x-4 text-[11px] text-ink-60">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-ink"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
