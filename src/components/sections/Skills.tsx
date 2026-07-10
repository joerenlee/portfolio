import SectionLabel from "@/components/SectionLabel";
import Chip from "@/components/Chip";
import { skills, certs } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line-15 px-5 py-14 sm:px-7">
      <div className="grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr))]">
        <div>
          <SectionLabel className="mb-5 border-line-15">// SKILLS</SectionLabel>
          <div className="flex flex-col gap-6">
            {skills.map((group) => (
              <div key={group.group}>
                <div className="mb-2.5 text-[11px] text-ink-50">{group.group}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionLabel className="mb-5">// CERTIFICATIONS</SectionLabel>
          <div className="flex flex-col gap-3">
            {certs.map((cert, i) => (
              <div
                key={i}
                className="flex items-baseline justify-between gap-3 rounded-[4px] border border-line-18 bg-paper px-4 py-3 text-[13px] transition-colors duration-200 hover:border-ink"
              >
                <span>{cert.name}</span>
                <span className="whitespace-nowrap text-ink-50">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
