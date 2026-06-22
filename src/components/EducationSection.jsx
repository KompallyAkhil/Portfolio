"use client";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { educationData } from "@/data/portfolio";
import { Award } from "lucide-react";

export default function EducationSection() {

  return (
    <section id="education" className="portfolio-section">
      <SectionHeading number="05" title="Education" id="education-heading" />

      <div className="flex flex-col gap-5">
        {educationData.map((edu) => (
          <article
            key={edu.id}
            className="border p-6"
            style={{ background: "var(--bg-surface)", borderColor: "var(--rule-soft)" }}
          >
            {/* Header: degree + duration */}
            <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
              <h3
                className="m-0 text-[1.05rem] font-semibold"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}
              >
                {edu.degree}
              </h3>
              <span
                className="text-[0.75rem]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-mute)" }}
              >
                {edu.duration}
              </span>
            </div>

            {/* Field + grade */}
            <div className="flex items-center flex-nowrap gap-3 mb-1">
              <span className="text-[0.95rem] inline-block" style={{ color: "var(--ink-soft)" }}>
                {edu.field}
              </span>
              {edu.grade && (
                <span
                  className="inline-block text-[0.75rem] font-medium px-2.5 py-1 rounded whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "var(--bg-surface-hover)",
                    color: "#000000",
                  }}
                >
                  {edu.grade}
                </span>
              )}
            </div>

            {/* Bottom: institution + cert button */}
            <div className="flex justify-between items-center flex-wrap gap-3">
              <p className="m-0 text-[0.9rem]" style={{ color: "var(--ink-mute)" }}>
                {edu.institution}
              </p>

              {edu.certificateUrl && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveCert({
                        url: edu.certificateUrl,
                        title: `${edu.degree} Certificate`,
                      })
                    }
                    className="inline-flex items-center gap-2 text-[0.75rem] font-medium px-3.5 py-1.5 border cursor-pointer transition-all duration-200 hover:-translate-x-px hover:-translate-y-px text-white"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: "var(--blueprint)",
                      borderColor: "var(--blueprint)",
                    }}
                  >
                    <Award size={14} />
                    <span>Check My Graduation Certificate</span>
                  </button>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
