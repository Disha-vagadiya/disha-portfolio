/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00F5FF',
          purple: '#7C3AED',
          pink: '#EC4899',
        },
        dark: {
          bg: '#0a0e27',
          card: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 245, 255, 0.4)',
        'neon-purple': '0 0 15px rgba(124, 58, 237, 0.4)',
        'neon-pink': '0 0 15px rgba(236, 72, 153, 0.4)',
      }
    },
  },
  plugins: [],
}
