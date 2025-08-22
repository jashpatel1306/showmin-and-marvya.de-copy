"use client";

import dynamic from 'next/dynamic';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

// Dynamically import Three.js components with SSR disabled
const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
);

const GlobeMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial 
        color="#1d072e"
        wireframe
        wireframeLinewidth={1}
      />
    </mesh>
  );
};

export default function SimpleGlobe() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div className="w-full h-full bg-gray-100 animate-pulse" />}>
        <Canvas 
          camera={{ position: [0, 0, 2.5], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <GlobeMesh />
        </Canvas>
      </Suspense>
    </div>
  );
}
