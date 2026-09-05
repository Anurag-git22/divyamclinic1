/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D2664A',
          hover: '#BC5337',
          light: '#F8ECE8',
          soft: '#F4DDD6',
        },
        secondary: {
          DEFAULT: '#C9A08C',
          dark: '#B0836D',
          light: '#F5ECE7',
        },
        'dark-accent': '#4A3733',
        dark: {
          accent: '#4A3733',
          deep: '#362623',
        },
        brand: {
          text: '#3A3536',
          muted: '#6E6667',
          subtle: '#9A9293',
          border: '#EAE3DF',
          bg: '#FAF8F7',
          surface: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(74, 55, 51, 0.06), 0 1px 4px -1px rgba(74, 55, 51, 0.04)',
        'warm-md': '0 8px 24px -4px rgba(74, 55, 51, 0.08), 0 4px 12px -2px rgba(74, 55, 51, 0.05)',
        'warm-lg': '0 16px 36px -6px rgba(74, 55, 51, 0.10), 0 8px 18px -4px rgba(74, 55, 51, 0.06)',
      }
    },
  },
  plugins: [],
}
