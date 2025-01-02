import React from 'react';
import { cn } from '../../utils/cn';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: Props) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={cn('relative', sizes[size], className)}>
      <div className="absolute inset-0 rounded-full border-2 border-[#F4ED1F]/20" />
      <div className="absolute inset-0 rounded-full border-2 border-[#F4ED1F] border-t-transparent animate-spin" />
    </div>
  );
}