import React from 'react';

export function ParallaxBackground() {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dynamic grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #F4ED1F 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.03,
          transform: `translateY(${offset * 0.2}px)`
        }}
      />

      {/* Animated gradient layers */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"
          style={{ transform: `translateY(${offset * 0.1}px)` }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#F4ED1F]/5 via-transparent to-[#F4ED1F]/5 opacity-30"
          style={{ transform: `translateX(${offset * -0.05}px)` }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#F4ED1F] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2,
              animationDelay: `${Math.random() * 5}s`,
              transform: `translateY(${offset * 0.3}px)`
            }}
          />
        ))}
      </div>
    </div>
  );
}