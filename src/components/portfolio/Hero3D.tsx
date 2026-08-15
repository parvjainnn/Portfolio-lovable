import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Points, PointMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = (() => {
    const arr = new Float32Array(420 * 3);
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 14;
    return arr;
  })();
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.03; });
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent size={0.025} sizeAttenuation depthWrite={false} color="#9AA0A6" opacity={0.35} />
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
    <Float speed={1} rotationIntensity={0.35} floatIntensity={0.7}>
      <Icosahedron ref={ref} args={[1.4, 4]}>
        <MeshDistortMaterial
          color="#212429"
          emissive="#C98B45"
          emissiveIntensity={0.02}
          roughness={0.62}
          metalness={0.2}
          distort={0.28}
          speed={1.1}
        />
      </Icosahedron>
    </Float>
  );
}

function FloatingShape({ position, color, size = 0.35 }: { position: [number, number, number]; color: string; size?: number }) {
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial color={color} metalness={0.55} roughness={0.4} emissive={color} emissiveIntensity={0.08} />
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
        <directionalLight position={[5, 5, 5]} intensity={0.9} color="#FFFFFF" />
        <directionalLight position={[-5, -3, -3]} intensity={0.5} color="#7A7F8A" />
        <Blob />
        <FloatingShape position={[-2.4, 1.2, -1]} color="#8A8F98" />
        <FloatingShape position={[2.6, -1.1, -1.5]} color="#C98B45" size={0.45} />
        <FloatingShape position={[2.2, 1.6, -2]} color="#8A8F98" size={0.25} />
        <FloatingShape position={[-2.6, -1.4, -2]} color="#C98B45" size={0.3} />
        <Particles />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
