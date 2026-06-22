import SectionHeading from "./SectionHeading";
import { aboutData } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="portfolio-section">
      <SectionHeading number="02" title="About" id="about-heading" />

      {/* Two-column grid */}
      <div className="grid gap-12 max-sm:grid-cols-1" style={{ gridTemplateColumns: "2fr 1fr" }}>
        {/* Bio text */}
        <div>
          {aboutData.bio.map((paragraph, i) => (
            <p
              key={i}
              className="text-[1.05rem] leading-[1.75] mb-4 last:mb-0"
              style={{ color: "var(--ink-soft)" }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Interests sidebar */}
        <div>
          <h3
            className="m-0 mb-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--ink-mute)" }}
          >
            Interests
          </h3>
          <ul className="flex flex-col gap-2 list-none p-0 m-0" role="list">
            {aboutData.interests.map((interest) => (
              <li
                key={interest}
                className="text-[0.72rem] px-2.5 py-1 border tracking-[0.02em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--bg-surface-hover)",
                  color: "var(--ink)",
                  borderColor: "var(--bg-surface)",
                }}
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
