import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(250, 30%, 10%)',
          100: 'hsl(250, 30%, 12%)',
          200: 'hsl(250, 30%, 15%)',
          300: 'hsl(250, 30%, 20%)',
          400: 'hsl(250, 30%, 25%)',
          500: 'hsl(250, 30%, 30%)', // base purple
          600: 'hsl(260, 70%, 55%)', // neon purple/blue
          700: 'hsl(260, 80%, 65%)',
          800: 'hsl(260, 90%, 70%)',
          900: 'hsl(260, 95%, 80%)',
        },
        glass: 'rgba(255, 255, 255, 0.08)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 8px 2px rgba(150, 50, 250, 0.6)' },
          '50%': { boxShadow: '0 0 12px 4px rgba(80, 200, 255, 0.8)' },
        },
      },
      animation: {
        'glow-slow': 'glow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
