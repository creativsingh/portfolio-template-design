'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { MagneticButton } from './MagneticButton';

export function Footer() {
  return (
    <footer
      id="contact"
      style={{
        scrollMarginTop: '90px',
        marginTop: '60px',
        marginBottom: 0,
        background: 'var(--footer-bg)',
        color: 'var(--footer-ink)',
        width: '100%',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '88px 28px 48px' }}>
        <ScrollReveal direction="up">
          <p
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 20px',
            }}
          >
            Contact me
          </p>

          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 400,
              fontSize: 'clamp(44px, 8vw, 104px)',
              lineHeight: 0.98,
              letterSpacing: '-.02em',
              margin: 0,
              maxWidth: '14ch',
              color: 'var(--footer-ink)',
            }}
          >
            Let&apos;s build something worth remembering.
          </h2>
        </ScrollReveal>

        {/* CONTACT BUTTONS */}
        <ScrollReveal direction="up" delay={0.2}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '36px' }}>
            <MagneticButton>
              <a
                href="mailto:creativsingh@gmail.com"
                style={{
                  background: 'var(--accent)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '17px',
                  padding: '15px 28px',
                  borderRadius: '100px',
                  display: 'inline-block',
                }}
              >
                creativsingh@gmail.com
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="tel:+919876543210"
                style={{
                  border: '1px solid var(--footer-border)',
                  color: 'var(--footer-ink)',
                  fontWeight: 600,
                  fontSize: '17px',
                  padding: '15px 28px',
                  borderRadius: '100px',
                  display: 'inline-block',
                }}
                className="hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                +91 98765 43210
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* SOCIAL & EXPLORE LINKS GRID */}
        <ScrollReveal direction="up" delay={0.3}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '30px',
              marginTop: '72px',
              paddingTop: '40px',
              borderTop: '1px solid var(--footer-border)',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--footer-subtext)',
                  margin: '0 0 14px',
                }}
              >
                Explore
              </p>
              <a
                href="https://www.pixelpeps.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--footer-ink)', fontSize: '16px', fontWeight: 500, display: 'inline-block' }}
                className="hover:text-[var(--accent)] transition-colors"
              >
                PixelPeps community →
              </a>
            </div>

            <div>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--footer-subtext)',
                  margin: '0 0 14px',
                }}
              >
                Social
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '16px', fontWeight: 500 }}>
                <a
                  href="https://twitter.com/Creativsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--footer-ink)' }}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  X (Twitter)
                </a>
                <a
                  href="https://www.linkedin.com/in/creativsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--footer-ink)' }}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.medium.com/@creativsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--footer-ink)' }}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Medium
                </a>
              </div>
            </div>

            <div>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--footer-subtext)',
                  margin: '0 0 14px',
                }}
              >
                &nbsp;
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '16px', fontWeight: 500 }}>
                <a
                  href="https://www.dribbble.com/creativsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--footer-ink)' }}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Dribbble
                </a>
                <a
                  href="https://www.commudle.com/users/creativsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--footer-ink)' }}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Commudle
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <p style={{ margin: '56px 0 0', fontSize: '14px', color: 'var(--footer-subtext)' }}>
          © 2026 · Made by creativsingh with Love ❤️ &amp; Coffee ☕️
        </p>
      </div>
    </footer>
  );
}
