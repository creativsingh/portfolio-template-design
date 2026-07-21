import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CASE_STUDIES } from '../data';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];
  if (!study) return { title: 'Case Study Not Found' };

  return {
    title: `${study.title} — Case Study · CreativSingh`,
    description: study.summary,
  };
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];

  if (!study) {
    notFound();
  }

  const nextStudy = CASE_STUDIES[study.nextSlug];

  return (
    <div
      style={{
        background: 'var(--bg)',
        color: 'var(--ink)',
        fontFamily: "'Instrument Sans', system-ui, sans-serif",
        WebkitFontSmoothing: 'antialiased',
        backgroundImage: 'radial-gradient(var(--line) 0.7px, transparent 0.7px)',
        backgroundSize: '26px 26px',
        minHeight: '100vh',
      }}
    >
      {/* NAV */}
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
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '16px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: '24px',
              color: 'var(--ink)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'var(--accent)',
              }}
            />
            CreativSingh
          </Link>
          <Link
            href="/#work"
            style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}
            className="hover:text-[var(--accent)] transition-colors"
          >
            ← All work
          </Link>
        </nav>
      </header>

      <article style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 28px' }}>
        {/* HERO */}
        <section style={{ padding: '70px 0 44px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                padding: '7px 14px',
                borderRadius: '100px',
                background: 'var(--accent-soft)',
                color: 'var(--accent)',
              }}
            >
              {study.category}
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 400,
              fontSize: 'clamp(48px, 9vw, 108px)',
              lineHeight: 0.96,
              letterSpacing: '-.02em',
              margin: 0,
              color: 'var(--ink)',
            }}
          >
            {study.title}
          </h1>
          <p
            style={{
              fontSize: 'clamp(19px, 2.6vw, 26px)',
              lineHeight: 1.4,
              color: 'var(--ink)',
              maxWidth: '34ch',
              margin: '24px 0 0',
              fontFamily: "'Instrument Serif', serif",
            }}
          >
            {study.subtitle}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '36px' }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-2)', margin: '0 0 6px' }}>Role</p>
              <p style={{ fontSize: '17px', fontWeight: 600, margin: 0, color: 'var(--ink)' }}>{study.role}</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-2)', margin: '0 0 6px' }}>Duration</p>
              <p style={{ fontSize: '17px', fontWeight: 600, margin: 0, color: 'var(--ink)' }}>{study.duration}</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-2)', margin: '0 0 6px' }}>Platform</p>
              <p style={{ fontSize: '17px', fontWeight: 600, margin: 0, color: 'var(--ink)' }}>{study.platform}</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-2)', margin: '0 0 6px' }}>Team</p>
              <p style={{ fontSize: '17px', fontWeight: 600, margin: 0, color: 'var(--ink)' }}>{study.team}</p>
            </div>
          </div>
        </section>

        {/* HERO MOCKUP */}
        <div
          style={{
            aspectRatio: '16/8',
            borderRadius: '22px',
            background: 'var(--bg-2)',
            backgroundImage: 'repeating-linear-gradient(135deg, var(--line) 0 1px, transparent 1px 14px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'ui-monospace, monospace',
            fontSize: '13px',
            color: 'var(--ink-2)',
            border: '1px solid var(--line)',
          }}
        >
          {study.heroMockup}
        </div>

        {/* IMPACT BAR */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            margin: '56px 0 20px',
          }}
        >
          {study.metrics.map((m, idx) => {
            const bgClass =
              idx === 0
                ? { bg: 'var(--ink)', text: 'var(--bg)', labelColor: 'rgba(255,255,255,0.7)' }
                : idx === 1
                ? { bg: 'var(--accent)', text: '#fff', labelColor: 'rgba(255,255,255,0.85)' }
                : { bg: 'var(--card)', text: 'var(--ink)', labelColor: 'var(--ink-2)', border: '1px solid var(--line)' };
            return (
              <div
                key={idx}
                style={{
                  background: bgClass.bg,
                  color: bgClass.text,
                  border: bgClass.border,
                  borderRadius: '20px',
                  padding: '34px 30px',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: 'clamp(40px, 5vw, 60px)',
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {m.stat}
                </p>
                <p style={{ fontSize: '15px', color: bgClass.labelColor, margin: '12px 0 0', fontWeight: 500 }}>
                  {m.label}
                </p>
              </div>
            );
          })}
        </section>

        {/* OVERVIEW */}
        <section style={{ padding: '64px 0', borderBottom: '1px solid var(--line)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
            <div>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: '26px', margin: '0 0 12px', color: 'var(--ink)' }}>
                The problem
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
                {study.overview.problem}
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: '26px', margin: '0 0 12px', color: 'var(--ink)' }}>
                The goal
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
                {study.overview.goal}
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: '26px', margin: '0 0 12px', color: 'var(--ink)' }}>
                My role
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
                {study.overview.roleDetails}
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section style={{ padding: '64px 0 20px' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>
            Process
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 'clamp(30px, 4.5vw, 52px)', lineHeight: 1.02, letterSpacing: '-.02em', margin: '0 0 48px', maxWidth: '18ch', color: 'var(--ink)' }}>
            From research to a system that scales
          </h2>

          {study.process.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={step.number}
                className="grid grid-cols-1 md:grid-cols-2 gap-11 items-center mb-14"
              >
                <div className={isEven ? 'order-1' : 'order-1 md:order-2'}>
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: '40px', color: 'var(--accent)' }}>
                    {step.number}
                  </span>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: '28px', margin: '8px 0 12px', color: 'var(--ink)' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
                    {step.description}
                  </p>
                </div>
                <div
                  className={isEven ? 'order-2' : 'order-2 md:order-1'}
                  style={{
                    aspectRatio: '4/3',
                    borderRadius: '18px',
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
                  {step.mockup}
                </div>
              </div>
            );
          })}
        </section>

        {/* KEY SCREENS */}
        <section style={{ padding: '64px 0' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>
            Key screens
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 'clamp(30px, 4.5vw, 52px)', lineHeight: 1.02, letterSpacing: '-.02em', margin: '0 0 36px', color: 'var(--ink)' }}>
            The product, up close
          </h2>
          <div
            style={{
              aspectRatio: '16/9',
              borderRadius: '20px',
              background: 'var(--bg-2)',
              backgroundImage: 'repeating-linear-gradient(135deg, var(--line) 0 1px, transparent 1px 14px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'ui-monospace, monospace',
              fontSize: '13px',
              color: 'var(--ink-2)',
              border: '1px solid var(--line)',
              marginBottom: '20px',
            }}
          >
            {study.keyScreens[0]?.mockup || 'conversational_configurator.png'}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {study.keyScreens.slice(1).map((screen, idx) => (
              <div
                key={idx}
                style={{
                  aspectRatio: '4/3',
                  borderRadius: '20px',
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
                {screen.mockup}
              </div>
            ))}
          </div>
        </section>

        {/* OUTCOMES */}
        <section style={{ padding: '48px 0 64px', borderTop: '1px solid var(--line)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: 1.05, margin: '0 0 20px', color: 'var(--ink)' }}>
                Outcomes
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {study.outcomes.map((out, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'baseline' }}>
                    <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: '32px', color: 'var(--accent)', flex: 'none' }}>
                      {out.stat}
                    </span>
                    <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'var(--ink-2)', margin: 0 }}>
                      {out.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: 1.05, margin: '0 0 20px', color: 'var(--ink)' }}>
                What I learned
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>
                {study.learning}
              </p>
            </div>
          </div>
        </section>

        {/* NEXT */}
        {nextStudy && (
          <Link href={`/case-study/${nextStudy.slug}`} style={{ display: 'block', color: 'inherit', marginBottom: '70px' }}>
            <div
              style={{
                background: 'var(--ink)',
                color: 'var(--bg)',
                borderRadius: '24px',
                padding: '44px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                flexWrap: 'wrap',
                transition: 'opacity .2s',
              }}
              className="hover:opacity-95"
            >
              <div>
                <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 10px' }}>
                  Next project
                </p>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1, margin: 0, color: '#fff' }}>
                  {nextStudy.title} →
                </h3>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', margin: '12px 0 0' }}>
                  {nextStudy.subtitle}
                </p>
              </div>
              <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--accent)' }}>
                Back to all work
              </span>
            </div>
          </Link>
        )}
      </article>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
