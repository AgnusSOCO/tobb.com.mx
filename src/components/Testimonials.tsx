import React from 'react';
import type { Language } from '../types';
import { testimonials } from '../data/testimonials';
import { Section } from './ui/Section';

interface Props {
  language: Language;
}

export function Testimonials({ language }: Props) {
  return (
    <Section id="clients" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#F4ED1F] to-yellow-300 bg-clip-text text-transparent">
              {language === 'en' ? 'What Our Clients Say' : 'Lo Que Dicen Nuestros Clientes'}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F4ED1F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-6xl text-[#F4ED1F]/10">"</div>
              
              <div className="relative">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {language === 'en' ? testimonial.quote : testimonial.quoteEs}
                </p>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">
                    {language === 'en' ? testimonial.position : testimonial.positionEs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}