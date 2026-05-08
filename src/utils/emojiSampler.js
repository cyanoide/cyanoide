/**
 * Sample 2D positions from pixel data on a canvas.
 * Returns an array of { x, y } normalized to [-1, 1] range.
 */
function sampleCanvas(ctx, canvasSize, count) {
  const imageData = ctx.getImageData(0, 0, canvasSize, canvasSize)
  const pixels = imageData.data

  const filled = []
  for (let y = 0; y < canvasSize; y++) {
    for (let x = 0; x < canvasSize; x++) {
      const idx = (y * canvasSize + x) * 4
      if (pixels[idx + 3] > 50) {
        filled.push({
          x: (x / canvasSize) * 2 - 1,
          y: -((y / canvasSize) * 2 - 1),
        })
      }
    }
  }

  if (filled.length === 0) {
    // Fallback circle
    const positions = []
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const r = Math.sqrt(Math.random()) * 0.8
      positions.push({ x: Math.cos(angle) * r, y: Math.sin(angle) * r })
    }
    return positions
  }

  const positions = []
  for (let i = 0; i < count; i++) {
    const src = filled[Math.floor(Math.random() * filled.length)]
    positions.push({
      x: src.x + (Math.random() - 0.5) * 0.0015,
      y: src.y + (Math.random() - 0.5) * 0.0015,
    })
  }
  return positions
}

/**
 * Sample positions from an emoji character.
 */
export function sampleEmoji(emoji, count = 7000, canvasSize = 256) {
  const canvas = document.createElement('canvas')
  canvas.width = canvasSize
  canvas.height = canvasSize
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  ctx.clearRect(0, 0, canvasSize, canvasSize)

  const fontSize = canvasSize * 0.8
  ctx.font = `${fontSize}px serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(emoji, canvasSize / 2, canvasSize / 2)

  return sampleCanvas(ctx, canvasSize, count)
}

/**
 * Sample positions from an SVG file path.
 * Returns a promise that resolves to an array of { x, y }.
 */
export function sampleSVG(svgUrl, count = 7000, canvasSize = 384) {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = canvasSize
      canvas.height = canvasSize
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      ctx.clearRect(0, 0, canvasSize, canvasSize)

      // Draw SVG centered and fitting the canvas with padding
      const padding = canvasSize * 0.1
      const drawSize = canvasSize - padding * 2
      const scale = Math.min(drawSize / img.naturalWidth, drawSize / img.naturalHeight)
      const w = img.naturalWidth * scale
      const h = img.naturalHeight * scale
      const ox = (canvasSize - w) / 2
      const oy = (canvasSize - h) / 2
      ctx.drawImage(img, ox, oy, w, h)

      resolve(sampleCanvas(ctx, canvasSize, count))
    }
    img.onerror = () => {
      // SVG not found, return null so caller falls back to emoji
      resolve(null)
    }
    img.src = svgUrl
  })
}
