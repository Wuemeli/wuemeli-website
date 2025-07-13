<template>
<<<<<<< HEAD
  <div class="md:max-xl:flex max-w-4xl px-10 mx-auto space-y-8 text-center animate-fade-up">
    <div class="flex flex-col items-center">
      <span class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-light-gray"><span
          class="type-hello" />, I'm Wuemeli</span>
      <span class="text-1xl sm:text-3xl md:text-4xl lg:text-0xl font-semibold text-light-gray">Full-stack web developer
        from the <img src="/icons/world.gif" alt="World icon" class="w-11 h-11 inline-block" /></span>
      <p class="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-light-gray">
        I pay attention to <span @mouseover="detailshover"
          class="has-tooltip text-pink-500 border-2 border-pink-500 px-2 py-1 rounded">details<span
            class='tooltip rounded shadow-lg p-1 -mt-8'><img src="/img/details.gif" alt="Details GIF"></span></span> and
        I'm
        always eager to <span @mouseover="learnhover" class="has-tooltip text-blue-500 border-2 border-blue-500 px-2 py-1 rounded">learn<span
            class='tooltip rounded shadow-lg p-1 -mt-8'><img src="/img/learn.gif" alt="Learn GIF"></span></span> new
        things.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    detailshover() {
      plausible('Details Hover');
    },
    learnhover() {
      plausible('Learn Hover');
    },
  },
};
</script>
=======
    <div class="min-h-screen bg-dark-gray text-light-gray overflow-x-hidden">
        <canvas
            ref="confettiCanvas"
            class="fixed inset-0 pointer-events-none z-50 w-full h-full"
            :width="canvasWidth"
            :height="canvasHeight"
        ></canvas>
        <div class="container mx-auto px-6 py-12 pt-24 max-w-4xl">
            <header class="mb-16 animate-fade-in">
                <h1 class="text-4xl font-bold mb-6 text-light-gray typewriter">
                    Hey there, I am
                    <span class="brush-name">Wuemeli</span> (he/him),
                </h1>

                <div class="text-lg leading-relaxed">
                    <p class="mb-6">
                        I'm a <AgeStopwatch class="inline" /> year-old
                        self-taught software developer, security researcher, and
                        privacy activist. I love helping others, making cool
                        things, and hating big tech as a full-time hobby. Not
                        only that, but I also like chickens 🐔. (Not to eat
                        them, don't worry :D)
                    </p>
                </div>
            </header>

            <Skills />
            <Projects />
            <Why />
            <Donating />
            <CoolPeople />
            <Contact />

            <section class="mb-16 animate-slide-up text-center">
                <div class="relative overflow-hidden">
                    <div class="relative z-20">
                        <p
                            class="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto"
                        >
                            Well, that's me! If you have questions about my
                            work, don't hesitate to reach out. And please click
                            the Button so my Plausible Instance can track that
                            you read this far. I would be very happy about that!
                            😄
                        </p>
                        <button
                            @click="triggerConfetti"
                            class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        >
                            🎉 Finished Reading!
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
const confettiCanvas = ref(null);
const canvasWidth = ref(800);
const canvasHeight = ref(400);

const triggerConfetti = () => {
    if (!confettiCanvas.value) return;

    const canvas = confettiCanvas.value;
    const ctx = canvas.getContext("2d");
    const confetti = [];

    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 10,
            vy: Math.random() * 3 + 6,
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            size: Math.random() * 6 + 3,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 5,
        });
    }

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach((piece, index) => {
            piece.x += piece.vx;
            piece.y += piece.vy;
            piece.rotation += piece.rotationSpeed;
            piece.vy += 0.1;

            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate((piece.rotation * Math.PI) / 180);
            ctx.fillStyle = piece.color;
            ctx.fillRect(
                -piece.size / 2,
                -piece.size / 2,
                piece.size,
                piece.size,
            );
            ctx.restore();

            if (piece.y > canvas.height + 50) {
                piece.y = -10;
                piece.x = Math.random() * canvas.width;
                piece.vy = Math.random() * 3 + 2;
            }
        });

        requestAnimationFrame(animate);
    };

    animate();
};

const updateCanvasSize = () => {
    if (typeof window !== "undefined") {
        canvasWidth.value = window.innerWidth;
        canvasHeight.value = window.innerHeight;
    }
};

onMounted(() => {
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
});

onUnmounted(() => {
    if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateCanvasSize);
    }
});
</script>
>>>>>>> new-website
