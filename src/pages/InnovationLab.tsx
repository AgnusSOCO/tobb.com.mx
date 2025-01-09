import React from 'react';
import type { Language } from '../types';
import { Section } from '../components/ui/Section';
import { GradientText } from '../components/decorative/GradientText';
import { ArticleCard } from '../components/ArticleCard';
import { Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { articles } from '../data/articles';
import { useNavigate } from 'react-router-dom';

interface Props {
  language: Language;
}

export function InnovationLabPage({ language }: Props) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h1 className="text-6xl font-bold mb-6">
            <GradientText>
              {language === 'en' ? 'Innovation Lab' : 'Laboratorio de Innovación'}
            </GradientText>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Welcome to több\'s Innovation Lab, where we push the boundaries of technology to create the future of security.'
              : 'Bienvenido al Laboratorio de Innovación de több, donde expandimos los límites de la tecnología para crear el futuro de la seguridad.'}
          </p>
        </motion.div>

        {/* Interactive 3D Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative h-96 mt-12"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-64">
              {/* Animated rings */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 border-2 border-[#F4ED1F]/20 rounded-full"
                  style={{
                    animation: `spin ${8 + i * 4}s linear infinite`,
                    transform: `scale(${1 + i * 0.2}) rotate(${i * 30}deg)`
                  }}
                />
              ))}
              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#F4ED1F]/10 rounded-full flex items-center justify-center">
                  <Brain className="w-12 h-12 text-[#F4ED1F]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Articles Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ArticleCard
                article={article}
                language={language}
                onClick={() => navigate(`/articles/${article.id}`)}
              />
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
