"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface DashboardChartProps {
  className?: string
}

export default function DashboardChart({ className }: DashboardChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Chart dimensions
    const width = canvasRef.current.width
    const height = canvasRef.current.height
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Data for the chart (profile views over time)
    const data = [12, 19, 15, 22, 28, 35, 42]
    const maxValue = Math.max(...data)

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1

    // X-axis
    ctx.moveTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)

    // Y-axis
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.stroke()

    // Draw grid lines
    ctx.beginPath()
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 0.5

    // Horizontal grid lines
    const yStep = chartHeight / 5
    for (let i = 0; i <= 5; i++) {
      const y = padding + i * yStep
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)

      // Y-axis labels
      ctx.fillStyle = "#6b7280"
      ctx.font = "10px Inter, sans-serif"
      ctx.textAlign = "right"
      ctx.fillText(Math.round((5 - i) * (maxValue / 5)).toString(), padding - 10, y + 3)
    }

    // Vertical grid lines
    const xStep = chartWidth / (data.length - 1)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * xStep
      ctx.moveTo(x, padding)
      ctx.lineTo(x, height - padding)

      // X-axis labels
      ctx.fillStyle = "#6b7280"
      ctx.font = "10px Inter, sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(months[i], x, height - padding + 15)
    }
    ctx.stroke()

    // Draw data line
    ctx.beginPath()
    ctx.strokeStyle = "#4f46e5"
    ctx.lineWidth = 2

    for (let i = 0; i < data.length; i++) {
      const x = padding + i * xStep
      const y = padding + chartHeight - (data[i] / maxValue) * chartHeight

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.stroke()

    // Draw data points
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * xStep
      const y = padding + chartHeight - (data[i] / maxValue) * chartHeight

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fillStyle = "#4f46e5"
      ctx.fill()
    }
  }, [])

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Profile Views</CardTitle>
        <CardDescription>Number of profile views over the last 7 months</CardDescription>
      </CardHeader>
      <CardContent>
        <canvas ref={canvasRef} width={800} height={300} className="w-full h-[300px]" />
      </CardContent>
    </Card>
  )
}
