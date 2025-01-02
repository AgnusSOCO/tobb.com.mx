import React from 'react';
import { cn } from '../../../utils/cn';

interface Props {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function ModalContent({ children, className = '', noPadding = false }: Props) {
  return (
    <div 
      className={cn(
        'max-h-[calc(100vh-8rem)] overflow-y-auto',
        'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10',
        'hover:scrollbar-thumb-white/20',
        !noPadding && 'p-6',
        className
      )}
    >
      {children}
    </div>
  );
}