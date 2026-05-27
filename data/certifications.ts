export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export const certificationsData: Certification[] = [
  {
    name: "Programming in Java",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    date: "2024",
    credentialId: "NPTEL-JAVA-2024-ELITE",
    link: "https://nptel.ac.in/"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 – AI Foundations Associate",
    issuer: "Oracle University",
    date: "2025",
    credentialId: "OCI-AI-FOUND-2025",
    link: "https://education.oracle.com/"
  }
];
