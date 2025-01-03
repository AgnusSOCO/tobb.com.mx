import React from 'react';
import type { Language } from '../types';
import { Button } from './ui/Button';
import { LoadingSpinner } from './ui/LoadingSpinner';

interface Props {
  language: Language;
}

export function ContactForm({ language }: Props) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="bg-white/5 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">
          {language === 'en' ? 'Thank You!' : '¡Gracias!'}
        </h3>
        <p className="text-gray-400">
          {language === 'en'
            ? 'We\'ll get back to you as soon as possible.'
            : 'Nos pondremos en contacto contigo lo antes posible.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            {language === 'en' ? 'Name' : 'Nombre'}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#F4ED1F]/50 focus:ring-1 focus:ring-[#F4ED1F]/50 transition-colors text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#F4ED1F]/50 focus:ring-1 focus:ring-[#F4ED1F]/50 transition-colors text-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          {language === 'en' ? 'Subject' : 'Asunto'}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#F4ED1F]/50 focus:ring-1 focus:ring-[#F4ED1F]/50 transition-colors text-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          {language === 'en' ? 'Message' : 'Mensaje'}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#F4ED1F]/50 focus:ring-1 focus:ring-[#F4ED1F]/50 transition-colors text-white resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <LoadingSpinner size="sm" />
        ) : language === 'en' ? (
          'Send Message'
        ) : (
          'Enviar Mensaje'
        )}
      </Button>
    </form>
  );
}
