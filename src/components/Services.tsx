import React from 'react';
import type { Language } from '../types';
import { ServiceCard } from './ServiceCard';
import { services } from '../data/services';

interface Props {
  language: Language;
}

export function Services({ language }: Props) {
  return (
    <section id="services" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#F4ED1F] to-yellow-300 bg-clip-text text-transparent">
              {language === 'en' ? 'Our Services' : 'Nuestros Servicios'}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Comprehensive technology solutions tailored to your business needs'
              : 'Soluciones tecnológicas integrales adaptadas a las necesidades de su negocio'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              language={language}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}