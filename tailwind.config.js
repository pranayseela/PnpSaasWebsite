/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        apple: {
          white: '#FFFFFF',
          offwhite: '#F5F5F7',
          black: '#1D1D1F',
          grey: '#1d1d1f',
          lightGrey: '#FBFBFD',
          blue: '#005AC1',
          border: 'rgba(0, 0, 0, 0.1)',
          cyan: '#00D4FF',
          vibrantBlue: '#005BEA',
          purple: '#B83AF3',
        }
      },
      fontFamily: { 
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'New York', 'Georgia', 'serif']
      }
    },
  },
  plugins: [],
}
