/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        default: "#060708",
        primary: "#0056b3",
        secondary: "#7fb3eb",
        accent: "#409efd",
      },
      backgroundColor: {
        default: "#f8f9fb",
        primary: "#0056b3",
        secondary: "#7fb3eb",
        accent: "#409efd",
      },
      fontFamily: {
        regularFont: ["PTSansRegular"],
        boldFont: ["PTSansBold"],
      },
    },
  },
  plugins: [],
};
