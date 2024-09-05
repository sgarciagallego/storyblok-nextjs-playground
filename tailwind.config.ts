import type { Config } from 'tailwindcss';

export default {
  content: [ './src/**/*.{js,ts,jsx,tsx,mdx}' ],
  theme: {
    fontFamily: {
      mono: ['var(--font-mono)'],
      sans: ['var(--font-sans)'],
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;