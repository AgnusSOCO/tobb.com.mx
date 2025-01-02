import React from 'react';
import type { Language } from '../types';
import { Section } from './ui/Section';
import { GradientText } from './decorative/GradientText';
import { Card } from './ui/Card';
import { financialServices } from '../data/financialServices';

interface Props {
  language: Language;
}

export function FinancialServices({ language }: Props) {
  return (
    <Section id="financial-services">
      {/* Rest of the component code stays the same */}
    </Section>
  );
}