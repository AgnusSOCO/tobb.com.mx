import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: Props) {
  return (
    <span 
      className={`bg-gradient-to-r from-[#F4ED1F] to-yellow-300 bg-clip-text text-transparent animate-gradient-flow ${className}`}
    >
      {children}
    </span>
  );
}