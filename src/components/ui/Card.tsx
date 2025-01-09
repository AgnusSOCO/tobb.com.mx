import React from 'react';
import { cn } from '../../utils/cn';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true, onClick, ...props }: Props) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        'relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10',
        'transition-all duration-300',
        hover && 'hover:bg-white/10 hover:border-[#F4ED1F]/20 hover:scale-[1.02]',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4ED1F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      {children}
    </div>
  );
}
