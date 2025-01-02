import React from 'react';
import { cn } from '../../utils/cn';

interface Props {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export function Tooltip({ content, children, position = 'top', className = '' }: Props) {
  const [show, setShow] = React.useState(false);

  const positions = {
    top: '-translate-y-full -translate-x-1/2 -mt-2 left-1/2',
    bottom: 'translate-y-full -translate-x-1/2 mt-2 left-1/2',
    left: '-translate-x-full -translate-y-1/2 -ml-2 top-1/2',
    right: 'translate-x-full -translate-y-1/2 ml-2 top-1/2'
  };

  return (
    <div className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div 
          className={cn(
            'absolute z-50 px-3 py-2 text-sm text-white bg-black/90 rounded-lg whitespace-nowrap',
            'backdrop-blur-sm border border-white/10',
            'animate-fade-in',
            positions[position],
            className
          )}
        >
          {content}
          <div className="absolute w-2 h-2 bg-black/90 border border-white/10 rotate-45 transform" />
        </div>
      )}
    </div>
  );
}