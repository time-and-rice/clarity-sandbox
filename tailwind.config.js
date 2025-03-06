/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
        },
        secondary: {
          DEFAULT: "#10B981",
        },
        accent: {
          DEFAULT: "#F59E0B",
        },
        dark: {
          DEFAULT: "#1F2937",
        },
        light: {
          DEFAULT: "#F3F4F6",
        },
      },
    },
  },
  plugins: [],
};
