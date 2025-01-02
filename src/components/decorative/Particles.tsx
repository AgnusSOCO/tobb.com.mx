import React from 'react';

interface ParticleProps {
  delay: number;
  size: number;
  position: { x: number; y: number };
}

function Particle({ delay, size, position }: ParticleProps) {
  return (
    <div
      className="absolute bg-[#F4ED1F] rounded-full animate-float mix-blend-lighten"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDuration: `${3 + Math.random() * 4}s`,
        animationDelay: `${delay}ms`,
        opacity: 0.2 + Math.random() * 0.2
      }}
    />
  );
}

export function Particles() {
  const particles = React.useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 3000,
      size: Math.random() * 3 + 1,
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100
      }
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} />
      ))}
    </div>
  );
}