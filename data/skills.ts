export interface Skill {
  name: string;
  level: number; // 0-100 for animations
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "C++", level: 85 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 & CSS3", level: 95 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 90 }
    ]
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 90 }
    ]
  },
  {
    category: "Core Concepts",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: 85 },
      { name: "API Integration", level: 90 },
      { name: "Responsive UI Design", level: 95 }
    ]
  }
];
