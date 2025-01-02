import React from 'react';
import { Users, Award, Globe2 } from 'lucide-react';
import type { Language } from '../types';

interface Props {
  language: Language;
}

const features = [
  {
    icon: Users,
    title: 'Top-Level Experts',
    titleEs: 'Expertos de Primer Nivel',
    description: 'Our team consists of highly qualified professionals',
    descriptionEs: 'Nuestro equipo está formado por profesionales altamente calificados'
  },
  {
    icon: Award,
    title: 'Quality and Innovation',
    titleEs: 'Calidad e Innovación',
    description: 'Business principles based on excellence and innovation',
    descriptionEs: 'Principios empresariales basados en la excelencia y la innovación'
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    titleEs: 'Alcance Global',
    description: 'World-class services for public and private sector clients',
    descriptionEs: 'Servicios de clase mundial para clientes del sector público y privado'
  }
];

export function AboutHero({ language }: Props) {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#F4ED1F_1px,transparent_1px)] [background-size:32px_32px] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#F4ED1F] to-yellow-300 bg-clip-text text-transparent">
                {language === 'en' ? 'About Us' : 'Nosotros'}
              </span>
            </h2>
            
            <div className="max-w-3xl mx-auto prose prose-invert prose-yellow">
              <p className="text-xl text-gray-300 leading-relaxed">
                {language === 'en' 
                  ? 'We are a 100% Mexican company focused on the technology sector, with top-level expert professionals and vast experience in the Information Technology, Communications, and Information Security industry.'
                  : 'Somos una empresa 100% mexicana enfocada al sector tecnológico, con profesionales expertos de primer nivel y vasta experiencia en la industria de las Tecnologías de la Información, Comunicaciones y Seguridad de la Información.'}
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="relative group bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4ED1F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <feature.icon className="w-12 h-12 text-[#F4ED1F] mb-6 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  {language === 'en' ? feature.title : feature.titleEs}
                </h3>
                <p className="text-gray-400">
                  {language === 'en' ? feature.description : feature.descriptionEs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}