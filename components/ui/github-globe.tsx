"use client";

import { useEffect, useRef, useState } from "react";

export function GitHubGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>();
  const pointsRef = useRef<Array<{ x: number; y: number; z: number; x2d: number; y2d: number; }>>([]);
  const rotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = dimensions.width * window.devicePixelRatio;
    canvas.height = dimensions.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Initialize points
    const points = [];
    const count = 100;
    const radius = Math.min(dimensions.width, dimensions.height) * 0.3;
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      points.push({
        x: Math.sin(phi) * Math.cos(theta) * radius,
        y: Math.sin(phi) * Math.sin(theta) * radius,
        z: Math.cos(phi) * radius,
        x2d: 0,
        y2d: 0
      });
    }
    pointsRef.current = points;

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Update rotation
      rotationRef.current.y += 0.002;
      
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      
      // Project 3D points to 2D and draw
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.2)';
      ctx.lineWidth = 1;
      
      // First pass: update positions
      pointsRef.current.forEach(point => {
        // Rotate around Y axis
        const x = point.x * Math.cos(rotationRef.current.y) - point.z * Math.sin(rotationRef.current.y);
        const z = point.x * Math.sin(rotationRef.current.y) + point.z * Math.cos(rotationRef.current.y);
        
        // Project to 2D
        const scale = radius / (radius + z);
        point.x2d = x * scale + centerX;
        point.y2d = point.y * scale + centerY;
      });
      
      // Second pass: draw connections
      for (let i = 0; i < pointsRef.current.length; i++) {
        const p1 = pointsRef.current[i];
        
        // Draw connections to nearby points
        for (let j = i + 1; j < pointsRef.current.length; j++) {
          const p2 = pointsRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance < radius * 1.5) {
            ctx.beginPath();
            ctx.moveTo(p1.x2d, p1.y2d);
            ctx.lineTo(p2.x2d, p2.y2d);
            const alpha = Math.max(0, 0.6 - (distance / (radius * 1.5)) * 0.6);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.stroke();
          }
        }
        
        // Draw point
        if (p1.z > -radius * 0.7) {
          ctx.beginPath();
          const size = 1 + (p1.z + radius) / (radius * 1.5);
          ctx.arc(p1.x2d, p1.y2d, size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
          ctx.fill();
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
