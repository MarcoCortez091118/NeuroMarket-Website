
import React from 'react';

const ProductCard: React.FC<{ title: string; description: string; linkText: string; children?: React.ReactNode }> = ({ title, description, linkText, children }) => (
  <div className="group relative flex h-full flex-col border-t border-border p-8 lg:hover:bg-white/[0.02] transition-colors overflow-hidden border-r last:border-r-0 md:even:border-r-0 lg:even:border-r lg:[&:nth-child(3n)]:border-r-0">
    <div className="mb-12">
      <h3 className="text-2xl font-light mb-4 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-secondary group-hover:text-primary transition-colors text-balance leading-relaxed">{description}</p>
    </div>
    <div className="flex-grow flex items-center justify-center min-h-[160px]">
      {children}
    </div>
    <div className="mt-8 flex justify-start">
      <button className="mono-tag text-[10px] border border-white/20 px-6 py-2 rounded-full group-hover:bg-white/10 transition-colors">
        {linkText}
      </button>
    </div>
    {/* Corner Decorations */}
    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-white -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-white translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-white -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-white translate-x-1/2 translate-y-1/2"></div>
    </div>
  </div>
);

const ProductSection: React.FC = () => {
  const services = [
    {
      title: "Enterprise Software Development",
      description: "Custom systems designed to scale with your business, built using modern architectures and best practices.",
      icon: (
        <svg className="w-1/2 opacity-20 group-hover:opacity-40 transition-all group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="80" stroke="white" strokeWidth="1" />
          <path d="M10 30H90M30 30V90M60 30V90" stroke="white" strokeWidth="0.5" />
        </svg>
      )
    },
    {
      title: "Full-Stack Web Development",
      description: "High-performance web platforms using modern frameworks, clean architecture and senior engineering standards.",
      icon: (
        <svg className="w-1/2 opacity-20 group-hover:opacity-40 transition-all group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="15" width="90" height="70" rx="4" stroke="white" strokeWidth="1" />
          <circle cx="15" cy="25" r="2" fill="white" />
          <circle cx="25" cy="25" r="2" fill="white" />
          <circle cx="35" cy="25" r="2" fill="white" />
          <path d="M40 50L50 60L60 50M40 40L50 30L60 40" stroke="white" strokeWidth="1" />
        </svg>
      )
    },
    {
      title: "Mobile App Development",
      description: "iOS and Android applications focused on performance, security and long-term scalability.",
      icon: (
        <svg className="w-1/3 opacity-20 group-hover:opacity-40 transition-all group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="10" width="50" height="80" rx="8" stroke="white" strokeWidth="1" />
          <circle cx="50" cy="82" r="3" stroke="white" strokeWidth="1" />
          <rect x="40" y="15" width="20" height="2" rx="1" fill="white" />
        </svg>
      )
    },
    {
      title: "API Development & Integrations",
      description: "Secure, well-documented APIs and integrations that connect systems, platforms and services seamlessly.",
      icon: (
        <svg className="w-1/2 opacity-20 group-hover:opacity-40 transition-all group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 50H40M60 50H80M50 20V40M50 60V80" stroke="white" strokeWidth="1" strokeLinecap="round" />
          <circle cx="50" cy="50" r="10" stroke="white" strokeWidth="1" />
        </svg>
      )
    },
    {
      title: "AI Solutions for Business",
      description: "Custom artificial intelligence systems designed to automate processes, analyze data and enhance decision-making.",
      icon: (
        <svg className="w-1/2 opacity-20 group-hover:opacity-40 transition-all group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 50C30 40 40 30 50 30C60 30 70 40 70 50C70 60 60 70 50 70C40 70 30 60 30 50Z" stroke="white" strokeWidth="1" />
          <path d="M50 10V30M50 70V90M10 50H30M70 50H90M25 25L40 40M60 60L75 75M75 25L60 40M40 60L25 75" stroke="white" strokeWidth="0.5" />
        </svg>
      )
    },
    {
      title: "Cloud Infrastructure & DevOps",
      description: "We design, deploy and operate cloud infrastructure so your software runs fast, secure and reliable.",
      icon: (
        <svg className="w-1/2 opacity-20 group-hover:opacity-40 transition-all group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 65C20 65 15 60 15 55C15 50 20 45 25 45C26 35 35 25 45 25C55 25 64 32 65 42C72 43 78 48 78 55C78 62 72 68 65 68H25" stroke="white" strokeWidth="1" />
          <path d="M40 85L50 75L60 85" stroke="white" strokeWidth="1" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 lg:py-48 border-t border-border">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
        <div className="mb-16">
          <div className="mono-tag text-xs text-secondary mb-4">[ Services ]</div>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-balance">
            More than development. <br />
            <span className="text-white">We build and run your technology.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-b border-border">
          {services.map((service, index) => (
            <ProductCard 
              key={index}
              title={service.title} 
              description={service.description}
              linkText="View Solutions"
            >
              {service.icon}
            </ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
