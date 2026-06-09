"use client";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { ChevronDown, ChevronUp } from "lucide-react";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const techIcons = [
  { name: "JavaScript", slug: "javascript/javascript-original" },
  { name: "TypeScript", slug: "typescript/typescript-original" },
  { name: "Python", slug: "python/python-original" },
  {name : "MongoDB", slug : "mongodb/mongodb-original"},
  { name : "Java" , slug : "java/java-original"},

  { name: "React", slug: "react/react-original" },
  { name: "Next.js", slug: "nextjs/nextjs-original" },
  { name: "Tailwind CSS", slug: "tailwindcss/tailwindcss-original" },
  { name: "HTML5", slug: "html5/html5-original" },
  { name: "CSS3", slug: "css3/css3-original" },
  { name: "Node.js", slug: "nodejs/nodejs-original" },
  { name: "Express", slug: "express/express-original" },
  { name: "FastAPI", slug: "fastapi/fastapi-original" },
  { name: "PostgreSQL", slug: "postgresql/postgresql-original" },
  { name: "Git", slug: "git/git-original" },
  { name: "Docker", slug: "docker/docker-original" },
  { name: "Amazon Web Services", slug: "amazonwebservices/amazonwebservices-plain-wordmark" },
  { name: "Linux", slug: "linux/linux-original" },
  { name : "Github" , slug : "github/github-original"}
];

const categories = [
  { label: "Languages & AI", items: ["JavaScript", "TypeScript", "Java","Python", "LangChain",] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { label: "Backend", items: ["Node.js", "Express", "FastAPI", "MongoDB","PostgreSQL"] },
  { label: "Tools & Infra", items: ["Git", "Github","Docker", "Amazon Web Services", "Linux",] },
];

function TechIcon({ name, slug, customSrc }) {
  return (
    <div className="tech-marquee__item">
      <img
        src={customSrc || `${ICON_BASE}/${slug}.svg`}
        alt={name}
        width={36}
        height={36}
        loading="lazy"
      />
      <span className="tech-marquee__label">{name}</span>
    </div>
  );
}

export default function TechStackSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="tech-stack" className="portfolio-section">
      <SectionHeading number="04" title="Tech Stack" id="tech-stack-heading" />

      {/* Scrolling marquee */}
      <div className="tech-marquee">
        <div className="tech-marquee__track">
          {[...techIcons, ...techIcons].map((tech, i) => (
            <TechIcon key={`${tech.name}-${i}`} {...tech} />
          ))}
        </div>
      </div>

      {/* Toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="tech-toggle"
        aria-expanded={expanded}
      >
        {expanded ? "Collapse" : "View All"}
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Expanded grid */}
      {expanded && (
        <div className="stack-grid">
          {categories.map(({ label, items }) => (
            <div key={label} className="stack-category">
              <h3 className="stack-category__label">{label}</h3>
              <ul className="stack-category__items" role="list">
                {items.map((name) => {
                  const tech = techIcons.find((t) => t.name === name);
                  return (
                    <li key={name} className="stack-item">
                      {tech && (
                        <img
                          src={tech.customSrc || `${ICON_BASE}/${tech.slug}.svg`}
                          alt=""
                          width={20}
                          height={20}
                          className="stack-item__icon"
                        />
                      )}
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
