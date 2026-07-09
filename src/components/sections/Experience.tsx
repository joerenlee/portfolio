import SectionLabel from "@/components/SectionLabel";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="exp" className="px-5 py-14 sm:px-7">
      <SectionLabel className="mb-7">// EXPERIENCE</SectionLabel>

      <div>
        {experience.map((item, i) => (
          <div
            key={i}
            className="grid gap-2 border-t border-line-15 py-5 sm:grid-cols-[110px_1fr] sm:gap-6"
          >
            <div className="pt-[3px] text-[11px] text-ink-55">{item.period}</div>
            <div>
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-base font-bold">{item.role}</span>
                <span className="text-[13px] text-ink-60">{item.company}</span>
              </div>
              <p className="max-w-[64ch] text-[13px] leading-relaxed text-ink-70">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
