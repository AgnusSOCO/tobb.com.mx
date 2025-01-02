import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import type { Language } from '../types';
import { Section } from './ui/Section';
import { GradientText } from './decorative/GradientText';
import { Button } from './ui/Button';
import { CertificationsModal } from './CertificationsModal';
import { certifications } from '../data/certifications';
import { CertificationCard } from './CertificationCard';

interface Props {
  language: Language;
}

export function Certifications({ language }: Props) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <Section id="certifications" className="relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">
          <GradientText>
            {language === 'en' ? 'Our Certifications' : 'Nuestras Certificaciones'}
          </GradientText>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {language === 'en' 
            ? 'Internationally recognized standards and professional certifications'
            : 'Estándares y certificaciones profesionales reconocidos internacionalmente'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Corporate Certifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-xl font-semibold text-white">
            <CheckCircle2 className="w-6 h-6 text-[#F4ED1F]" />
            {language === 'en' ? 'Corporate Certifications' : 'Certificaciones Empresariales'}
          </div>
          <div className="grid gap-4">
            {certifications.corporate.map((cert) => (
              <CertificationCard
                key={cert.id}
                name={cert.name}
                logo={cert.logo}
                description={cert.description}
                descriptionEs={cert.descriptionEs}
                language={language}
              />
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-xl font-semibold text-white">
            <CheckCircle2 className="w-6 h-6 text-[#F4ED1F]" />
            {language === 'en' ? 'Professional Certifications' : 'Certificaciones Personales'}
          </div>
          <div className="grid gap-4">
            {certifications.professional.slice(0, 4).map((cert) => (
              <CertificationCard
                key={cert.id}
                name={cert.name}
                logo={cert.logo}
                description={cert.description}
                descriptionEs={cert.descriptionEs}
                language={language}
              />
            ))}
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Button
          variant="secondary"
          onClick={() => setShowModal(true)}
          className="group"
        >
          <span className="flex items-center gap-2">
            {language === 'en' ? 'View All Certifications' : 'Ver Todas las Certificaciones'}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </div>

      {/* Modal */}
      {showModal && (
        <CertificationsModal
          language={language}
          onClose={() => setShowModal(false)}
        />
      )}
    </Section>
  );
}