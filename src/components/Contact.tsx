import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Language } from '../types';
import { Section } from './ui/Section';
import { ContactForm } from './ContactForm';
import { GradientText } from './decorative/GradientText';

interface Props {
  language: Language;
}

export function Contact({ language }: Props) {
  return (
    <Section id="contact" className="relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">
          <GradientText>
            {language === 'en' ? 'Contact Us' : 'Contáctanos'}
          </GradientText>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {language === 'en'
            ? 'Get in touch with our team of experts'
            : 'Ponte en contacto con nuestro equipo de expertos'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              {language === 'en' ? 'Get in Touch' : 'Ponte en Contacto'}
            </h3>
            <p className="text-gray-400">
              {language === 'en'
                ? 'Have questions? We\'d love to hear from you.'
                : '¿Tienes preguntas? Nos encantaría escucharte.'}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/5">
                <Mail className="w-6 h-6 text-[#F4ED1F]" />
              </div>
              <div>
                <h4 className="font-medium text-white">Email</h4>
                <p className="text-gray-400">contact@tobb.com.mx</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/5">
                <MapPin className="w-6 h-6 text-[#F4ED1F]" />
              </div>
              <div>
                <h4 className="font-medium text-white">{language === 'en' ? 'Address' : 'Dirección'}</h4>
                <div className="text-gray-400 space-y-1">
                  <p>Avenida Insurgentes Sur. 2453 int. 201</p>
                  <p>Col. Tizapán Alcaldía Álvaro Obregón</p>
                  <p>CP 01090 CDMX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm language={language} />
      </div>
    </Section>
  );
}
