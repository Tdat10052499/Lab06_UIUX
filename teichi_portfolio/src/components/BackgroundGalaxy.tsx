"use client";

import React, { useEffect, useRef } from 'react';

const BackgroundGalaxy = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update(width: number, height: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-vibe-dark overflow-hidden pointer-events-none">
      {/* Base Galaxy Layer: Spiral Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] opacity-40 blur-[120px] animate-[pulse_10s_infinite_alternate]">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(80,77,156,0.3)_0%,transparent_70%)]"></div>
         <div className="absolute top-1/4 left-1/4 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(93,43,126,0.25)_0%,transparent_60%)] rotate-45"></div>
         <div className="absolute bottom-1/4 right-1/4 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.1)_0%,transparent_60%)] -rotate-45"></div>
      </div>

      {/* Deep Tech Layers: Geometry & Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#AA5DC6" />
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#504D9C" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Floating Geometry */}
        <g stroke="#AA5DC6" fill="none" opacity="0.4" strokeWidth="0.5">
           <circle cx="20%" cy="30%" r="50" className="animate-[pulse_8s_infinite]" />
           <path d="M 0,0 L 100,100" transform="translate(100, 100)" strokeDasharray="5,5" />
           <circle cx="80%" cy="70%" r="100" className="animate-[pulse_12s_infinite_reverse]" />
           <rect x="15%" y="65%" width="80" height="80" transform="rotate(45 15% 65%)" />
        </g>
      </svg>

      {/* Code Snippets Layer (Blurred) */}
      <div className="absolute inset-0 select-none opacity-[0.04] font-mono text-[10px] text-vibe-indigo overflow-hidden p-12 blur-[1px]">
        <div className="flex flex-col gap-4">
          <div className="animate-[slideUp_20s_linear_infinite]">
            {`import { IoT } from '@vibe-tech/core';
const sensor = new IoT.Sensor('ambient');
while(galaxy.spinning) {
  const stars = galaxy.getStars();
  stars.forEach(s => s.twinkle());
  if (energy < 0.1) await galaxy.supernova();
}`}
          </div>
          <div className="ml-24 animate-[slideUp_25s_linear_infinite]">
            {`function deepTech() {
  const architecture = new System('Spiral');
  architecture.addModule(new Core('Vibe'));
  return architecture.optimize();
}`}
          </div>
        </div>
      </div>

      {/* Dynamic Star Particles Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />

    </div>
  );
};

export default BackgroundGalaxy;
