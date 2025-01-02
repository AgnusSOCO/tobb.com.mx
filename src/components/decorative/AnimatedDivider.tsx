import React from 'react';
import { cn } from '../../utils/cn';

interface Props {
  className?: string;
  variant?: 'gradient' | 'dots' | 'line';
}

export function AnimatedDivider({ className = '', variant = 'gradient' }: Props) {
  if (variant === 'gradient') {
    return (
      <div 
        className={cn(
          'h-px w-full bg-gradient-to-r from-transparent via-[#F4ED1F]/30 to-transparent',
          'animate-gradient-flow',
          className
        )}
      />
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn('flex justify-center space-x-2', className)}>
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#F4ED1F]/50 animate-pulse"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    );
  }

  return (
    <div 
      className={cn(
        'h-px w-full bg-[#F4ED1F]/20',
        'relative overflow-hidden',
        className
      )}
    >
      <div 
        className="absolute inset-0 bg-[#F4ED1F]/50 w-20 animate-shimmer"
        style={{ 
          backgroundImage: 'linear-gradient(90deg, transparent, #F4ED1F, transparent)'
        }}
      />
    </div>
  );
}