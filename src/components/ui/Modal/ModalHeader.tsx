import React from 'react';
import { cn } from '../../../utils/cn';

interface Props {
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export function ModalHeader({ title, description, className = '' }: Props) {
  if (!title && !description) return null;

  return (
    <div className={cn('px-6 pt-6 pb-4', className)}>
      {title && (
        <div className="mb-2">
          {title}
        </div>
      )}
      {description && (
        <div className="text-gray-400">
          {description}
        </div>
      )}
    </div>
  );
}