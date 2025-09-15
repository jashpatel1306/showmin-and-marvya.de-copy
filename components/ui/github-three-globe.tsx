"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
// @ts-ignore - three-globe has no bundled types for the default export
import ThreeGlobe from "three-globe";
// OrbitControls via examples
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

type ArcDatum = {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
  altitude: number;
  arcAlt?: number;
  arcStroke?: number;
};

const generateArcData = (count: number): ArcDatum[] => {
  const arcs: ArcDatum[] = [];
  const palette = ["#a78bfa", "#60a5fa", "#22d3ee", "#f472b6"]; // dreamy neon
  for (let i = 0; i < count; i++) {
    const startLat = (Math.random() - 0.5) * 180;
    const startLng = (Math.random() - 0.5) * 360;
    const endLat = (Math.random() - 0.5) * 180;
    const endLng = (Math.random() - 0.5) * 360;
    arcs.push({
      startLat,
      startLng,
      endLat,
      endLng,
      color: palette[i % palette.length],
      altitude: 0.2 + Math.random() * 0.2,
      arcAlt: 0.2 + Math.random() * 0.2,
      arcStroke: 0.6,
    });
  }
  return arcs;
};

export default function GitHubThreeGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 280);

    // Space background via large gradient plane + fog
    scene.fog = new THREE.FogExp2(0x0a0b1a, 0.0012);

    // Stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 800;
    const starVertices = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 800 + Math.random() * 1200;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      starVertices[i * 3] = x;
      starVertices[i * 3 + 1] = y;
      starVertices[i * 3 + 2] = z;
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starVertices, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0x7dd3fc, size: 1.2, transparent: true, opacity: 0.6 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xa78bfa, 0.6);
    directional.position.set(5, 3, 5);
    scene.add(directional);

    // Globe
    const globe = new (ThreeGlobe as any)()
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
      .showAtmosphere(true)
      .atmosphereColor("#93c5fd")
      .atmosphereAltitude(0.25);

    // Arcs (developer activity)
    const arcsData = generateArcData(60);
    globe
      .arcsData(arcsData)
      .arcColor((d: ArcDatum) => d.color)
      .arcAltitude((d: ArcDatum) => d.arcAlt ?? 0.25)
      .arcStroke((d: ArcDatum) => d.arcStroke ?? 0.6)
      .arcDashLength(0.4)
      .arcDashGap(0.7)
      .arcDashAnimateTime(() => 1800 + Math.round(Math.random() * 1200));

    // Glow sprite for dreamy atmosphere
    const glowTexture = new THREE.TextureLoader().load(
      "//unpkg.com/three-globe/example/img/aurora.png"
    );
    const glowMaterial = new THREE.SpriteMaterial({ map: glowTexture, color: 0x93c5fd, transparent: true, opacity: 0.35, depthWrite: false });
    const glow = new THREE.Sprite(glowMaterial);
    glow.scale.set(600, 600, 1);

    const globeGroup = new THREE.Group();
    globeGroup.add(globe);
    globeGroup.add(glow);
    scene.add(globeGroup);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.minDistance = 160;
    controls.maxDistance = 380;
    controls.rotateSpeed = 0.6;
    controls.zoomSpeed = 0.6;

    // Subtle auto-rotation
    const autoRotate = true;

    // Resize handling
    const onResize = () => {
      if (!container) return;
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    // Animation loop
    let frameId: number;
    const animate = () => {
      if (autoRotate) globeGroup.rotation.y += 0.0008;
      controls.update();
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      controls.dispose();
      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose();
        const material = (obj as THREE.Mesh).material as THREE.Material | THREE.Material[] | undefined;
        if (material) {
          if (Array.isArray(material)) {
            material.forEach((m) => m.dispose());
          } else {
            material.dispose();
          }
        }
      });
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full rounded-2xl"
      style={{
        background:
          "radial-gradient(1200px 600px at 80% 20%, rgba(59, 130, 246, 0.08), transparent), radial-gradient(1000px 500px at 20% 80%, rgba(168, 85, 247, 0.08), transparent), linear-gradient(180deg, #060712 0%, #0b1020 100%)",
        boxShadow: "inset 0 0 80px rgba(147, 197, 253, 0.08)",
        position: "relative",
      }}
    />
  );
}


