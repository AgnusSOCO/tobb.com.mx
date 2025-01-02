import React from 'react';

export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rotate-45 border border-[#F4ED1F]/10 animate-float" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full border border-[#F4ED1F]/10 animate-float animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rotate-12 border border-[#F4ED1F]/10 animate-float animation-delay-4000" />
      
      {/* Light beams */}
      <div className="absolute top-0 left-1/4 w-1 h-32 bg-gradient-to-b from-[#F4ED1F]/20 to-transparent animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1 h-48 bg-gradient-to-b from-[#F4ED1F]/20 to-transparent animate-pulse animation-delay-2000" />
      
      {/* Glowing dots */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#F4ED1F]/30 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-[#F4ED1F]/30 animate-pulse animation-delay-3000" />
    </div>
  );
}