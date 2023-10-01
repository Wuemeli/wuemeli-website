<template>
  <div>
    <nav class="flex flex-row items-center justify-between px-10 py-2 bg-iridium">
      <div class="flex-row items-center hidden space-x-3 sm:flex">
        <div class="button w-3 h-3 rounded-full bg-mac-red" @click="exitFullscreen"></div>
        <div class="button w-3 h-3 rounded-full bg-mac-yellow" ref="yellowButton" @click="changeColor"></div>
        <div class="button w-3 h-3 rounded-full bg-mac-green" @click="enterFullscreen"></div>
      </div>
      <div class="flex-grow flex items-center justify-center">
        <p class="text-light-gray-center">
          I'm currently {{ getTimezoneStatus() }} and it's {{ getTime() }} ⏰ in Zurich 🇨🇭
        </p>
      </div>
        <img src="https://dcbadge.vercel.app/api/shield/704918773035171931?theme=gray&logoColor=presence" alt="Discord Status" width="250"/>
      </nav>
    <div class="flex bg-baltic-sea">
      <div class="flex items-center px-10 py-3 space-x-7 bg-dark-gray">
        <router-link to="/" class="text-red-500 hover:bg-gray-800 animated-link" active-class="text-blue-500 font-bold"
          exact>
          <div class="flex items-center mr-3">
            <NuxtImg src="/icons/vue.svg" alt="Vue icon" class="w-5 h-auto mr-2" />
            <p>Index.vue</p>
          </div>
        </router-link>
        <router-link to="/experience" class="text-red-500 hover:bg-gray-800 animated-link"
          active-class="text-blue-500 font-bold" exact>
          <div class="flex items-center mr-3">
            <img src="/icons/js.svg" alt="JS icon" class="w-5 h-auto mr-2" />
            <p>Experience.js</p>
          </div>
        </router-link>
        <router-link to="/projects" class="text-red-500 hover:bg-gray-800 animated-link"
          active-class="text-blue-500 font-bold" exact>
          <div class="flex items-center">
            <img src="/icons/ts.svg" alt="TS icon" class="w-5 h-auto mr-2" />
            <p>Projects.ts</p>
          </div>
        </router-link>
        <router-link to="/codingstats" class="text-red-500 hover:bg-gray-800 animated-link"
          active-class="text-blue-500 font-bold" exact>
          <div class="flex items-center">
            <img src="/icons/python.svg" alt="Python icon" class="w-5 h-auto mr-2" />
            <p>Coding Stats.py</p>
          </div>
        </router-link>
        <router-link to="/github" class="text-red-500 hover:bg-gray-800 animated-link"
          active-class="text-blue-500 font-bold" exact>
          <div class="flex items-center">
            <img src="/icons/github.svg" alt="GitHub icon" class="w-5 h-auto mr-2" />
            <p>Github.gh</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  methods: {
    changeColor() {
      const randomColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16)
      this.$refs.yellowButton.style.backgroundColor = randomColor
    },
    enterFullscreen() {
      const element = document.documentElement
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    },
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    },
    getTimezoneStatus() {
      const zurichTime = moment().tz('Europe/Zurich')
      const zurichHour = zurichTime.hour()

      if (zurichHour >= 22 || zurichHour < 6) {
        return 'Sleeping 😴'
      } else {
        return 'Awake 🌞'
      }
    },
    getTime() {
      const zurichTime = moment().tz('Europe/Zurich')
      return zurichTime.format('HH:mm')
    },
  },
  mounted() {
    const animatedLinks = document.querySelectorAll('.animated-link')
    animatedLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        link.classList.add('animated-link-hover')
      })
      link.addEventListener('mouseleave', () => {
        link.classList.remove('animated-link-hover')
      })
    })
  },
}
</script>
