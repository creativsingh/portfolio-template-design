'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export function AboutSection() {
  const tools = ['Figma', 'Framer', 'FigJam', 'Protopie', 'Notion', 'Maze'];

  return (
    <section id="about" style={{ padding: '90px 0 50px', scrollMarginTop: '90px' }}>
      <div className="cs-about-grid">
        <div style={{ position: 'sticky', top: '100px' }}>
          <ScrollReveal direction="left">
            <div
              style={{
                aspectRatio: '4/5',
                borderRadius: '22px',
                background: 'var(--bg-2)',
                backgroundImage: 'repeating-linear-gradient(135deg, var(--line) 0 1px, transparent 1px 12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'ui-monospace, monospace',
                fontSize: '12px',
                color: 'var(--ink-2)',
                border: '1px solid var(--line)',
              }}
            >
              portrait.jpg
            </div>
          </ScrollReveal>
        </div>
        <div>
          <ScrollReveal direction="right">
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                margin: '0 0 16px',
              }}
            >
              About me
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                fontSize: 'clamp(30px, 4vw, 52px)',
                lineHeight: 1.05,
                letterSpacing: '-.02em',
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              I design with empathy first — and let the questions lead.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div
              style={{
                fontSize: '18px',
                lineHeight: 1.65,
                color: 'var(--ink-2)',
                marginTop: '26px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}
            >
              <p style={{ margin: 0 }}>
                I&apos;m a product designer who believes the best interfaces get out of the way. My work lives in
                B2B and B2C SaaS, where I untangle complex workflows into experiences that feel obvious in hindsight.
                Whitespace, clarity, and a relentless habit of asking &quot;why?&quot; are my core tools.
              </p>
              <p style={{ margin: 0 }}>
                Outside the canvas, I&apos;m a musician and a psychology enthusiast — both feed how I think about
                rhythm, attention, and human behavior. I speak at events and organize{' '}
                <a
                  href="https://www.pixelpeps.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  PixelPeps
                </a>
                , a growing community where designers learn, share, and grow together.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--ink-2)',
                margin: '34px 0 14px',
              }}
            >
              Toolkit
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {tools.map((tool) => (
                <span
                  key={tool}
                  style={{
                    border: '1px solid var(--line)',
                    borderRadius: '12px',
                    padding: '10px 16px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    background: 'var(--card)',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
