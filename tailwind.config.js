/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'title-lg': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'title': ['1.75rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'subtitle': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.75', letterSpacing: '0' }],
        'small': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
      colors: {
        therapy: {
          warm: {
            50: '#faf9f7',
            100: '#f0ede8',
            200: '#e2ddd4',
            300: '#d0c7b8',
            400: '#b8ab96',
            500: '#9d8b70',
            600: '#8a7760',
            700: '#73634f',
            800: '#5d5142',
            900: '#4a4137',
          },
          sage: {
            50: '#f6f7f6',
            100: '#e8eae8',
            200: '#d1d5d1',
            300: '#adb4ad',
            400: '#8a938a',
            500: '#6d766d',
            600: '#5a625a',
            700: '#4a514a',
            800: '#3d423d',
            900: '#343734',
          },
          blue: {
            50: '#f8f9fa',
            100: '#e9ecef',
            200: '#dee2e6',
            300: '#ced4da',
            400: '#adb5bd',
            500: '#6c757d',
            600: '#495057',
            700: '#343a40',
            800: '#212529',
            900: '#1a1d20',
          }
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'warm': '0 4px 20px -2px rgba(130, 100, 80, 0.08)',
      }
    },
  },
  plugins: [],
};