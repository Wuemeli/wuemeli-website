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
        <div class="max-w-4xl mx-auto">
            <p class="text-gray-300 text-lg leading-relaxed mb-8">
                First and foremost, I hate designing frontends. I'm more of the
                logic guy that would write a web scraper to find the best
                Mansions. I love collaboration, open source, and sharing
                knowledge with others.
            </p>

            <div class="mb-10">
                <h3
                    class="text-2xl font-bold mb-4 text-green-300 flex items-center gap-2"
                >
                    <span>🖥️</span>
                    Backend & Infrastructure
                </h3>
                <p class="text-gray-300 text-lg leading-relaxed">
                    I enjoy building robust backend systems with
                    <Skill
                        name="Node.js"
                        icon="/icons/nodejs-original.svg"
                        color="green"
                    />, <Skill name="Hono" emoji="🔥" color="orange" />,
                    <Skill
                        name="Typescript"
                        icon="/icons/typescript-original.svg"
                        color="blue"
                    />,
                    <Skill
                        name="Postgres"
                        icon="/icons/postgresql-original.svg"
                        color="blue"
                    />, <Skill name="Drizzle" emoji="💧" color="purple" />,
                    <Skill
                        name="Docker"
                        icon="/icons/docker-original.svg"
                        color="blue"
                    />,
                    <Skill
                        name="Kubernetes"
                        icon="/icons/kubernetes-plain.svg"
                        color="purple"
                    />,
                    <Skill
                        name="Cloudflare Workers"
                        emoji="☁️"
                        color="yellow"
                    />,
                    <Skill
                        name="Bun"
                        icon="/icons/bun-original.svg"
                        color="orange"
                    />,
                    <Skill
                        name="Python"
                        icon="/icons/python-original.svg"
                        color="yellow"
                    />,
                    <Skill
                        name="Git"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        color="gray"
                    />, and
                    <Skill
                        name="MongoDB"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                        color="green"
                    />.
                </p>
            </div>

            <div class="mb-10">
                <h3
                    class="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2"
                >
                    <span>🎨</span>
                    Frontend Development
                </h3>
                <p class="text-gray-300 text-lg leading-relaxed">
                    While I prefer backend work, I can handle frontend
                    development with
                    <Skill
                        name="HTML"
                        icon="/icons/html5-original.svg"
                        color="red"
                    />,
                    <Skill
                        name="CSS"
                        icon="/icons/css3-original.svg"
                        color="blue"
                    />,
                    <Skill
                        name="JavaScript"
                        icon="/icons/javascript-original.svg"
                        color="yellow"
                    />
                    and
                    <Skill
                        name="Nuxt"
                        icon="/icons/nuxtjs-original.svg"
                        color="green"
                    />.
                </p>
            </div>

            <div class="mb-10">
                <h3
                    class="text-2xl font-bold mb-4 text-red-300 flex items-center gap-2"
                >
                    <span>🔒</span>
                    Penetration Testing & Security
                </h3>
                <p class="text-gray-300 text-lg leading-relaxed">
                    I also enjoy breaching and tinkering with my own systems and
                    from friends. I use stuff such as BurpSuite, Shodan, nmap,
                    sqlmap, wireshark, metasploit and my own cool Python
                    scripts.
                    <Skill
                        name="BurpSuite"
                        icon="/icons/burp.jpg"
                        color="green"
                    />,
                    <Skill
                        name="Shodan"
                        icon="/icons/shodan.png"
                        color="blue"
                    />,
                    <Skill name="Nmap" icon="/icons/nmap.svg" color="red" />,
                    <Skill
                        name="Sqlmap"
                        icon="/icons/sqlmap.png"
                        color="yellow"
                    />,
                    <Skill
                        name="Wireshark"
                        icon="/icons/wireshark.jpg"
                        color="purple"
                    />,
                    <Skill
                        name="Metasploit"
                        icon="/icons/metasploit.jpg"
                        color="red"
                    />
                    and some cool totally selfwritten Python scripts.
                </p>
            </div>

            <p class="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you might find me tinkering with
                <Skill
                    name="Arch Linux w/ Hyprland"
                    icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                    color="cyan"
                />
                setups, automating workflows, or modding games like
                Counter-Strike and Minecraft. I even created
                <a
                    href="https://modrinth.com/mod/wuemelis-utils"
                    target="_blank"
                    class="inline-flex items-center gap-1 underline text-purple-200 hover:text-purple-100 font-semibold"
                >
                    Wuemeli's Utils <span class="text-lg align-middle">📦</span>
                </a>
                to make the Minecraft experience even better. I also host
                various
                <Skill name="Monero" icon="/icons/monero.png" color="green" />
                nodes and run a
                <Skill name="Tor" icon="/icons/tor.png" color="orange" /> relay.
                <br /><br />
                I use the
                <Skill name="Zed" icon="/icons/zed.png" color="blue" /> to write
                code.
            </p>
        </div>
    </section>
</template>
