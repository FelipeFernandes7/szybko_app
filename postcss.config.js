const nativewind = require("nativewind/tailwind/css")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [nativewind()],
};