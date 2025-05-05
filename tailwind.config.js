/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0F0',
          100: '#CCE1E1',
          200: '#99C3C3',
          300: '#66A5A5',
          400: '#338787',
          500: '#2A7D7D', // Main primary color
          600: '#216464',
          700: '#194B4B',
          800: '#103232',
          900: '#081919',
        },
        secondary: {
          50: '#FFF4EB',
          100: '#FFE9D6',
          200: '#FFD3AD',
          300: '#FFBD85',
          400: '#FFA75C',
          500: '#FF8C38', // Main secondary color
          600: '#FF7015',
          700: '#F25600',
          800: '#CF4800',
          900: '#AB3B00',
        },
        neutral: {
          50: '#F7F7F7',
          100: '#E3E3E3',
          200: '#C8C8C8',
          300: '#A4A4A4',
          400: '#808080',
          500: '#666666',
          600: '#4D4D4D',
          700: '#333333',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
};