
import React from 'react';

const SuperGrokSection: React.FC = () => {
  const valueBlocks = [
    "One partner instead of multiple vendors",
    "Senior-level execution, no juniors",
    "Production-ready systems, not prototypes",
    "Technology that actually runs, not just code"
  ];

  return (
    <section className="py-24 lg:py-48 relative border-t border-border bg-black overflow-hidden">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl text-center flex flex-col items-center space-y-16">
        {/* NeuroMarket Logo */}
        <div className="relative group max-w-[180px]">
          <img 
            src="https://green-dragonfly-496875.hostingersite.com/wp-content/uploads/2026/02/cropped-Diseno-sin-titulo-2.png" 
            alt="NeuroMarket Logo" 
            className="w-full h-auto transition-all group-hover:scale-105 duration-700 object-contain"
          />
        </div>

        {/* Core Message */}
        <div className="max-w-3xl space-y-8">
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-white text-balance">
            Most companies offer development or infrastructure or AI. <br />
            <span className="text-secondary">We deliver everything together, fully integrated.</span>
          </h2>
        </div>

        {/* Value Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-8">
          {valueBlocks.map((text, index) => (
            <div 
              key={index} 
              className="p-6 border border-white/10 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex flex-col items-center justify-center text-center"
            >
              <div className="mono-tag text-[10px] text-secondary mb-3 opacity-50">0{index + 1}</div>
              <p className="text-sm font-light text-primary uppercase tracking-wider">{text}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <a 
          href="mailto:contact@neuromarket.ai" 
          className="mono-tag inline-flex items-center gap-4 border border-white/20 px-12 py-5 rounded-full hover:bg-white/10 transition-all text-sm group mt-8"
        >
          Work with us
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default SuperGrokSection;
