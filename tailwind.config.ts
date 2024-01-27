import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#fe6363',
        },
        green: {
          DEFAULT: '#44e19e',
        },
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
      gridTemplateColumns: {
        deck: 'repeat(5, 4rem)',
        hand: 'repeat(2, 4rem)',
      },
    },
  },
  plugins: [],
} satisfies Config
