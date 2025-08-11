import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Java (OOP, DSA)", image: "/skills/java.png", category: "languages" },
  { name: "JavaScript (ES6)+", image: "/skills/javascript.png", category: "languages" },
  { name: "Python", image: "/skills/python.png", category: "languages" },
  { name: "SQL", image: "/skills/sql.png", category: "languages" },

  { name: "HTML/CSS", image: "/skills/htmlcss.png", category: "webdev" },
  { name: "REST API", image: "/skills/restapi.png", category: "webdev" },
  { name: "GraphQL", image: "/skills/graphql.png", category: "webdev" },

  { name: "React.js", image: "/skills/react.png", category: "frameworks" },
  { name: "Express.js", image: "/skills/express.png", category: "frameworks" },

  { name: "MongoDB", image: "/skills/mongodb.png", category: "databases" },
  { name: "MySQL", image: "/skills/mysql.png", category: "databases" },
  { name: "Redis", image: "/skills/redis.png", category: "databases" },

  { name: "Git/GitHub", image: "/skills/github.png", category: "tools" },
  { name: "Postman", image: "/skills/postman.png", category: "tools" },
  { name: "Talend", image: "/skills/talend.png", category: "tools" },
  { name: "Snowflake", image: "/skills/snowflake.png", category: "tools" },
  { name: "AWS (Basics)", image: "/skills/aws.png", category: "tools" },
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
