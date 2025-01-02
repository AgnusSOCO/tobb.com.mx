import React from 'react';
import { cn } from '../../../utils/cn';

interface Props {
  onClose: () => void;
}

export const ModalOverlay = React.memo(function ModalOverlay({ onClose }: Props) {
  return (
    <div
      onClick={onClose}
      className={cn(
        'fixed inset-0',
        'bg-black/90 backdrop-blur-sm',
        'animate-fade-in'
      )}
    />
  );
});