export interface TimelineEvent {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  category: 'experience' | 'achievement';
}

export const timelineEvents: TimelineEvent[] = [
  {
    title: "NASA Space Apps Challenge 2025",
    subtitle: "Participant / Innovator",
    date: "October 2025",
    description: "Collaborated in a high-intensity hackathon to solve global challenges using NASA's open-source data. Developed a prototype for mapping environmental anomalies.",
    category: "achievement"
  },
  {
    title: "Build with India Hackathon",
    subtitle: "Top 5000 Rank (out of 25,000+ teams)",
    date: "August 2025",
    description: "Designed and pitched a scalable software solution addressing core local issues. Recognized for optimization and robust architectural plan.",
    category: "achievement"
  },
  {
    title: "Social Summer of Code & GirlScript Summer of Code 2026 Open Source Program",
    subtitle: "Open Source Contributor & Program Participant",
    date: "May 2026 - Present",
    description: "Contributing to high-impact open-source repositories under SSOC & GSSOC 2026. Developing polished modern web components, fixing critical frontend bugs, and collaborating using advanced Git workflows.",
    category: "experience"
  },
  {
    title: "160 Days of DSA Challenge",
    subtitle: "Personal Coding Milestone",
    date: "Ongoing / 2026",
    description: "Solving algorithmic problems daily covering arrays, strings, dynamic programming, and graphs. Highly active on LeetCode/GeeksforGeeks.",
    category: "achievement"
  }
];
