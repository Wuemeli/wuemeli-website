module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        iridium: '#2d3133',
        dune: '#333333',
        'baltic-sea': '#1c1f20',
        'dark-gray': '#171819',
        'light-gray': '#CCCCCC',
        'mac-red': '#EC6B5E',
        'mac-yellow': '#F3BF4F',
        'mac-green': '#61C554',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/typography'),
  ],
}
