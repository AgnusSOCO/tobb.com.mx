import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Language } from '../types';

interface Props {
  language: Language;
}

export function Contact({ language }: Props) {
  // ... rest of the component code stays the same, just remove the background pattern div
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content stays the same, just remove any background-related divs */}
      </div>
    </section>
  );
}