<template>
    <section id="projects" class="mb-16 animate-slide-up">
        <h2
            class="text-3xl font-bold mb-8 text-light-gray flex items-center gap-3"
        >
            <span>💻</span>
            My Projects
        </h2>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
                class="bg-baltic-sea/50 rounded-lg p-6 border border-dune/30 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
            >
                <h3
                    class="text-lg font-semibold mb-2 text-green-400 flex items-center gap-2"
                >
                    <span>🧱</span>
                    Wuemeli's Utils
                </h3>
                <p class="text-gray-300 text-sm mb-3">
                    A mod for Minecraft that adds various quality-of-life
                    features.
                </p>
                <a
                    href="https://modrinth.com/mod/wuemelis-utils"
                    target="_blank"
                    class="text-green-300 hover:text-green-200 text-sm flex items-center gap-1"
                >
                    <span>🔗</span>
                    View on Modrinth
                </a>
            </div>

            <div
                class="bg-baltic-sea/50 rounded-lg p-6 border border-dune/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
                <h3
                    class="text-lg font-semibold mb-2 text-blue-400 flex items-center gap-2"
                >
                    <span>🤖</span>
                    Heckerbot
                </h3>
                <p class="text-gray-300 text-sm mb-3">
                    Discord bot with some community features. Has been shut down
                    :(
                </p>
                <a
                    href="https://heckerbot.dev"
                    target="_blank"
                    class="text-green-300 hover:text-green-200 text-sm flex items-center gap-1"
                >
                    <span>🔗</span>
                    Visit Heckerbot
                </a>
            </div>

            <div
                class="bg-baltic-sea/50 rounded-lg p-6 border border-dune/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
                <h3
                    class="text-lg font-semibold mb-2 text-purple-400 flex items-center gap-2"
                >
                    <span>⚡</span>
                    Zenith
                </h3>
                <p class="text-gray-300 text-sm mb-3">
                    My Gameserver hosting company. Entire Infra has been custom
                    coded.
                </p>
                <a
                    href="https://zen.ith.rip"
                    target="_blank"
                    class="text-green-300 hover:text-green-200 text-sm flex items-center gap-1"
                >
                    <span>🔗</span>
                    Visit Zenith
                </a>
            </div>

            <div
                class="bg-baltic-sea/50 rounded-lg p-6 border border-dune/30 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
            >
                <h3
                    class="text-lg font-semibold mb-2 text-orange-400 flex items-center gap-2"
                >
                    <span>🧅</span>
                    Tor-relay.dev
                </h3>
                <p class="text-gray-300 text-sm mb-3">
                    Create Tor Relay servers easily using a config generator and
                    a script.
                </p>
                <a
                    href="https://tor-relay.dev"
                    target="_blank"
                    class="text-green-300 hover:text-green-200 text-sm flex items-center gap-1"
                >
                    <span>🔗</span>
                    Host a Tor Relay
                </a>
            </div>

            <template v-if="githubRepos.length">
                <div
                    v-for="repo in githubRepos"
                    :key="repo.id"
                    class="bg-baltic-sea/50 rounded-lg p-6 border border-dune/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105"
                >
                    <h3
                        class="text-lg font-semibold mb-2 text-gray-400 flex items-center gap-2"
                    >
                        <span>{{ getRandomEmoji() }}</span>
                        {{ repo.name }}
                    </h3>
                    <div class="text-xs text-gray-400 mb-2">
                        Stars: {{ repo.stargazers_count }}
                    </div>
                    <p class="text-gray-300 text-sm mb-3">
                        {{ repo.description }}
                    </p>
                    <a
                        :href="repo.html_url"
                        target="_blank"
                        class="text-green-300 hover:text-green-200 text-sm flex items-center gap-1"
                    >
                        <span>🔗</span>
                        View on GitHub
                    </a>
                </div>
            </template>
            <template v-else>
                <div
                    class="bg-baltic-sea/50 rounded-lg p-6 border border-dune/30 transition-all duration-300 opacity-60"
                >
                    <h3
                        class="text-lg font-semibold mb-2 text-gray-400 flex items-center gap-2"
                    >
                        <span>📚</span>
                        Loading top GitHub repositories...
                    </h3>
                </div>
            </template>
        </div>
    </section>
</template>

<script setup>
const githubRepos = ref([]);

onMounted(async () => {
    const res = await fetch(
        "https://api.github.com/users/wuemeli/repos?per_page=100",
    );
    const data = await res.json();
    githubRepos.value = data
        .filter((repo) => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);
});

const getRandomEmoji = () => {
    const emojis = ["🚀", "🌟", "🔥", "🎉", "🏆"];
    return emojis[Math.floor(Math.random() * emojis.length)];
};
</script>
