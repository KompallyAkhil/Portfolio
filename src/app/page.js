import FloatingSidebar from "@/components/FloatingSidebar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import SocialsSection from "@/components/SocialsSection";

export default function Home() {
  return (
    <>
      <FloatingSidebar />
      <main className="pb-20">
        <div className="max-w-[1200px] mx-auto px-8 max-sm:px-4">
          <HeroSection />
          <ExperienceSection />
          <AboutSection />
          <ProjectsSection />
          <TechStackSection />
          <EducationSection />
          <AchievementsSection />
          <SocialsSection />

          {/* Footer */}
          <footer
            className="border-t mt-10 pt-8 pb-8"
            style={{ borderColor: "var(--rule-soft)" }}
          >
            <div className="flex justify-between items-center flex-wrap gap-2">
              <p
                className="m-0 text-[0.8rem]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-mute)" }}
              >
                © {new Date().getFullYear()} Akhil Kompally
              </p>
              <p
                className="m-0 text-[0.75rem] opacity-60"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-mute)" }}
              >
                Built with Next.js
              </p>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
