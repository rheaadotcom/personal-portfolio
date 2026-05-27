'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar height

      for (const item of navItems) {
        const targetId = item.href.slice(1);
        const element = document.getElementById(targetId);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run initially to set starting active state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);

    if (element) {
      const topOffset = element.offsetTop - 80; // navbar offset
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 flex items-center justify-center w-full backdrop-blur-xl bg-black/40 border-b border-white/10 px-4 py-3 shadow-glass"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ul className="flex space-x-4 md:space-x-8 text-xs sm:text-sm md:text-base">
        {navItems.map((item) => {
          const targetId = item.href.slice(1);
          const isActive = activeSection === targetId;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={cn(
                  "relative rounded-md px-3 py-1.5 transition-colors duration-200 block",
                  isActive ? "text-primary-600 font-semibold" : "text-white/70 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute inset-0 rounded-md bg-primary-600/10 border border-primary-600/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
