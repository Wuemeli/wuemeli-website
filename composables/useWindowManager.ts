export const useWindowManager = () => {
  const calculateCenteredPosition = () => {
    if (typeof window === 'undefined') {
      return { x: 0, y: 0 }
    }

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const windowWidth = 800
    const windowHeight = 600

    return {
      x: Math.max(0, (viewportWidth - windowWidth) / 2),
      y: Math.max(0, (viewportHeight - windowHeight) / 2)
    }
  }

  const generateStaggeredPosition = (index: any) => {
    const basePosition = calculateCenteredPosition()
    return {
      x: basePosition.x + (index * 30),
      y: basePosition.y + (index * 30)
    }
  }

  return {
    calculateCenteredPosition,
    generateStaggeredPosition
  }
}