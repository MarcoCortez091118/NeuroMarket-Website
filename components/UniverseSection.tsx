
import React, { useEffect, useRef } from 'react';

const UniverseSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // 3D Starburst configuration
    const POINT_COUNT = 120;
    const FOCAL_LENGTH = 400;
    const ROTATION_SPEED = 0.002;
    
    interface Point3D {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      opacity: number;
    }

    const points: Point3D[] = [];
    const colors = ['#ffffff', '#a5c9ff', '#444444', '#888888'];

    // Initialize points in 3D space
    for (let i = 0; i < POINT_COUNT; i++) {
      const radius = 100 + Math.random() * 300;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      points.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.2 + Math.random() * 0.8
      });
    }

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);

      angleX += ROTATION_SPEED * 0.5;
      angleY += ROTATION_SPEED;

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw lines and points
      points.forEach(p => {
        // Rotate around Y axis
        let x1 = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);
        let z1 = p.z * Math.cos(angleY) + p.x * Math.sin(angleY);

        // Rotate around X axis
        let y1 = p.y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = z1 * Math.cos(angleX) + p.y * Math.sin(angleX);

        // Perspective projection
        const scale = FOCAL_LENGTH / (FOCAL_LENGTH + z2);
        const px = x1 * scale + centerX;
        const py = y1 * scale + centerY;

        if (z2 > -FOCAL_LENGTH) {
          // Draw line from center
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(px, py);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * scale})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Draw square point
          const s = p.size * scale;
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.opacity * scale;
          ctx.fillRect(px - s / 2, py - s / 2, s, s);
          ctx.globalAlpha = 1;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* 3D Canvas Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ filter: 'contrast(1.2) brightness(1.1)' }}
      />
      
      {/* Text Overlay Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 pointer-events-none">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-white text-6xl md:text-[7rem] lg:text-[8rem] font-light tracking-tight leading-tight text-center">
            Why <br className="md:hidden" /> NeuroMarket
          </h2>
        </div>
      </div>

      {/* Subtle vignettes */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]"></div>
    </section>
  );
};

export default UniverseSection;
