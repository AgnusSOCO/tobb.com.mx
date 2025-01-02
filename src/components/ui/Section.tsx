import React from 'react';
import { cn } from '../../utils/cn';

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: Props) {
  return (
    <section 
      id={id} 
      className={cn(
        'relative py-24',
        'first:pt-32', // Extra padding for first section to account for navbar
        className
      )}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}