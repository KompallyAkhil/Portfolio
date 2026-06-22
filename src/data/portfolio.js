
// ── Portfolio Data ──────────────────────────────────────────────
// Central data file. Edit content here — components read from this.

export const personalInfo = {
  name: "Akhil Kompally",
  firstName: "Akhil",
  lastName: "Kompally",
  title: "AI & Full Stack Engineer",
  tagline: "Building things that live on the internet",
  location: "India",
  email: "akhilkompally27@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1Bez4Zr3q2gHXS6HU5irrq7CJJbeebIeM/view?usp=sharing"
};

export const aboutData = {
  bio: [
    "A developer passionate about crafting clean, performant, and thoughtful digital experiences. I enjoy the full spectrum, I'm engineer first then a developer. I love building solutions that make a difference.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or Learning about stockmarket and trying my luck on it.",
  ],
  interests: ["AI & Open Source", "System Design", "Cloud Infrastructure", "Problem-Solving"],
};

export const experienceData = [
  {
    id: "exp-snorkel",
    role: "Software Engineer Intern",
    company: "Teleparadigm Networks (TPN)",
    companyUrl: "https://teleparadigm.com/",
    duration: "Dec 2025 - May 2026",
    type: "Full Time",
    location: "Hyderabad, Telangana, India",
    bullets: [
      "Built a Full Stack application using ReactJS and Tailwind CSS, created endpoints using FastAPI, integrating them within the application.",
      "Developed an Agentic AI workflow using CrewAI and Llama 3.3-70B, orchestrating 5 sub-agents across 4+ APIs with autonomous multi-step reasoning.",
      "Containerized and optimized computational pipelines using Docker. Reduced computation time from 5–7 minutes to under 1 minute, achieving an ∼85% reduction in response latenc"
    ],
    tags: ["ReactJS", "FastAPI", "LLM", "Docker", "AI Agents","Crew AI", "Agentic AI"],
  },
  
];

export const projectsData = [
  {
    id: "proj-nexscreen",
    title: "NexScreen",
    description:
      "A multi-agent AI resume screening tool that intelligently matches candidates with job descriptions.",
    tags: ["FastAPI", "Langchain", "NextJS","LangGraph"],
    thumbnail: "/Projects/nexscreen.png",
    liveUrl: "https://nexscreen.vercel.app",
    repoUrl: "https://github.com/KompallyAKhil/NexScreen",
  },
  {
    id: "proj-codesync",
    title: "CodeSync",
    description:
      "A Chrome extension to seamlessly track and upload your competitive programming solutions to GitHub.",
    tags: ["Chrome-Extension","Automation","JavaScript"],
    thumbnail: "/Projects/codesync.png",
    liveUrl: "https://codesync.akhilkompally.app",
    repoUrl: "https://github.com/KompallyAkhil/CodeSync",
  },
  {
    id: "proj-swipecv",
    title: "SwipeCV",
    description:
      "A Tinder-style platform to swipe through resumes.",
    tags: ["ReactJS","NodeJS","MongoDB","TailwindCSS","Imagekit.io"],
    thumbnail: "/Projects/swipecv.png",
    liveUrl: "https://swipecv.akhilkompally.app/",
    repoUrl: "https://github.com/KompallyAkhil/SwipeCV",
  },
  {
    id: "proj-leetcodolio",
    title: "LeetCodolio",
    description:
      "Track your progress across different competitive programming platforms in one place.",
    tags: ["ReactJS", "Puppeteer", "NodeJS","Web Scrapping"],
    thumbnail: "/Projects/leetcodolio.png",
    liveUrl: "https://leetcodolio.akhilkompally.app",
    repoUrl: "https://github.com/akhilthirunalveli/LeetCodolio",
  },
  {
    id: "proj-magicboard",
    title: "MagicBoard",
    description:
      "A web application that solves handwritten mathematical equations in real-time using a digital canvas and the Gemini Vision API.",
    tags: ["ReactJS", "NodeJS", "Gemini API","Canavas API"],
    thumbnail: "/Projects/magic.png",
    liveUrl: "https://magicboard.akhilkompally.app",
    repoUrl: "https://github.com/KompallyAkhil/MagicBoard",
  },
  {
    id: "proj-briefly",
    title: "Briefly",
    description:
      "Summarization tool that condenses articles, documents, and notes instantly.",
    tags: ["ReactJS", "Redis", "Gemini API","NodeJS","Clerk"],
    thumbnail: "/Projects/briefly.png",
    liveUrl: "https://briefly.akhilkompally.app/",
    repoUrl: "https://github.com/KompallyAkhil/Briefly",
  },
  {
    id: "proj-resumebuilder",
    title: "ResumeBuilder",
    description:
      "Fast, customizable tool to create professional resumes in minutes.",
    tags: ["ReactJS", "Clerk","TailwindCSS","PDF renderer"],
    thumbnail: "/Projects/resumebuilder.png",
    liveUrl: "https://resumebuilder.akhilkompally.app/",
    repoUrl: "https://github.com/KompallyAkhil/ResumeBuilder",
  },
  {
    id: "proj-codeconnect",
    title: "CodeConnect",
    description:
      "Real-time collaborative coding platform to share and execute code instantly.",
    tags: ["ReactJS","getStream.io","NodeJS"],
    thumbnail: "/Projects/codeconnect.png",
    liveUrl: "https://codeconnect.akhilkompally.app/",
    repoUrl: "https://github.com/KompallyAkhil/CodeConnect",
  },
];

export const techStackData = {
  languages: ["JavaScript", "TypeScript", "Python", "Langchain"],
  frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  backend: ["Node.js", "Express", "FastAPI", "PostgreSQL"],
  tools: ["Git", "Docker", "AWS", "Linux", "Figma"],
};

export const educationData = [
  {
    id: "edu-1",
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering AIML",
    institution: "Keshav Memorial Engineering College",
    duration: "2022 – 2026",
    grade: "CGPA: 8.4 / 10",
    // certificateUrl: "/Certificate/PD.png",
  },
  // Add more entries as needed
];

export const achievementsData = [
  {
    id: "ach-1",
    title: "Hackathon Winner",
    description: "First place at XYZ Hackathon 2024 — built a real-time collaboration tool in 36 hours.",
    year: "2024",
  },
  {
    id: "ach-2",
    title: "Open Source Contributor",
    description: "Contributed to major open-source projects with 500+ stars on personal repositories.",
    year: "2023",
  },
  {
    id: "ach-3",
    title: "Technical Writing",
    description: "Published articles on system design and web performance reaching 10k+ readers.",
    year: "2023",
  },
];

export const socialsData = [
  {
    id: "social-github",
    platform: "GitHub",
    url: "https://github.com/KompallyAkhil",
  },
  {
    id: "social-linkedin",
    platform: "LinkedIn",
    url: "https://linkedin.com/in/akhilkompally",
  },
  {
    id: "social-twitter",
    platform: "X",
    url: "https://x.com/KompallyAkhil",
  },
  {
    id: "social-email",
    platform: "Email",
    url: "mailto:akhilkompally27@gmail.com",
  },
  {
    id: "social-blog",
    platform: "Medium",
    url: "https://medium.com/@akhilkompally27",
  },
  {
    id: "social-leetcode",
    platform: "LeetCode",
    url: "https://leetcode.com/AkhilKompally",
  },
  {
    id: "social-resume",
    platform: "Resume",
    url: "https://drive.google.com/file/d/1Bez4Zr3q2gHXS6HU5irrq7CJJbeebIeM/view?usp=sharing",
  },
];

export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Socials", href: "#socials" },
];
