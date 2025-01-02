import React from 'react';

interface Props {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  delay?: number;
}

export function GlowingOrb({ 
  className = '', 
  size = 'md', 
  color = '#F4ED1F',
  delay = 0 
}: Props) {
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96'
  };

  return (
    <div 
      className={`absolute rounded-full animate-blob ${sizes[size]} ${className}`}
      style={{ 
        background: color,
        filter: 'blur(80px)',
        opacity: 0.1,
        animationDelay: `${delay}ms`
      }}
    />
  );
}