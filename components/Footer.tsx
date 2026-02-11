
import React, { useEffect, useRef } from 'react';

interface FooterProps {
  setView?: (view: 'home' | 'about' | 'services') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
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
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.maxLife = 300 + Math.random() * 200;
        this.life = this.maxLife;
        this.size = 40 + Math.random() * 120;
        this.color = 'rgba(217, 119, 6,'; // Amber/Orange to match the horizon
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
      }

      draw(context: CanvasRenderingContext2D) {
        const opacity = (this.life / this.maxLife) * 0.05;
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
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (particles.length < 15 && Math.random() > 0.97) {
        particles.push(new Particle(Math.random() * canvas.width, canvas.height - 100));
      }

      particles = particles.filter(p => p.life > 0);
      particles.forEach(p => {
        p.update();
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
    <footer className="relative bg-black pt-20 pb-12 overflow-hidden border-t border-white/5">
      {/* Dynamic Ambient Glow */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
      />

      <div className="relative z-10 mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
        {/* Simplified Bottom Branding & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <button onClick={() => setView?.('home')} className="flex items-center">
              <img 
                src="https://green-dragonfly-496875.hostingersite.com/wp-content/uploads/2026/02/cropped-Diseno-sin-titulo-2.png" 
                alt="NeuroMarket" 
                className="h-5 w-auto object-contain brightness-125"
              />
            </button>
            <span className="text-[10px] text-secondary/50 font-mono tracking-widest uppercase">
              © 2026 NEUROMARKET
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <button className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary/60 hover:text-primary transition-colors">Privacy</button>
            <button className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary/60 hover:text-primary transition-colors">Terms</button>
            <button onClick={() => setView?.('about')} className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary/60 hover:text-primary transition-colors">About</button>
            <button onClick={() => setView?.('services')} className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary/60 hover:text-primary transition-colors">Services</button>
            <a href="#" className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary/60 hover:text-primary transition-colors">X</a>
            <a href="#" className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary/60 hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* HORIZON GLOW EFFECT */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-600/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
