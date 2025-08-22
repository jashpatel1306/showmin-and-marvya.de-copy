'use client';

import React from 'react';
import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Simple sphere with wireframe
function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#1d072e"
        wireframe
        wireframeLinewidth={1}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

// Error boundary component
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Globe rendering error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-gray-500">Could not load 3D globe</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main component with dynamic imports and error boundary
export default function GlobeComponent() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="animate-pulse">Loading globe...</div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="animate-pulse">Loading 3D...</div>
          </div>
        }
      >
        <div className="w-full h-full">
          <Canvas 
            camera={{ position: [0, 0, 2.5], fov: 50 }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <GlobeMesh />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
