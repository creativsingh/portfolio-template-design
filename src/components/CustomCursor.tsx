'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(-100, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(-100, { damping: 25, stiffness: 250 });

  useEffect(() => {
    // Only enable custom cursor on devices supporting fine mouse pointer
    if (!window.matchMedia('(pointer: fine)').matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - (isHovered ? 23 : 13));
      cursorY.set(e.clientY - (isHovered ? 23 : 13));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.dataset.cursorHover !== undefined)
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isHovered]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      animate={{
        width: isHovered ? 46 : 26,
        height: isHovered ? 46 : 26,
        backgroundColor: isHovered ? 'var(--accent-soft)' : 'rgba(0,0,0,0)',
        borderColor: 'var(--accent)',
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className="rounded-full border-[1.5px] border-[var(--accent)]"
    />
  );
}
