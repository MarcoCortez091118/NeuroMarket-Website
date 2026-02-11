
import React, { useEffect, useRef } from 'react';

const MobileAppPage: React.FC = () => {
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
      const beamWidth = width * 0.85;
      const beamX = width * 0.15;
      const beamY = centerY;

      // Unique spectral color for this page (Indigo/Violet light)
      const coreGradient = ctx.createLinearGradient(beamX, beamY, beamX + beamWidth, beamY);
      coreGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGradient.addColorStop(0.1, 'rgba(180, 160, 255, 0.7)');
      coreGradient.addColorStop(0.5, 'rgba(100, 50, 255, 0.1)');
      coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.shadowBlur = 60;
      ctx.shadowColor = 'rgba(150, 100, 255, 0.3)';
      
      ctx.beginPath();
      ctx.moveTo(beamX, beamY);
      ctx.lineTo(beamX + beamWidth, beamY - 35);
      ctx.lineTo(beamX + beamWidth, beamY + 35);
      ctx.closePath();
      
      const radialGlow = ctx.createRadialGradient(beamX, beamY, 0, beamX, beamY, beamWidth);
      radialGlow.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
      radialGlow.addColorStop(0.2, 'rgba(150, 100, 255, 0.05)');
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
            [ MOBILE APP DEVELOPMENT ]
          </div>
        </div>

        <div className="max-w-5xl mt-12">
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tighter leading-[1.05] text-[#888] transition-colors duration-1000 hover:text-white">
            Mobile App Development <br />
            Built for Performance and Scalability
          </h1>
          <div className="max-w-2xl mt-12 space-y-8">
            <h2 className="text-xl md:text-2xl text-secondary font-light leading-relaxed">
              High-quality mobile applications integrated with secure backend systems and scalable cloud infrastructure.
            </h2>
            <div className="pt-8">
              <a href="mailto:contact@neuromarket.ai" className="px-10 py-4 rounded-full bg-white text-black font-mono text-[10px] tracking-widest uppercase hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                → Start Your Mobile Project
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
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">Most Mobile Apps Are Built <br /> Without Backend Strategy</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-secondary font-light">Common failures in the industry:</p>
              <ul className="space-y-4 text-secondary/70 font-light">
                <li>• Weak backend systems</li>
                <li>• Poor performance optimization</li>
                <li>• Security gaps</li>
                <li>• Scalability issues</li>
              </ul>
            </div>
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl italic">
              <p className="text-xl text-primary font-light border-l border-white/20 pl-6">
                "We engineer mobile applications as extensions of a robust, unified system."
              </p>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="border-t border-white/10 pt-24">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="mono-tag text-xs text-secondary">[ Our Approach ]</div>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight">Backend-Connected Mobile Architecture</h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-secondary font-light">We build mobile systems as part of an ecosystem:</p>
              <div className="grid grid-cols-1 gap-4">
                {["Secure API integration", "Cloud-connected services", "Real-time data handling", "Scalable backend support"].map((text, i) => (
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
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-12">Mobile Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Business mobile apps", "Enterprise internal tools", "SaaS mobile extensions", 
                "Data-driven applications", "Cross-platform solutions"
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all rounded-xl h-32 flex flex-col justify-end">
                  <p className="text-xs font-mono uppercase tracking-widest text-primary leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PERFORMANCE & SECURITY */}
        <section className="border-t border-white/10 pt-24 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="mono-tag text-xs text-secondary mb-8">[ Performance ]</div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">Mobile Systems Engineered for Production</h2>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 gap-4">
            {[
              "Secure authentication",
              "Optimized API calls",
              "Efficient data caching",
              "Cloud-backed scaling"
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
          <h2 className="text-4xl md:text-8xl font-light tracking-tighter">Launch a Mobile Platform <br /> That Grows With You</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            Scalability is not optional. Build mobile software that supports your business from thousands to millions of users.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12">
            <a href="mailto:contact@neuromarket.ai" className="px-12 py-5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-[0.3em] hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Start Your Mobile Project
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MobileAppPage;
