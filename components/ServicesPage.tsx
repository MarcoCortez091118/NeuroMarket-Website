
import React, { useEffect, useRef } from 'react';

interface ServicesPageProps {
  setView: (view: 'home' | 'about' | 'services' | 'enterprise-software' | 'fullstack-web' | 'mobile-app' | 'api-development' | 'ai-solutions' | 'cloud-infrastructure') => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ setView }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;

      const beamWidth = width * 0.7;
      const beamX = width * 0.45;
      const beamY = centerY;

      const coreGradient = ctx.createLinearGradient(beamX, beamY, beamX + beamWidth, beamY);
      coreGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGradient.addColorStop(0.1, 'rgba(200, 220, 255, 0.8)');
      coreGradient.addColorStop(0.5, 'rgba(100, 150, 255, 0.2)');
      coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.shadowBlur = 40;
      ctx.shadowColor = 'rgba(100, 160, 255, 0.5)';
      
      ctx.beginPath();
      ctx.moveTo(beamX, beamY);
      ctx.lineTo(beamX + beamWidth, beamY - 60);
      ctx.lineTo(beamX + beamWidth, beamY + 60);
      ctx.closePath();
      
      const radialGlow = ctx.createRadialGradient(beamX, beamY, 0, beamX, beamY, beamWidth);
      radialGlow.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      radialGlow.addColorStop(0.05, 'rgba(150, 180, 255, 0.1)');
      radialGlow.addColorStop(0.3, 'rgba(50, 100, 255, 0.02)');
      radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = radialGlow;
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.fillStyle = coreGradient;
      ctx.fillRect(beamX, beamY - 1, beamWidth, 2);

      const time = Date.now() * 0.0005;
      for (let i = 0; i < 30; i++) {
        const px = (Math.sin(i * 10 + time) * 0.5 + 0.5) * width;
        const py = (Math.cos(i * 5 + time) * 0.5 + 0.5) * height;
        const size = Math.random() * 1.5;
        const distToBeam = Math.abs(py - beamY);
        
        if (distToBeam < 100 && px > beamX) {
          const opacity = (1 - distToBeam / 100) * 0.2;
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fillRect(px, py, size, size);
        }
      }

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

  const capabilities = [
    {
      id: "01",
      title: "Enterprise Software Development",
      description: "Scalable, secure and performance-driven software designed for business growth.",
      details: "We build custom enterprise systems using modern architectures, clean engineering principles and production-ready infrastructure.",
      features: ["Custom business systems", "SaaS platforms", "Internal enterprise tools", "Workflow automation systems", "High-availability backend systems"],
      action: () => setView('enterprise-software')
    },
    {
      id: "02",
      title: "Full-Stack Web Development",
      description: "Modern web platforms built for performance and scalability.",
      details: "Our engineers design robust front-end and back-end systems that integrate seamlessly with APIs, databases and cloud infrastructure.",
      features: ["Front-end architecture", "Backend services", "SSR / SPA / SSG implementations", "Secure authentication systems", "Performance optimization"],
      action: () => setView('fullstack-web')
    },
    {
      id: "03",
      title: "Mobile App Development",
      description: "High-performance mobile applications engineered for long-term growth.",
      details: "We build iOS and Android applications integrated with scalable backend systems and cloud environments.",
      features: ["Cross-platform solutions", "Native performance optimization", "Backend-connected mobile systems", "Secure data handling", "Cloud-based deployment"],
      action: () => setView('mobile-app')
    },
    {
      id: "04",
      title: "API Development & System Integrations",
      description: "Robust API ecosystems designed for interoperability and scalability.",
      details: "We design secure, documented and version-controlled APIs that connect platforms, services and enterprise systems.",
      features: ["RESTful APIs", "GraphQL architecture", "Secure API gateways", "Third-party integrations", "Enterprise data exchange systems"],
      action: () => setView('api-development')
    },
    {
      id: "05",
      title: "AI Solutions for Business",
      description: "Artificial intelligence integrated into real business workflows.",
      details: "We design and deploy AI systems that automate processes, enhance decision-making and optimize operations.",
      features: ["Custom AI agents", "LLM integration", "AI workflow automation", "Data-driven insights systems", "Predictive models"],
      action: () => setView('ai-solutions')
    },
    {
      id: "06",
      title: "Cloud Infrastructure & DevOps",
      description: "Cloud-native systems engineered for resilience and scalability.",
      details: "We architect and operate infrastructure environments designed to support high-performance applications.",
      features: ["Cloud architecture design", "DevOps implementation", "CI/CD pipelines", "Kubernetes environments", "Infrastructure cost optimization"],
      action: () => setView('cloud-infrastructure')
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden flex flex-col">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      <section className="relative z-10 flex-grow flex flex-col justify-center min-h-screen px-4 lg:px-24">
        <div className="absolute top-32 left-4 lg:left-24">
          <div className="mono-tag text-[10px] text-secondary tracking-[0.4em] font-mono">
            [ SERVICES & CAPABILITIES ]
          </div>
        </div>

        <div className="max-w-4xl mt-12">
          <h1 className="text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-light tracking-tighter leading-[1.05] text-[#999] transition-colors duration-1000 hover:text-white">
            Design <br />
            the System
          </h1>
          <p className="mt-6 text-secondary/40 text-sm font-mono tracking-widest uppercase">
            Enterprise Software • Cloud • AI
          </p>
        </div>

        <div className="absolute bottom-12 left-4 lg:left-24 right-4 lg:right-24 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="text-secondary/60 hover:text-primary transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </div>
          </div>
          <div className="max-w-md md:text-center">
            <p className="text-sm md:text-base font-light text-secondary leading-relaxed text-balance">
              We design, develop and operate scalable technology ecosystems for companies that demand performance, security and long-term growth.
            </p>
          </div>
          <div>
            <a href="mailto:contact@neuromarket.ai" className="group flex items-center gap-4 px-8 py-3 rounded-full border border-white/20 text-[10px] mono-tag hover:bg-white/10 transition-all tracking-widest bg-white/[0.02]">
              START PROJECT
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto w-full px-4 lg:px-6 xl:max-w-7xl pt-24 pb-48">
        <section id="capabilities" className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <div className="mono-tag text-xs text-secondary">[ Technology Stack ]</div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight">Our Core Technology Services</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10 bg-black/40 backdrop-blur-md">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-10 border-r border-b border-white/10 hover:bg-white/[0.04] transition-all duration-500 group relative">
                <div className="text-[10px] font-mono text-secondary/40 mb-12 tracking-widest uppercase">ID: {cap.id}</div>
                <h3 className="text-2xl font-light mb-4 group-hover:text-primary transition-colors">{cap.title}</h3>
                <p className="text-sm font-light text-primary mb-4 leading-relaxed">{cap.description}</p>
                <p className="text-sm text-secondary mb-8 leading-relaxed">{cap.details}</p>
                <ul className="space-y-3 mb-12">
                  {cap.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[10px] font-mono text-secondary tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                      <span className="h-1.5 w-1.5 bg-white/40 group-hover:bg-white transition-colors"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={cap.action}
                  className="text-[10px] font-mono text-secondary hover:text-white transition-colors tracking-widest uppercase"
                >
                  → {cap.action ? 'Learn More' : 'Coming Soon'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Approach Section */}
        <section className="mb-48 border-t border-white/10 pt-24">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="mono-tag text-xs text-secondary mb-8">[ Methodology ]</div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 leading-tight">Technology Designed as a Unified System</h2>
              <p className="text-lg text-secondary font-light leading-relaxed mb-8">
                Most providers separate development, infrastructure and AI. <br />
                <span className="text-primary">We integrate them from day one.</span>
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-10 space-y-8 backdrop-blur-sm">
              <p className="text-xs font-mono text-secondary tracking-widest uppercase border-b border-white/10 pb-4">Our methodology ensures:</p>
              <div className="grid grid-cols-1 gap-6">
                {[
                  "Architecture-first development",
                  "Infrastructure-ready deployment",
                  "Security-by-design",
                  "AI compatibility at the core",
                  "End-to-end accountability"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <span className="text-[10px] font-mono text-white/20 group-hover:text-white transition-colors">0{i+1}</span>
                    <span className="text-lg font-light text-secondary group-hover:text-primary transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 border-t border-white/10 text-center">
          <h2 className="text-4xl md:text-8xl font-light tracking-tighter mb-12">Build Technology That Actually Scales</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:contact@neuromarket.ai" className="px-12 py-5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-[0.3em] hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Request a Consultation
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
