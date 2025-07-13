<template>
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
