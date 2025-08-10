import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Java (OOP, DSA)", level: 90, category: "languages" },
  { name: "JavaScript (ES6)", level: 90, category: "languages" },
  { name: "Python", level: 85, category: "languages" },
  { name: "SQL", level: 80, category: "languages" },

  // Web Development
  { name: "HTML/CSS", level: 95, category: "webdev" },
  { name: "MERN Stack", level: 90, category: "webdev" },
  { name: "REST API", level: 90, category: "webdev" },
  { name: "GraphQL", level: 75, category: "webdev" },

  // Frameworks & Libraries
  { name: "React.js", level: 90, category: "frameworks" },
  { name: "Express.js", level: 85, category: "frameworks" },

  // Databases & Tools
  { name: "MongoDB", level: 85, category: "databases" },
  { name: "MySQL", level: 80, category: "databases" },
  { name: "Redis", level: 75, category: "databases" },
  { name: "MongoDB Compass", level: 70, category: "databases" },
  { name: "MySQL Workbench", level: 70, category: "databases" },

  // Dev Tools & Platforms
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Talend", level: 70, category: "tools" },
  { name: "Snowflake", level: 65, category: "tools" },
  { name: "AWS (Basics)", level: 60, category: "tools" },
  { name: "Puppeteer", level: 70, category: "tools" },
  { name: "ShadCN UI", level: 85, category: "tools" },
  { name: "Chart.js", level: 80, category: "tools" },
  { name: "Clerk", level: 75, category: "tools" },
  { name: "getStream.io", level: 75, category: "tools" },

  // Core CS Concepts
  { name: "Data Structures & Algorithms", level: 90, category: "cs" },
  { name: "Operating Systems", level: 80, category: "cs" },
  { name: "DBMS", level: 85, category: "cs" },
  { name: "Computer Networks", level: 80, category: "cs" },
];

const categories = ["all", "languages", "webdev", "frameworks", "databases", "tools", "cs"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
