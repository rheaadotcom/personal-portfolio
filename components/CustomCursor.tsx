'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const innerSpringConfig = { damping: 20, stiffness: 500 };
  const innerXSpring = useSpring(cursorX, innerSpringConfig);
  const innerYSpring = useSpring(cursorY, innerSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Only enable cursor glow on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
      setIsVisible(true);
      window.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseenter', handleMouseEnter);
      document.body.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseenter', handleMouseEnter);
        document.body.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary-600/30 bg-primary-600/5 pointer-events-none z-50 mix-blend-screen select-none hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary-600 pointer-events-none z-50 select-none hidden md:block"
        style={{
          x: innerXSpring,
          y: innerYSpring,
          translateX: 12,
          translateY: 12,
        }}
      />
      {/* Ambient background pointer glow */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full bg-primary-600/5 blur-[120px] pointer-events-none z-0 select-none hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: -160,
          translateY: -160,
        }}
      />
    </>
  );
}
