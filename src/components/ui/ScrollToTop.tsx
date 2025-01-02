import React from 'react';
import { ArrowUp } from 'lucide-react';
import { IconButton } from './IconButton';

export function ScrollToTop() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShow(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 right-0 p-4 sm:p-6 z-50">
      <IconButton
        onClick={scrollToTop}
        className="shadow-lg backdrop-blur-sm animate-fade-in hover:scale-110 active:scale-95 transition-all duration-300"
        variant="primary"
        size="lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </IconButton>
    </div>
  );
}