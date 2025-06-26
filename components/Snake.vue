<template>
  <div class="snake-game-container h-full w-full flex flex-col">
    <div class="game-area flex-1">
      <canvas ref="gameCanvas" class="w-full h-full"></canvas>
    </div>
    <div class="game-controls p-3 text-white text-sm">
      <p>Controls: Arrow keys to move</p>
      <button
        @click="resetGame"
        class="mt-2 px-3 py-1 bg-purple-600 rounded hover:bg-purple-700 transition"
      >
        Reset Game
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnakeGame',
  data() {
    return {
      canvas: null,
      ctx: null,
      snake: [],
      food: null,
      direction: 'right',
      gameInterval: null,
      gameSpeed: 100,
      gridSize: 20,
      gameOver: false,
      foodEscapeDistance: 1,
    }
  },
  mounted() {
    this.initGame()
    window.addEventListener('keydown', this.handleKeyDown)
  },
  beforeUnmount() {
    clearInterval(this.gameInterval)
    window.removeEventListener('keydown', this.handleKeyDown)
  },
  methods: {
    initGame() {
      this.canvas = this.$refs.gameCanvas
      this.ctx = this.canvas.getContext('2d')

      this.resizeCanvas()
      window.addEventListener('resize', this.resizeCanvas)

      this.resetGame()
    },

    resizeCanvas() {
      const container = this.canvas.parentElement
      this.canvas.width = container.clientWidth
      this.canvas.height = container.clientHeight
      this.drawGame()
    },

    resetGame() {
      clearInterval(this.gameInterval)

      this.snake = [
        { x: 5, y: 5 },
        { x: 4, y: 5 },
        { x: 3, y: 5 },
      ]

      this.direction = 'right'
      this.gameOver = false
      this.generateFood()

      this.gameInterval = setInterval(this.gameLoop, this.gameSpeed)
    },

    generateFood() {
      const maxX = Math.floor(this.canvas.width / this.gridSize) - 1
      const maxY = Math.floor(this.canvas.height / this.gridSize) - 1

      let foodX = Math.floor(Math.random() * maxX)
      let foodY = Math.floor(Math.random() * maxY)

      // Make sure food is not on snake
      const isOnSnake = this.snake.some(
        (segment) => segment.x === foodX && segment.y === foodY,
      )

      if (isOnSnake) {
        this.generateFood()
      } else {
        this.food = { x: foodX, y: foodY }
      }
    },

    gameLoop() {
      if (this.gameOver) return

      this.moveSnake()
      this.checkCollision()
      this.drawGame()
    },

    moveSnake() {
      const head = { ...this.snake[0] }

      switch (this.direction) {
        case 'up':
          head.y--
          break
        case 'down':
          head.y++
          break
        case 'left':
          head.x--
          break
        case 'right':
          head.x++
          break
      }

      this.snake.unshift(head)

      if (head.x === this.food.x && head.y === this.food.y) {
        this.generateFood()
      } else {
        const distanceToFood = Math.abs(head.x - this.food.x) + Math.abs(head.y - this.food.y)
        if (distanceToFood <= this.foodEscapeDistance) {
          this.moveFood()
        }

        this.snake.pop()
      }
    },

    moveFood() {
      const head = this.snake[0]
      const maxX = Math.floor(this.canvas.width / this.gridSize) - 1
      const maxY = Math.floor(this.canvas.height / this.gridSize) - 1

      let possibleMoves = []

      const directions = [
        { dx: 0, dy: -1 }, // up
        { dx: 0, dy: 1 },  // down
        { dx: -1, dy: 0 }, // left
        { dx: 1, dy: 0 }   // right
      ]

      for (const dir of directions) {
        const newX = this.food.x + dir.dx
        const newY = this.food.y + dir.dy

        if (
          newX >= 0 &&
          newX <= maxX &&
          newY >= 0 &&
          newY <= maxY &&
          !this.snake.some(segment => segment.x === newX && segment.y === newY)
        ) {
          //Manhattan distance idk why the fuck this shit exists.
          const distanceFromHead = Math.abs(head.x - newX) + Math.abs(head.y - newY)

          possibleMoves.push({ x: newX, y: newY, distance: distanceFromHead })
        }
      }

      if (possibleMoves.length > 0) {
        possibleMoves.sort((a, b) => b.distance - a.distance)

        this.food.x = possibleMoves[0].x
        this.food.y = possibleMoves[0].y
      }
    },

    checkCollision() {
      const head = this.snake[0]
      const maxX = Math.floor(this.canvas.width / this.gridSize) - 1
      const maxY = Math.floor(this.canvas.height / this.gridSize) - 1

      if (head.x < 0 || head.x > maxX || head.y < 0 || head.y > maxY) {
        this.gameOver = true
      }

      for (let i = 1; i < this.snake.length; i++) {
        if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
          this.gameOver = true
          break
        }
      }

      if (this.gameOver) {
        clearInterval(this.gameInterval)
      }
    },

    drawGame() {
      if (!this.ctx) return

      this.ctx.fillStyle = 'black'
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)


      this.ctx.fillStyle = 'lime'
      this.snake.forEach((segment) => {
        this.ctx.fillRect(
          segment.x * this.gridSize,
          segment.y * this.gridSize,
          this.gridSize,
          this.gridSize,
        )
      })

      if (this.food) {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(
          this.food.x * this.gridSize,
          this.food.y * this.gridSize,
          this.gridSize,
          this.gridSize,
        )
      }

      if (this.gameOver) {
        this.ctx.fillStyle = 'white'
        this.ctx.font = '30px Arial'
        this.ctx.textAlign = 'center'
        this.ctx.fillText(
          'Game Over',
          this.canvas.width / 2,
          this.canvas.height / 2,
        )
      }
    },

    handleKeyDown(e) {
      if ([37, 38, 39, 40].includes(e.keyCode)) {
        e.preventDefault()
      }

      switch (e.keyCode) {
        case 38:
          if (this.direction !== 'down') this.direction = 'up'
          break
        case 40:
          if (this.direction !== 'up') this.direction = 'down'
          break
        case 37:
          if (this.direction !== 'right') this.direction = 'left'
          break
        case 39:
          if (this.direction !== 'left') this.direction = 'right'
          break
      }
    },
  },
}
</script>