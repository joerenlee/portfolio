import type { Project } from "@/data/portfolio";
import Chip from "./Chip";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex min-h-[230px] flex-col gap-3.5 rounded-[2px] border border-line-18 bg-paper p-6 transition-colors duration-150 ease-out hover:bg-paper-hover">
      <div className="flex items-baseline justify-between text-[11px] text-ink-50">
        <span>{project.no}</span>
        <span>{project.year}</span>
      </div>

      <h3 className="text-xl font-bold tracking-[-0.01em]">{project.name}</h3>

      <p className="flex-1 text-[13px] leading-relaxed text-ink-70">{project.desc}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Chip key={tag} size="xs">
            {tag}
          </Chip>
        ))}
      </div>

      <div className="mt-1 flex items-center gap-4 border-t border-line-12 pt-3.5 text-[11px]">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-55 underline decoration-line-30 underline-offset-4 transition-colors duration-150 hover:text-ink hover:decoration-ink"
          >
            repository →
          </a>
        )}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-55 underline decoration-line-30 underline-offset-4 transition-colors duration-150 hover:text-ink hover:decoration-ink"
        >
          live →
        </a>
      </div>
    </div>
  );
}
