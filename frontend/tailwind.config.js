/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'scale-in-content': {
          'from': {
            transform: 'scale(0.95)',
            opacity: '0',
          },
          'to': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'slide-in': {
          'from': {
            transform: 'translateY(-20px)',
            opacity: '0',
          },
          'to': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'scale-in-content': 'scale-in-content 0.3s ease-out forwards',
        'slide-in': 'slide-in 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
