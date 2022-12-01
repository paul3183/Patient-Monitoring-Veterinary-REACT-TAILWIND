/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
  daisyui: {
    themes: [
      'light',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
  }
}
