/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F4ED1F',
        },
      },
      animation: {
        'fade-in': 'fadeIn 150ms ease-out forwards',
        'fade-in-up': 'fadeInUp 800ms ease-out forwards',
        'logo-float': 'logoFloat 3s ease-in-out infinite',
        'blob': 'blob 20s infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate': 'rotate 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-flow': 'gradientFlow 15s ease infinite',
        'scale-in': 'scaleIn 500ms ease-out forwards',
        'slide-in': 'slideInFromBottom 500ms ease-out forwards',
        'modal-in': 'modalIn 200ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        modalIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95) translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};