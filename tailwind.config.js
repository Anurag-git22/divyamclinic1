/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
      },
      colors: {
        primary: {
          DEFAULT: '#00C1CA',
          hover: '#00A8AF',
          light: '#E6FAF9',
          soft: '#CCF5F4',
        },
        secondary: {
          DEFAULT: '#FD7401',
          hover: '#E56600',
          dark: '#CC5A00',
          light: '#FFF1E6',
        },
        'dark-accent': '#1C2B33',
        dark: {
          accent: '#1C2B33',
          deep: '#101B22',
        },
        brand: {
          text: '#22292F',
          muted: '#5F6B76',
          subtle: '#8C9BA5',
          border: '#E2E8F0',
          bg: '#F8FAFC',
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
