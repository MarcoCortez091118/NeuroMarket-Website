
import React, { useEffect, useRef } from 'react';

const Footer: React.FC = () => {
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
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 600;
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

  const footerLinks = [
    {
      title: "Try NeuroMarket On",
      links: ["Web", "iOS App", "Android App", "LinkedIn"]
    },
    {
      title: "Solutions",
      links: ["Enterprise Software", "Cloud Infrastructure", "AI Integration", "Mobile Apps", "Custom APIs"]
    },
    {
      title: "Company",
      links: ["About Us", "Tech Stack", "Contact", "News", "Careers"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Security", "Terms of Service", "Safety", "Status"]
    }
  ];

  return (
    <footer className="relative bg-black pt-32 pb-24 overflow-hidden">
      {/* Dynamic Ambient Glow */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
      />

      <div className="relative z-10 mx-auto w-full px-4 lg:px-6 xl:max-max-w-7xl">
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 mb-32">
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-6">
              <h4 className="mono-tag text-[10px] text-secondary/60 font-mono tracking-[0.2em]">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm font-light text-secondary hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEO Info & Branding */}
        <div className="border-t border-white/5 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
            <div className="space-y-1">
              <p className="mono-tag text-[9px] text-secondary">Expertise</p>
              <p className="text-[11px] font-mono text-primary/80 uppercase tracking-wider">Software Development Company</p>
            </div>
            <div className="space-y-1">
              <p className="mono-tag text-[9px] text-secondary">Focus</p>
              <p className="text-[11px] font-mono text-primary/80 uppercase tracking-wider">AI Solutions for Business</p>
            </div>
            <div className="space-y-1">
              <p className="mono-tag text-[9px] text-secondary">Service</p>
              <p className="text-[11px] font-mono text-primary/80 uppercase tracking-wider">Cloud Infrastructure Services</p>
            </div>
            <div className="space-y-1">
              <p className="mono-tag text-[9px] text-secondary">Region</p>
              <p className="text-[11px] font-mono text-primary/80 uppercase tracking-wider">México & United States</p>
            </div>
          </div>
        </div>

        {/* Bottom Branding & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <div className="flex items-center gap-6">
            <img 
              src="https://green-dragonfly-496875.hostingersite.com/wp-content/uploads/2026/02/cropped-Diseno-sin-titulo-2.png" 
              alt="NeuroMarket" 
              className="h-6 w-auto object-contain brightness-110"
            />
            <span className="text-[10px] text-secondary font-mono tracking-wider">
              NEUROMARKET 2026 © ALL RIGHT RESERVED
            </span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] mono-tag text-secondary hover:text-primary">X</a>
            <a href="#" className="text-[10px] mono-tag text-secondary hover:text-primary">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* HORIZON GLOW EFFECT - The requested visual */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 via-amber-900/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-[2px]"></div>
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-amber-600/10 rounded-[100%] blur-[120px]"></div>
      </div>
    </footer>
  );
};

export default Footer;
