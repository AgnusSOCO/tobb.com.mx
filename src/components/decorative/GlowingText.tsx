import React from 'react';
import { cn } from '../../utils/cn';

interface Props {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowingText({ children, className = '', glowColor = '#F4ED1F' }: Props) {
  return (
    <span 
      className={cn(
        'relative inline-block transition-all duration-300',
        'hover:scale-[1.02]',
        className
      )}
    >
      <span 
        className="absolute inset-0 blur-lg opacity-50"
        style={{ color: glowColor }}
      >
        {children}
      </span>
      <span className="relative">{children}</span>
    </span>
  );
}