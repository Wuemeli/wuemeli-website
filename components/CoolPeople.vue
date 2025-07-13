<template>
    <section id="people-i-support" class="mb-16 animate-slide-up">
        <h2
            class="text-3xl font-bold mb-8 text-light-gray flex items-center gap-3"
        >
            <span>🧑‍💻</span>
            People I Admire & Support
        </h2>
        <div class="grid gap-8 md:grid-cols-2">
            <div
                class="bg-baltic-sea/50 rounded-lg p-6 border border-blue-500/30 flex gap-4 items-center"
            >
                <NuxtImg
                    src="/icons/Linus_Torvalds.jpeg"
                    alt="Linus Torvalds"
                    class="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                />
                <div>
                    <h3
                        class="text-xl font-semibold mb-1 text-blue-400 flex items-center gap-2"
                    >
                        Linus Torvalds
                    </h3>
                    <p class="text-gray-300 leading-relaxed text-sm">
                        Creator of Linux and Git. Linus empowered millions to
                        use, study, and improve software freely.
                    </p>
                </div>
            </div>
            <div
                class="bg-baltic-sea/50 rounded-lg p-6 border border-green-500/30 flex gap-4 items-center"
            >
                <NuxtImg
                    src="/icons/edward.jpg"
                    alt="Edward Snowden"
                    class="w-16 h-16 rounded-full object-cover border-2 border-green-400"
                />
                <div>
                    <h3
                        class="text-xl font-semibold mb-1 text-green-400 flex items-center gap-2"
                    >
                        Edward Snowden
                    </h3>
                    <p class="text-gray-300 leading-relaxed text-sm">
                        Whistleblower who exposed mass surveillance. Snowden’s
                        courage sparked a global conversation about privacy.
                    </p>
                </div>
            </div>
            <div
                class="bg-baltic-sea/50 rounded-lg p-6 border border-purple-500/30 flex gap-4 items-center"
            >
                <NuxtImg
                    src="/icons/Aaron.jpg"
                    alt="Aaron Swartz"
                    class="w-16 h-16 rounded-full object-cover border-2 border-purple-400"
                />
                <div>
                    <h3
                        class="text-xl font-semibold mb-1 text-purple-400 flex items-center gap-2"
                    >
                        Aaron Swartz
                    </h3>
                    <p class="text-gray-300 leading-relaxed text-sm">
                        Programmer, activist, and co-founder of Reddit. Fought
                        for open access to information and internet freedom.
                    </p>
                </div>
            </div>
            <div
                class="bg-baltic-sea/50 rounded-lg p-6 border border-cyan-500/30 flex gap-4 items-center"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
                    alt="Alan Turing"
                    class="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                />
                <div>
                    <h3
                        class="text-xl font-semibold mb-1 text-cyan-400 flex items-center gap-2"
                    >
                        Alan Turing
                    </h3>
                    <p class="text-gray-300 leading-relaxed text-sm">
                        Pioneer of computer science and codebreaking. Persecuted
                        for his identity, his legacy is a symbol of freedom and
                        progress.
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-8 text-center">
            <p class="text-gray-400 text-sm italic">
                "The price of freedom is eternal vigilance." – Thomas Jefferson
            </p>
        </div>
    </section>
</template>
