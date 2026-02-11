
import React from 'react';

const HowWeWorkSection: React.FC = () => {
  const steps = [
    {
      title: "Understand your business",
      description: "We analyze goals, constraints and growth plans."
    },
    {
      title: "Design the architecture",
      description: "Software, infrastructure and AI designed together."
    },
    {
      title: "Build with senior engineers",
      description: "Clean code, scalability and security first."
    },
    {
      title: "Deploy & operate",
      description: "We don’t just deliver — we run it with you."
    }
  ];

  const audiences = [
    "Startups building scalable products",
    "Growing companies modernizing systems",
    "Enterprises implementing AI solutions",
    "Businesses needing full technology ownership"
  ];

  return (
    <section className="bg-black text-white">
      {/* How We Work Section */}
      <div className="border-t border-border py-24 lg:py-48">
        <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
          <div className="mb-16">
            <div className="mono-tag text-xs text-secondary mb-4">[ How We Work ]</div>
            <h2 className="text-4xl lg:text-6xl font-light tracking-tight">How We Build Scalable Technology</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border overflow-hidden">
            {steps.map((step, index) => (
              <div key={index} className="bg-black p-8 lg:p-10 flex flex-col h-full group hover:bg-white/[0.02] transition-colors">
                <span className="mono-tag text-[10px] text-secondary mb-12">Step 0{index + 1}</span>
                <h3 className="text-xl font-light mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-secondary group-hover:text-primary transition-colors text-balance text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="border-t border-border py-24 lg:py-48">
        <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            <div className="lg:w-1/2">
              <div className="mono-tag text-xs text-secondary mb-4">[ Target Audience ]</div>
              <h2 className="text-4xl lg:text-6xl font-light tracking-tight">Who We Work With</h2>
            </div>
            <div className="lg:w-1/2 space-y-6">
              {audiences.map((audience, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="h-px w-8 bg-white/20 group-hover:w-12 group-hover:bg-white transition-all"></div>
                  <p className="text-xl font-light text-secondary group-hover:text-primary transition-colors">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Business Section */}
      <div className="border-t border-border py-24 lg:py-48 bg-white/[0.01]">
        <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl lg:text-7xl font-light tracking-tight text-white">
              Technology Is Our Core Business
            </h2>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-light text-secondary text-balance leading-relaxed">
                NeuroMarket is built by engineers, not marketers.
                We focus on robust architecture, clean code and real business impact.
              </p>
              <p className="text-lg font-light text-secondary/60 text-balance italic">
                Our solutions are designed to scale across Mexico, the United States and global markets.
              </p>
            </div>
            
            <div className="pt-8">
              <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500/20 via-white/20 to-blue-500/20">
                <div className="bg-black px-8 py-3 rounded-full">
                  <span className="mono-tag text-[10px] text-white">Engineering First Culture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
