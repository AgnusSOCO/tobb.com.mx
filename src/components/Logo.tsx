import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <svg 
        width="80" 
        height="32" 
        viewBox="0 0 80 32" 
        className="transition-transform duration-300 group-hover:scale-105"
      >
        <text
          x="0"
          y="24"
          className="font-bold"
          style={{
            fill: '#F4ED1F',
            fontSize: '28px',
            fontFamily: 'monospace',
            letterSpacing: '1px'
          }}
        >
          több
        </text>
      </svg>
    </Link>
  );
}