<template>
  <div class="max-w-4xl px-10 mx-auto space-y-8 text-center">
    <div class="p-4 border border-gray-200 rounded-md">
      <p class="font-semibold">My PGP Key 🔑</p>
      <br />
      <pre class="text-left text-white">
        {{ pgpKey }}
      </pre>
    </div>
    <div class="p-4 border border-gray-200 rounded-md mt-8 flex justify-between">
      <div class="w-1/2">
        <p class="font-semibold">Enter a PGP Message:</p>
        <textarea class="w-full p-2 mt-2 border border-gray-300 rounded-md" v-model="pgpMessage"
          placeholder="Enter your PGP message here..."></textarea>
        <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" @click="validatePgpMessage">Validate
          Message</button>
        <p v-if="validationResult !== null" class="mt-2 text-green-600 font-semibold">{{ validationResult }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import openpgp from 'openpgp';

export default {
  data() {
    return {
      pgpMessage: '',
      validationResult: null,
      pgpKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----
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
BjFvFmHguxs=
=jVrC
-----END PGP PUBLIC KEY BLOCK-----`,
    };
  },
  methods: {
    async validatePgpMessage() {
      try {
        const { keys: [publicKey] } = await openpgp.key.readArmored(this.pgpKey);
        const { data: decrypted } = await openpgp.decrypt({
          message: await openpgp.message.readArmored(this.pgpMessage),
          publicKeys: publicKey,
        });
        this.validationResult = decrypted;
      } catch (error) {
        this.validationResult = 'Invalid PGP message';
      }
    },
  },
};