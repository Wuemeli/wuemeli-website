<template>
<<<<<<< HEAD
  <div>
    <nav
      class="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-2 bg-iridium"
    >
      <div class="flex-row items-center space-x-3 sm:flex">
        <div
          class="button w-3 h-3 rounded-full animate_animated animate__bounceIn bg-mac-red"
          @click="exitFullscreen"
        ></div>
        <div
          class="button w-3 h-3 rounded-full animate_animated animate__bounceIn bg-mac-yellow"
          ref="yellowButton"
          @click="changeColor"
        ></div>
        <div
          class="button w-3 h-3 rounded-full animate_animated animate__bounceIn bg-mac-green"
          @click="enterFullscreen"
        ></div>
      </div>
      <div class="flex-grow flex items-center justify-center">
        <p class="animate_animated animate__bounceIn text-center md:text-left">
          {{ newroutename }} - Wuemelis Portfolio
        </p>
      </div>
      <p
        class="animate_animated animate__bounceIn text-center md:text-right"
        onclick="window.open('https://blog.wuemeli.com', '_blank')"
      >
        📖 Read my blog
      </p>
    </nav>
    <div class="flex flex-col md:flex-row bg-baltic-sea">
      <div
        class="flex flex-col md:flex-row items-center px-4 md:px-10 py-3 space-x-0 md:space-x-7 bg-dark-gray"
      >
        <router-link
          to="/"
          class="text-red-500 hover:bg-gray-800 animated-link"
          active-class="text-blue-500 font-bold"
          exact
        >
          <div class="flex items-center mr-3">
            <NuxtImg
              src="/icons/vue.svg"
              alt="Vue icon"
              class="w-5 h-auto mr-2"
            />
            <p>Index.vue</p>
          </div>
        </router-link>
        <router-link
          to="/experience"
          class="text-red-500 hover:bg-gray-800 animated-link"
          active-class="text-blue-500 font-bold"
          exact
        >
          <div class="flex items-center mr-3">
            <NuxtImg
              src="/icons/js.svg"
              alt="JS icon"
              class="w-5 h-auto mr-2"
            />
            <p>Experience.js</p>
          </div>
        </router-link>
        <router-link
          to="/projects"
          class="text-red-500 hover:bg-gray-800 animated-link"
          active-class="text-blue-500 font-bold"
          exact
        >
          <div class="flex items-center">
            <img src="/icons/ts.svg" alt="TS icon" class="w-5 h-auto mr-2" />
            <p>Projects.ts</p>
          </div>
        </router-link>
        <router-link
          to="/codingstats"
          class="text-red-500 hover:bg-gray-800 animated-link"
          active-class="text-blue-500 font-bold"
          exact
        >
          <div class="flex items-center">
            <img
              src="/icons/python.svg"
              alt="Python icon"
              class="w-5 h-auto mr-2"
            />
            <p>Coding Stats.py</p>
          </div>
        </router-link>
        <router-link
          to="/github"
          class="text-red-500 hover:bg-gray-800 animated-link"
          active-class="text-blue-500 font-bold"
          exact
        >
          <div class="flex items-center">
            <img
              src="/icons/github.svg"
              alt="GitHub icon"
              class="w-5 h-auto mr-2"
            />
            <p>Github.gh</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const route = useRoute()

    const newroutename = computed(() => {
      return route.name.charAt(0).toUpperCase() + route.name.slice(1)
    })

    return {
      route,
      newroutename,
    }
  },
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
  },
}
</script>
=======
    <nav
        class="fixed top-0 left-0 w-full z-50 bg-baltic-sea/70 backdrop-blur border-b border-dune/30 shadow-lg"
    >
        <div
            class="container mx-auto px-6 py-3 flex items-center justify-between max-w-4xl"
        >
            <ul class="flex items-center gap-6 text-sm font-medium">
                <li>
                    <NuxtLink
                        href="/"
                        class="text-light-gray hover:text-blue-400 transition-colors"
                        >Home</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink
                        href="/#skills"
                        class="text-light-gray hover:text-green-400 transition-colors"
                        >Skills</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink
                        href="/#projects"
                        class="text-light-gray hover:text-blue-400 transition-colors"
                        >Projects</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink
                        href="/#giving-back"
                        class="text-light-gray hover:text-pink-400 transition-colors"
                        >Giving Back</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink
                        href="/#contact"
                        class="text-light-gray hover:text-yellow-400 transition-colors"
                        >Contact</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink
                        href="/pgp"
                        class="text-light-gray hover:text-purple-400 transition-colors flex items-center gap-1"
                    >
                        PGP</NuxtLink
                    >
                </li>
            </ul>
        </div>
    </nav>
</template>
>>>>>>> new-website
