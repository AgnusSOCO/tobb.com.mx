import React from 'react';
import type { Language } from '../types';
import { Section } from './ui/Section';
import { GradientText } from './decorative/GradientText';
import { Card } from './ui/Card';
import { partners } from '../data/partners';

interface Props {
  language: Language;
}

export function Partners({ language }: Props) {
  return (
    <Section id="partners" className="relative">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-6">
          <GradientText>
            {language === 'en' ? 'Our Partners' : 'Nuestros Socios'}
          </GradientText>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {language === 'en'
            ? 'We collaborate with industry leaders to provide cutting-edge solutions'
            : 'Colaboramos con líderes de la industria para proporcionar soluciones de vanguardia'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <Card
            key={partner.name}
            className="p-6 group animate-fade-in-up hover:bg-white/[0.02]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-16 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4ED1F]/0 via-[#F4ED1F]/10 to-[#F4ED1F]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 object-contain relative filter brightness-0 invert opacity-75 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <div className="space-y-3 text-center">
              <h3 className="text-lg font-semibold text-white group-hover:text-[#F4ED1F] transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {language === 'en' ? partner.description : partner.descriptionEs}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}