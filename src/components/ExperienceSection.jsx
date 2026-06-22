import SectionHeading from "./SectionHeading";
import { experienceData } from "@/data/portfolio";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="portfolio-section"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "var(--bg)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
      <SectionHeading number="01" title="Experience" id="experience-heading" />

      {/* Timeline */}
      <div className="flex flex-col gap-10">
        {experienceData.map((exp, index) => (
          <article
            key={exp.id}
            className="flex flex-col gap-0 pb-10 border-b last:border-b-0 last:pb-0"
            style={{ borderColor: "var(--rule-soft)" }}
          >
            {/* Header Row */}
            <div className="flex items-start gap-5 mb-5">
              {/* Big index number */}
              <div
                className="shrink-0 min-w-[56px] leading-none select-none pt-0.5 font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.8rem",
                  color: "var(--blueprint)",
                  opacity: 0.15,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Role + company */}
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <h3
                  className="m-0 font-bold text-[1.15rem] leading-[1.35] tracking-tight"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}
                >
                  {exp.role}
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={exp.companyUrl}
                    className="inline-flex items-center gap-1 text-[0.85rem] font-medium no-underline transition-opacity duration-150 hover:opacity-70"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--blueprint)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.company}
                    <ArrowUpRight size={12} />
                  </a>
                  {exp.type && (
                    <span
                      className="text-[0.68rem] font-semibold px-2.5 py-0.5 uppercase tracking-widest"
                      style={{ background: "var(--blueprint)", color: "var(--bg)", fontFamily: "var(--font-mono)" }}
                    >
                      {exp.type}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Meta Strip */}
            <div
              className="flex items-center gap-6 flex-wrap mb-6 max-sm:flex-col max-sm:items-start max-sm:gap-1.5"
              style={{ paddingLeft: "76px" }}
            >
              <span
                className="inline-flex items-center gap-1.5 text-[0.78rem]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-mute)" }}
              >
                <Calendar size={13} />
                {exp.duration}
              </span>
              {exp.location && (
                <span
                  className="inline-flex items-center gap-1.5 text-[0.78rem]"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--ink-mute)" }}
                >
                  <MapPin size={13} />
                  {exp.location}
                </span>
              )}
            </div>

            {/* Bullets */}
            <ul
              className="exp-bullets m-0 mb-6 flex flex-col gap-3 list-none"
              style={{ paddingLeft: "76px" }}
            >
              {exp.bullets?.map((b, i) => (
                <li
                  key={i}
                  className="text-[0.92rem] leading-[1.7]"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {b}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2" style={{ paddingLeft: "76px" }}>
              {exp.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.72rem] font-medium px-3 py-1 border text-[length:inherit]"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "var(--bg-surface)",
                    borderColor: "var(--rule-soft)",
                    color: "var(--ink-soft)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
