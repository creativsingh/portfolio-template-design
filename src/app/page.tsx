'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Companies } from '@/components/Companies';
import { ThingsToKnow } from '@/components/ThingsToKnow';
import { WorkSection } from '@/components/WorkSection';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTAINER */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }} className="flex-1 w-full">
        <Hero />
        <Companies />
        <ThingsToKnow />
        <WorkSection />
        <AboutSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
