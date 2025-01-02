import React from 'react';
import { cn } from '../../utils/cn';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md',
  ...props 
}: Props) {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 disabled:opacity-50';
  
  const variants = {
    primary: 'bg-[#F4ED1F] text-black hover:bg-yellow-300',
    secondary: 'bg-white/10 text-white hover:bg-white/20',
    outline: 'border border-[#F4ED1F] text-[#F4ED1F] hover:bg-[#F4ED1F]/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute inset-0 animate-shimmer" />
      </div>
    </button>
  );
}