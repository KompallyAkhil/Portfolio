import { ArrowRight, ExternalLink, Github } from "lucide-react";
import codeConnect from "./projects/codeconnect.png"
import resumeBuilder from "./projects/resume.png";
import magicBoard from "./projects/magic.png";
import briefly from "./projects/briefly.png";
import leetcodolio from "./projects/leet.png"
import chatPDF from "./projects/chatpdf.png";
const projects = [
  {
    id: 1,
    title: "CodeConnect",
    description:
      "Real-time collaborative coding platform to share and execute code instantly.",
    image: codeConnect,
    tags: ["React", "Node.js", "getStream.io"],
    demoUrl: "https://codeconnect.akhilkompally.app",
    githubUrl: "https://github.com/KompallyAkhil/codeconnect",
  },
  {
    id: 2,
    title: "ResumeBuilder",
    description:
      "Fast, customizable tool to create professional resumes in minutes.",
    image: resumeBuilder,
    tags: ["React", "Node.js", "react-pdf"],
    demoUrl: "https://resume.akhilkompally.app",
    githubUrl: "https://github.com/KompallyAkhil/ResumeBuilder",
  },
  {
    id: 3,
    title: "MagicBoard",
    description:
      "AI-powered whiteboard that interprets and solves hand-drawn problems.",
    image: magicBoard,
    tags: ["React", "Node.js", "Google Generative AI"],
    demoUrl: "https://magicboard.akhilkompally.app",
    githubUrl: "https://github.com/KompallyAkhil/MagicBoard",
  },
  {
    id: 4,
    title: "Briefly",
    description:
      "Summarization tool that condenses articles, documents, and notes instantly.",
    image: briefly,
    tags: ["React.js", "Node.js", "Gemini AI"],
    demoUrl: "https://briefly.akhilkompally.app",
    githubUrl: "https://github.com/KompallyAkhil/Briefly",
  },
  {
    id: 5,
    title: "LeetCodolio",
    description: "Automatically builds a portfolio from your LeetCode stats.",
    image: leetcodolio,
    tags: ["Next.js", "TailwindCSS", "WebScrapping"],
    demoUrl: "#",
    githubUrl: "https://github.com/KompallyAkhil/LeetCodolio",
  },
  {
    id: 6,
    title: "ChatPDF",
    description:
      "AI-powered tool that allows you to chat with your PDF documents.",
    image: chatPDF,
    tags: ["React.js", "Python", "Gemini API Key"],
    demoUrl: "#",
    githubUrl: "https://github.com/KompallyAkhil/ChatWithPDF",
  },
];

export const ProjectsSection = () => {
  return (
   <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my recent work, built for performance, usability, and clean design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/KompallyAkhil"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full max-w-sm">
    <div className="h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 flex-grow">
        {project.description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <a
            href={project.demoUrl}
            target="_blank"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  </div>
);
