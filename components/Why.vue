<template>
  <section id="why" class="mb-16 animate-slide-up">
    <h2 class="text-3xl font-bold mb-8 text-light-gray flex items-center gap-3">
      <span>🤔</span>
      Why I Care About Privacy & Independence
    </h2>
    <div class="grid gap-8 md:grid-cols-2">
      <div class="bg-baltic-sea/50 rounded-lg p-6 border border-green-500/30">
        <h3
          class="text-xl font-semibold mb-3 text-green-400 flex items-center gap-2"
        >
          <span>🕵️‍♂️</span>
          Why Privacy?
        </h3>
        <p class="text-gray-300 leading-relaxed">
          Privacy is a fundamental human right. Everything we do gets saved in
          some database.
        </p>

        <p class="text-gray-400 text-sm italic">
          "Arguing that you don't care about the right to privacy because you
          have nothing to hide is no different than saying you don't care about
          free speech because you have nothing to say." - Edward Snowden
        </p>
      </div>
      <div class="bg-baltic-sea/50 rounded-lg p-6 border border-red-500/30">
        <h3
          class="text-xl font-semibold mb-3 text-red-400 flex items-center gap-2"
        >
          <span>🏢</span>
          Why I Dislike Big Tech
        </h3>
        <p class="text-gray-300 leading-relaxed">
          Big tech companies have too much power over our lives. They profit
          from our data, shape our opinions, and often put profit before people.
          And they just suck.
        </p>
      </div>
      <div
        class="bg-baltic-sea/50 rounded-lg p-6 border border-blue-500/30 md:col-span-2"
      >
        <h3
          class="text-xl font-semibold mb-3 text-blue-400 flex items-center gap-2"
        >
          <span>🌱</span>
          My Philosophy
        </h3>
        <p class="text-gray-300 leading-relaxed">
          Fuck
          <span
            class="company-hate"
            data-tooltip="Monopolizes retail, exploits workers, and destroys local businesses."
            >Amazon</span
          >,
          <span
            class="company-hate"
            data-tooltip="Profits from addiction and misinformation while harvesting personal data."
            >Meta</span
          >,
          <span
            class="company-hate"
            data-tooltip="Uses dark patterns to manipulate users and harvest data."
            >Microsoft</span
          >,
          <span
            class="company-hate"
            data-tooltip="Overhyped products with terrible build quality and union-busting practices."
            >Tesla</span
          >,
          <span
            class="company-hate"
            data-tooltip="Overpriced streaming with constant price hikes and content removal."
            >Netflix</span
          >,
          <span
            class="company-hate"
            data-tooltip="Predatory subscription model that holds your creative work hostage."
            >Adobe</span
          >,
          <span
            class="company-hate"
            data-tooltip="Enterprise software that's expensive, bloated, and user-hostile."
            >Oracle</span
          >,
          <span
            class="company-hate"
            data-tooltip="Overpriced CRM that nickel-and-dimes customers for basic features."
            >Salesforce</span
          >,
          <span
            class="company-hate"
            data-tooltip="Exploits gig workers while avoiding employment responsibilities."
            >Uber</span
          >,
          <span
            class="company-hate"
            data-tooltip="Destroys local housing markets and enables illegal short-term rentals."
            >Airbnb</span
          >,
          <span
            class="company-hate"
            data-tooltip="Became a cesspool of misinformation and hate under Musk's ownership."
            >Twitter</span
          >,
          <span
            class="company-hate"
            data-tooltip="Chinese spyware disguised as entertainment that rots your brain."
            >TikTok</span
          >,
          <span
            class="company-hate"
            data-tooltip="Professional networking hell that spams you with useless content."
            >LinkedIn</span
          >,
          <span
            class="company-hate"
            data-tooltip="Disappearing messages that encourage poor communication habits."
            >Snapchat</span
          >,
          <span
            class="company-hate"
            data-tooltip="Pays artists pennies while charging users premium for basic features."
            >Spotify</span
          >,
          <span
            class="company-hate"
            data-tooltip="Security theater with terrible UX that pretends to be professional software."
            >Zoom</span
          >
          and ofc
          <span
            class="company-hate"
            data-tooltip="The ultimate privacy-violating data harvester that knows everything about you."
            >Google</span
          >.
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.company-hate {
  position: relative;
  cursor: pointer;
  color: var(--color-red-400);
  text-decoration: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgb(from var(--color-red-400) r g b / 0.5);
  transition: all 0.2s;
}

.company-hate:hover {
  text-decoration-color: var(--color-red-400);
  color: var(--color-red-300);
}

.company-hate:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  left: 0;
  bottom: 120%;
  background: #222;
  color: #fff;
  padding: 0.5em 0.8em;
  border-radius: 6px;
  white-space: pre-line;
  font-size: 0.95em;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  opacity: 1;
  pointer-events: none;
  width: max-content;
  max-width: 260px;
}

.company-hate::after {
  content: "";
  opacity: 0;
  transition: opacity 0.15s;
}
</style>
