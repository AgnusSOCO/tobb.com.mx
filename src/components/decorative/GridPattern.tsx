import React from 'react';

interface Props {
  className?: string;
  size?: number;
  opacity?: number;
}

export function GridPattern({ 
  className = '', 
  size = 32, 
  opacity = 0.03 
}: Props) {
  return (
    <div 
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at center, #F4ED1F ${size/8}px, transparent ${size/8}px)`,
        backgroundSize: `${size}px ${size}px`,
        opacity
      }}
    />
  );
}