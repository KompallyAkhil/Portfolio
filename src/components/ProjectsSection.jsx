import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="portfolio-section">
      <SectionHeading number="03" title="Projects" id="projects-heading" />
      <div className="projects-grid">
        {projectsData.map((project) => (
          <article key={project.id} className="project-card" data-tooltip={project.description}>
            <div className="project-card__header">
              <h3 className="project-card__title">{project.title}</h3>
              {project.users && (
                <span className="project-card__users">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  {project.users}
                </span>
              )}
            </div>

            <div className="project-card__thumbnail">
              <Image
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                width={640}
                height={360}
                className="project-card__img"
              />
            </div>

            <ul className="tag-list" role="list">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="project-card__links">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live ↗
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  className="project-card__link"
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
