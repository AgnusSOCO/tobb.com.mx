import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ui/ScrollToTop';
import { ScrollProgress } from '../components/decorative/ScrollProgress';
import { MobileNav } from '../components/MobileNav';
import type { Language } from '../types';

interface Props {
  children: React.ReactNode;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function MainLayout({ children, language, setLanguage }: Props) {
  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-gray-900 to-black" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#F4ED1F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] animate-pulse"
            style={{ animationDuration: '8s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4ED1F]/5 via-transparent to-[#F4ED1F]/5 opacity-30 animate-gradient-flow" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#F4ED1F] rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.2,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      </div>

      <ScrollProgress />
      
      {/* Content */}
      <div className="relative">
        <Navbar language={language} setLanguage={setLanguage} />
        <main className="relative">
          {children}
        </main>
        <Footer language={language} />
      </div>

      <ScrollToTop />
      <MobileNav language={language} />
    </div>
  );
}