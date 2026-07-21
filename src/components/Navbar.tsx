'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          background: 'color-mix(in srgb, var(--bg) 82%, transparent)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <nav
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '16px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            position: 'relative',
          }}
        >
          {/* LOGO (LEFT) */}
          <Link
            href="/"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: '26px',
              letterSpacing: '-.01em',
              color: 'var(--ink)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                background: 'var(--accent)',
                display: 'inline-block',
              }}
            />
            CreativSingh
          </Link>

          {/* CENTERED NAVIGATION LINKS (DESKTOP) */}
          <div
            className="nav-desktop-only"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              gap: '28px',
              fontSize: '15px',
              fontWeight: 500,
            }}
          >
            <Link href="/#top" style={{ color: 'var(--ink)' }} className="hover:opacity-75 transition-opacity">
              Home
            </Link>
            <Link href="/#work" style={{ color: 'var(--ink)' }} className="hover:opacity-75 transition-opacity">
              My Work
            </Link>
            <Link href="/#about" style={{ color: 'var(--ink)' }} className="hover:opacity-75 transition-opacity">
              About Me
            </Link>
            <a
              href="/#contact"
              onClick={handleContactClick}
              style={{ color: 'var(--ink)', cursor: 'pointer' }}
              className="hover:opacity-75 transition-opacity"
            >
              Contact Me
            </a>
          </div>

          {/* DESKTOP RIGHT (SOCIAL PILLS & THEME TOGGLE) */}
          <div className="nav-desktop-only" style={{ alignItems: 'center', gap: '16px' }}>
            {/* SOCIAL PILLS */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { name: 'Dr', url: 'https://www.dribbble.com/creativsingh', title: 'Dribbble', size: '12px' },
                { name: 'in', url: 'https://www.linkedin.com/in/creativsingh', title: 'LinkedIn', size: '12px' },
                { name: 'X', url: 'https://twitter.com/Creativsingh', title: 'X', size: '13px' },
                { name: 'M', url: 'https://www.medium.com/@creativsingh', title: 'Medium', size: '13px' },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={soc.title}
                  style={{
                    width: '34px',
                    height: '34px',
                    border: '1px solid var(--line)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: soc.size,
                    fontWeight: 600,
                    color: 'var(--ink)',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  className="hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {soc.name}
                </a>
              ))}
            </div>

            {/* THEME TOGGLE BUTTON */}
            <button
              onClick={toggleTheme}
              title="Toggle theme"
              style={{
                width: '34px',
                height: '34px',
                border: '1px solid var(--line)',
                borderRadius: '50%',
                background: 'transparent',
                color: 'var(--ink)',
                cursor: 'pointer',
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              className="hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {theme === 'light' ? '☾' : '☀'}
            </button>
          </div>

          {/* MOBILE MENU BUTTON (Screens < 860px) */}
          <div className="nav-mobile-only" style={{ alignItems: 'center', gap: '8px' }}>
            <button
              onClick={toggleTheme}
              title="Toggle theme"
              style={{
                width: '34px',
                height: '34px',
                border: '1px solid var(--line)',
                borderRadius: '50%',
                background: 'transparent',
                color: 'var(--ink)',
                cursor: 'pointer',
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {theme === 'light' ? '☾' : '☀'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              style={{
                background: 'transparent',
                border: '1px solid var(--line)',
                borderRadius: '10px',
                padding: '9px 12px',
                color: 'var(--ink)',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              Menu
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 150,
              background: 'var(--bg)',
              display: 'flex',
              flexDirection: 'column',
              padding: '24px 28px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: '26px', color: 'var(--ink)' }}>
                CreativSingh
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--line)',
                  borderRadius: '10px',
                  padding: '9px 12px',
                  color: 'var(--ink)',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Close
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                marginTop: '48px',
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              <Link
                href="/#top"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--ink)', fontSize: '44px' }}
              >
                Home
              </Link>
              <Link
                href="/#work"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--ink)', fontSize: '44px' }}
              >
                My Work
              </Link>
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--ink)', fontSize: '44px' }}
              >
                About Me
              </Link>
              <a
                href="/#contact"
                onClick={handleContactClick}
                style={{ color: 'var(--ink)', fontSize: '44px' }}
              >
                Contact Me
              </a>
            </div>

            <div
              style={{
                marginTop: 'auto',
                display: 'flex',
                gap: '20px',
                fontSize: '15px',
                fontWeight: 600,
              }}
            >
              <a href="https://www.dribbble.com/creativsingh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)' }}>
                Dribbble
              </a>
              <a href="https://www.linkedin.com/in/creativsingh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)' }}>
                LinkedIn
              </a>
              <a href="https://twitter.com/Creativsingh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)' }}>
                X
              </a>
              <a href="https://www.medium.com/@creativsingh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)' }}>
                Medium
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
