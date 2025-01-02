import React from 'react';
import { cn } from '../../utils/cn';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function IconButton({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md',
  ...props 
}: Props) {
  const variants = {
    primary: 'bg-[#F4ED1F] text-black hover:bg-yellow-300',
    secondary: 'bg-white/10 text-white hover:bg-white/20',
    outline: 'border border-[#F4ED1F] text-[#F4ED1F] hover:bg-[#F4ED1F]/10'
  };

  const sizes = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-3 sm:p-4'
  };

  return (
    <button 
      className={cn(
        'relative inline-flex items-center justify-center rounded-full transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer" />
      </div>
    </button>
  );
}