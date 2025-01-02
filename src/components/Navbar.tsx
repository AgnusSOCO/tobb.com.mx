import React from 'react';
import { LanguageToggle } from './LanguageToggle';
import { Logo } from './Logo';
import type { Language } from '../types';

const navItems = [
  { title: 'Services', titleEs: 'Servicios', href: '#services' },
  { title: 'About', titleEs: 'Nosotros', href: '#about' },
  { title: 'Innovation', titleEs: 'Innovación', href: '#innovation-lab' },
  { title: 'Clients', titleEs: 'Clientes', href: '#clients' },
  { title: 'Partners', titleEs: 'Socios', href: '#partners' },
  { title: 'Contact', titleEs: 'Contacto', href: '#contact' }
];

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function Navbar({ language, setLanguage }: Props) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-300 hover:text-[#F4ED1F] transition-colors"
                >
                  {language === 'en' ? item.title : item.titleEs}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>
        </div>
      </div>
    </nav>
  );
}