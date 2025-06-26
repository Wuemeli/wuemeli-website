<template>
    <section id="skills" class="mb-16 animate-slide-up">
        <h2
            class="text-3xl font-bold mb-8 text-light-gray flex items-center gap-3"
        >
            <span>⚔️</span>
            The Arsenal I Wield
        </h2>

        <div class="text-center mb-8">
            <p class="text-gray-300 italic">
                "He who knows how to employ both will have the upper hand." -
                Sun Tzu
            </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
            <div
                class="bg-baltic-sea/50 rounded-lg p-6 border border-dune/30 hover:border-dune/50 transition-all duration-300 card-hover"
            >
                <h3
                    class="text-xl font-semibold mb-3 text-green-400 flex items-center gap-2"
                >
                    <span>🗡️</span>
                    Backend Mastery
                </h3>
                <p class="text-gray-300 mb-4">
                    I am proficient with Node.js, Hono, Postgres, Drizzle, and
                    more to forge powerful and scalable backend systems that
                    stand the test of time.
                </p>
                <div class="flex flex-wrap gap-2">
                    <a
                        href="https://nodejs.org/"
                        target="_blank"
                        class="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-green-900/50 transition-colors hover:scale-105"
                    >
                        <NuxtImg
                            src="/icons/nodejs-original.svg"
                            alt="Node.js"
                            class="w-4 h-4"
                        />
                        Node.js
                    </a>
                    <a
                        href="https://hono.dev/"
                        target="_blank"
                        class="bg-orange-900/30 text-orange-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-orange-900/50 transition-colors hover:scale-105"
                    >
                        <span>🔥</span>
                        Hono
                    </a>
                    <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        class="bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-900/50 transition-colors hover:scale-105"
                    >
                        <NuxtImg
                            src="/icons/typescript-original.svg"
                            alt="Typescript"
                            class="w-5 h-5"
                        />
                        Typescript
                    </a>
                    <a
                        href="https://postgresql.org/"
                        target="_blank"
                        class="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-blue-900/50 transition-colors hover:scale-105"
                    >
                        <NuxtImg
                            src="/icons/postgresql-original.svg"
                            alt="Postgres"
                            class="w-4 h-4"
                        />
                        Postgres
                    </a>
                    <a
                        href="https://orm.drizzle.team/"
                        target="_blank"
                        class="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-purple-900/50 transition-colors hover:scale-105"
                    >
                        <span>💧</span>
                        Drizzle
                    </a>
                </div>
            </div>

            <div
                class="bg-baltic-sea/50 rounded-lg p-6 border border-dune/30 hover:border-dune/50 transition-all duration-300 card-hover"
            >
                <h3
                    class="text-xl font-semibold mb-3 text-blue-400 flex items-center gap-2"
                >
                    <span>🏹</span>
                    Frontend Archery
                </h3>
                <p class="text-gray-300 mb-4">
                    I have mastered the ancient arts of HTML, CSS, and
                    JavaScript. With Nuxt and Tailwind as my trusted bow and
                    arrows, I craft beautiful interfaces.
                </p>
                <div class="flex flex-wrap gap-2">
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                        target="_blank"
                        class="bg-red-900/30 text-red-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-red-900/50 transition-colors hover:scale-105"
                    >
                        <NuxtImg
                            src="/icons/html5-original.svg"
                            alt="HTML"
                            class="w-4 h-4"
                        />
                        HTML
                    </a>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                        target="_blank"
                        class="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-blue-900/50 transition-colors hover:scale-105"
                    >
                        <NuxtImg
                            src="/icons/css3-original.svg"
                            alt="CSS"
                            class="w-4 h-4"
                        />
                        CSS
                    </a>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        target="_blank"
                        class="bg-yellow-900/30 text-yellow-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-yellow-900/50 transition-colors hover:scale-105"
                    >
                        <NuxtImg
                            src="/icons/javascript-original.svg"
                            alt="JavaScript"
                            class="w-4 h-4"
                        />
                        JavaScript
                    </a>
                    <a
                        href="https://nuxt.com/"
                        target="_blank"
                        class="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-green-900/50 transition-colors hover:scale-105"
                    >
                        <NuxtImg
                            src="/icons/nuxtjs-original.svg"
                            alt="Nuxt"
                            class="w-4 h-4"
                        />
                        Nuxt
                    </a>
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        class="bg-cyan-900/30 text-cyan-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-cyan-900/50 transition-colors hover:scale-105"
                    >
                        <NuxtImg
                            src="/icons/tailwindcss.svg"
                            alt="Tailwind"
                            class="w-4 h-4"
                        />
                        Tailwind
                    </a>
                </div>
            </div>

            <div
                class="bg-baltic-sea/50 rounded-lg p-6 border border-dune/30 hover:border-dune/50 transition-all duration-300 card-hover"
            >
                <h3
                    class="text-xl font-semibold mb-3 text-purple-400 flex items-center gap-2"
                >
                    <span>🎲</span>
                    Gaming & Modding Quest
                </h3>
                <p class="text-gray-300 mb-4">
                    I love playing Counter-Strike and Minecraft. I also like to
                    create mods for these games. And if it hasn't been clear
                    yet, I'm a huge fan of medieval games like Chivalry 2 and
                    Kingdom Come: Deliverance.
                </p>
                <a
                    href="https://modrinth.com/mod/wuemelis-utils"
                    target="_blank"
                    class="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors"
                >
                    <span>📦</span>
                    Wuemeli's Utils on Modrinth
                </a>
            </div>

            <div
                class="bg-baltic-sea/50 rounded-lg p-6 border border-dune/30 hover:border-dune/50 transition-all duration-300 card-hover"
            >
                <h3
                    class="text-xl font-semibold mb-3 text-orange-400 flex items-center gap-2"
                >
                    <span>🛡️</span>
                    DevOps Stuff
                </h3>
                <p class="text-gray-300 mb-4">
                    I like to automate my workflows and deploy applications with
                    Docker, Kubernetes and Cloudflare Workers.
                </p>
                <div class="flex flex-wrap gap-2">
                    <a
                        href="https://docker.com/"
                        target="_blank"
                        class="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-blue-900/50 transition-colors hover:scale-105"
                    >
                        <NuxtImg
                            src="/icons/docker-original.svg"
                            alt="Docker"
                            class="w-4 h-4"
                        />
                        Docker
                    </a>
                    <a
                        href="https://kubernetes.io/"
                        target="_blank"
                        class="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-purple-900/50 transition-colors hover:scale-105"
                    >
                        <NuxtImg
                            src="/icons/kubernetes-plain.svg"
                            alt="Kubernetes"
                            class="w-4 h-4"
                        />
                        Kubernetes
                    </a>
                </div>
            </div>

            <div
                class="bg-baltic-sea/50 rounded-lg p-6 border border-dune/30 hover:border-dune/50 transition-all duration-300 md:col-span-2 card-hover"
            >
                <h3
                    class="text-xl font-semibold mb-3 text-red-400 flex items-center gap-2"
                >
                    <span>🗡️⚔️</span>
                    Security Spellcasting + OSINT
                </h3>
                <p class="text-gray-300">
                    I dabble in security and OSINT, using tools like
                    <a
                        href="https://www.kali.org/tools/"
                        target="_blank"
                        class="text-red-300 underline hover:text-red-200 transition-colors"
                    >
                        Kali Linux tools</a
                    >,
                    <a
                        href="https://nmap.org/"
                        target="_blank"
                        class="text-blue-300 underline hover:text-blue-200 transition-colors"
                    >
                        Nmap</a
                    >,
                    <a
                        href="https://www.metasploit.com/"
                        target="_blank"
                        class="text-purple-300 underline hover:text-purple-200 transition-colors"
                    >
                        Metasploit</a
                    >,
                    <a
                        href="https://www.shodan.io/"
                        target="_blank"
                        class="text-green-300 underline hover:text-green-200 transition-colors"
                    >
                        Shodan</a
                    >, and
                    <a
                        href="https://github.com/smicallef/spiderfoot"
                        target="_blank"
                        class="text-yellow-300 underline hover:text-yellow-200 transition-colors"
                    >
                        SpiderFoot</a
                    >, and the good old DuckDuckGo to uncover hidden
                    information.
                </p>
            </div>
        </div>

        <div class="mt-8">
            <h3 id="arsenal" class="text-xl font-semibold mb-4 text-light-gray">
                More Stuff:
            </h3>
            <div class="flex flex-wrap gap-3">
                <a
                    href="https://bun.sh/"
                    target="_blank"
                    class="bg-orange-900/30 text-orange-300 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-900/50 transition-colors hover:scale-105"
                >
                    <NuxtImg
                        src="/icons/bun-original.svg"
                        alt="Bun"
                        class="w-5 h-5"
                    />
                    Bun
                </a>
                <a
                    href="https://www.python.org/"
                    target="_blank"
                    class="bg-yellow-900/30 text-yellow-300 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-900/50 transition-colors hover:scale-105"
                >
                    <NuxtImg
                        src="/icons/python-original.svg"
                        alt="Python"
                        class="w-5 h-5"
                    />
                    Python
                </a>
                <a
                    href="https://git-scm.com/"
                    target="_blank"
                    class="bg-gray-900/30 text-gray-300 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-900/50 transition-colors hover:scale-105"
                >
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        alt="Git"
                        class="w-5 h-5"
                    />
                    Git
                </a>
                <a
                    href="https://www.torproject.org/"
                    target="_blank"
                    class="bg-purple-900/30 text-purple-300 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-purple-900/50 transition-colors hover:scale-105"
                >
                    <NuxtImg src="/icons/tor.png" alt="Tor" class="w-5 h-5" />
                    Tor
                </a>
                <a
                    href="https://www.mongodb.com/"
                    target="_blank"
                    class="bg-green-900/30 text-green-300 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-900/50 transition-colors hover:scale-105"
                >
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                        alt="MongoDB"
                        class="w-5 h-5"
                    />
                    MongoDB
                </a>
                <a
                    href="https://zed.dev/"
                    target="_blank"
                    class="bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-900/50 transition-colors hover:scale-105"
                >
                    <span>✏️</span>
                    Zed
                </a>
                <a
                    href="https://archlinux.org/"
                    target="_blank"
                    class="bg-cyan-900/30 text-cyan-300 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-cyan-900/50 transition-colors hover:scale-105"
                >
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                        alt="Linux"
                        class="w-5 h-5"
                    />
                    Arch Linux w/ Hyprland
                </a>
            </div>
        </div>
    </section>
</template>
