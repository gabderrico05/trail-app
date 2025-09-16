/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
  "./app/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        lightGray: "#E8E8E8",
        burntOrange: "#BF360C",
        butterYellow: "#FFE489",
        forestGreen: {
          400: "#2A6A59",
          500: "#113D31",
          600: "#001D15",
        },
      }
    },
  },
  plugins: [],
}