"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float, OrbitControls, Environment } from "@react-three/drei"
import { useIsMobile } from "@/hooks/use-mobile"

function SkillsCloud({ skills }) {
  const group = useRef()

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={group}>
      {skills.map((skill, i) => {
        // Calculate position on a sphere
        const phi = Math.acos(-1 + (2 * i) / skills.length)
        const theta = Math.sqrt(skills.length * Math.PI) * phi
        const radius = 3

        const position = [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi),
        ]

        return (
          <Float key={i} speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
            <Text
              position={position}
              color={skill.color || "white"}
              fontSize={skill.level / 20}
              font="/fonts/Inter_Bold.json"
              anchorX="center"
              anchorY="middle"
            >
              {skill.name}
            </Text>
          </Float>
        )
      })}
    </group>
  )
}

export default function Skills3D({ skills }) {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden border">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <SkillsCloud skills={skills} />
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  )
}
