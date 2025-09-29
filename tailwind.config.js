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
      },
      screens: {
        // Breakpoints baseados na altura da tela (mobile-first)
        'h-sm': {'raw': '(min-height: 640px)'},    // Telas pequenas (iPhone SE, etc)
        'h-md': {'raw': '(min-height: 768px)'},    // Telas médias 
        'h-lg': {'raw': '(min-height: 900px)'},    // Telas grandes (iPhone Pro Max, etc)
        'h-xl': {'raw': '(min-height: 1024px)'},   // Tablets em modo retrato
        'h-2xl': {'raw': '(min-height: 1280px)'},  // Tablets grandes
        
        // Breakpoints baseados na altura máxima (desktop-first)
        'max-h-sm': {'raw': '(max-height: 639px)'},
        'max-h-md': {'raw': '(max-height: 767px)'},
        'max-h-lg': {'raw': '(max-height: 899px)'},
        'max-h-xl': {'raw': '(max-height: 1023px)'},
      }
    },
  },
  safelist: [
    // Força a geração dessas classes de padding
    'py-1', 'py-2', 'py-3', 'py-4', 'py-5', 'py-6', 'py-7', 'py-8',
    'px-1', 'px-2', 'px-3', 'px-4', 'px-5', 'px-6', 'px-7', 'px-8',
  ],
  plugins: [],
}