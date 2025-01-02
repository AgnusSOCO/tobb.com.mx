import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { InnovationLab } from '../components/InnovationLab';
import { FinancialServices } from '../components/FinancialServices';
import { Certifications } from '../components/Certifications';
import { Testimonials } from '../components/Testimonials';
import { Clients } from '../components/Clients';
import { Partners } from '../components/Partners';
import { Contact } from '../components/Contact';
import type { Language } from '../types';

interface Props {
  language: Language;
}

export function HomePage({ language }: Props) {
  return (
    <div className="relative">
      <Hero language={language} />
      <Services language={language} />
      <About language={language} />
      <InnovationLab language={language} />
      <FinancialServices language={language} />
      <Certifications language={language} />
      <Testimonials language={language} />
      <Clients language={language} />
      <Partners language={language} />
      <Contact language={language} />
    </div>
  );
}