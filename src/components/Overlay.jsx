import { useEffect, useRef } from 'react'

export default function Overlay({ theme }) {
  const noiseRef = useRef(null)

  // Generate noise texture
  useEffect(() => {
    const canvas = noiseRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const w = 256
    const h = 256
    canvas.width = w
    canvas.height = h

    const imageData = ctx.createImageData(w, h)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255
      data[i] = v
      data[i + 1] = v
      data[i + 2] = v
      data[i + 3] = 15 // Very subtle
    }
    ctx.putImageData(imageData, 0, 0)

    // Re-generate periodically for animated noise
    const interval = setInterval(() => {
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255
        data[i] = v
        data[i + 1] = v
        data[i + 2] = v
        data[i + 3] = 12
      }
      ctx.putImageData(imageData, 0, 0)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Scanlines */}
      <div className="overlay-scanlines" />

      {/* Noise/grain */}
      <canvas
        ref={noiseRef}
        className="overlay-noise"
      />

      {/* Vignette */}
      <div className="overlay-vignette" />

      {/* Glitch line (CSS animated) */}
      <div className="overlay-glitch-line" />
    </>
  )
}
