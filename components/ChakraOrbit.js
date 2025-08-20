import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function ChakraOrbit() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 1, 3] }}>
        <ambientLight />
        <OrbitControls />
        {/* Placeholder: Chakras + AI Avatar */}
      </Canvas>
    </div>
  )
}