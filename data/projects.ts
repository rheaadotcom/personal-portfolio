export interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  liveLink: string;
  githubLink: string;
  image: string; // fallback to custom CSS pattern or generated image paths
}

export const projectsData: Project[] = [
  {
    title: "IdeaValidator AI",
    description: "An AI-powered startup validation platform that analyzes business ideas using automated market research, competitor analysis, and profitability scoring.",
    tech: ["Next.js", "React.js", "MongoDB", "OpenAI API", "Tailwind CSS"],
    features: [
      "GPT integration for deep market analysis",
      "Smart fallback system for API rate limits",
      "Fault-tolerant asynchronous scoring API",
      "Secure authentication & dashboard dashboard"
    ],
    liveLink: "https://idea-validator-ai.vercel.app/",
    githubLink: "https://github.com/rheaadotcom/idea-validatorAI",
    image: "/projects/ideavalidator.jpg"
  },
  {
    title: "CommitCode",
    description: "An automation tool that syncs accepted LeetCode submissions directly to GitHub using Python scripts, Git automation, and the LeetCode GraphQL API.",
    tech: ["Python", "Git", "GitHub", "GraphQL API", "Requests", "Windows Task Scheduler"],
    features: [
      "Automatically fetches newly accepted LeetCode submissions",
      "Creates organized solution files and pushes them to GitHub",
      "Supports scheduled background execution every 10 minutes",
      "Includes configurable no-push mode for local testing and debugging"
    ],
    liveLink: "",
    githubLink: "https://github.com/rheaadotcom/commitcode",
    image: "/projects/commitcode.jpg"
  },
  {
    title: "Wall Calendar",
    description: "A premium interactive wall calendar application featuring 3D page-flip animations, dynamic seasonal wallpapers, intelligent date-range selection, and a modern glassmorphism-inspired UI.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "PostCSS"],
    features: [
      "Immersive 3D month transition effects with smooth page-flip animations",
      "Dynamic seasonal wallpaper galleries with automatic cross-fade transitions",
      "Interactive date-range selection with responsive calendar grid rendering",
      "Modern SaaS-inspired interface with glassmorphism effects and dark mode support"
    ],
    liveLink: "https://wall-calender-three.vercel.app",
    githubLink: "https://github.com/rheaadotcom/wall-calender",
    image: "/projects/wall-calendar.jpg"
  },
  {
    title: "Cognitive Experiment Platform",
    description: "A scalable full-stack research platform designed for creating, deploying, and managing interactive cognitive experiments with real-time analytics and participant monitoring.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js"],
    features: [
      "Dynamic experiment creation system with configurable cognitive task modules",
      "Secure RESTful APIs with efficient database integration and data persistence",
      "Real-time participant tracking with response time analytics and visual reports",
      "Scalable architecture optimized for concurrent users and experiment sessions"
    ],
    liveLink: "https://cognito-lab.vercel.app/",
    githubLink: "https://github.com/rheaadotcom/cognito_lab",
    image: "/projects/cognitive.jpg"
  }
];
