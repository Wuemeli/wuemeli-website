<template>
  <div
    class="terminal-container bg-gray-900 text-green-500 p-4 h-full font-mono text-sm overflow-auto"
  >
    <div class="terminal-output">
      <div class="welcome mb-2">
        <p>Welcome to wuemeli Terminal v1.0.0</p>
        <p>Type 'help' to see available commands</p>
      </div>
      <div
        v-for="(line, index) in outputHistory"
        :key="index"
        class="output-line mb-1"
        v-html="line"
      ></div>
    </div>
    <div class="terminal-input-line flex items-center">
      <span class="prompt mr-2">guest@wuemeli:{{ currentPath }}$</span>
      <input
        ref="commandInput"
        v-model="currentCommand"
        @keydown.enter="executeCommand"
        class="terminal-input bg-transparent focus:outline-none flex-grow"
        type="text"
        autocomplete="off"
        spellcheck="false"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Terminal',
  data() {
    return {
      outputHistory: [],
      currentCommand: '',
      currentPath: '~',
      fileSystem: null,
      commandHistory: [],
      historyIndex: -1,
    }
  },
  mounted() {
    this.$refs.commandInput.focus()
    this.initializeFileSystem()

    this.$refs.commandInput.addEventListener('keydown', this.handleKeyDown)
  },
  beforeUnmount() {
    this.$refs.commandInput.removeEventListener('keydown', this.handleKeyDown)
  },
  methods: {
    initializeFileSystem() {
      const savedFs = localStorage.getItem('terminalFs')
      if (savedFs) {
        this.fileSystem = JSON.parse(savedFs)
      } else {
        this.fileSystem = {
          '~': {
            type: 'directory',
            contents: {
              Documents: {
                type: 'directory',
                contents: {},
              },
              'welcome.txt': {
                type: 'file',
                content:
                  'Welcome to wuemeli terminal! This is a basic text file.',
              },
            },
          },
        }
        this.saveFileSystem()
      }
    },

    saveFileSystem() {
      localStorage.setItem('terminalFs', JSON.stringify(this.fileSystem))
    },

    executeCommand() {
      if (!this.currentCommand.trim()) {
        this.addToOutput(`guest@wuemeli:${this.currentPath}$ `)
        return
      }

      this.addToOutput(
        `guest@wuemeli:${this.currentPath}$ ${this.currentCommand}`,
      )

      this.commandHistory.push(this.currentCommand)
      this.historyIndex = this.commandHistory.length

      const parts = this.currentCommand.trim().split(' ')
      const command = parts[0].toLowerCase()
      const args = parts.slice(1)

      switch (command) {
        case 'help':
          this.showHelp()
          break
        case 'ls':
          this.listDirectory()
          break
        case 'mkdir':
          this.makeDirectory(args[0])
          break
        case 'cd':
          this.changeDirectory(args[0] || '~')
          break
        case 'cat':
          this.catFile(args[0])
          break
        case 'touch':
          this.touchFile(args[0])
          break
        case 'echo':
          if (args.length >= 2 && args.includes('>')) {
            const redirectIndex = args.indexOf('>')
            const content = args.slice(0, redirectIndex).join(' ')
            const fileName = args[redirectIndex + 1]
            this.writeToFile(fileName, content)
          } else {
            this.addToOutput(args.join(' '))
          }
          break
        case 'rm':
          this.removeFile(args[0])
          break
        case 'clear':
          this.outputHistory = []
          break
        case 'ping':
          this.pingCommand(args[0])
          break
        case 'pwd':
          this.addToOutput(this.currentPath)
          break
        default:
          this.addToOutput(`Command not found: ${command}`)
      }

      this.currentCommand = ''
      this.$nextTick(() => {
        this.$refs.commandInput.focus()
      })
    },

    showHelp() {
      this.addToOutput(`
        <div class="help-content">
          <p class="text-yellow-400 font-bold">Available Commands:</p>
          <ul class="ml-4">
            <li><span class="text-blue-400">help</span> - Show this help message</li>
            <li><span class="text-blue-400">ls</span> - List directory contents</li>
            <li><span class="text-blue-400">mkdir [name]</span> - Create a new directory</li>
            <li><span class="text-blue-400">cd [path]</span> - Change current directory</li>
            <li><span class="text-blue-400">cat [file]</span> - Display file contents</li>
            <li><span class="text-blue-400">touch [file]</span> - Create a new empty file</li>
            <li><span class="text-blue-400">echo [text] > [file]</span> - Write text to file</li>
            <li><span class="text-blue-400">rm [file/dir]</span> - Remove a file or directory</li>
            <li><span class="text-blue-400">clear</span> - Clear the terminal screen</li>
            <li><span class="text-blue-400">ping [url]</span> - Ping a website</li>
            <li><span class="text-blue-400">pwd</span> - Print current directory path</li>
          </ul>
        </div>
      `)
    },

    listDirectory() {
      const currentDir = this.getDirectoryFromPath(this.currentPath)
      if (!currentDir) {
        this.addToOutput('Error: Current directory not found')
        return
      }

      const contents = currentDir.contents
      if (Object.keys(contents).length === 0) {
        this.addToOutput('<em>Directory is empty</em>')
        return
      }

      let output = ''
      for (const name in contents) {
        const item = contents[name]
        if (item.type === 'directory') {
          output += `<span class="text-blue-400">${name}/</span>  `
        } else {
          output += `<span class="text-white">${name}</span>  `
        }
      }

      this.addToOutput(output)
    },

    makeDirectory(dirName) {
      if (!dirName) {
        this.addToOutput('Error: Directory name required')
        return
      }

      const currentDir = this.getDirectoryFromPath(this.currentPath)
      if (!currentDir) {
        this.addToOutput('Error: Current directory not found')
        return
      }

      if (currentDir.contents[dirName]) {
        this.addToOutput(`Error: '${dirName}' already exists`)
        return
      }

      currentDir.contents[dirName] = {
        type: 'directory',
        contents: {},
      }

      this.saveFileSystem()
      this.addToOutput(`Directory '${dirName}' created`)
    },

    changeDirectory(path) {
      if (path === '~') {
        this.currentPath = '~'
        return
      }

      if (path === '..') {
        if (this.currentPath === '~') return

        const parts = this.currentPath.split('/')
        parts.pop()
        this.currentPath = parts.join('/') || '~'
        return
      }

      let targetPath = path
      if (!path.startsWith('~')) {
        targetPath =
          this.currentPath === '~' ? `~/${path}` : `${this.currentPath}/${path}`
      }

      const dir = this.getDirectoryFromPath(targetPath)
      if (!dir || dir.type !== 'directory') {
        this.addToOutput(`Error: '${path}' is not a directory`)
        return
      }

      this.currentPath = targetPath
    },

    catFile(fileName) {
      if (!fileName) {
        this.addToOutput('Error: File name required')
        return
      }

      const currentDir = this.getDirectoryFromPath(this.currentPath)
      if (!currentDir) {
        this.addToOutput('Error: Current directory not found')
        return
      }

      if (!currentDir.contents[fileName]) {
        this.addToOutput(`Error: File '${fileName}' not found`)
        return
      }

      const file = currentDir.contents[fileName]
      if (file.type !== 'file') {
        this.addToOutput(`Error: '${fileName}' is not a file`)
        return
      }

      this.addToOutput(file.content)
    },

    touchFile(fileName) {
      if (!fileName) {
        this.addToOutput('Error: File name required')
        return
      }

      const currentDir = this.getDirectoryFromPath(this.currentPath)
      if (!currentDir) {
        this.addToOutput('Error: Current directory not found')
        return
      }

      if (currentDir.contents[fileName]) {
        this.addToOutput(`File '${fileName}' already exists`)
        return
      }

      currentDir.contents[fileName] = {
        type: 'file',
        content: '',
      }

      this.saveFileSystem()
      this.addToOutput(`File '${fileName}' created`)
    },

    writeToFile(fileName, content) {
      if (!fileName) {
        this.addToOutput('Error: File name required')
        return
      }

      const currentDir = this.getDirectoryFromPath(this.currentPath)
      if (!currentDir) {
        this.addToOutput('Error: Current directory not found')
        return
      }

      if (!currentDir.contents[fileName]) {
        currentDir.contents[fileName] = {
          type: 'file',
          content: '',
        }
      }

      const file = currentDir.contents[fileName]
      if (file.type !== 'file') {
        this.addToOutput(`Error: '${fileName}' is not a file`)
        return
      }

      file.content = content
      this.saveFileSystem()
    },

    removeFile(path) {
      if (!path) {
        this.addToOutput('Error: Path required')
        return
      }

      const currentDir = this.getDirectoryFromPath(this.currentPath)
      if (!currentDir) {
        this.addToOutput('Error: Current directory not found')
        return
      }

      if (!currentDir.contents[path]) {
        this.addToOutput(`Error: '${path}' not found`)
        return
      }

      delete currentDir.contents[path]
      this.saveFileSystem()
      this.addToOutput(`'${path}' removed`)
    },

    async ping(url) {
      const start = performance.now()
      try {
        await fetch(url, {
          method: 'HEAD',
          mode: 'no-cors',
        })
        const end = performance.now()
        return Math.round(end - start)
      } catch (error) {
        return null
      }
    },

    async pingCommand(url) {
      if (!url) {
        this.addToOutput('Error: URL required')
        return
      }

      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url
      }

      this.addToOutput(`Pinging ${url}...`)

      try {
        const results = []
        for (let i = 0; i < 4; i++) {
          const pingTime = await this.ping(url)
          if (pingTime === null) {
            this.addToOutput(`Request to ${url} failed`)
            return
          }
          results.push(pingTime)
          this.addToOutput(`Reply from ${url}: time=${pingTime}ms`)

          if (i < 3) {
            await new Promise((resolve) => setTimeout(resolve, 500))
          }
        }

        const min = Math.min(...results)
        const max = Math.max(...results)
        const avg = Math.round(
          results.reduce((a, b) => a + b, 0) / results.length,
        )

        this.addToOutput(`Ping statistics for ${url}:`)
        this.addToOutput(
          '    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),',
        )
        this.addToOutput('Approximate round trip times in milli-seconds:')
        this.addToOutput(
          `    Minimum = ${min}ms, Maximum = ${max}ms, Average = ${avg}ms`,
        )
      } catch (error) {
        this.addToOutput(`Error pinging ${url}: ${error.message}`)
      }
    },

    getDirectoryFromPath(path) {
      if (path === '~') return this.fileSystem['~']

      const parts = path.split('/')
      let current = this.fileSystem

      for (const part of parts) {
        if (part === '~') {
          current = this.fileSystem['~']
        } else if (current && current.contents && current.contents[part]) {
          current = current.contents[part]
        } else {
          return null
        }
      }

      return current
    },

    addToOutput(text) {
      this.outputHistory.push(text)
      this.$nextTick(() => {
        const container = this.$el.querySelector('.terminal-container')
        container.scrollTop = container.scrollHeight
      })
    },

    handleKeyDown(e) {
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (this.historyIndex > 0) {
          this.historyIndex--
          this.currentCommand = this.commandHistory[this.historyIndex]
        }
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (this.historyIndex < this.commandHistory.length - 1) {
          this.historyIndex++
          this.currentCommand = this.commandHistory[this.historyIndex]
        } else if (this.historyIndex === this.commandHistory.length - 1) {
          this.historyIndex = this.commandHistory.length
          this.currentCommand = ''
        }
      }
    },
  },
}
</script>

<style scoped>
.terminal-container {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  font-family: 'Courier New', monospace;
}

.terminal-input {
  caret-color: green;
  color: white;
  background-color: transparent;
  border: none;
  width: 100%;
}

.terminal-input:focus {
  outline: none;
}
</style>
