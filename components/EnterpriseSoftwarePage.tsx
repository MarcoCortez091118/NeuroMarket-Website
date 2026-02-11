
import React, { useEffect, useRef } from 'react';

const EnterpriseSoftwarePage: React.FC = () => {
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
      const beamWidth = width * 0.8;
      const beamX = width * 0.3;
      const beamY = centerY;

      const coreGradient = ctx.createLinearGradient(beamX, beamY, beamX + beamWidth, beamY);
      coreGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGradient.addColorStop(0.1, 'rgba(180, 200, 255, 0.7)');
      coreGradient.addColorStop(0.6, 'rgba(50, 100, 255, 0.1)');
      coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.shadowBlur = 50;
      ctx.shadowColor = 'rgba(100, 150, 255, 0.4)';
      
      ctx.beginPath();
      ctx.moveTo(beamX, beamY);
      ctx.lineTo(beamX + beamWidth, beamY - 40);
      ctx.lineTo(beamX + beamWidth, beamY + 40);
      ctx.closePath();
      
      const radialGlow = ctx.createRadialGradient(beamX, beamY, 0, beamX, beamY, beamWidth);
      radialGlow.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
      radialGlow.addColorStop(0.1, 'rgba(100, 150, 255, 0.05)');
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
            [ ENTERPRISE SOFTWARE DEVELOPMENT ]
          </div>
        </div>

        <div className="max-w-5xl mt-12">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light tracking-tighter leading-[1] text-[#999] transition-colors duration-1000 hover:text-white">
            Enterprise Software <br />
            for Scalable Businesses
          </h1>
          <div className="max-w-2xl mt-12 space-y-8">
            <h2 className="text-xl md:text-2xl text-secondary font-light leading-relaxed">
              Custom-built enterprise systems engineered for performance, security and long-term scalability.
            </h2>
            <p className="text-sm md:text-base text-secondary/60 leading-relaxed font-light">
              We design and develop production-grade software architectures tailored to business operations, growth objectives and technical complexity.
            </p>
            <div className="pt-8">
              <a href="mailto:contact@neuromarket.ai" className="px-10 py-4 rounded-full bg-white text-black font-mono text-[10px] tracking-widest uppercase hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                → Request a Technical Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT FLOW */}
      <div className="relative z-10 mx-auto w-full px-4 lg:px-6 xl:max-w-4xl py-32 space-y-48">
        
        {/* 2. THE PROBLEM */}
        <section className="border-t border-white/10 pt-24 space-y-12">
          <div className="mono-tag text-xs text-secondary">[ The Problem ]</div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">Why Most Enterprise Software Fails</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-secondary font-light">Most enterprise systems fail because they are:</p>
              <ul className="space-y-4 text-secondary/70 font-light">
                <li>• Built without scalable architecture</li>
                <li>• Developed without infrastructure planning</li>
                <li>• Over-engineered or poorly structured</li>
                <li>• Designed without long-term maintainability</li>
              </ul>
            </div>
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl italic">
              <p className="text-xl text-primary font-light border-l border-white/20 pl-6">
                "Software is treated as a project. Not as a core business asset."
              </p>
            </div>
          </div>
        </section>

        {/* 3. OUR APPROACH */}
        <section className="border-t border-white/10 pt-24">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="mono-tag text-xs text-secondary">[ Our Approach ]</div>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight">Architecture-First Development</h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-secondary font-light">Before writing code, we design:</p>
              <div className="grid grid-cols-1 gap-4">
                {["System architecture", "Data models", "Security layers", "API ecosystem", "Infrastructure requirements"].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 py-2 border-b border-white/5 group">
                    <span className="text-[10px] font-mono text-white/20 group-hover:text-white transition-colors">0{i+1}</span>
                    <span className="text-lg font-light text-secondary group-hover:text-primary transition-colors">{text}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-secondary/60 italic pt-4">We apply structured SDLC principles to ensure predictable and scalable execution.</p>
            </div>
          </div>
        </section>

        {/* 4. WHAT WE BUILD */}
        <section className="border-t border-white/10 pt-24 space-y-16">
          <div className="text-center md:text-left">
            <div className="mono-tag text-xs text-secondary mb-8">[ Solutions ]</div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-12">Enterprise Systems We Develop</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Custom ERP systems", "SaaS platforms", "Internal automation systems", 
                "Multi-tenant architectures", "Distributed backend systems", 
                "Enterprise dashboards", "Workflow management platforms"
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all rounded-xl h-32 flex flex-col justify-end">
                  <p className="text-xs font-mono uppercase tracking-widest text-primary leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TECHNICAL CAPABILITIES */}
        <section className="border-t border-white/10 pt-24 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="mono-tag text-xs text-secondary mb-8">[ Engineering ]</div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">Engineering Capabilities</h2>
          </div>
          <div className="lg:w-1/2 space-y-4">
            {[
              "Clean architecture implementation",
              "Microservices & modular systems",
              "API-driven design",
              "Cloud-native deployment",
              "Role-based access control",
              "Scalable database architecture",
              "Secure authentication systems"
            ].map((cap, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 group">
                <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-white transition-colors"></div>
                <span className="text-secondary font-light group-hover:text-primary transition-colors">{cap}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6 & 7. SCALABILITY & SECURITY */}
        <section className="grid md:grid-cols-2 gap-24 border-t border-white/10 pt-24">
          <div className="space-y-12">
            <div>
              <div className="mono-tag text-xs text-secondary mb-8">[ Built for Growth ]</div>
              <h2 className="text-3xl font-light tracking-tight mb-6">Scalability & Infrastructure</h2>
              <p className="text-sm text-secondary/60 mb-8 leading-relaxed">
                Enterprise software must support user growth, data expansion, traffic spikes, and geographic reach. We integrate cloud infrastructure and DevOps pipelines from day one.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <div className="mono-tag text-xs text-secondary mb-8">[ Security by Design ]</div>
              <h2 className="text-3xl font-light tracking-tight mb-6">Security & Compliance</h2>
              <p className="text-sm text-secondary/60 mb-8 leading-relaxed">
                We embed data protection, access control, encryption standards, and infrastructure hardening at the architectural level.
              </p>
            </div>
          </div>
        </section>

        {/* 8. ENGAGEMENT MODEL */}
        <section className="border-t border-white/10 pt-24 text-center">
          <div className="mono-tag text-xs text-secondary mb-12">[ Engagement Model ]</div>
          <h2 className="text-4xl md:text-7xl font-light tracking-tight mb-20">How We Collaborate</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-left">
            {[
              "Technical discovery",
              "Architecture design",
              "Development roadmap",
              "Implementation & QA",
              "Operational support"
            ].map((step, i) => (
              <div key={i} className="flex flex-col gap-4 group">
                <div className="h-px w-full bg-white/20 group-hover:bg-white transition-all"></div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary group-hover:text-primary leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. WHO THIS IS FOR */}
        <section className="border-t border-white/10 pt-24 text-center">
          <div className="mono-tag text-xs text-secondary mb-12">[ Partnerships ]</div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16">Ideal for Organizations That</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "Need scalable custom systems",
              "Are replacing legacy platforms",
              "Require full infrastructure ownership",
              "Want long-term technology partnership"
            ].map((text, i) => (
              <div key={i} className="px-8 py-4 border border-white/10 rounded-full text-secondary font-light hover:text-primary hover:border-white/30 transition-all">
                {text}
              </div>
            ))}
          </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="py-32 border-t border-white/10 text-center space-y-16">
          <h2 className="text-4xl md:text-8xl font-light tracking-tighter">Build Enterprise <br /> Software That Lasts</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            Work with senior engineers who design systems beyond MVP stage.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12">
            <a href="mailto:contact@neuromarket.ai" className="px-12 py-5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-[0.3em] hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Schedule Consultation
            </a>
            <a href="mailto:contact@neuromarket.ai" className="px-12 py-5 rounded-full border border-white/20 font-mono text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all">
              Discuss Your Architecture
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EnterpriseSoftwarePage;
