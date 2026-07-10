import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Work() {
  const count = String(projects.length).padStart(2, "0");

  return (
    <section id="work" className="px-5 py-14 sm:px-7">
      <div className="mb-7 flex items-baseline justify-between">
        <SectionLabel>// SELECTED WORK</SectionLabel>
        <div className="text-[11px] text-ink-40">{count} projects</div>
      </div>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))]">
        {projects.map((project) => (
          <ProjectCard key={project.no} project={project} />
        ))}
      </div>
    </section>
  );
}
