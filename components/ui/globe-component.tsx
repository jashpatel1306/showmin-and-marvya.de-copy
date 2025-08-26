'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const World = dynamic(
  () => import('@/components/ui/globe').then((m) => m.World),
  { ssr: false }
);

const globeConfig = {
  pointSize: 4,
  globeColor: '#1d4ed8',
  showAtmosphere: true,
  atmosphereColor: 'rgba(255, 255, 255, 0.1)',
  atmosphereAltitude: 0.1,
  emissive: '#1d4ed8',
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: 'rgba(255,255,255,0.7)',
  ambientLight: '#38bdf8',
  directionalLeftLight: '#ffffff',
  directionalTopLight: '#ffffff',
  pointLight: '#ffffff',
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const sampleArcs = [
  {
    order: 1,
    startLat: 40.7128,
    startLng: -74.0060,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.2,
    color: '#3b82f6',
  },
  {
    order: 2,
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: '#3b82f6',
  },
  {
    order: 3,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 40.7128,
    endLng: -74.0060,
    arcAlt: 0.4,
    color: '#3b82f6',
  },
];

export function GlobeComponent() {
  return (
    <div className="w-full h-full">
      <World data={sampleArcs} globeConfig={globeConfig} />
    </div>
  );
}
