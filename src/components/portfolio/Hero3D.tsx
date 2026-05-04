import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Points, PointMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = (() => {
    const arr = new Float32Array(800 * 3);
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 14;
    return arr;
  })();
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.03; });
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent size={0.025} sizeAttenuation depthWrite={false} color="#22D3EE" opacity={0.6} />
    </Points>
  );
}

function Blob() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[1.4, 4]}>
        <MeshDistortMaterial
          color="#4F46E5"
          emissive="#22D3EE"
          emissiveIntensity={0.25}
          roughness={0.15}
          metalness={0.6}
          distort={0.45}
          speed={1.6}
        />
      </Icosahedron>
    </Float>
  );
}

function FloatingShape({ position, color, size = 0.35 }: { position: [number, number, number]; color: string; size?: number }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
}

export function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#22D3EE" />
        <directionalLight position={[-5, -3, -3]} intensity={0.8} color="#4F46E5" />
        <Blob />
        <FloatingShape position={[-2.4, 1.2, -1]} color="#22D3EE" />
        <FloatingShape position={[2.6, -1.1, -1.5]} color="#4F46E5" size={0.45} />
        <FloatingShape position={[2.2, 1.6, -2]} color="#22D3EE" size={0.25} />
        <FloatingShape position={[-2.6, -1.4, -2]} color="#4F46E5" size={0.3} />
        <Particles />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
