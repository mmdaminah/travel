import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        booking: {
          black: {
            700: '#1A1A1A',
          },
          blue: {
            300: '#006CE4',
            700: '#003B95',
          },
          yellow: {
            300: '#FFB700',
          },
          red: {
            500: '#d4111e',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
