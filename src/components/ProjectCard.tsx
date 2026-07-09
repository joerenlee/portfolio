import type { Project } from "@/data/portfolio";
import Chip from "./Chip";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-h-[230px] flex-col gap-3.5 rounded-[2px] border border-line-18 bg-paper p-6 transition-[background-color,transform] duration-150 ease-out hover:bg-paper-hover active:scale-[0.99]"
    >
      <div className="flex items-baseline justify-between text-[11px] text-ink-50">
        <span>{project.no}</span>
        <span>{project.year}</span>
      </div>

      <h3 className="text-xl font-bold tracking-[-0.01em]">{project.name}</h3>

      <p className="flex-1 text-[13px] leading-relaxed text-ink-70">{project.desc}</p>

      <div className="flex items-end justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Chip key={tag} size="xs">
              {tag}
            </Chip>
          ))}
        </div>
        <span className="whitespace-nowrap text-[11px] text-ink-55">visit →</span>
      </div>
    </a>
  );
}
