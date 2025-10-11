import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Java (OOP, DSA)", image: "/skills/java.svg", category: "languages" },
  { name: "JavaScript (ES6)+", image: "/skills/javascript.svg", category: "languages" },
  { name: "Python", image: "/skills/python.svg", category: "languages" },

  { name: "HTML", image: "/skills/html.svg", category: "webdev" },
  { name: "CSS", image: "/skills/css.svg", category: "webdev" },
  { name: "REST API", image: "/skills/restapi.png", category: "webdev" },
  { name: "GraphQL", image: "/skills/graphql.svg", category: "webdev" },
  { name: "Git", image: "/skills/git.svg", category: "tools" },

  { name: "React.js", image: "/skills/react.svg", category: "frameworks" },
  { name: "Express.js", image: "/skills/express.png", category: "frameworks" },

  { name: "MongoDB", image: "/skills/mongodb.svg", category: "databases" },
  { name: "MySQL", image: "/skills/mysql.svg", category: "databases" },
  { name: "Redis", image: "/skills/redis.svg", category: "databases" },

  { name: "GitHub", image: "/skills/github.svg", category: "tools" },
  { name: "Postman", image: "/skills/postman.svg", category: "tools" },
  { name: "Talend", image: "/skills/talend.png", category: "tools" },
  { name: "Snowflake", image: "/skills/snowflake.png", category: "tools" },
  { name: "AWS (Basics)", image: "/skills/aws.svg", category: "tools" },
  { name: "Puppeteer", image: "/skills/puppeteer.png", category: "tools" },

];

const categories = ["all", "languages", "webdev", "frameworks", "databases", "tools"];

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
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg text-center">{skill.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
