'use client';

import React from 'react';
import Link from 'next/link';
import { MagneticButton } from './MagneticButton';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';

export function Hero() {
  // Set to true to re-enable scattered tags in the hero section
  const SHOW_TAGS = false;

  const scatteredTags = [
    { text: '🎵 Musician', style: { top: '0px', left: '10px', transform: 'rotate(-4deg)' }, floatDelay: 0 },
    { text: '🧠 Psychology enthusiast', style: { top: '15px', right: '5px', transform: 'rotate(3deg)' }, floatDelay: 0.3 },
    { text: '🤝 Community organizer', style: { top: '75px', left: '40px', transform: 'rotate(-2deg)' }, floatDelay: 0.6 },
    { text: '🎤 Public speaker', style: { top: '125px', right: '20px', transform: 'rotate(4deg)' }, floatDelay: 0.2 },
    { text: '☕️ Coffee-fueled', style: { top: '145px', left: '5px', transform: 'rotate(-5deg)' }, floatDelay: 0.8 },
    { text: '🎨 B2B & B2C SaaS', style: { top: '200px', right: '35px', transform: 'rotate(2deg)' }, floatDelay: 0.4 },
    { text: '📐 Systems thinker', style: { top: '220px', left: '45px', transform: 'rotate(-3deg)' }, floatDelay: 0.7 },
    { text: '✨ Whitespace lover', style: { top: '275px', right: '10px', transform: 'rotate(4deg)' }, floatDelay: 0.1 },
    { text: '🚀 Product strategist', style: { top: '295px', left: '15px', transform: 'rotate(-2deg)' }, floatDelay: 0.5 },
    { text: '💡 Design mentor', style: { top: '345px', left: '70px', transform: 'rotate(3deg)' }, floatDelay: 0.9 },
  ];

  return (
    <section style={{ padding: '88px 0 40px', position: 'relative', minHeight: SHOW_TAGS ? '520px' : 'auto' }}>
      {/* LEFT CONTENT AREA */}
      <div style={{ maxWidth: SHOW_TAGS ? '750px' : '100%' }}>
        <ScrollReveal direction="up" delay={0.1}>
          {/* AVAILABILITY BADGE */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '26px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--ink-2)',
              letterSpacing: '.02em',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'oklch(0.72 0.17 145)',
                display: 'inline-block',
              }}
            />
            Available for senior roles &amp; freelance
          </div>
        </ScrollReveal>

        {/* HEADLINE */}
        <ScrollReveal direction="up" delay={0.2}>
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 400,
              fontSize: '74px',
              lineHeight: 0.98,
              letterSpacing: '-.02em',
              margin: 0,
              maxWidth: '14ch',
              color: 'var(--ink)',
            }}
          >
            Product designer shaping{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              B2B &amp; B2C SaaS
            </span>{' '}
            people actually love.
          </h1>
        </ScrollReveal>

        {/* BIO SUMMARY */}
        <ScrollReveal direction="up" delay={0.3}>
          <p
            style={{
              fontSize: 'clamp(17px, 2.2vw, 21px)',
              lineHeight: 1.55,
              color: 'var(--ink-2)',
              maxWidth: '56ch',
              margin: '30px 0 36px',
            }}
          >
            I&apos;m CreativSingh — I turn tangled product problems into clear, human-centered
            experiences. Whitespace is my love language, empathy is my method, and coffee keeps the
            ideas coming.
          </p>
        </ScrollReveal>

        {/* CTA BUTTONS */}
        <ScrollReveal direction="up" delay={0.4}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <MagneticButton>
              <Link
                href="#work"
                style={{
                  background: 'var(--accent)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '17px',
                  padding: '16px 30px',
                  borderRadius: '100px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 10px 26px -10px var(--accent)',
                  transition: 'transform .15s',
                }}
              >
                👀 Want to see my work?
              </Link>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                style={{
                  color: 'var(--ink)',
                  fontWeight: 600,
                  fontSize: '17px',
                  padding: '16px 26px',
                  borderRadius: '100px',
                  border: '1px solid var(--line)',
                  background: 'transparent',
                  display: 'inline-block',
                }}
                className="hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                Let&apos;s talk →
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* MOBILE / SMALL SCREEN FALLBACK SCATTERED TAG CLOUD (HIDDEN IN CODE) */}
        {SHOW_TAGS && (
          <div className="block lg:hidden mt-10">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {scatteredTags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    border: '1px solid var(--line)',
                    borderRadius: '100px',
                    padding: '9px 20px',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'var(--ink)',
                    background: 'var(--card)',
                  }}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* RANDOMLY SCATTERED FLOATING TAGS CONTAINER (HIDDEN IN CODE) */}
      {SHOW_TAGS && (
        <div
          className="hidden lg:block"
          style={{
            position: 'absolute',
            right: 0,
            top: '60px',
            width: '380px',
            height: '420px',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          {scatteredTags.map((tag, idx) => (
            <motion.div
              key={idx}
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 3.5 + (idx % 3),
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: tag.floatDelay,
              }}
              style={{
                position: 'absolute',
                pointerEvents: 'auto',
                ...tag.style,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.08, zIndex: 30 }}
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: '100px',
                  padding: '9px 20px',
                  fontSize: '15px',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  color: 'var(--ink)',
                  background: 'var(--card)',
                  boxShadow: '0 6px 20px -8px var(--shadow)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(4px)',
                  transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s',
                }}
                className="hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {tag.text}
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
