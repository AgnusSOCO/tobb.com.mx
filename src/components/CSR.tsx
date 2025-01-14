import React from 'react';
import { Heart, Users, Building } from 'lucide-react';
import type { Language } from '../types';
import { Section } from './ui/Section';
import { GradientText } from './decorative/GradientText';
import { motion } from 'framer-motion';

interface Props {
  language: Language;
}

export function CSR({ language }: Props) {
  return (
    <Section className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#F4ED1F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />

      <div className="relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <GradientText>
                {language === 'en' ? 'Social Impact' : 'Impacto Social'}
              </GradientText>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              {language === 'en' 
                ? 'At Tobb, we actively seek to contribute to social, economic, and environmental improvement through the involvement of our employees with the community.'
                : 'En Tobb buscamos activamente contribuir a la mejora social, económica y ambiental por medio del involucramiento de nuestros empleados con la comunidad.'}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {language === 'en'
                ? 'In 2024, we started a partnership with the Hogar Dulce Hogar Foundation, where throughout the year we impacted more than 50 children in vulnerable situations through donations and restoration projects by the Foundation to improve their facilities.'
                : 'En 2024 iniciamos una alianza con la Fundación Hogar Dulce Hogar, en donde a lo largo del año pudimos impactar a más de 50 niños en situación de vulnerabilidad a través de donaciones y proyectos de restauración de la Fundación para mejorar sus instalaciones.'}
            </p>

            {/* Foundation Logo */}
            <div className="relative mt-8 p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F4ED1F]/5 to-transparent rounded-2xl" />
              <div className="relative flex items-center gap-4">
                <img
                  src="/foundation-logo.png"
                  alt="Hogar Dulce Hogar Foundation"
                  className="h-16 object-contain"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {language === 'en' 
                      ? 'Hogar Dulce Hogar Foundation'
                      : 'Fundación Hogar Dulce Hogar'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {language === 'en'
                      ? 'Our partner in making a difference'
                      : 'Nuestro aliado para hacer la diferencia'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats/Impact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="group relative backdrop-blur-sm animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent dark:from-white/[0.05] rounded-2xl" />
              <div className="relative p-6 rounded-2xl border border-white/10 dark:border-white/5">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#F4ED1F]/5 rounded-full blur-xl group-hover:bg-[#F4ED1F]/10 transition-colors" />
                <Users className="w-12 h-12 text-[#F4ED1F] mb-4" />
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <p className="text-gray-400">
                  {language === 'en' ? 'Children Impacted' : 'Niños Impactados'}
                </p>
              </div>
            </div>

            <div className="group relative backdrop-blur-sm animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent dark:from-white/[0.05] rounded-2xl" />
              <div className="relative p-6 rounded-2xl border border-white/10 dark:border-white/5">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#F4ED1F]/5 rounded-full blur-xl group-hover:bg-[#F4ED1F]/10 transition-colors" />
                <Building className="w-12 h-12 text-[#F4ED1F] mb-4" />
                <div className="text-3xl font-bold text-white mb-2">1</div>
                <p className="text-gray-400">
                  {language === 'en' ? 'Foundation Partnership' : 'Alianza con Fundación'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
