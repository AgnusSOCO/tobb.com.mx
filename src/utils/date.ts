import type { Language } from '../types';

export function formatDate(date: string, language: Language): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return new Date(date).toLocaleDateString(
    language === 'en' ? 'en-US' : 'es-MX',
    options
  );
}
