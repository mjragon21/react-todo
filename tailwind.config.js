const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js", // Add this line to include the JavaScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
