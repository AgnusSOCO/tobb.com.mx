import React from 'react';
import { Shield } from 'lucide-react';
import type { Language } from '../types';

interface Props {
  name: string;
  logo: string;
  description: string;
  descriptionEs: string;
  language: Language;
}

export function CertificationCard({ name, logo, description, descriptionEs, language }: Props) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-[#F4ED1F]/0 via-[#F4ED1F]/5 to-[#F4ED1F]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative p-4 flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
          {imageError ? (
            <Shield className="w-full h-full text-[#F4ED1F]" />
          ) : (
            <img
              src={logo}
              alt={name}
              className="w-full h-full object-contain filter brightness-0 invert"
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <div>
          <h4 className="font-medium text-white group-hover:text-[#F4ED1F] transition-colors">
            {name}
          </h4>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-1">
            {language === 'en' ? description : descriptionEs}
          </p>
        </div>
      </div>
    </div>
  );
}