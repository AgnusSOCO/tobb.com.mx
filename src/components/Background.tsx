import React from 'react';
import { Particles } from './decorative/Particles';
import { GlowingOrb } from './decorative/GlowingOrb';
import { GridPattern } from './decorative/GridPattern';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0F172A] to-[#030712] opacity-90" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/0 opacity-90 animate-pulse" 
          style={{ animationDuration: '8s' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4ED1F]/5 via-transparent to-[#F4ED1F]/5 opacity-30 animate-gradient-flow" />
      </div>

      {/* Animated grid */}
      <GridPattern 
        size={48} 
        opacity={0.03} 
        className="animate-float [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_80%)]" 
      />

      {/* Particles */}
      <Particles />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <GlowingOrb 
          className="-left-[50%] -top-[50%]" 
          size="lg" 
          opacity={0.04} 
        />
        <GlowingOrb 
          className="-right-[50%] -top-[50%]" 
          size="lg" 
          opacity={0.04}
          delay={2000}
        />
        <GlowingOrb 
          className="-bottom-[50%] left-[50%] transform -translate-x-1/2" 
          size="lg" 
          opacity={0.04}
          delay={4000}
        />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
    </div>
  );
}