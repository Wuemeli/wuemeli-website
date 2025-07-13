<template>
<<<<<<< HEAD
  <div class="max-w-4xl px-10 mx-auto space-y-8 text-center">
    <div class="p-4 border border-gray-200 rounded-md">
      <p class="font-semibold">My PGP Key 🔑</p>
      <a href="https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xcf2e26da8d28766be2e0a2975c455988590b6517"
        class="text-blue-500">Download Key</a>
      <br />
      <pre class=" text-left text-white">
        {{ pgpKey }}
        </pre>
    </div>
  </div>
</template>

<script>
//import * as openpgp from 'openpgp';

export default {
  data() {
    return {
      pgpMessage: '',
      validationResult: null,
      pgpKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----
=======
  <div class="min-h-screen bg-dark-gray text-light-gray font-mono">
    <div class="container mx-auto px-6 py-12 pt-24 max-w-4xl">
      <header class="mb-16 animate-fade-in text-center">
        <div class="text-6xl mb-6">🔑</div>
        <h1 class="text-4xl font-bold mb-6 text-light-gray">
          My PGP Public Key
        </h1>
        <p class="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          For secure communication and verification of my identity. Use this key
          to encrypt messages to me or verify signatures on my work.
        </p>
      </header>

      <section class="mb-12 animate-slide-up">
        <h2
          class="text-2xl font-bold mb-6 text-light-gray flex items-center justify-center gap-3"
        >
          <span>💾</span>
          Download Key
        </h2>

        <div class="text-center">
          <button
            @click="downloadKey"
            class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 mb-4"
          >
            🔗 Download PGP Key
          </button>
          <p class="text-gray-400 text-sm">
            Click to download the key file, or copy the key block below
          </p>
        </div>
      </section>

      <section class="mb-16 animate-slide-up">
        <h2
          class="text-2xl font-bold mb-6 text-light-gray flex items-center justify-center gap-3"
        >
          <span>🔐</span>
          Public Key Block
        </h2>

        <div
          class="bg-baltic-sea/50 rounded-lg p-6 border border-dune/30 relative"
        >
          <button
            @click="copyKey"
            class="absolute top-4 right-4 bg-dune/20 hover:bg-dune/40 text-light-gray px-3 py-1 rounded text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-dune/50"
          >
            {{ copied ? "✅ Copied!" : "📋 Copy" }}
          </button>

          <pre
            ref="keyBlock"
            class="text-xs text-gray-300 overflow-x-auto whitespace-pre-wrap break-all leading-relaxed"
          >
-----BEGIN PGP PUBLIC KEY BLOCK-----
>>>>>>> new-website

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
8cqFCKKI
=zcgP
<<<<<<< HEAD
-----END PGP PUBLIC KEY BLOCK-----`,
    };
  },
  //old and doesnt work i just left it here bcs maybe i will use it later
  /*
  methods: {
    async validatePgpMessage() {
      try {
        const { data: decrypted } = await openpgp.decrypt({
          message: await openpgp.message.readArmored(this.pgpMessage),
          publicKeys: (await openpgp.key.readArmored(this.pgpKey)).keys,
        });
        this.validationResult = decrypted.data;
      } catch (error) {
        console.error(error);
        this.validationResult = 'Invalid PGP message';
      }
    },
  },
  */
};

=======
-----END PGP PUBLIC KEY BLOCK-----</pre
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const copied = ref(false);
const keyBlock = ref(null);

const copyKey = async () => {
  if (!keyBlock.value) return;

  try {
    await navigator.clipboard.writeText(keyBlock.value.textContent);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy key:", err);
  }
};

const downloadKey = () => {
  const keyContent = keyBlock.value?.textContent || "";
  const blob = new Blob([keyContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "wuemeli-pgp-public-key.asc";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

useHead({
  title: "PGP Public Key - Wuemeli",
  meta: [
    {
      name: "description",
      content:
        "Wuemeli's PGP public key for secure communication and signature verification. Download or copy the key block for encrypted messaging.",
    },
    {
      name: "keywords",
      content:
        "pgp, public key, encryption, security, wuemeli, gpg, cryptography",
    },
    {
      property: "og:title",
      content: "PGP Public Key - Wuemeli",
    },
    {
      property: "og:description",
      content:
        "PGP public key for secure communication with Wuemeli. Encrypt messages or verify signatures.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
});
>>>>>>> new-website
</script>
