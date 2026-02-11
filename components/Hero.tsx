
import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const [query, setQuery] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

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
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.maxLife = 100 + Math.random() * 100;
        this.life = this.maxLife;
        this.size = 20 + Math.random() * 60;
        this.color = 'rgba(140, 160, 255,'; // Bluish smoke color
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.size += 0.5;
      }

      draw(context: CanvasRenderingContext2D) {
        const opacity = (this.life / this.maxLife) * 0.15;
        const gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, `${this.color} ${opacity})`);
        gradient.addColorStop(1, `${this.color} 0)`);
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (Math.random() > 0.8) {
        particles.push(new Particle(mouseRef.current.x, mouseRef.current.y));
      }

      if (Math.random() > 0.95) {
        particles.push(new Particle(canvas.width * 0.8, canvas.height * 0.4));
      }

      particles = particles.filter(p => p.life > 0);
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black flex flex-col items-center">
      {/* Dynamic Smoke Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen"
      />

      {/* Light Source / Bloom on the Right */}
      <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute top-[30%] right-[0%] w-[30%] h-[40%] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Background Text: NeuroMarket - Positioned slightly above center */}
      <div className="absolute top-[35%] inset-x-0 flex items-center justify-center z-10 pointer-events-none select-none">
        <h1 className="text-[14vw] font-bold text-white/[0.08] tracking-tight leading-none">
          NeuroMarket
        </h1>
      </div>

      {/* Main Interaction Area - Positioned below NeuroMarket */}
      <div className="relative z-20 w-full max-w-2xl px-6 flex flex-col items-center mt-[55vh]">
        <form 
          className="relative w-full rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 group transition-all hover:border-white/20"
          onSubmit={(e) => { e.preventDefault(); }}
        >
          <div className="flex flex-col p-6 min-h-[120px]">
            <textarea 
              className="w-full resize-none border-none bg-transparent text-lg text-primary placeholder:text-secondary focus:outline-none focus:ring-0" 
              placeholder="What do you want to know?"
              rows={2}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="absolute bottom-4 right-4">
            <button 
              type="submit"
              className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/40 ${query ? 'opacity-100' : 'opacity-40'}`}
              disabled={!query}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Hero Footer: Announcement Section */}
      <div className="absolute bottom-0 w-full px-12 py-10 flex flex-col md:flex-row items-end justify-between z-30">
        <div className="flex items-center gap-6">
          <div className="text-secondary hover:text-primary transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-12">
          <div className="text-right">
            <p className="text-xs font-mono uppercase tracking-widest text-secondary mb-1">NeuroMarket Solutions:</p>
            <p className="text-sm font-light text-primary">All-in-One Software, Infrastructure & AI Solutions for Growing Businesses</p>
          </div>
          <a 
            href="#" 
            className="px-6 py-2 rounded-full border border-white/20 text-[10px] mono-tag hover:bg-white/10 transition-all tracking-widest"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
