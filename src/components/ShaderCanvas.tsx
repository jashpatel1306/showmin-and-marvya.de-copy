import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Design: soft purple/pink palette
const designFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  vec3 palette(float t) {
    vec3 a = vec3(0.85, 0.75, 0.95);
    vec3 b = vec3(0.15, 0.20, 0.15);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.15, 0.20);
    return a + b * cos(6.28318 * (c * t + d));
  }
  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.15;
    float n = sin(uv.x * 3.0 + t) * cos(uv.y * 2.5 - t * 0.7)
            + sin(uv.y * 4.0 + t * 1.3) * 0.5
            + cos(uv.x * 2.0 - uv.y * 3.0 + t * 0.5) * 0.3;
    vec3 col = palette(n * 0.5 + 0.5);
    col = mix(col, vec3(0.95, 0.93, 0.97), 0.3);
    gl_FragColor = vec4(col, 1.0);
  }
`;

// Development: cool blue/teal palette
const developmentFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  vec3 palette(float t) {
    vec3 a = vec3(0.55, 0.80, 0.90);
    vec3 b = vec3(0.20, 0.15, 0.20);
    vec3 c = vec3(1.0, 1.0, 0.8);
    vec3 d = vec3(0.10, 0.30, 0.40);
    return a + b * cos(6.28318 * (c * t + d));
  }
  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.12;
    float n = sin(uv.x * 4.0 + t * 0.8) * sin(uv.y * 3.0 + t)
            + cos(uv.x * 2.5 + uv.y * 2.0 - t * 0.6) * 0.6
            + sin((uv.x + uv.y) * 5.0 + t * 0.4) * 0.2;
    vec3 col = palette(n * 0.5 + 0.5);
    col = mix(col, vec3(0.92, 0.96, 0.98), 0.25);
    gl_FragColor = vec4(col, 1.0);
  }
`;

// Strategy: warm amber/gold palette
const strategyFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  vec3 palette(float t) {
    vec3 a = vec3(0.95, 0.85, 0.65);
    vec3 b = vec3(0.15, 0.12, 0.18);
    vec3 c = vec3(1.0, 0.8, 0.6);
    vec3 d = vec3(0.05, 0.10, 0.25);
    return a + b * cos(6.28318 * (c * t + d));
  }
  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.18;
    float n = cos(uv.x * 2.0 + t) * sin(uv.y * 3.5 - t * 0.9)
            + sin(uv.x * 5.0 - uv.y * 1.5 + t * 0.7) * 0.4
            + cos((uv.x - uv.y) * 3.0 + t * 1.1) * 0.35;
    vec3 col = palette(n * 0.5 + 0.5);
    col = mix(col, vec3(0.98, 0.96, 0.92), 0.2);
    gl_FragColor = vec4(col, 1.0);
  }
`;

// SEO: green/emerald palette
const seoFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  vec3 palette(float t) {
    vec3 a = vec3(0.60, 0.90, 0.70);
    vec3 b = vec3(0.15, 0.18, 0.12);
    vec3 c = vec3(0.8, 1.0, 0.9);
    vec3 d = vec3(0.15, 0.25, 0.10);
    return a + b * cos(6.28318 * (c * t + d));
  }
  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.14;
    float n = sin(uv.x * 3.5 + t) * cos(uv.y * 4.0 - t * 0.6)
            + sin(uv.y * 2.5 + t * 1.1) * 0.5
            + cos(uv.x * 4.5 - uv.y * 2.0 + t * 0.8) * 0.3;
    vec3 col = palette(n * 0.5 + 0.5);
    col = mix(col, vec3(0.93, 0.98, 0.94), 0.25);
    gl_FragColor = vec4(col, 1.0);
  }
`;

// Maintenance: slate/steel palette
const maintenanceFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  vec3 palette(float t) {
    vec3 a = vec3(0.70, 0.75, 0.82);
    vec3 b = vec3(0.12, 0.10, 0.15);
    vec3 c = vec3(0.9, 0.9, 1.0);
    vec3 d = vec3(0.20, 0.25, 0.30);
    return a + b * cos(6.28318 * (c * t + d));
  }
  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.10;
    float n = cos(uv.x * 3.0 + t * 0.9) * sin(uv.y * 2.0 + t)
            + sin(uv.x * 2.0 + uv.y * 4.0 - t * 0.5) * 0.45
            + cos((uv.x + uv.y) * 3.5 + t * 0.7) * 0.3;
    vec3 col = palette(n * 0.5 + 0.5);
    col = mix(col, vec3(0.94, 0.95, 0.97), 0.3);
    gl_FragColor = vec4(col, 1.0);
  }
`;

// Copywriting: warm rose/coral palette
const copywritingFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  vec3 palette(float t) {
    vec3 a = vec3(0.92, 0.72, 0.70);
    vec3 b = vec3(0.15, 0.12, 0.10);
    vec3 c = vec3(1.0, 0.8, 0.7);
    vec3 d = vec3(0.00, 0.15, 0.20);
    return a + b * cos(6.28318 * (c * t + d));
  }
  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.16;
    float n = sin(uv.x * 2.5 + t * 1.2) * cos(uv.y * 3.0 - t * 0.8)
            + sin(uv.y * 4.5 + t * 0.6) * 0.4
            + cos(uv.x * 3.5 - uv.y * 2.5 + t * 0.9) * 0.35;
    vec3 col = palette(n * 0.5 + 0.5);
    col = mix(col, vec3(0.98, 0.94, 0.93), 0.2);
    gl_FragColor = vec4(col, 1.0);
  }
`;

// AI & Automation: electric indigo/violet palette
const aiautomationFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  vec3 palette(float t) {
    vec3 a = vec3(0.65, 0.60, 0.95);
    vec3 b = vec3(0.18, 0.15, 0.20);
    vec3 c = vec3(1.0, 0.9, 1.2);
    vec3 d = vec3(0.10, 0.05, 0.30);
    return a + b * cos(6.28318 * (c * t + d));
  }
  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.20;
    float n = sin(uv.x * 5.0 + t) * cos(uv.y * 3.0 - t * 1.1)
            + sin((uv.x + uv.y) * 3.0 + t * 0.8) * 0.5
            + cos(uv.x * 2.0 - uv.y * 4.0 + t * 1.3) * 0.3;
    vec3 col = palette(n * 0.5 + 0.5);
    col = mix(col, vec3(0.94, 0.93, 0.98), 0.2);
    gl_FragColor = vec4(col, 1.0);
  }
`;

const shaderMap: Record<string, string> = {
  design: designFragmentShader,
  development: developmentFragmentShader,
  strategy: strategyFragmentShader,
  seo: seoFragmentShader,
  maintenance: maintenanceFragmentShader,
  copywriting: copywritingFragmentShader,
  aiautomation: aiautomationFragmentShader,
};

function ShaderPlane({ variant }: { variant: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  const fragShader = shaderMap[variant] || designFragmentShader;

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function ShaderCanvas({ variant = "design" }: { variant?: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 1], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ShaderPlane variant={variant} />
    </Canvas>
  );
}
