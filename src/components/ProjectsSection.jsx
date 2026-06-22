import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="portfolio-section">
      <SectionHeading number="03" title="Projects" id="projects-heading" />

      {/* Projects grid */}
      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}
      >
        {projectsData.map((project) => (
          <article
            key={project.id}
            className="project-card flex flex-col gap-3 p-6 border transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
            style={{
              background: "var(--bg-surface)",
              borderColor: "var(--rule-soft)",
            }}
            data-tooltip={project.description}
          >
            {/* Card header */}
            <div className="flex justify-between items-center">
              <h3
                className="m-0 text-[1.05rem] font-semibold"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}
              >
                {project.title}
              </h3>
              {project.users && (
                <span
                  className="inline-flex items-center gap-1.5 text-[0.72rem] font-medium px-2 py-0.5 whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--ink-mute)",
                    background: "var(--bg-surface-hover)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  {project.users}
                </span>
              )}
            </div>

            {/* Thumbnail */}
            <div
              className="overflow-hidden border leading-[0]"
              style={{ borderColor: "var(--rule-soft)" }}
            >
              <Image
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                width={640}
                height={360}
                className="w-full h-auto object-cover block transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>

            {/* Tags */}
            <ul className="flex flex-wrap gap-2 list-none p-0 mt-3" role="list">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-[0.72rem] px-2.5 py-1 border tracking-[0.02em]"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "var(--bg-surface)",
                    color: "var(--ink-soft)",
                    borderColor: "var(--bg-surface-hover)",
                  }}
                >
                  {tag}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex gap-4 mt-1">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="text-[0.8rem] font-medium hover:underline"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--blueprint)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live ↗
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  className="text-[0.8rem] font-medium hover:underline"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--blueprint)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
