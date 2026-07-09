import SectionLabel from "@/components/SectionLabel";
import Chip from "@/components/Chip";
import { skills, certs } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-14 sm:px-7">
      <div className="grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr))]">
        <div>
          <SectionLabel className="mb-5">// SKILLS</SectionLabel>
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
          {certs.map((cert, i) => (
            <div
              key={i}
              className="flex justify-between gap-3 border-t border-line-15 py-3 text-[13px]"
            >
              <span>{cert.name}</span>
              <span className="whitespace-nowrap text-ink-50">{cert.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
