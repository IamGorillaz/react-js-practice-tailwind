/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9EC342",
          dark: "#7A9E2E",
          light: "#EAF3D0",
        },

        secondary: "#3F6212",

        background: "#F9FAF7",
        surface: "#FFFFFF",

        text: {
          DEFAULT: "#1F2937",
          secondary: "#374151",
          muted: "#6B7280",
        },

        border: "#D1D5DB",

        success: "#16A34A",
        warning: "#F59E0B",
        error: "#DC2626",
      },
    },
  },

  plugins: [],
};