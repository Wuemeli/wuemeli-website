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
        iridium: '#3C3C3C',
        dune: '#333333',
        'baltic-sea': '#252526',
        'dark-gray': '#1E1E1E',
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
          words: ['Hello', 'Bonjour', 'Hola', 'Ciao', '你好', 'こんにちは', '안녕하세요', 'สวัสดี', 'مرحبا'],
          delay: 1
        },
      }
    })
  ],
}
