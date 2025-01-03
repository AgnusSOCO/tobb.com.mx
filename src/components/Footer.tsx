import React from 'react';
import { Logo } from './Logo';
import type { Language } from '../types';

interface Props {
  language: Language;
}

export function Footer({ language }: Props) {
  return (
    <footer className="relative">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Logo variant="footer" />
            <p className="mt-4 text-gray-400 max-w-md">
              {language === 'en'
                ? 'Empowering businesses with next-generation security solutions and cutting-edge technology.'
                : 'Potenciando empresas con soluciones de seguridad de próxima generación y tecnología de vanguardia.'}
            </p>
          </div>

          {/* Rest of the footer content stays the same */}
        </div>
      </div>
    </footer>
  );
}
