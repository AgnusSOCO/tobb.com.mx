import React from 'react';
import { Menu, X, Home, Briefcase, Users, TestTube2, Building2, Phone, Users2 } from 'lucide-react';
import type { Language } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  language: Language;
}

const navItems = [
  { id: 'home', icon: Home, href: '#', labelEn: 'Home', labelEs: 'Inicio' },
  { id: 'services', icon: Briefcase, href: '#services', labelEn: 'Services', labelEs: 'Servicios' },
  { id: 'about', icon: Users, href: '#about', labelEn: 'About', labelEs: 'Nosotros' },
  { id: 'innovation-lab', icon: TestTube2, href: '#innovation-lab', labelEn: 'Innovation', labelEs: 'Innovación' },
  { id: 'clients', icon: Users2, href: '#clients', labelEn: 'Clients', labelEs: 'Clientes' },
  { id: 'partners', icon: Building2, href: '#partners', labelEn: 'Partners', labelEs: 'Socios' },
  { id: 'contact', icon: Phone, href: '#contact', labelEn: 'Contact', labelEs: 'Contacto' }
];

export function MobileNav({ language }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Add a small delay to ensure the mobile menu has closed
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-4 bg-[#F4ED1F] rounded-full shadow-lg md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 z-40 bg-black/95 backdrop-blur-lg rounded-t-3xl pb-safe md:hidden"
          >
            <nav className="max-h-[70vh] overflow-y-auto p-4">
              <div className="grid grid-cols-4 gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <item.icon className="w-6 h-6 text-[#F4ED1F]" />
                    <span className="text-xs text-gray-300">
                      {language === 'en' ? item.labelEn : item.labelEs}
                    </span>
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}