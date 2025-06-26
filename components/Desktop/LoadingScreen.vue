<template>
  <div
    v-if="visible"
    class="terminal-container"
    @keyup.enter="handleEnterKey"
    tabindex="0"
    ref="terminalRef"
  >
    <div class="terminal">
      <div class="terminal-header">
        <div class="terminal-title">WuemeliOS v1.0.4</div>
      </div>
      <div class="terminal-content">
        <div class="line startup-line">
          <span class="prompt">BIOS Version 2.4.1</span>
        </div>
        <div class="line startup-line">
          <span class="prompt">System Boot Sequence Initiated</span>
        </div>
        <div class="line">
          <span class="prompt">boot@wuemeli:~$ </span>
          <span class="command">{{ typedCommand }}</span>
          <span
            v-if="currentLine === 0 && !isLineComplete(0) && !skipAnimation"
            class="cursor"
            >_</span
          >
        </div>
        <div v-for="(line, index) in displayedLines" :key="index" class="line">
          <span class="boot-output">{{ line }}</span>
          <span
            v-if="
              currentLine === index + 1 &&
              !isLineComplete(index + 1) &&
              !skipAnimation
            "
            class="cursor"
            >_</span
          >
        </div>
        <div v-if="showFinalPrompt" class="line blink">
          <span class="prompt">System Ready. Press ENTER to continue...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from 'vue'

const visible = ref(true)
const terminalRef = ref<HTMLElement | null>(null)
const fadeStarted = ref(false)
const skipAnimation = ref(false)

const fullCommand = 'boot --verbose'
const typedCommand = ref('')

const lines = [
  'Initializing kernel...',
  'Loading system modules...',
  'Checking hardware compatibility...',
  'Mounting file systems...',
  'Starting network services...',
  'Preparing workspace environment...',
  'Warning: didn´t receive cookie from you',
  'System initialization complete.',
]

const typedLines = ref<string[]>(Array(lines.length).fill(''))
const currentLine = ref(0)
const showFinalPrompt = ref(false)

const displayedLines = computed(() => {
  if (skipAnimation.value) {
    return lines
  }
  return typedLines.value.filter((_, index) => index < currentLine.value)
})

const isLineComplete = (lineIndex: number) => {
  if (skipAnimation.value) return true

  if (lineIndex === 0) {
    return typedCommand.value === fullCommand
  } else {
    const actualIndex = lineIndex - 1
    return typedLines.value[actualIndex] === lines[actualIndex]
  }
}

const handleEnterKey = () => {
  if (showFinalPrompt.value) {
    startFadeOut()
    return
  }

  skipAnimation.value = true
  typedCommand.value = fullCommand
  showFinalPrompt.value = true
}

const typeText = () => {
  if (skipAnimation.value) return

  if (currentLine.value === 0) {
    if (typedCommand.value.length < fullCommand.length) {
      typedCommand.value += fullCommand.charAt(typedCommand.value.length)
      setTimeout(typeText, 50 + Math.random() * 100)
    } else {
      currentLine.value++
      setTimeout(typeText, 500)
    }
    return
  }

  const lineIndex = currentLine.value - 1
  if (lineIndex < lines.length) {
    if (typedLines.value[lineIndex].length < lines[lineIndex].length) {
      const newLines = [...typedLines.value]
      newLines[lineIndex] = lines[lineIndex].substring(
        0,
        typedLines.value[lineIndex].length + 1,
      )
      typedLines.value = newLines
      setTimeout(typeText, 20 + Math.random() * 20)
    } else {
      currentLine.value++
      if (currentLine.value - 1 >= lines.length) {
        showFinalPrompt.value = true
      } else {
        setTimeout(typeText, 200 + Math.random() * 300)
      }
    }
  }
}

const startFadeOut = () => {
  if (!showFinalPrompt.value || fadeStarted.value) return

  fadeStarted.value = true

  if (terminalRef.value) {
    terminalRef.value.classList.add('fade-out')

    setTimeout(() => {
      visible.value = false
    }, 1000)
  }
}

onMounted(() => {
  if (terminalRef.value) {
    terminalRef.value.focus()
  }
  setTimeout(typeText, 500)
})
</script>

<style scoped>
.terminal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  z-index: 1000;
  transition: opacity 1s ease;
}

.terminal-container.fade-out {
  opacity: 0;
}

.terminal {
  width: 90%;
  max-width: 800px;
  height: 500px;
  background-color: #000;
  overflow: hidden;
  font-family: 'Consolas', 'Courier New', monospace;
}

.terminal-header {
  background-color: #000;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #333;
}

.terminal-title {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

.terminal-content {
  color: #aaa;
  padding: 15px;
  height: calc(100% - 30px);
  overflow-y: auto;
  font-size: 14px;
}

.line {
  margin-bottom: 6px;
  line-height: 1.4;
}

.startup-line {
  color: #888;
  font-size: 12px;
}

.prompt {
  color: #4a8;
  font-weight: bold;
}

.command {
  color: #fff;
}

.boot-output {
  color: #bbb;
}

.cursor {
  animation: blink 1s infinite;
  color: #fff;
  font-weight: bold;
}

.blink {
  animation: blink 1s infinite;
  margin-top: 20px;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>