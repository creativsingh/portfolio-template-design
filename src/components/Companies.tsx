'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export function Companies() {
  const logos = ['logo_01', 'logo_02', 'logo_03', 'logo_04', 'logo_05', 'logo_06'];
  const marqueeList = [...logos, ...logos];

  return (
    <section style={{ padding: '60px 0 20px' }}>
      <ScrollReveal direction="up">
        <p
          style={{
            textAlign: 'center',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'var(--ink-2)',
            margin: '0 0 26px',
          }}
        >
          Companies I&apos;ve worked with
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.2}>
        <div
          style={{
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
            maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
          }}
        >
          <div className="cs-track-marquee-rev">
            {marqueeList.map((logo, idx) => (
              <div
                key={idx}
                style={{
                  width: '190px',
                  height: '78px',
                  border: '1px dashed var(--line)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: '11px',
                  color: 'var(--ink-2)',
                  flex: 'none',
                }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
