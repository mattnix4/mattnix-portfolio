"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Text, Float } from "@react-three/drei"
import { useIsMobile } from "@/hooks/use-mobile"

function Model({ position = [0, 0, 0], scale = 1 }) {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#4f46e5" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 1.2]} scale={0.2}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#f43f5e" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[1.2, 0, 0]} scale={0.2}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[0, 1.2, 0]} scale={0.2}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#10b981" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  )
}

function TechWords() {
  const technologies = [
    { name: "React", position: [-3, 2, -2] },
    { name: "Angular", position: [3, -1, -3] },
    { name: "Node.js", position: [-2, -2, -4] },
    { name: "TypeScript", position: [4, 1, -5] },
    { name: "PHP", position: [-4, -1, -6] },
    { name: "Python", position: [2, 3, -4] },
    { name: "DevOps", position: [-1, -3, -5] },
  ]

  return (
    <>
      {technologies.map((tech, index) => (
        <Float key={index} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Text
            position={tech.position}
            color="white"
            fontSize={0.5}
            font="/fonts/Inter_Regular.json"
            anchorX="center"
            anchorY="middle"
          >
            {tech.name}
          </Text>
        </Float>
      ))}
    </>
  )
}

export default function HeroScene() {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Canvas className="absolute inset-0" camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Model position={[0, 0, 0]} scale={isMobile ? 0.8 : 1.2} />
      <TechWords />
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
  )
}
