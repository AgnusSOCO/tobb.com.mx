import React from 'react';
import type { Language } from '../types';
import { GradientText } from './decorative/GradientText';

interface Props {
  language: Language;
}

const values = [
  {
    title: 'Excellence',
    titleEs: 'Excelencia',
    description: 'Committed to the highest quality standards in every project',
    descriptionEs: 'Comprometidos con los más altos estándares de calidad en cada proyecto'
  },
  {
    title: 'Innovation',
    titleEs: 'Innovación',
    description: 'Constantly seeking new technological solutions',
    descriptionEs: 'Constantemente buscando nuevas soluciones tecnológicas'
  },
  {
    title: 'Commitment',
    titleEs: 'Compromiso',
    description: 'Dedicated to exceeding our clients\' expectations',
    descriptionEs: 'Dedicados a superar las expectativas de nuestros clientes'
  },
  {
    title: 'Experience',
    titleEs: 'Experiencia',
    description: 'Backed by years of experience in the technology sector',
    descriptionEs: 'Respaldados por años de experiencia en el sector tecnológico'
  }
];

export function AboutValues({ language }: Props) {
  return (
    <div className="relative">
      <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
        <h3 className="text-3xl font-bold mb-6">
          <GradientText>
            {language === 'en' ? 'Our Principles' : 'Nuestros Principios'}
          </GradientText>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {language === 'en'
            ? 'Our business principles are based on quality and innovation, ensuring that our services are excellent and totally oriented to meet our clients\' needs.'
            : 'Nuestros principios empresariales se basan en la calidad e innovación, facultando que nuestros servicios sean de excelencia y orientados totalmente para satisfacer las necesidades de nuestros clientes.'}
        </p>
      </div>

      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#F4ED1F]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#F4ED1F]/5 rounded-full blur-3xl" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative backdrop-blur-sm animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent dark:from-white/[0.05] rounded-2xl" />
              <div className="relative p-8 rounded-2xl border border-white/10 dark:border-white/5">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#F4ED1F]/5 rounded-full blur-xl group-hover:bg-[#F4ED1F]/10 transition-colors" />
                <h4 className="text-xl font-semibold text-[#F4ED1F] mb-4">
                  {language === 'en' ? value.title : value.titleEs}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 relative z-10">
                  {language === 'en' ? value.description : value.descriptionEs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}