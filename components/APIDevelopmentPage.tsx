
import React, { useEffect, useRef } from 'react';

const APIDevelopmentPage: React.FC = () => {
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
      
      const centerY = height / 2;
      const beamWidth = width * 0.95;
      const beamX = width * 0.05;
      const beamY = centerY;

      // Unique spectral color: Warm Amber/Orange for "Connectivity & Flow"
      const coreGradient = ctx.createLinearGradient(beamX, beamY, beamX + beamWidth, beamY);
      coreGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGradient.addColorStop(0.1, 'rgba(255, 200, 150, 0.8)');
      coreGradient.addColorStop(0.5, 'rgba(255, 100, 50, 0.15)');
      coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.shadowBlur = 60;
      ctx.shadowColor = 'rgba(255, 150, 100, 0.3)';
      
      ctx.beginPath();
      ctx.moveTo(beamX, beamY);
      ctx.lineTo(beamX + beamWidth, beamY - 45);
      ctx.lineTo(beamX + beamWidth, beamY + 45);
      ctx.closePath();
      
      const radialGlow = ctx.createRadialGradient(beamX, beamY, 0, beamX, beamY, beamWidth);
      radialGlow.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
      radialGlow.addColorStop(0.2, 'rgba(255, 150, 100, 0.05)');
      radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = radialGlow;
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.fillStyle = coreGradient;
      ctx.fillRect(beamX, beamY - 1, beamWidth, 2);

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
    <div className="bg-black text-white min-h-screen relative overflow-hidden flex flex-col">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative z-10 flex flex-col justify-center min-h-screen px-4 lg:px-24">
        <div className="absolute top-32 left-4 lg:left-24">
          <div className="mono-tag text-[10px] text-secondary tracking-[0.4em] font-mono">
            [ API DEVELOPMENT & INTEGRATIONS ]
          </div>
        </div>

        <div className="max-w-5xl mt-12">
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-light tracking-tighter leading-[1.05] text-[#888] transition-colors duration-1000 hover:text-white">
            Secure and Scalable <br />
            API Development
          </h1>
          <div className="max-w-2xl mt-12 space-y-8">
            <h2 className="text-xl md:text-2xl text-secondary font-light leading-relaxed">
              Enterprise-grade APIs designed for interoperability, performance and long-term maintainability.
            </h2>
            <div className="pt-8">
              <a href="mailto:contact@neuromarket.ai" className="px-10 py-4 rounded-full bg-white text-black font-mono text-[10px] tracking-widest uppercase hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                → Talk to an API Architect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT FLOW */}
      <div className="relative z-10 mx-auto w-full px-4 lg:px-6 xl:max-w-4xl py-32 space-y-48">
        
        {/* THE PROBLEM */}
        <section className="border-t border-white/10 pt-24 space-y-12">
          <div className="mono-tag text-xs text-secondary">[ The Problem ]</div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">Poorly Designed APIs <br /> Create System Bottlenecks</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-secondary font-light">Common industry issues:</p>
              <ul className="space-y-4 text-secondary/70 font-light">
                <li>• Inconsistent endpoints</li>
                <li>• Security vulnerabilities</li>
                <li>• Lack of version control</li>
                <li>• Poor documentation</li>
                <li>• Scalability limitations</li>
              </ul>
            </div>
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl italic">
              <p className="text-xl text-primary font-light border-l border-white/20 pl-6">
                "We design APIs as core infrastructure components, not just endpoints."
              </p>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="border-t border-white/10 pt-24">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="mono-tag text-xs text-secondary">[ Our Approach ]</div>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight">API-First System Architecture</h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-secondary font-light">Strategic infrastructure components:</p>
              <div className="grid grid-cols-1 gap-4">
                {["Structured endpoint design", "Secure authentication layers", "Versioning strategy", "Clear documentation", "Monitoring & logging"].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 py-2 border-b border-white/5 group">
                    <span className="text-[10px] font-mono text-white/20 group-hover:text-white transition-colors">0{i+1}</span>
                    <span className="text-lg font-light text-secondary group-hover:text-primary transition-colors">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="border-t border-white/10 pt-24 space-y-16">
          <div className="text-center md:text-left">
            <div className="mono-tag text-xs text-secondary mb-8">[ Solutions ]</div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-12">API Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "REST APIs", "GraphQL APIs", "Microservice communication", 
                "Third-party integrations", "Payment gateway integrations", 
                "Data exchange systems"
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all rounded-xl h-32 flex flex-col justify-end">
                  <p className="text-xs font-mono uppercase tracking-widest text-primary leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section className="border-t border-white/10 pt-24 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="mono-tag text-xs text-secondary mb-8">[ Security ]</div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">Security Embedded <br /> at the API Layer</h2>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 gap-4">
            {[
              "OAuth & token systems",
              "Rate limiting & Throttling",
              "Encryption standards",
              "Access control mechanisms",
              "Audit logging"
            ].map((cap, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 group">
                <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-white transition-colors"></div>
                <span className="text-secondary font-light group-hover:text-primary transition-colors">{cap}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 border-t border-white/10 text-center space-y-16">
          <h2 className="text-4xl md:text-8xl font-light tracking-tighter">Design APIs That <br /> Scale With You</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            Interoperability is the key to business agility. Engineer your data flow for the next decade.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12">
            <a href="mailto:contact@neuromarket.ai" className="px-12 py-5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-[0.3em] hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Design APIs That Scale With You
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default APIDevelopmentPage;
