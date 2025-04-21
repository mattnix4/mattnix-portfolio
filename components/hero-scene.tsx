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
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
    }
  })

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Main sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#4f46e5" metalness={0.7} roughness={0.1} envMapIntensity={1} />
      </mesh>

      {/* Orbiting elements */}
      <mesh position={[0, 0, 1.5]} scale={0.25}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#f43f5e" metalness={0.8} roughness={0.1} />
      </mesh>

      <mesh position={[1.5, 0, 0]} scale={0.25}>
        <torusGeometry args={[0.5, 0.2, 16, 32]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.1} />
      </mesh>

      <mesh position={[0, 1.5, 0]} scale={0.25}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.1} />
      </mesh>

      {/* Inner elements */}
      <mesh position={[0, 0, 0]} scale={0.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#ffffff" wireframe={true} transparent={true} opacity={0.3} />
      </mesh>
    </group>
  )
}

function TechWords() {
  const technologies = [
    { name: "React", position: [-3.5, 2, -2], color: "#61dafb" },
    { name: "Angular", position: [3.5, -1, -3], color: "#dd0031" },
    { name: "Node.js", position: [-2.5, -2, -4], color: "#8cc84b" },
    { name: "TypeScript", position: [4, 1, -5], color: "#3178c6" },
    { name: "PHP", position: [-4, -1, -6], color: "#777bb4" },
    { name: "Python", position: [2.5, 3, -4], color: "#3776ab" },
    { name: "DevOps", position: [-1.5, -3, -5], color: "#ff6c37" },
    { name: "JavaScript", position: [3, 2.5, -3], color: "#f7df1e" },
    { name: "Git", position: [-3, 1, -4], color: "#f05032" },
    { name: "MongoDB", position: [1, -2.5, -3], color: "#47a248" },
    { name: "Flutter", position: [2, -1.5, -6], color: "#02569b" },
  ]

  return (
    <>
      {technologies.map((tech, index) => (
        <Float key={index} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Text
            position={tech.position}
            color={tech.color}
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
    <Canvas className="absolute inset-0" camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
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
