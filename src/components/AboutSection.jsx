import SectionHeading from "./SectionHeading";
import { aboutData } from "@/data/portfolio";
import { Presentation, PenLine } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="portfolio-section">
      <SectionHeading number="02" title="About" id="about-heading" />
      <div className="about-grid">
        <div className="about__text">
          {aboutData.bio.map((paragraph, i) => (
            <p key={i} className="about__paragraph">
              {paragraph}
            </p>
          ))}
          
        </div>
        <div className="about__sidebar">
          <h3 className="about__sidebar-title">Interests</h3>
          <ul className="tag-list tag-list--vertical" role="list">
            {aboutData.interests.map((interest) => (
              <li key={interest} className="tag tag--accent">
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
