
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import simpleCV from '../assets/swipecv.png';
import leetcodolio from '../assets/leetcodolio.png';
import magicBoard from '../assets/magic.png';
import briefly from '../assets/briefly.png';
import resumeBuilder from '../assets/resumebuilder.png';
import codeConnect from '../assets/codeconnect.png';
import chatPDF from '../assets/chatpdf.png';

const ProjectSection = () => {
    const projects = [
        {
            id: 0,
            title: "SwipeCV",
            description: "A Tinder-style platform to swipe through resumes! ",
            image: simpleCV,
            tags: ["React JS", "Node.js", "Express.js", "MongoDB"],
            demoUrl: "https://swipecv.akhilkompally.app",
            githubUrl: "https://github.com/KompallyAkhil/SwipeCV",
        },
        {
            id: 1,
            title: "LeetCodolio",
            description: "Automatically builds a portfolio from your LeetCode stats.",
            image: leetcodolio,
            tags: ["React.js", "Chart.js", "WebScrapping", 'Node.js'],
            demoUrl: "https://leetcodolio.akhilkompally.app",
            githubUrl: "https://github.com/KompallyAkhil/LeetCodolio-Frontend",
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
            videoSrc: "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
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
            id: 5,
            title: "CodeConnect",
            description:
                "Real-time collaborative coding platform to share and execute code instantly.",
            image: codeConnect,
            tags: ["React", "Node.js", "getStream.io"],
            demoUrl: "https://codeconnect.akhilkompally.app",
            githubUrl: "https://github.com/KompallyAkhil/codeconnect",
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
 
    return (
        <section id="projects" className="py-20 bg-neo-white border-b-3 border-black">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl font-display font-black mb-16 text-center uppercase">
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="neo-card flex flex-col h-full hover:-translate-y-2 hover:shadow-neo-lg transition-all duration-300 bg-white"
                        >
                            <div className="h-48 border-b-3 border-black -mx-6 -mt-6 mb-6 overflow-hidden group relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 uppercase">{project.title}</h3>
                            <p className="mb-6 font-medium flex-grow text-gray-700">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-bold border-2 border-black px-2 py-1 bg-neo-yellow shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2 font-bold border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors"
                                >
                                    <Github size={18} /> Code
                                </a>
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex-1 flex items-center justify-center gap-2 bg-neo-main text-white py-2 font-bold border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all ${project.demoUrl === '#' ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                                >
                                    {project.videoSrc ? <Play size={18} /> : <ExternalLink size={18} />}
                                    {project.videoSrc ? 'Watch' : 'Demo'}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
