"use client"

import { useEffect, useRef } from "react"

export default function ContactMap() {
  const mapRef = useRef(null)

  useEffect(() => {
    if (!mapRef.current) return

    const ctx = mapRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, mapRef.current.width, mapRef.current.height)

    // Set background
    ctx.fillStyle = "#f3f4f6"
    ctx.fillRect(0, 0, mapRef.current.width, mapRef.current.height)

    // Draw map grid
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1

    // Horizontal lines
    for (let i = 0; i < mapRef.current.height; i += 20) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(mapRef.current.width, i)
      ctx.stroke()
    }

    // Vertical lines
    for (let i = 0; i < mapRef.current.width; i += 20) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, mapRef.current.height)
      ctx.stroke()
    }

    // Draw location marker
    const centerX = mapRef.current.width / 2
    const centerY = mapRef.current.height / 2

    // Outer circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI)
    ctx.fillStyle = "rgba(79, 70, 229, 0.2)"
    ctx.fill()

    // Inner circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI)
    ctx.fillStyle = "#4f46e5"
    ctx.fill()

    // Location label
    ctx.font = "12px Inter, sans-serif"
    ctx.fillStyle = "#1f2937"
    ctx.textAlign = "center"
    ctx.fillText("Antananarivo, Madagascar", centerX, centerY + 40)
  }, [])

  return <canvas ref={mapRef} width={800} height={256} className="w-full h-full" />
}
