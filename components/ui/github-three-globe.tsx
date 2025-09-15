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
    renderer.setClearColor(0x000000, 0); // transparent background
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

    // No fog or space background; keep scene transparent

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
    controls.enableZoom = false; // disable zoom in/out
    // Keep camera distance fixed for consistent view
    controls.minDistance = camera.position.length();
    controls.maxDistance = camera.position.length();
    controls.rotateSpeed = 0.6;
    controls.zoomSpeed = 0; // no zoom speed

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
        background: "transparent",
        position: "relative",
      }}
    />
  );
}


