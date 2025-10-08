<template>
  <section id="skills" class="mb-16 animate-slide-up">
    <h2 class="text-3xl font-bold mb-8 text-light-gray flex items-center gap-3">
      The Arsenal I Wield
    </h2>
    <div class="text-center mb-8">
      <p class="text-gray-300 italic">
        "He who knows how to employ both will have the upper hand." - Sun Tzu
      </p>
    </div>
    <div class="max-w-4xl mx-auto">
      <p class="text-gray-300 text-lg leading-relaxed mb-8">
        First and foremost, I hate designing frontends. I'm more of the logic
        guy that would write a web scraper to find the best mansions. I love
        collaboration, open source, and sharing knowledge with others.
      </p>

      <div class="mb-10">
        <h3
          class="text-2xl font-bold mb-4 text-green-300 flex items-center gap-2"
        >
          Backend Development
        </h3>
        <p class="text-gray-300 text-lg leading-relaxed">
          I enjoy building robust backend systems with
          <Skill name="Node.js" icon="/icons/nodejs.svg" color="green" />,
          <Skill name="Deno" icon="/icons/deno.svg" color="black" />,
          <Skill name="Hono" emoji="🔥" color="orange" />,
          <Skill name="Typescript" icon="/icons/typescript.svg" color="blue" />,
          <Skill name="Postgres" icon="/icons/postgresql.svg" color="blue" />,
          <Skill name="Drizzle" emoji="💧" color="purple" />,
          <Skill name="Bun" icon="/icons/bun.svg" color="orange" />,
          <Skill name="Python" icon="/icons/python.svg" color="yellow" />, and
          <Skill name="MongoDB" icon="/icons/mongodb.svg" color="green" />.
        </p>
      </div>

      <div class="mb-10">
        <h3
          class="text-2xl font-bold mb-4 text-purple-300 flex items-center gap-2"
        >
          DevOps & Infrastructure
        </h3>
        <p class="text-gray-300 text-lg leading-relaxed">
          I work with modern DevOps tools and practices including
          <Skill name="Docker" icon="/icons/docker.svg" color="blue" />,
          <Skill
            name="Kubernetes"
            icon="/icons/kubernetes.svg"
            color="purple"
          />,
          <Skill
            name="Cloudflare Workers"
            icon="/icons/workers.svg"
            color="yellow"
          />, <Skill name="bunny.net" icon="/icons/bunny.svg" color="orange" />,
          <Skill name="Hetzner" icon="/icons/hetzner.jpeg" color="red" />,
          <Skill name="Git" icon="/icons/git.svg" color="gray" />, and
          <Skill name="NixOS" icon="/icons/nixos.svg" color="blue" />.
        </p>
      </div>

      <div class="mb-10">
        <h3
          class="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2"
        >
          Frontend Development
        </h3>
        <p class="text-gray-300 text-lg leading-relaxed">
          While I prefer backend work, I can handle frontend development with
          <Skill name="HTML" icon="/icons/html.svg" color="red" />,
          <Skill name="CSS" icon="/icons/css.svg" color="blue" />,
          <Skill name="Tailwind" icon="/icons/tailwind.svg" color="cyan" />,
          <Skill name="JavaScript" icon="/icons/js.svg" color="yellow" />
          and
          <Skill name="Nuxt" icon="/icons/nuxt.svg" color="green" />.
        </p>
      </div>

      <div class="mb-10">
        <h3
          class="text-2xl font-bold mb-4 text-red-300 flex items-center gap-2"
        >
          Penetration Testing & Security
        </h3>
        <p class="text-gray-300 text-lg leading-relaxed">
          I also enjoy breaching and tinkering with my own systems and with
          those of my cool friends. I use these tools:
          <Skill name="BurpSuite" icon="/icons/burp.jpg" color="green" />,
          <Skill name="Shodan" icon="/icons/shodan.png" color="blue" />,
          <Skill name="Nmap" icon="/icons/nmap.svg" color="red" />,
          <Skill name="Sqlmap" icon="/icons/sqlmap.png" color="yellow" />,
          <Skill name="Wireshark" icon="/icons/wireshark.svg" color="purple" />,
          <Skill name="Metasploit" icon="/icons/metasploit.svg" color="red" />
          and some cool totally self-written Python script.
        </p>
      </div>

      <p class="text-gray-300 text-lg leading-relaxed">
        When I'm not coding, you might find me tinkering with
        <Skill
          name="Arch Linux w/ Hyprland"
          icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          color="cyan"
        />
        setups, automating workflows, or modding games like Counter-Strike and
        Minecraft. I even created
        <a
          href="https://modrinth.com/mod/wuemelis-utils"
          target="_blank"
          class="inline-flex items-center gap-1 underline text-purple-200 hover:text-purple-100 font-semibold"
        >
          Wuemeli's Utils
        </a>
        to make the Minecraft experience even better. I also host various
        <Skill name="Monero" icon="/icons/monero.svg" color="green" />
        nodes and run a
        <Skill name="Tor" icon="/icons/tor.svg" color="orange" /> relay.
        <br /><br />
        I use the
        <Skill name="Zed" icon="/icons/zed.svg" color="blue" /> code editor to
        write code.
      </p>
      <p class="text-gray-300 text-lg leading-relaxed">
        I also own and operate my own
        <a
          href="https://bgp.tools/as/211876"
          target="_blank"
          class="inline-flex items-center gap-1 underline text-purple-200 hover:text-purple-100 font-semibold"
        >
          ASN
        </a>
        with a global anycasted cdn and a private network. Feel free to hit me
        up when you want to peer with me.
      </p>
    </div>
  </section>
</template>
