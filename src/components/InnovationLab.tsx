import React from 'react';
import { Sparkles } from 'lucide-react';
import type { Language } from '../types';
import { Section } from './ui/Section';
import { GradientText } from './decorative/GradientText';
import { Button } from './ui/Button';
import { ArticleCard } from './ArticleCard';
import { articles } from '../data/articles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Props {
  language: Language;
}

export function InnovationLab({ language }: Props) {
  const navigate = useNavigate();
  const latestArticles = articles.slice(0, 3); // Show only the 3 most recent articles

  return (
    <Section id="innovation-lab" className="relative">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-6">
          <GradientText>
            {language === 'en' ? 'Innovation Lab' : 'Laboratorio de Innovación'}
          </GradientText>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          {language === 'en'
            ? 'Exploring cutting-edge technologies to shape the future of security'
            : 'Explorando tecnologías de vanguardia para dar forma al futuro de la seguridad'}
        </p>
        
        {/* Innovation Lab Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => navigate('/innovation-lab')}
            className="group relative overflow-hidden"
            size="lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              {language === 'en' ? 'Visit Innovation Lab' : 'Visitar Laboratorio'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4ED1F] via-yellow-300 to-[#F4ED1F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ArticleCard
              article={article}
              language={language}
              onClick={() => navigate(`/innovation-lab/articles/${article.id}`)}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
