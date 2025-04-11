"use client"

import { useEffect, useRef } from "react"

interface Point {
  x: number
  y: number
  radius: number
  strength: number
  damping: number
}

export default function WaterBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointsRef = useRef<Point[]>([])
  const frameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set up canvas
    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    // Create ripple effect
    const createRipple = (x: number, y: number) => {
      pointsRef.current.push({
        x,
        y,
        radius: 0,
        strength: 0.5,
        damping: 0.97,
      })
    }

    // Update ripples
    const updateRipples = () => {
      pointsRef.current = pointsRef.current.filter((point) => {
        point.radius += 5
        point.strength *= point.damping

        return point.strength > 0.01
      })
    }

    // Draw ripples
    const drawRipples = () => {
      ctx.fillStyle = "#111111" // Slightly lighter than black
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      pointsRef.current.forEach((point) => {
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius)

        gradient.addColorStop(0, `rgba(0, 179, 255, 0)`)
        gradient.addColorStop(0.1, `rgba(0, 179, 255, ${point.strength * 0.2})`)
        gradient.addColorStop(1, "rgba(0, 179, 255, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Animation loop
    const animate = () => {
      updateRipples()
      drawRipples()
      frameRef.current = requestAnimationFrame(animate)
    }

    // Event handlers
    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      createRipple(x, y)
    }

    const handleResize = () => {
      setupCanvas()
    }

    // Initialize
    setupCanvas()
    animate()

    // Add event listeners
    canvas.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      canvas.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-[#111111]" style={{ width: "100vw", height: "100vh" }} />
  )
}

