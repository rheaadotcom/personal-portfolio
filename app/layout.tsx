import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Riya Bhardwaj | Full Stack Developer & AI Enthusiast",
  description: "Portfolio of Riya Bhardwaj, a B.Tech Computer Science student and Full Stack Developer passionate about AI/ML, modern web development, and problem solving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-black text-white selection:bg-primary-600/30 selection:text-primary-200">
        <ScrollProgressBar />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10 flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
