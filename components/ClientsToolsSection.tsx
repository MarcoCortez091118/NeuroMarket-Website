
import React from 'react';

const ClientsToolsSection: React.FC = () => {
  const clients = [
    "https://firebasestorage.googleapis.com/v0/b/laz1310.firebasestorage.app/o/web-images%2F2%20(1).png?alt=media",
    "https://zamoralive.com/wp-content/uploads/2025/05/zamoralogo-300x130-1.png",
    "https://hkhall.com/wp-content/uploads/2024/05/HK-Hall-white-logo.webp",
    "https://cantinarooftop.com/wp-content/uploads/2025/08/Cantina-Rooftop-White-2048x787.png",
    "https://greengoldfinancial.com/wp-content/uploads/2025/06/GREEN-GOLD-FINANCIAL-LOGO-PACKAGE_Mesa-de-trabajo-1-copia-2048x775.png",
    "https://mecenasusa.org/wp-content/uploads/2024/11/Diseno-sin-titulo-5.png",
    "https://tacoslabroadway.com/wp-content/uploads/2025/04/Tacos-La-Broadway-White-2048x1152.png",
    "http://seagreen-gnat-364518.hostingersite.com/wp-content/uploads/2025/07/LOGO-VOZUL.png",
    "https://vidasincruda.com/cdn/shop/files/LOGO.png?v=1746597319&width=240"
  ];

  const tools = [
    "N8N", "Azure", "Google Cloud", "AWS", "GitHub", "OPEN AI", "Bolt.new"
  ];

  return (
    <section className="bg-black py-20 border-t border-white/5 overflow-hidden">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="mono-tag text-[10px] text-secondary">[ Strategic Partners ]</div>
            <h3 className="text-xl font-light text-primary tracking-tight">Trusted by Industry Leaders</h3>
          </div>
          <p className="text-xs font-mono text-secondary max-w-xs md:text-right">
            Engineering solutions for global operations and high-growth startups.
          </p>
        </div>
      </div>

      {/* Clients Marquee */}
      <div className="relative flex overflow-x-hidden group py-4">
        <div className="animate-marquee flex whitespace-nowrap gap-16 md:gap-32 items-center">
          {[...clients, ...clients].map((logo, idx) => (
            <img 
              key={idx} 
              src={logo} 
              alt="Client Logo" 
              className="h-10 md:h-14 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity grayscale brightness-150"
            />
          ))}
        </div>
        
        {/* Fades for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>

      {/* Tools Section */}
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl mt-24">
        <div className="mono-tag text-[10px] text-secondary mb-8">[ Tech Stack ]</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-white/5 border border-white/5">
          {tools.map((tool, idx) => (
            <div 
              key={idx} 
              className="bg-black py-8 px-4 flex items-center justify-center group hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-xs font-mono text-secondary group-hover:text-primary tracking-widest transition-colors uppercase">
                {tool}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsToolsSection;
