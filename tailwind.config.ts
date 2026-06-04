import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066ff',
        secondary: '#1a1a2e',
        accent: '#16c784',
      },
    },
  },
  plugins: [],
}
export default config
