import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

export function Logo({ variant = 'default' }: { variant?: 'default' | 'footer' }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <img 
        src="/logo.png" 
        alt="több" 
        className={cn(
          "transition-transform duration-300 group-hover:scale-105",
          variant === 'default' ? 'h-8' : 'h-10'
        )}
      />
    </Link>
  );
}
