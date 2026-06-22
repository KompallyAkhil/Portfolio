"use client";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { ChevronDown, ChevronUp } from "lucide-react";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const techIcons = [
  { name: "JavaScript", slug: "javascript/javascript-original" },
  { name: "TypeScript", slug: "typescript/typescript-original" },
  { name: "Python", slug: "python/python-original" },
  { name: "MongoDB", slug: "mongodb/mongodb-original" },
  { name: "Java", slug: "java/java-original" },
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
  { name: "Github", slug: "github/github-original" },
];

const categories = [
  { label: "Languages & AI", items: ["JavaScript", "TypeScript", "Java", "Python", "LangChain"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { label: "Backend", items: ["Node.js", "Express", "FastAPI", "MongoDB", "PostgreSQL"] },
  { label: "Tools & Infra", items: ["Git", "Github", "Docker", "Amazon Web Services", "Linux"] },
];

function TechIcon({ name, slug, customSrc }) {
  return (
    <div className="flex flex-col items-center gap-2 shrink-0 p-3">
      <img
        src={customSrc || `${ICON_BASE}/${slug}.svg`}
        alt={name}
        width={36}
        height={36}
        loading="lazy"
        className="grayscale-[30%] hover:grayscale-0 transition-[filter] duration-200"
      />
      <span
        className="text-[0.65rem]"
        style={{ fontFamily: "var(--font-mono)", color: "var(--ink-mute)" }}
      >
        {name}
      </span>
    </div>
  );
}

export default function TechStackSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="tech-stack" className="portfolio-section">
      <SectionHeading number="04" title="Tech Stack" id="tech-stack-heading" />

      {/* Scrolling marquee — CSS class handles mask + animation */}
      <div className="tech-marquee">
        <div className="tech-marquee__track">
          {[...techIcons, ...techIcons].map((tech, i) => (
            <TechIcon key={`${tech.name}-${i}`} {...tech} />
          ))}
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 mx-auto mb-6 mt-2 text-[0.78rem] font-medium px-4 py-2 border rounded-md cursor-pointer transition-transform duration-200 hover:-translate-x-px hover:-translate-y-px"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--ink)",
          background: "var(--bg-surface)",
          borderColor: "var(--rule-soft)",
        }}
        aria-expanded={expanded}
      >
        {expanded ? "Collapse" : "View All"}
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Expanded grid */}
      {expanded && (
        <div
          className="grid gap-6 mt-2"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
        >
          {categories.map(({ label, items }) => (
            <div
              key={label}
              className="border p-6"
              style={{ background: "var(--bg-surface)", borderColor: "var(--rule-soft)" }}
            >
              <h3
                className="m-0 mb-4 text-[1.15rem]"
                style={{ fontFamily: "var(--font-display)", color: "var(--blueprint)" }}
              >
                {label}
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-2" role="list">
                {items.map((name) => {
                  const tech = techIcons.find((t) => t.name === name);
                  return (
                    <li
                      key={name}
                      className="flex items-center gap-2.5 text-[0.85rem] py-1.5 border-b last:border-b-0"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--ink-soft)",
                        borderColor: "var(--paper-rule)",
                      }}
                    >
                      {tech && (
                        <img
                          src={tech.customSrc || `${ICON_BASE}/${tech.slug}.svg`}
                          alt=""
                          width={20}
                          height={20}
                          className="shrink-0"
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
