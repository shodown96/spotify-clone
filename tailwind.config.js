/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#1db954",
        default: {
          DEFAULT: "#121212",
          dark: "#181818",
          light: "#232323",
          lighter: "#a7a7a7"
        },
        gradient:{
          blue:'linear-gradient(180deg, #1e3264 0, var(--background-base) 40%)'
        }
      }
    },
  },
  plugins: [],
}
