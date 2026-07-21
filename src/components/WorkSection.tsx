'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from './ScrollReveal';

export function WorkSection() {
  return (
    <section id="work" style={{ padding: '80px 0 40px', scrollMarginTop: '90px' }}>
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
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(34px, 5vw, 60px)',
              lineHeight: 1.02,
              letterSpacing: '-.02em',
              margin: 0,
              color: 'var(--ink)',
            }}
          >
            Curious about my work?
          </h2>
          <span style={{ fontSize: '15px', color: 'var(--ink-2)', fontWeight: 500, maxWidth: '34ch' }}>
            Selected case studies — problem, process, and the numbers that moved.
          </span>
        </div>
      </ScrollReveal>

      {/* Case 1: Genesis AI */}
      <ScrollReveal direction="up" delay={0.1}>
        <Link href="/case-study/genesis-ai" style={{ display: 'block', color: 'inherit', marginBottom: '22px' }}>
          <article
            className="cs-case-study-card-1 group"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: '24px',
              overflow: 'hidden',
              transition: 'transform .2s, box-shadow .2s',
            }}
          >
            <div style={{ padding: '38px 40px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '.03em',
                    padding: '6px 12px',
                    borderRadius: '100px',
                    background: 'var(--accent-soft)',
                    color: 'var(--accent)',
                  }}
                >
                  AI-powered CPQ Platform
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 400,
                  fontSize: 'clamp(30px, 3.4vw, 44px)',
                  lineHeight: 1,
                  margin: 0,
                  color: 'var(--ink)',
                }}
              >
                Case Study 1
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--ink-2)', fontWeight: 600, margin: '10px 0 0' }}>
                Sr. Product Designer · 9 Months
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.5, color: 'var(--ink-2)', margin: '16px 0 0' }}>
                Redesigned an AI-powered CPQ platform with conversational configuration and scalable admin workflows.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: '22px 0 0' }}>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '7px 13px',
                    borderRadius: '10px',
                    border: '1px solid var(--line)',
                    color: 'var(--ink)',
                  }}
                >
                  ⏱ 45 → 20 min config
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '7px 13px',
                    borderRadius: '10px',
                    border: '1px solid var(--line)',
                    color: 'var(--ink)',
                  }}
                >
                  98% quote accuracy
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '7px 13px',
                    borderRadius: '10px',
                    border: '1px solid var(--line)',
                    color: 'var(--ink)',
                  }}
                >
                  60% less sales friction
                </span>
              </div>
              <span style={{ marginTop: 'auto', paddingTop: '24px', fontWeight: 600, color: 'var(--accent)', fontSize: '16px' }}>
                Read Case Study →
              </span>
            </div>
            <div
              style={{
                minHeight: '300px',
                background: 'var(--bg-2)',
                backgroundImage: 'repeating-linear-gradient(135deg, var(--line) 0 1px, transparent 1px 12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'ui-monospace, monospace',
                fontSize: '12px',
                color: 'var(--ink-2)',
              }}
            >
              genesis_ai_hero_mockup.png
            </div>
          </article>
        </Link>
      </ScrollReveal>

      {/* Case 2: Commudle */}
      <ScrollReveal direction="up" delay={0.2}>
        <Link href="/case-study/commudle" style={{ display: 'block', color: 'inherit', marginBottom: '22px' }}>
          <article
            className="cs-case-study-card-2 group"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: '24px',
              overflow: 'hidden',
              transition: 'transform .2s, box-shadow .2s',
            }}
          >
            <div
              style={{
                minHeight: '300px',
                background: 'var(--bg-2)',
                backgroundImage: 'repeating-linear-gradient(135deg, var(--line) 0 1px, transparent 1px 12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'ui-monospace, monospace',
                fontSize: '12px',
                color: 'var(--ink-2)',
              }}
            >
              commudle_hero_mockup.png
            </div>
            <div style={{ padding: '38px 40px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '.03em',
                    padding: '6px 12px',
                    borderRadius: '100px',
                    background: 'var(--accent-soft)',
                    color: 'var(--accent)',
                  }}
                >
                  Social Website for Techies
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 400,
                  fontSize: 'clamp(30px, 3.4vw, 44px)',
                  lineHeight: 1,
                  margin: 0,
                  color: 'var(--ink)',
                }}
              >
                Case Study 2
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--ink-2)', fontWeight: 600, margin: '10px 0 0' }}>
                Product Designer · 6 Months
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.5, color: 'var(--ink-2)', margin: '16px 0 0' }}>
                Revamped Commudle&apos;s core experience across Home, About, and Profile.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: '22px 0 0' }}>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '7px 13px',
                    borderRadius: '10px',
                    border: '1px solid var(--line)',
                    color: 'var(--ink)',
                  }}
                >
                  80–90k → 380k / yr engagement
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '7px 13px',
                    borderRadius: '10px',
                    border: '1px solid var(--line)',
                    color: 'var(--ink)',
                  }}
                >
                  4× growth
                </span>
              </div>
              <span style={{ marginTop: 'auto', paddingTop: '24px', fontWeight: 600, color: 'var(--accent)', fontSize: '16px' }}>
                Read Case Study →
              </span>
            </div>
          </article>
        </Link>
      </ScrollReveal>

      {/* Case 3: Prana AI */}
      <ScrollReveal direction="up" delay={0.3}>
        <Link href="/case-study/prana-ai" style={{ display: 'block', color: 'inherit' }}>
          <article
            className="cs-case-study-card-3 group"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: '24px',
              overflow: 'hidden',
              transition: 'transform .2s, box-shadow .2s',
            }}
          >
            <div style={{ padding: '38px 40px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '.03em',
                    padding: '6px 12px',
                    borderRadius: '100px',
                    background: 'var(--accent-soft)',
                    color: 'var(--accent)',
                  }}
                >
                  Health &amp; Fitness App
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 400,
                  fontSize: 'clamp(30px, 3.4vw, 44px)',
                  lineHeight: 1,
                  margin: 0,
                  color: 'var(--ink)',
                }}
              >
                Case Study 3
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--ink-2)', fontWeight: 600, margin: '10px 0 0' }}>
                UX Designer · 12 Months
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.5, color: 'var(--ink-2)', margin: '16px 0 0' }}>
                Designed and led end-to-end UX for Prana AI, an AI-powered fitness app.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: '22px 0 0' }}>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '7px 13px',
                    borderRadius: '10px',
                    border: '1px solid var(--line)',
                    color: 'var(--ink)',
                  }}
                >
                  92% positive beta feedback (MVP)
                </span>
              </div>
              <span style={{ marginTop: 'auto', paddingTop: '24px', fontWeight: 600, color: 'var(--accent)', fontSize: '16px' }}>
                Read Case Study →
              </span>
            </div>
            <div
              style={{
                minHeight: '300px',
                background: 'var(--bg-2)',
                backgroundImage: 'repeating-linear-gradient(135deg, var(--line) 0 1px, transparent 1px 12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'ui-monospace, monospace',
                fontSize: '12px',
                color: 'var(--ink-2)',
              }}
            >
              prana_ai_hero_mockup.png
            </div>
          </article>
        </Link>
      </ScrollReveal>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button
          style={{
            background: 'transparent',
            border: '1px solid var(--line)',
            color: 'var(--ink)',
            fontWeight: 600,
            fontSize: '16px',
            padding: '14px 30px',
            borderRadius: '100px',
            cursor: 'pointer',
          }}
          className="hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
        >
          Load more case studies
        </button>
      </div>
    </section>
  );
}
