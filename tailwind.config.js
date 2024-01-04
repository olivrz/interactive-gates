/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './public/**/*.{png, svg, jpg, jpeg, webp}'
  ],
  theme: {
    extend: {
        colors: {
            'react-blue-1': '#99ECFF',
            'react-blue-2': '#00BAFF'
        }
    },
  },
  plugins: [],
}

