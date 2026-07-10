import type { Project } from "@/data/portfolio";
import { asset } from "@/lib/basePath";
import Chip from "./Chip";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[2px] border border-line-18 bg-paper transition-[transform,background-color,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-line-30 hover:bg-paper-hover hover:shadow-[0_12px_28px_rgba(14,14,14,0.12)]">
      {/*
        Stretched link — makes the whole card open the live site.
        Kept as a separate absolutely-positioned anchor (not a wrapping <a>) so the
        repository/live links below can sit above it with z-index and stay clickable
        without nesting anchors (invalid HTML).
      */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name} live site`}
        className="absolute inset-0 z-[1]"
      />

      {/* screenshot */}
      <div className="relative aspect-[16/10] border-b border-line-15 bg-line-10">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element -- plain <img> so we control the base-path prefix (next/image doesn't prefix unoptimized src)
          <img
            src={asset(project.image)}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ink-40">
            <svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-[10px] tracking-[0.05em]">screenshot</span>
          </div>
        )}
        <span className="absolute left-3 top-3 z-[2] border border-line-18 bg-paper px-2 py-1 text-[10px] text-ink-55">
          {project.no} · {project.year}
        </span>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-3.5 p-6">
        <h3 className="text-xl font-bold tracking-[-0.01em]">{project.name}</h3>

        <p className="flex-1 text-[13px] leading-relaxed text-ink-70">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Chip key={tag} size="xs">
              {tag}
            </Chip>
          ))}
        </div>

        {/* z-[2] keeps these links above the stretched-link overlay so they stay clickable */}
        <div className="relative z-[2] mt-1 flex w-fit items-center gap-4 border-t border-line-12 pt-3.5 text-[11px]">
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
    </div>
  );
}
