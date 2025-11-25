
import { motion } from 'framer-motion';

const SkillsSection = () => {
    const skills = [
        { name: "Java (OOP, DSA)", image: "/skills/java.svg", category: "languages" },
        { name: "JavaScript (ES6)+", image: "/skills/javascript.svg", category: "languages" },
        { name: "Python", image: "/skills/python.svg", category: "languages" },

        { name: "HTML", image: "/skills/html.svg", category: "webdev" },
        { name: "CSS", image: "/skills/css.svg", category: "webdev" },
        { name: "REST API", image: "/skills/restapi.png", category: "webdev" },
        { name: "GraphQL", image: "/skills/graphql.svg", category: "webdev" },

        { name: "React.js", image: "/skills/react.svg", category: "frameworks" },
        { name: "Express.js", image: "/skills/express.png", category: "frameworks" },

        { name: "MongoDB", image: "/skills/mongodb.svg", category: "databases" },
        { name: "MySQL", image: "/skills/mysql.svg", category: "databases" },
        { name: "Redis", image: "/skills/redis.svg", category: "databases" },

        { name: "Git", image: "/skills/git.svg", category: "tools" },
        { name: "GitHub", image: "/skills/github.svg", category: "tools" },
        { name: "Postman", image: "/skills/postman.svg", category: "tools" },
        { name: "Talend", image: "/skills/talend.webp", category: "tools" },
        { name: "Snowflake", image: "/skills/snowflake.png", category: "tools" },
        { name: "AWS (Basics)", image: "/skills/aws.svg", category: "tools" },
        { name: "Puppeteer", image: "/skills/puppeteer.png", category: "tools" },
        { name : "Jenkins" , image : "/skills/jenkins.svg", category : "tools"}
    ];

    const categories = {
        languages: "Languages",
        webdev: "Web Development",
        frameworks: "Frameworks",
        databases: "Databases",
        tools: "Tools & DevOps"
    };

    // Group skills by category
    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    // Order of categories to display
    const categoryOrder = ["languages", "webdev", "frameworks", "databases", "tools"];

    return (
        <section id="skills" className="py-20 bg-neo-bg border-b-3 border-black">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl font-display font-black mb-16 text-center uppercase">
                    SKILLS
                </h2>

                <div className="max-w-6xl mx-auto space-y-16">
                    {categoryOrder.map((categoryKey) => {
                        const categorySkills = groupedSkills[categoryKey];
                        if (!categorySkills) return null;

                        return (
                            <div key={categoryKey}>
                                <h3 className="text-3xl font-display font-bold mb-8 border-l-4 border-black pl-4 uppercase">
                                    {categories[categoryKey]}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {categorySkills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                                            className="bg-white border-3 border-black shadow-neo p-4 flex flex-col items-center gap-4 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                                        >
                                            <div className="h-16 w-16 flex items-center justify-center">
                                                <img
                                                    src={skill.image}
                                                    alt={skill.name}
                                                    className="max-h-full max-w-full object-contain"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'block';
                                                    }}
                                                />
                                                <span className="hidden text-4xl">🛠️</span>
                                            </div>
                                            <span className="font-bold text-center font-display">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
