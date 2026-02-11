
import React, { useEffect, useRef } from 'react';

const TechIcon = ({ type }: { type: string }) => {
  const iconClass = "w-10 h-10 text-white/70 group-hover:text-white transition-colors duration-500";
  switch (type) {
    case 'frontend':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case 'backend':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'data':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M16 19h6" />
          <path d="M19 16l3 3-3 3" />
        </svg>
      );
    case 'cloud':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19A5.5 5.5 0 0 0 18 8h-1.26a8 8 0 1 0-11.62 9" />
          <polyline points="13 11 9 17 15 17 11 23" />
        </svg>
      );
    default:
      return null;
  }
};

const StackPage: React.FC = () => {
  const smokeRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = smokeRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      baseOpacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height * 0.3 + Math.random() * canvas.height * 0.4;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.6) * 0.2;
        this.maxLife = 300 + Math.random() * 400;
        this.life = this.maxLife;
        this.size = 150 + Math.random() * 350;
        this.baseOpacity = 0.04 + Math.random() * 0.06;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
      }

      draw(context: CanvasRenderingContext2D) {
        const opacity = (this.life / this.maxLife) * this.baseOpacity;
        const gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(200, 200, 200, ${opacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
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

    const init = () => {
      particles = [];
      for (let i = 0; i < 30; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, idx) => {
        p.update();
        p.draw(ctx);
        if (p.life <= 0) particles[idx] = new Particle();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', () => { resize(); init(); });
    resize(); init(); animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden flex flex-col">
      {/* Background Layer: Drifting Smoke */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <canvas ref={smokeRef} className="w-full h-full opacity-80 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* Atmospheric V-Light */}
      <div className="absolute inset-x-0 top-0 h-screen pointer-events-none z-[1]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180%] h-full bg-[conic-gradient(from_180deg_at_50%_0%,transparent_168deg,rgba(255,255,255,0.08)_180deg,transparent_192deg)] blur-[120px]"></div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 flex flex-col justify-center min-h-screen px-6 lg:px-24">
        <div className="mb-8">
          <div className="mono-tag text-[10px] text-secondary/40 tracking-[0.5em] font-mono">[ OUR TECHNOLOGY ARCHITECTURE ]</div>
        </div>

        <div className="relative">
          <h1 className="text-[20vw] font-bold tracking-[-0.07em] leading-none select-none pointer-events-none italic">
            <span 
              className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#999] to-[#111]"
              style={{
                textShadow: '0 0 2px rgba(255,255,255,0.3)',
                WebkitTextStroke: '1px rgba(255,255,255,0.08)'
              }}
            >
              STACK
            </span>
          </h1>
        </div>

        <div className="absolute bottom-16 left-6 lg:left-24 right-6 lg:right-24 flex flex-col md:flex-row items-end justify-between">
          <div className="mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 text-white/30 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
          <div className="max-w-md text-right border-r border-white/5 pr-8">
            <p className="text-sm md:text-base font-light text-secondary/60 leading-relaxed text-balance">
              Building production-grade systems on resilient architectures—outpacing legacy methods. This is your scalable infrastructure at peak execution.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTENT SECTIONS */}
      <div className="relative z-10 mx-auto w-full px-6 xl:max-w-7xl pt-48 pb-48 space-y-64">
        
        {/* TECH GRIDS - Rediseñadas según referencia */}
        <div className="space-y-64">
          
          {/* Frontend Section */}
          <div className="grid lg:grid-cols-2 gap-32 items-center group">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000 bg-white/[0.02]">
               <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200" 
                alt="Frontend Engineering" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <TechIcon type="frontend" />
                <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white/90">Frontend Engineering</h2>
              </div>
              <p className="text-xl text-secondary/60 font-light leading-relaxed max-w-xl">
                High-performance interfaces optimized for user experience and system integration across all platforms.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "SSR", "SSG"].map((t) => (
                  <span key={t} className="px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono uppercase tracking-[0.2em] text-secondary/80 hover:text-white hover:border-white/30 transition-all cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Section - Mirroring the User Reference */}
          <div className="grid lg:grid-cols-2 gap-32 items-center group">
            <div className="lg:order-2 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000 bg-white/[0.02]">
               <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=1200" 
                alt="Backend Engineering" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            <div className="lg:order-1 space-y-10">
              <div className="flex items-center gap-6">
                <TechIcon type="backend" />
                <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white/90">Backend & Core</h2>
              </div>
              <p className="text-xl text-secondary/60 font-light leading-relaxed max-w-xl">
                Resilient backend systems built for distributed scalability, high availability and modular long-term growth.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {["Node.js", "Express", "Fastify", "Python", "REST", "GraphQL", "Microservices"].map((t) => (
                  <span key={t} className="px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono uppercase tracking-[0.2em] text-secondary/80 hover:text-white hover:border-white/30 transition-all cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Infrastructure Section */}
          <div className="grid lg:grid-cols-2 gap-32 items-center group">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000 bg-white/[0.02]">
               <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                alt="Infrastructure" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <TechIcon type="cloud" />
                <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white/90">Infrastructure</h2>
              </div>
              <p className="text-xl text-secondary/60 font-light leading-relaxed max-w-xl">
                Cloud-native architecture designed for high availability and automated operational excellence.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {["AWS", "GCP", "Kubernetes", "Docker", "Terraform", "CI/CD"].map((t) => (
                  <span key={t} className="px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono uppercase tracking-[0.2em] text-secondary/80 hover:text-white hover:border-white/30 transition-all cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* FINAL CALL TO ACTION */}
        <section className="py-48 border-t border-white/10 text-center space-y-24">
          <div className="space-y-8">
            <div className="mono-tag text-xs text-secondary/30 tracking-[0.5em] uppercase">[ EVOLVE YOUR SYSTEMS ]</div>
            <h2 className="text-5xl md:text-[8rem] font-light tracking-tighter leading-none text-[#777]">
              Strategic <br /> <span className="text-white">Assets</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-12">
            <a href="mailto:contact@neuromarket.ai" className="px-16 py-6 rounded-full bg-white text-black font-mono text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-white/90 transition-all shadow-[0_0_60px_rgba(255,255,255,0.1)]">
              REVIEW ARCHITECTURE
            </a>
            <a href="mailto:contact@neuromarket.ai" className="px-16 py-6 rounded-full border border-white/10 font-mono text-[11px] uppercase tracking-[0.4em] text-secondary/50 hover:text-white hover:border-white/30 transition-all">
              GET ASSESSMENT
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StackPage;
