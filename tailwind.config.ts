import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f7',
          100: '#dce3ed',
          200: '#b9c7db',
          300: '#8da3c2',
          400: '#6580a8',
          500: '#4a6590',
          600: '#3a5177',
          700: '#2d3f5e',
          800: '#1c2b42',
          900: '#0f172a',
          950: '#080d18',
        },
        gold: {
          50: '#fdf9ef',
          100: '#f9f0d5',
          200: '#f2dda6',
          300: '#e9c56d',
          400: '#e2af42',
          500: '#d4982b',
          600: '#b87720',
          700: '#99581d',
          800: '#7e461f',
          900: '#683b1d',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
