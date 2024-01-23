/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#000',
          200: '#000',
          300: '#000',
          400: '#000',
          500: '#000',
          600: '#262728',
          700: '#222324',
          800: '#181920',
          900: '#141516',
        },
        black: '#101112',
      },
      fontFamily: {
        sans: [
          '"Outfit Variable", sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32',
          },
        ],
      },
    },
  },
  plugins: [],
}
