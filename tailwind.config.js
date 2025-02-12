/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleCustom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        bounceCustom: {
          '0%, 100%': { transform: 'translateY(-15%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'scale-slow': 'scaleCustom 3s ease-in-out infinite',
        'bounce-custom': 'bounceCustom 2s ease-in-out infinite', // Slower bounce animation
      },
    },
  },
  plugins: [],
};
