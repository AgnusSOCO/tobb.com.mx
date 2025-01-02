import React from 'react';
import { AboutHero } from './AboutHero';
import { AboutValues } from './AboutValues';
import { AboutStats } from './AboutStats';
import type { Language } from '../types';

interface Props {
  language: Language;
}

export function About({ language }: Props) {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <AboutHero language={language} />
        <AboutValues language={language} />
        <AboutStats language={language} />
      </div>
    </section>
  );
}