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
    { 
      name: "N8N", 
      logo: "https://green-dragonfly-496875.hostingersite.com/wp-content/uploads/2026/02/N8n-logo-new.svg_-1.png" 
    },
    { 
      name: "Azure", 
      logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" 
    },
    { 
      name: "Google Cloud", 
      logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" 
    },
    { 
      name: "AWS", 
      logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" 
    },
    { 
      name: "GitHub", 
      logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg" 
    },
    { 
      name: "OPEN AI", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1280px-OpenAI_Logo.svg.png?20230731013808" 
    },
    { 
      name: "Bolt.new", 
      logo: "https://green-dragonfly-496875.hostingersite.com/wp-content/uploads/2026/02/pfe4e39n.png" 
    }
  ];

  return (
    <section className="bg-black py-24 border-t border-white/5 overflow-hidden">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="mono-tag text-[10px] text-secondary/60 font-mono tracking-[0.3em] uppercase">[ Strategic Partners ]</div>
            <h3 className="text-3xl md:text-4xl font-light text-primary tracking-tight">Trusted by Industry Leaders</h3>
          </div>
          <p className="text-xs font-mono text-secondary max-w-xs md:text-right leading-relaxed">
            Engineering solutions for global operations and high-growth startups.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:gap-16">
        {/* Clients Marquee (Left to Right) */}
        <div className="relative flex overflow-x-hidden group py-4 border-y border-white/[0.03]">
          <div className="animate-marquee flex whitespace-nowrap gap-12 md:gap-32 items-center">
            {[...clients, ...clients].map((logo, idx) => (
              <img 
                key={idx} 
                src={logo} 
                alt="Client Logo" 
                className="h-8 md:h-16 w-auto object-contain opacity-30 hover:opacity-100 transition-all duration-500 grayscale brightness-150"
              />
            ))}
          </div>
          
          {/* Fades for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
        </div>

        {/* Tools Marquee (Right to Left / Reverse) */}
        <div className="relative flex overflow-x-hidden group py-4 border-b border-white/[0.03]">
          <div className="animate-marquee-reverse flex whitespace-nowrap gap-12 md:gap-32 items-center">
            {[...tools, ...tools, ...tools].map((tool, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center min-w-[120px] md:min-w-[180px] gap-2">
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className={`h-6 md:h-10 w-auto object-contain ${tool.name === 'Bolt.new' ? 'brightness-200' : 'grayscale invert'} opacity-20 hover:opacity-100 transition-all duration-500`}
                />
                <span className="text-[8px] md:text-[10px] font-mono text-secondary/40 tracking-widest uppercase">{tool.name}</span>
              </div>
            ))}
          </div>
          
          {/* Fades for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientsToolsSection;