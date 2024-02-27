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
    require('tailwind-typewriter')({
      wordsets: {
        skills: {
          words: ['Discord Bot', 'Full Stack Applicatios', 'Networking', 'Security', 'Linux'],
          delay: 3
        },
        hello: {
          words: ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Gruezi', 'こんにちは', '안녕하세요', 'สวัสดี', '你好'],
          delay: 1
        },
      }
    })
  ],
}
