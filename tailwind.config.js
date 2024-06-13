/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#b2ddfe',
        customLightBlue: '#e5f3fe',
        customLightDark: "#f8f8f8",  // Changed to camel case to follow the standard naming conventions
      },
    },
  },
  plugins: [],
};
