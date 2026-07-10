import SectionLabel from "@/components/SectionLabel";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-b border-line-15 px-5 py-14 sm:px-7">
      <SectionLabel className="mb-5">// ABOUT</SectionLabel>
      <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr))]">
        {about.map((paragraph, i) => (
          <p key={i} className="max-w-[52ch] text-[15px] leading-relaxed text-ink-80">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
