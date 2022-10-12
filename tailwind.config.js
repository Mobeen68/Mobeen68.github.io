/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "happyRed": "#E01C1D",
        // 'bermuda': '#78dcca',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
