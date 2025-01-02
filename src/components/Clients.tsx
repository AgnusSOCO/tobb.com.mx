import React from 'react';
import type { Language } from '../types';
import { Section } from './ui/Section';
import { GradientText } from './decorative/GradientText';
import { Card } from './ui/Card';
import { clients } from '../data/clients';

interface Props {
  language: Language;
}

export function Clients({ language }: Props) {
  return (
    <Section id="clients" className="relative">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-6">
          <GradientText>
            {language === 'en' ? 'Our Clients' : 'Nuestros Clientes'}
          </GradientText>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {language === 'en'
            ? 'Trusted by leading organizations across Mexico'
            : 'Empresas líderes en México confían en nosotros'}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {clients.map((client, index) => (
          <Card
            key={client.name}
            className="p-6 group animate-fade-in-up hover:bg-white/[0.02]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-16 mb-4 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4ED1F]/0 via-[#F4ED1F]/10 to-[#F4ED1F]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain relative filter brightness-0 invert opacity-75 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {language === 'en' ? client.description : client.descriptionEs}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}