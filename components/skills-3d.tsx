"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, OrbitControls, Environment } from "@react-three/drei"
import { useIsMobile } from "@/hooks/use-mobile"
import * as THREE from "three"

// This component contains all the 3D scene elements and is rendered inside the Canvas
function Scene({ skills }) {
  const groupRef = useRef()

  // Use useFrame for the main group rotation
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle overall rotation
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  // Main scene component that contains all 3D elements
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#4f46e5" intensity={0.5} />

      {/* Main rotating group */}
      <group ref={groupRef}>
        {/* Background particles */}
        <ParticleField />

        {/* Connection lines between skills */}
        <ConnectionLines skills={skills} />

        {/* Individual animated skills */}
        {skills.map((skill, i) => (
          <AnimatedSkill key={i} skill={skill} index={i} totalSkills={skills.length} />
        ))}
      </group>

      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  )
}

// Custom animated skill component with unique animation patterns
function AnimatedSkill({ skill, index, totalSkills }) {
  const ref = useRef()

  // Calculate position on a sphere
  const phi = Math.acos(-1 + (2 * index) / totalSkills)
  const theta = Math.sqrt(totalSkills * Math.PI) * phi
  const radius = 3

  const initialPosition = [
    radius * Math.cos(theta) * Math.sin(phi),
    radius * Math.sin(theta) * Math.sin(phi),
    radius * Math.cos(phi),
  ]

  // Different animation patterns based on index
  useFrame((state) => {
    if (!ref.current) return

    const time = state.clock.getElapsedTime()

    // Different animation patterns based on index % 5
    switch (index % 5) {
      case 0: // Circular motion
        ref.current.position.x = initialPosition[0] + Math.sin(time * 0.5) * 0.3
        ref.current.position.y = initialPosition[1] + Math.cos(time * 0.5) * 0.3
        ref.current.rotation.z = Math.sin(time * 0.3) * 0.2
        break
      case 1: // Pulsating
        ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = 1 + Math.sin(time * 0.8) * 0.1
        ref.current.rotation.y = time * 0.2
        break
      case 2: // Figure-8 motion
        ref.current.position.x = initialPosition[0] + Math.sin(time * 0.7) * 0.3
        ref.current.position.y = initialPosition[1] + Math.sin(time * 1.4) * 0.15
        ref.current.rotation.x = Math.sin(time * 0.5) * 0.2
        break
      case 3: // Bouncing
        ref.current.position.y = initialPosition[1] + Math.abs(Math.sin(time * 1.2)) * 0.2
        ref.current.rotation.z = Math.sin(time * 0.6) * 0.1
        break
      case 4: // Rotating and shifting
        ref.current.rotation.y = time * 0.3
        ref.current.rotation.x = Math.sin(time * 0.4) * 0.3
        ref.current.position.z = initialPosition[2] + Math.sin(time * 0.6) * 0.2
        break
    }
  })

  return (
    <group ref={ref} position={initialPosition}>
      <Text
        color={skill.color || "white"}
        fontSize={skill.level / 20}
        anchorX="center"
        anchorY="middle"
        // Add a subtle glow effect based on skill level
        outlineWidth={skill.level > 80 ? 0.01 : 0}
        outlineColor={skill.color || "white"}
      >
        {skill.name}
      </Text>
    </group>
  )
}

// Particle system for background effect
function ParticleField() {
  const particles = useRef()
  const count = 100

  // Create random positions for particles
  const [positions] = useState(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  })

  useFrame((state) => {
    if (!particles.current) return
    particles.current.rotation.y = state.clock.getElapsedTime() * 0.05
  })

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.3} />
    </points>
  )
}

// Animated connection lines between skills that are related
function ConnectionLines({ skills }) {
  const linesRef = useRef()

  useFrame((state) => {
    if (!linesRef.current) return
    linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
  })

  // Create connections between related skills (simplified for demo)
  const connections = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 0], // Connect in a pentagon
    [5, 6],
    [6, 7],
    [7, 5], // Connect in a triangle
  ]

  return (
    <group ref={linesRef}>
      {connections.map((connection, i) => {
        if (!skills[connection[0]] || !skills[connection[1]]) return null

        // Calculate positions on sphere for both skills
        const calculatePos = (index) => {
          const phi = Math.acos(-1 + (2 * index) / skills.length)
          const theta = Math.sqrt(skills.length * Math.PI) * phi
          const radius = 3
          return new THREE.Vector3(
            radius * Math.cos(theta) * Math.sin(phi),
            radius * Math.sin(theta) * Math.sin(phi),
            radius * Math.cos(phi),
          )
        }

        const start = calculatePos(connection[0])
        const end = calculatePos(connection[1])

        // Create line geometry
        const points = [start, end]
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

        return (
          <line key={i} geometry={lineGeometry}>
            <lineBasicMaterial color="#4f46e5" transparent opacity={0.2} linewidth={1} />
          </line>
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
        <Scene skills={skills} />
      </Canvas>
    </div>
  )
}
