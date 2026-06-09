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
      <div className="exp-timeline">
        {experienceData.map((exp, index) => (
          <article key={exp.id} className="exp-card">
            {/* ── Header Row ── */}
            <div className="exp-card__header">
              <div className="exp-card__number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="exp-card__header-info">
                <h3 className="exp-card__role">{exp.role}</h3>
                <div className="exp-card__company-row">
                  <a
                    href={exp.companyUrl}
                    className="exp-card__company"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.company}
                    <ArrowUpRight size={12} />
                  </a>
                  {exp.type && (
                    <span className="exp-card__type">{exp.type}</span>
                  )}
                </div>
              </div>
            </div>

            {/* ── Meta Strip ── */}
            <div className="exp-card__meta-strip">
              <span className="exp-card__meta-item">
                <Calendar size={13} />
                {exp.duration}
              </span>
              {exp.location && (
                <span className="exp-card__meta-item">
                  <MapPin size={13} />
                  {exp.location}
                </span>
              )}
            </div>

            {/* ── Bullets ── */}
            <ul className="exp-card__bullets">
              {exp.bullets?.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            {/* ── Tags ── */}
            <div className="exp-card__tags">
              {exp.tags?.map((tag) => (
                <span key={tag} className="exp-card__tag">
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
