<template>
  <div class="pl-10">
    <span class="text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-light-gray">
      {{ title }}
    </span>
    <span class="text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-light-gray">
      {{ displayText.join("") }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    speed: {
      type: Number,
      default: 155
    },
    deleteSpeed: {
      type: Number,
      default: 200
    },
    words: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      displayText: [],
      currentWord: "",
      wordIdx: 0,
    };
  },
  computed: {
    TYPE_SPEED() { return this.speed },
    DELETE_SPEED() { return this.deleteSpeed },
    timeoutSpeed() { return this.TYPE_SPEED * 1 },
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      if (this.words && this.words.length > 0) {
        this.currentWord = this.words[this.wordIdx].split("");
        this.wordIdx++;
        this.animate = setTimeout(this.type, this.timeoutSpeed);
      }
    },
    type(word) {
      if (this.currentWord.length > 0) {
        this.displayText.push(this.currentWord.shift());
      } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
        this.timeoutSpeed = this.DELETE_SPEED;
        this.displayText.pop();
      } else if (
        this.currentWord.length === 0 &&
        this.displayText.length === 0
      ) {
        if (this.wordIdx < this.words.length) {
          this.currentWord = this.words[this.wordIdx].split("");
          this.wordIdx++;
          this.timeoutSpeed = this.TYPE_SPEED;
          this.displayText.push(this.currentWord.shift());
        } else {
          this.wordIdx = 0;
          this.currentWord = this.words[this.wordIdx].split("");
          this.displayText.push(this.currentWord.shift());
        }
      }
      setTimeout(this.type, this.timeoutSpeed);
    }
  }
}
</script>