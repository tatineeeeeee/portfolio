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
        'float': 'float 6s ease-in-out infinite',
        'particle-float': 'particle-float 8s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
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
