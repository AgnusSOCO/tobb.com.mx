import React from 'react';
import { Languages } from 'lucide-react';
import type { Language } from '../types';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function LanguageToggle({ language, setLanguage }: Props) {
  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="flex items-center gap-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-colors"
    >
      <Languages className="w-5 h-5" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </button>
  );
}