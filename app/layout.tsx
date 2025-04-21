import type React from "react"
import "./globals.css"

// Update the title in the metadata
export const metadata = {
  title: "Nirina Ran",
  description: "Full-Stack Developer Portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
