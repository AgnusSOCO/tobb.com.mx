import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Language } from '../types';
import { Section } from './ui/Section';
import { GradientText } from './decorative/GradientText';
import { Card } from './ui/Card';
import { innovationProjects } from '../data/innovationProjects';
import { InnovationProjectCard } from './InnovationProjectCard';
import { Button } from './ui/Button';
import { Sparkles } from 'lucide-react';

interface Props {
  language: Language;
}

export function InnovationLab({ language }: Props) {
  const navigate = useNavigate();

  return (
    <Section id="innovation-lab" className="relative">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-6">
          <GradientText>
            {language === 'en' ? 'Innovation Lab' : 'Laboratorio de Innovación'}
          </GradientText>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          {language === 'en'
            ? 'Exploring cutting-edge technologies to shape the future of security'
            : 'Explorando tecnologías de vanguardia para dar forma al futuro de la seguridad'}
        </p>
        
        {/* Innovation Lab Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => navigate('/innovation-lab')}
            className="group relative overflow-hidden"
            size="lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              {language === 'en' ? 'Visit Innovation Lab' : 'Visitar Laboratorio'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4ED1F] via-yellow-300 to-[#F4ED1F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {innovationProjects.slice(0, 3).map((project, index) => (
          <InnovationProjectCard
            key={project.id}
            project={project}
            language={language}
          />
        ))}
      </div>
    </Section>
  );
}