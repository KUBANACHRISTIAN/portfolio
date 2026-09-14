/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#2563EB',
        accent: '#4F46E5',
        surface: '#FFFFFF',
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E3A8A',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      screens: {
        xs: '375px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'card': '0 2px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 48px rgba(37,99,235,0.13)',
        'blue': '0 8px 32px rgba(37,99,235,0.4)',
        'blue-sm': '0 4px 16px rgba(37,99,235,0.25)',
        'glow': '0 0 60px rgba(37,99,235,0.18)',
        'glow-lg': '0 0 100px rgba(37,99,235,0.25)',
        'premium': '0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'float-fast': 'float 4.5s ease-in-out infinite',
        'spin-slow': 'spin 28s linear infinite',
        'spin-reverse': 'spin-reverse 22s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'blob': 'blob 10s ease-in-out infinite',
        'blob-slow': 'blob 14s ease-in-out infinite reverse',
        'slide-up': 'slide-up 0.6s ease forwards',
        'fade-in': 'fade-in 0.5s ease forwards',
        'scale-in': 'scale-in 0.4s ease forwards',
        'ping-slow': 'ping 2.5s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-14px) rotate(1.5deg)' },
          '66%': { transform: 'translateY(-7px) rotate(-1deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%' },
          '75%': { borderRadius: '60% 40% 60% 30% / 70% 30% 50% 60%' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
