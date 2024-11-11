/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#060708",
        background: "#f8f9fb",
        primary: "#0056b3",
        secondary: "#7fb3eb",
        accent: "#409efd",
        neutral: "#737373",
      },
      backgroundColor: {
        default: "#f8f9fb",
        text: "#060708",
        primary: "#0056b3",
        secondary: "#7fb3eb",
        accent: "#409efd",
        neutral: "#737373",
      },
      fontFamily: {
        regularFont: ["PTSansRegular"],
        boldFont: ["PTSansBold"],
      },
    },
  },
  plugins: [],
};
