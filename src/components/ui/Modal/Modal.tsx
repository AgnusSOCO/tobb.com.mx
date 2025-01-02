import React from 'react';
import { X } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { IconButton } from '../IconButton';
import { ModalOverlay } from './ModalOverlay';
import { ModalContent } from './ModalContent';
import { ModalHeader } from './ModalHeader';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  noPadding?: boolean;
}

export const Modal = React.memo(function Modal({ 
  children, 
  onClose, 
  title,
  description,
  className = '', 
  size = 'md',
  showCloseButton = true,
  noPadding = false
}: Props) {
  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-[95vw]'
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <ModalOverlay onClose={onClose} />
          
          <div
            className={cn(
              'relative w-full',
              'rounded-2xl bg-gray-900/95 backdrop-blur-sm',
              'border border-white/10 shadow-2xl',
              'transform transition-all duration-200',
              'animate-modal-in',
              sizes[size],
              className
            )}
          >
            <div className="relative">
              {showCloseButton && (
                <div className="absolute right-4 top-4 z-10">
                  <IconButton
                    onClick={onClose}
                    variant="secondary"
                    size="sm"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </IconButton>
                </div>
              )}

              {(title || description) && (
                <ModalHeader title={title} description={description} />
              )}

              <ModalContent noPadding={noPadding}>
                {children}
              </ModalContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});