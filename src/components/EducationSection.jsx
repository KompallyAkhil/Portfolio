"use client";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { educationData } from "@/data/portfolio";
import { Award } from "lucide-react";
import CertificateModal from "./CertificateModal";

export default function EducationSection() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="education" className="portfolio-section">
      <SectionHeading number="05" title="Education" id="education-heading" />
      <div className="education-list">
        {educationData.map((edu) => (
          <article key={edu.id} className="education-card">
            <div className="education-card__header">
              <h3 className="education-card__degree">{edu.degree}</h3>
              <span className="education-card__duration">{edu.duration}</span>
            </div>
            <div className="education-card__field-row">
              <span className="education-card__field">{edu.field}</span>
              {edu.grade && (
                <span className="education-card__grade">{edu.grade}</span>
              )}
            </div>
            <div className="education-card__bottom">
              <p className="education-card__institution">{edu.institution}</p>

              {edu.certificateUrl && (
                <div className="education-card__footer">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveCert({
                        url: edu.certificateUrl,
                        title: `${edu.degree} Certificate`,
                      })
                    }
                    className="education-card__cert-btn"
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

      {activeCert && (
        <CertificateModal
          imageUrl={activeCert.url}
          title={activeCert.title}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}

