import { useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { sampleEmoji, sampleSVG } from '../utils/emojiSampler'

const PARTICLE_COUNT = 7000
const SPRING = 0.012
const DAMPING = 0.94
const MOUSE_RADIUS = 0.4
const MOUSE_FORCE = 0.06
const DEPTH_RANGE = 0.06
const WANDER_STRENGTH = 0.00025
const WANDER_SPEED = 0.4

// Custom shaders — pixel-dot particles
const vertexShader = `
  attribute float aAlpha;
  uniform float uPixelRatio;
  varying float vAlpha;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 4.0 * uPixelRatio * (1.0 / -mvPosition.z);
    gl_PointSize = clamp(gl_PointSize, 1.0, 4.0);
    gl_Position = projectionMatrix * mvPosition;
    vAlpha = aAlpha;
  }
`

const fragmentShader = `
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    gl_FragColor = vec4(uColor, vAlpha * 0.9);
  }
`

export default function ParticleCloud({ siteId, emoji, svgFile, theme, onReady }) {
  const containerRef = useRef(null)
  const stateRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    points: null,
    material: null,
    positions: null,
    targets: null,
    velocities: null,
    alphas: null,
    wanderPhase: null,
    mouse: { x: 99, y: 99 },
    animFrame: null,
    initialized: false,
  })

  const prevSiteIdRef = useRef(null)

  const initScene = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const state = stateRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    state.scene = new THREE.Scene()

    state.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    state.camera.position.z = 2.5

    state.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
    state.renderer.setSize(width, height)
    state.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    state.renderer.setClearColor(0x000000, 0)
    container.appendChild(state.renderer.domElement)

    const geometry = new THREE.BufferGeometry()
    state.positions = new Float32Array(PARTICLE_COUNT * 3)
    state.alphas = new Float32Array(PARTICLE_COUNT)
    state.targets = new Float32Array(PARTICLE_COUNT * 3)
    state.velocities = new Float32Array(PARTICLE_COUNT * 3)
    state.wanderPhase = new Float32Array(PARTICLE_COUNT * 2)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2
      const r = 0.5 + Math.random() * 2
      state.positions[i * 3] = Math.cos(angle) * r
      state.positions[i * 3 + 1] = Math.sin(angle) * r
      state.positions[i * 3 + 2] = (Math.random() - 0.5) * DEPTH_RANGE

      state.alphas[i] = 0.35 + Math.random() * 0.65
      state.wanderPhase[i * 2] = Math.random() * Math.PI * 2
      state.wanderPhase[i * 2 + 1] = Math.random() * Math.PI * 2
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(state.positions, 3))
    geometry.setAttribute('aAlpha', new THREE.BufferAttribute(state.alphas, 1))

    state.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uColor: { value: new THREE.Color('#0000FF') },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    state.points = new THREE.Points(geometry, state.material)
    state.scene.add(state.points)
    state.initialized = true

    if (onReady) onReady()
  }, [onReady])

  // Apply sampled positions to targets
  const applyTargets = useCallback((sampled, burst) => {
    const state = stateRef.current
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const s = sampled[i] || sampled[i % sampled.length]
      const i3 = i * 3
      state.targets[i3] = s.x * 0.9
      state.targets[i3 + 1] = s.y * 0.9
      state.targets[i3 + 2] = (Math.random() - 0.5) * DEPTH_RANGE

      if (burst) {
        const angle = Math.random() * Math.PI * 2
        const force = 0.015 + Math.random() * 0.04
        state.velocities[i3] += Math.cos(angle) * force
        state.velocities[i3 + 1] += Math.sin(angle) * force
        state.velocities[i3 + 2] += (Math.random() - 0.5) * 0.015
      }
    }
  }, [])

  // Try SVG file first, fall back to emoji
  const updateTargets = useCallback(async (svgFilename, emojiChar, burst = false) => {
    const state = stateRef.current
    if (!state.initialized) return

    if (svgFilename) {
      const svgSampled = await sampleSVG(`./svg/${svgFilename}`, PARTICLE_COUNT)
      if (svgSampled) {
        applyTargets(svgSampled, burst)
        return
      }
    }
    applyTargets(sampleEmoji(emojiChar, PARTICLE_COUNT), burst)
  }, [applyTargets])

  // Animation loop with organic wander
  const animate = useCallback(() => {
    const state = stateRef.current
    if (!state.initialized) return

    state.animFrame = requestAnimationFrame(animate)

    const time = performance.now() * 0.001
    const pos = state.positions
    const tgt = state.targets
    const vel = state.velocities
    const wp = state.wanderPhase
    const mx = state.mouse.x
    const my = state.mouse.y

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      const i2 = i * 2
      const px = pos[i3]
      const py = pos[i3 + 1]
      const pz = pos[i3 + 2]

      const wanderX = Math.sin(time * WANDER_SPEED + wp[i2]) * WANDER_STRENGTH
      const wanderY = Math.cos(time * WANDER_SPEED * 0.8 + wp[i2 + 1]) * WANDER_STRENGTH

      vel[i3] += (tgt[i3] - px) * SPRING + wanderX
      vel[i3 + 1] += (tgt[i3 + 1] - py) * SPRING + wanderY
      vel[i3 + 2] += (tgt[i3 + 2] - pz) * SPRING * 0.3

      const dx = px - mx
      const dy = py - my
      const distSq = dx * dx + dy * dy
      if (distSq < MOUSE_RADIUS * MOUSE_RADIUS && distSq > 0.0001) {
        const dist = Math.sqrt(distSq)
        const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE
        const invDist = 1 / dist
        vel[i3] += dx * invDist * force
        vel[i3 + 1] += dy * invDist * force
      }

      vel[i3] *= DAMPING
      vel[i3 + 1] *= DAMPING
      vel[i3 + 2] *= DAMPING
      pos[i3] += vel[i3]
      pos[i3 + 1] += vel[i3 + 1]
      pos[i3 + 2] += vel[i3 + 2]
    }

    state.points.geometry.attributes.position.needsUpdate = true
    state.renderer.render(state.scene, state.camera)
  }, [])

  const handleMouseMove = useCallback((e) => {
    const state = stateRef.current
    const container = containerRef.current
    if (!container || !state.camera) return

    const rect = container.getBoundingClientRect()
    const ndcX = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const ndcY = -((e.clientY - rect.top) / rect.height) * 2 + 1

    const vector = new THREE.Vector3(ndcX, ndcY, 0.5)
    vector.unproject(state.camera)
    const dir = vector.sub(state.camera.position).normalize()
    const distance = -state.camera.position.z / dir.z
    const worldPos = state.camera.position.clone().add(dir.multiplyScalar(distance))

    state.mouse.x = worldPos.x
    state.mouse.y = worldPos.y
  }, [])

  const handleMouseLeave = useCallback(() => {
    stateRef.current.mouse.x = 99
    stateRef.current.mouse.y = 99
  }, [])

  const handleResize = useCallback(() => {
    const container = containerRef.current
    const state = stateRef.current
    if (!container || !state.renderer) return

    const width = container.clientWidth
    const height = container.clientHeight
    state.camera.aspect = width / height
    state.camera.updateProjectionMatrix()
    state.renderer.setSize(width, height)
  }, [])

  useEffect(() => {
    initScene()
    animate()

    window.addEventListener('resize', handleResize)
    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
      const state = stateRef.current
      if (state.animFrame) cancelAnimationFrame(state.animFrame)
      if (state.renderer) {
        state.renderer.dispose()
        if (state.renderer.domElement?.parentNode) {
          state.renderer.domElement.parentNode.removeChild(state.renderer.domElement)
        }
      }
    }
  }, [])

  // Update when site changes — try SVG then emoji
  useEffect(() => {
    if (!stateRef.current.initialized || !siteId) return
    const isFirst = prevSiteIdRef.current === null
    prevSiteIdRef.current = siteId
    updateTargets(svgFile, emoji, !isFirst)
  }, [siteId, svgFile, emoji, updateTargets])

  // Theme colors
  useEffect(() => {
    const mat = stateRef.current.material
    if (!mat) return
    if (theme === 'dark') {
      mat.uniforms.uColor.value.set('#FFFF00')
    } else {
      mat.uniforms.uColor.value.set('#0000FF')
    }
  }, [theme])

  return <div ref={containerRef} className="particle-container" />
}
