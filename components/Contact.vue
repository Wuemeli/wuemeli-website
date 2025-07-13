<template>
    <section id="contact" class="mb-16 animate-slide-up">
        <h2
            class="text-3xl font-bold mb-8 text-light-gray flex items-center gap-3"
        >
            <span>📬</span>
            Get In Touch
        </h2>

        <div class="prose prose-invert max-w-none">
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                I hope you know me a little better now. If you wish to contact
                me, here are the best ways:
            </p>

            <div class="mb-6">
                <h3
                    class="text-lg font-semibold mb-3 text-green-400 flex items-center gap-2"
                >
                    <NuxtImg
                        src="/icons/Threema.png"
                        alt="Threema"
                        class="w-6 h-6"
                    />
                    Threema
                </h3>
                <p class="text-gray-300 leading-relaxed mb-2">
                    My preferred method for secure messaging. Anonymous,
                    privacy-first, and Swiss-based.
                </p>
                <a
                    href="https://threema.id/U9KN6FE5"
                    target="_blank"
                    class="inline-block bg-green-900/30 text-green-300 px-4 py-2 rounded hover:bg-green-900/50 transition-colors"
                >
                    My Threema ID: U9KN6FE5
                </a>
            </div>

            <div class="mb-6">
                <h3
                    class="text-lg font-semibold mb-3 text-purple-400 flex items-center gap-2"
                >
                    <NuxtImg
                        src="/icons/discord.png"
                        alt="Discord"
                        class="w-6 h-6"
                    />
                    Discord
                </h3>
                <p class="text-gray-300 leading-relaxed mb-2">
                    Join my Discord community for casual chat, questions, or
                    collaboration.
                </p>
                <a
                    href="https://discord.gg/2acSubgZxq"
                    target="_blank"
                    class="inline-block bg-purple-900/30 text-purple-300 px-4 py-2 rounded hover:bg-purple-900/50 transition-colors"
                >
                    Join Discord
                </a>
            </div>

            <div class="mb-6">
                <h3
                    class="text-lg font-semibold mb-3 text-yellow-400 flex items-center gap-2"
                >
                    <NuxtImg
                        src="/icons/session.svg"
                        alt="Session"
                        class="w-6 h-6"
                    />
                    Session
                </h3>
                <p class="text-gray-300 leading-relaxed mb-2">
                    For maximum anonymity and decentralization, you can reach me
                    on Session.
                </p>
                <div
                    class="bg-yellow-900/30 text-yellow-300 px-4 py-2 rounded break-all select-all"
                >
                    05a0423c3e59a56fe0a7be5ff4338e7c8da328b1ce75ee3519d9bef97d335fe951
                </div>
            </div>

            <div class="mb-6">
                <h3
                    class="text-lg font-semibold mb-3 text-green-300 flex items-center gap-2"
                >
                    <span>✉️</span>
                    Email
                </h3>
                <p class="text-gray-300 leading-relaxed mb-2">
                    Good for longer conversations, sharing files, or formal
                    communications. I try to respond within 24-48 hours.
                </p>
                <a
                    href="mailto:heelo@wuemeli.com"
                    class="inline-block bg-green-900/30 text-green-300 px-4 py-2 rounded hover:bg-green-900/50 transition-colors"
                >
                    Send Email
                </a>
            </div>
        </div>
    </section>
</template>
