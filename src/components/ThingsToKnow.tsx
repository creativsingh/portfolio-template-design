'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export function ThingsToKnow() {
  const items = [
    { num: '01', text: 'Whitespace is my love language in design.' },
    { num: '02', text: 'Asking questions is second nature to me.' },
    { num: '03', text: 'Empathy comes naturally to me. ❤️' },
    { num: '04', text: 'AI is my co-pilot, not my replacement.' },
    { num: '05', text: 'Coffee keeps my creativity awake. ☕️' },
  ];

  return (
    <section style={{ padding: '90px 0 50px' }}>
      <ScrollReveal direction="up">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '44px',
          }}
        >
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 400,
              fontSize: 'clamp(34px, 5vw, 60px)',
              lineHeight: 1.02,
              letterSpacing: '-.02em',
              margin: 0,
              maxWidth: '16ch',
              color: 'var(--ink)',
            }}
          >
            Things you should know about me
          </h2>
          <span style={{ fontSize: '15px', color: 'var(--ink-2)', fontWeight: 500 }}>
            Five honest ones ☕️
          </span>
        </div>
      </ScrollReveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '18px',
        }}
      >
        {items.map((item, idx) => (
          <ScrollReveal key={item.num} delay={idx * 0.1} direction="up">
            <div
              className="hover-card-lift-small"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: '20px',
                padding: '30px 28px',
                boxShadow: '0 1px 0 var(--line)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: '56px',
                  lineHeight: 1,
                  color: 'var(--accent)',
                }}
              >
                {item.num}
              </div>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.45,
                  margin: '14px 0 0',
                  fontWeight: 500,
                  color: 'var(--ink)',
                }}
              >
                {item.text}
              </p>
            </div>
          </ScrollReveal>
        ))}

        {/* QUOTE CARD */}
        <ScrollReveal delay={0.6} direction="up">
          <div
            style={{
              background: 'var(--accent)',
              color: '#ffffff',
              borderRadius: '20px',
              padding: '30px 28px',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <p
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '26px',
                lineHeight: 1.2,
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              &ldquo;Good design starts with a better question.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
