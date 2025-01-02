import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { Language } from '../types';
import { Modal } from './ui/Modal/Modal';
import { GradientText } from './decorative/GradientText';
import { certifications } from '../data/certifications';
import { CertificationCard } from './CertificationCard';

interface Props {
  language: Language;
  onClose: () => void;
}

export function CertificationsModal({ language, onClose }: Props) {
  return (
    <Modal 
      onClose={onClose} 
      size="xl"
      title={
        <div className="text-center">
          <GradientText className="text-3xl font-bold">
            {language === 'en' ? 'Our Certifications' : 'Nuestras Certificaciones'}
          </GradientText>
          <p className="mt-2 text-gray-400 text-lg">
            {language === 'en' 
              ? 'Industry-leading standards and professional excellence'
              : 'Estándares líderes en la industria y excelencia profesional'}
          </p>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            {certifications.professional.map((cert) => (
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
    </Modal>
  );
}