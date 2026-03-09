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
        primary: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bbd8ff',
          300: '#8cc0ff',
          400: '#559dff',
          500: '#2e79ff',
          600: '#1557f5',
          700: '#0e43e1',
          800: '#1236b6',
          900: '#14338f',
          950: '#0f1f57',
        },
        navy: {
          700: '#1a365d',
          800: '#153e75',
          900: '#0d2137',
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
