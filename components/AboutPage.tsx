
import React, { useEffect, useRef } from 'react';

const AboutPage: React.FC = () => {
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
      
      // Draw the wide golden ambient light source from the right
      const gradient = ctx.createRadialGradient(
        width * 1.1, height * 0.5, 0, 
        width * 1.1, height * 0.5, width * 0.9
      );
      
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(0.1, 'rgba(255, 220, 150, 0.2)');
      gradient.addColorStop(0.4, 'rgba(180, 120, 50, 0.08)');
      gradient.addColorStop(0.7, 'rgba(80, 40, 10, 0.03)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Subtle atmospheric particles
      const time = Date.now() * 0.0002;
      for (let i = 0; i < 40; i++) {
        const px = (Math.sin(i * 13 + time) * 0.5 + 0.5) * width;
        const py = (Math.cos(i * 7 + time) * 0.5 + 0.5) * height;
        const size = Math.random() * 1.2;
        
        if (px > width * 0.4) {
          const opacity = ((px - width * 0.4) / (width * 0.6)) * 0.15;
          ctx.fillStyle = `rgba(255, 230, 200, ${opacity})`;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
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

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden flex flex-col">
      {/* Visual Effect Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none" 
      />

      {/* HERO SECTION - GOLDEN GLOW WITH USER TEXT */}
      <section className="relative z-10 flex-grow flex flex-col justify-center min-h-screen px-4 lg:px-24">
        <div className="max-w-5xl">
          <div className="mono-tag text-[10px] text-secondary tracking-[0.4em] mb-8">[ ABOUT NEUROMARKET ]</div>
          <h1 className="text-5xl md:text-8xl lg:text-[7.5rem] font-light tracking-tighter leading-[1] text-[#888] mb-12 transition-colors duration-1000 hover:text-white">
            Where Ideas Become <br /> Real Systems
          </h1>

          <div className="max-w-2xl mb-12">
            <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed">
              NeuroMarket was founded with a clear conviction: technology should not be fragmented, overpriced or poorly executed.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-black font-mono text-[10px] tracking-widest uppercase font-bold cursor-pointer hover:bg-white/90 transition-all">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            NEUROMARKET SYSTEMS
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>

        {/* Bottom Hero Navigation */}
        <div className="absolute bottom-12 left-4 lg:left-24 right-4 lg:right-24 flex items-center justify-between">
          <div className="text-secondary/60 hover:text-white transition-colors cursor-pointer animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="relative z-10 mx-auto w-full px-4 lg:px-6 xl:max-w-4xl py-24 space-y-48">
        
        {/* Core Conviction */}
        <section className="space-y-16">
          <div className="text-center md:text-left space-y-8">
            <h2 className="text-2xl md:text-4xl font-light text-secondary">
              We are a technology company specializing in:
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Enterprise Software Development",
                "Cloud Infrastructure & DevOps",
                "API Architecture & Integrations",
                "Artificial Intelligence Systems"
              ].map((item, i) => (
                <div key={i} className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all rounded-xl">
                  <p className="text-lg md:text-xl font-light text-primary">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-lg md:text-xl font-light text-primary border-t border-white/10 pt-8 mt-12">
              All delivered as a fully integrated solution. We don’t just build software. We design, develop and operate complete technological ecosystems.
            </p>
          </div>
        </section>

        {/* Our Origin */}
        <section className="border-t border-white/10 pt-24 space-y-16">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="mono-tag text-xs text-secondary">[ Our Origin ]</div>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight">Experience — Not Theory.</h2>
              <p className="text-lg text-secondary font-light">
                NeuroMarket was born from years working across multiple industries:
              </p>
              <ul className="space-y-4 text-secondary/70 font-light">
                <li>• Oil & energy sector in Mexico</li>
                <li>• Automotive corporate environments</li>
                <li>• International software companies</li>
                <li>• U.S.-based technology firms</li>
              </ul>
            </div>
            <div className="space-y-8 bg-white/[0.02] p-10 rounded-2xl border border-white/5">
              <p className="text-xs font-mono text-secondary tracking-widest uppercase mb-4 opacity-50">Problem Identified:</p>
              <div className="space-y-6">
                <p className="text-xl font-light text-primary leading-snug">Companies were either overpaying for mediocre execution, working with fragmented vendors, or trusting teams without deep architectural knowledge.</p>
                <p className="text-primary italic border-l border-white/20 pl-6">
                  "Technology was treated as a service. Not as a core strategic asset."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Founder */}
        <section className="border-t border-white/10 pt-24">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <div className="mono-tag text-xs text-secondary mb-8">[ The Founder ]</div>
              <div className="aspect-[4/5] bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60"></div>
                <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="text-2xl font-light text-white">Marco Cortez</h3>
                  <p className="text-[10px] font-mono text-secondary tracking-widest uppercase">Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-8 font-light text-secondary leading-relaxed pt-12 text-balance">
              <p>Marco began developing software at 18, working in companies while still studying Informatics Engineering. Over the last 7 years, he has built real-world systems across industries, focusing on understanding not just how to code — but how systems truly work.</p>
              <p>His path was not conventional. Rather than conforming to corporate limitations, he chose continuous self-education, mastering Full-stack architecture, Cloud infrastructure, API design, Cybersecurity fundamentals, AI systems, and Enterprise-grade development practices.</p>
              <p>Through international collaborations and mentorship from senior engineers abroad, he reshaped his understanding of technology — moving from “building applications” to designing scalable, production-ready systems.</p>
              <div className="p-8 bg-white/[0.03] border border-white/5 rounded-xl">
                 <p className="text-primary font-light italic">
                  "NeuroMarket is founded as a space where engineering excellence is not suppressed, innovation is not limited, and ideas are not dismissed. A place where thinking deeply is encouraged."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="border-t border-white/10 pt-24 space-y-24">
          <div className="text-center">
            <div className="mono-tag text-xs text-secondary mb-8">[ Differentiation ]</div>
            <h2 className="text-4xl md:text-7xl font-light tracking-tight mb-8">Beyond Development.</h2>
            <p className="text-xl text-secondary font-light max-w-2xl mx-auto">
              NeuroMarket integrates infrastructure, code, and AI from day one.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Architecture before code", d: "Deep technical assessment first." },
              { t: "Scalability before launch", d: "Engineered for future growth." },
              { t: "Security by design", d: "Integral protection principles." },
              { t: "AI with real purpose", d: "LLM lifecycle development practices." },
              { t: "End-to-end ownership", d: "One team, one responsibility." },
              { t: "Enterprise standards", d: "SDLC & Cloud-native infrastructure." }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all rounded-xl group">
                <h3 className="text-xs font-mono uppercase tracking-widest text-primary mb-2 group-hover:text-white">{item.t}</h3>
                <p className="text-sm text-secondary/60">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Innovation in Practice */}
        <section className="border-t border-white/10 pt-24">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
               <div className="mono-tag text-xs text-secondary mb-8">[ Innovation ]</div>
               <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">Innovation in Practice</h2>
               <p className="text-lg text-secondary font-light mb-8">Innovation is not a buzzword for us. It is part of our daily workflow.</p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 gap-4">
              {[
                "Interactive AI Agents",
                "AI-powered radio content generators",
                "Intelligent nutrition systems",
                "Medical AI prototypes",
                "Early access testing of emerging AI models",
                "International developer innovation programs"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 group">
                  <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-white transition-colors"></div>
                  <span className="text-secondary font-light group-hover:text-primary transition-colors">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Vision & Philosophy */}
        <section className="border-t border-white/10 py-32 text-center space-y-16">
          <div className="space-y-8">
            <div className="mono-tag text-xs text-secondary">[ Our Vision ]</div>
            <h2 className="text-5xl md:text-8xl font-light tracking-tighter mb-12">One Team. One Architecture. One Responsibility.</h2>
            <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto font-light leading-relaxed text-balance">
              NeuroMarket is built as an All-in-One Technology Partner. We coordinate your architecture, code, infrastructure, and AI as a single unified force.
            </p>
          </div>

          <div className="pt-24 space-y-12">
            <h3 className="text-3xl md:text-5xl font-light text-primary tracking-tight">
              If you can think it, we can build it.
            </h3>
            <p className="text-lg md:text-xl text-secondary/60 font-light italic max-w-2xl mx-auto">
              And if it cannot yet be built, we explore, prototype and create the precedent.
            </p>
          </div>

          <div className="inline-flex flex-col items-center gap-6 pt-16">
            <div className="h-32 w-px bg-gradient-to-b from-white/40 to-transparent"></div>
            <div className="mono-tag text-[10px] text-white tracking-[0.5em] opacity-40 uppercase">
              NeuroMarket: Where systems are designed to last.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
