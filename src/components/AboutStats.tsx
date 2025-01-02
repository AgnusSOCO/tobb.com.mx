import React from 'react';
import type { Language } from '../types';
import { GradientText } from './decorative/GradientText';

interface Props {
  language: Language;
}

const stats = [
  {
    number: '100%',
    label: 'Mexican Company',
    labelEs: 'Mexicana',
    description: 'Proudly Mexican-owned and operated',
    descriptionEs: 'Orgullosamente mexicana',
  },
  {
    number: '15+',
    label: 'Years of Experience',
    labelEs: 'Años de Experiencia',
    description: 'Industry expertise and knowledge',
    descriptionEs: 'Experiencia y conocimiento en la industria',
  },
  {
    number: '500+',
    label: 'Successful Projects',
    labelEs: 'Proyectos Exitosos',
    description: 'Delivered with excellence',
    descriptionEs: 'Entregados con excelencia',
  },
  {
    number: '50+',
    label: 'Certifications',
    labelEs: 'Certificaciones',
    description: 'International standards',
    descriptionEs: 'Estándares internacionales',
  }
];

export function AboutStats({ language }: Props) {
  return (
    <div className="relative py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="relative">
            <div className="p-6 rounded-2xl bg-white/[0.08]">
              <div className="space-y-3">
                <GradientText className="text-5xl font-bold tracking-tight">
                  {stat.number}
                </GradientText>
                
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-gray-300">
                    {language === 'en' ? stat.label : stat.labelEs}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {language === 'en' ? stat.description : stat.descriptionEs}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}