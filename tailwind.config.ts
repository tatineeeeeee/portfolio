import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'slide-down': 'slide-down 0.6s ease-out',
        'slide-right': 'slide-right 1s ease-out 1s forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'particle-float': 'particle-float 8s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'typing': 'typing 3s steps(30, end), blink 0.75s step-end infinite',
        'shake': 'shake 0.5s ease-in-out',
        'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'slide-down': {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-right': {
          from: {
            opacity: '0',
            width: '0%',
          },
          to: {
            opacity: '1',
            width: '60%',
          },
        },
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '50%': { transform: 'translateY(-20px) rotate(0deg)' },
          '75%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        'particle-float': {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)',
            opacity: '0.2',
          },
          '25%': {
            transform: 'translateY(-20px) translateX(10px)',
            opacity: '0.4',
          },
          '50%': {
            transform: 'translateY(-40px) translateX(-5px)',
            opacity: '0.6',
          },
          '75%': {
            transform: 'translateY(-20px) translateX(-10px)',
            opacity: '0.4',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.1)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(239, 68, 68, 0.2)',
            transform: 'scale(1.05)',
          },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        },
        'bounce-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3) translateY(50px)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05) translateY(-10px)',
          },
          '70%': {
            transform: 'scale(0.9) translateY(0px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0px)',
          },
        },
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '5': '5',
      },
    },
  },
  plugins: [],
};

export default config;