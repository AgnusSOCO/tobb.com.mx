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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Logo variant="footer" />
            <p className="mt-4 text-gray-400 max-w-md">
              {language === 'en'
                ? 'Empowering businesses with next-generation security solutions and cutting-edge technology.'
                : 'Potenciando empresas con soluciones de seguridad de próxima generación y tecnología de vanguardia.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'Enlaces Rápidos'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#F4ED1F] transition-colors">
                  {language === 'en' ? 'Services' : 'Servicios'}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#F4ED1F] transition-colors">
                  {language === 'en' ? 'About Us' : 'Nosotros'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#F4ED1F] transition-colors">
                  {language === 'en' ? 'Contact' : 'Contacto'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {language === 'en' ? 'Contact' : 'Contacto'}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@tobb.com.mx</li>
              <li>Avenida Insurgentes Sur. 2453 int. 201</li>
              <li>Col. Tizapán Alcaldía Álvaro Obregón</li>
              <li>CP 01090 CDMX</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {language === 'en' ? 'Legal' : 'Legal'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/SGI.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#F4ED1F] transition-colors"
                >
                  {language === 'en' ? 'Terms of Service' : 'Términos de Servicio'}
                </a>
              </li>
              <li>
                <a 
                  href="/AVISO DE PRIVACIDAD.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#F4ED1F] transition-colors"
                >
                  {language === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} több. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
