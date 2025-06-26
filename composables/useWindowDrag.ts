export const useWindowDrag = () => {
  const createWindowState = () => {
    const windowPosition = ref({ x: 0, y: 0 })
    const isDragging = ref(false)

    const centerWindow = () => {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      const windowWidth = 800
      const windowHeight = 600

      windowPosition.value = {
        x: Math.max(0, (viewportWidth - windowWidth) / 2),
        y: Math.max(0, (viewportHeight - windowHeight) / 2)
      }
    }

    return {
      windowPosition,
      isDragging,
      centerWindow
    }
  }

  return {
    createWindowState
  }
}