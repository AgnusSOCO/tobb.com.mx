import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedBorder({ children, className = '' }: Props) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F4ED1F] to-yellow-300 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient-flow" />
      <div className="relative bg-white dark:bg-gray-900 rounded-lg">
        {children}
      </div>
    </div>
  );
}