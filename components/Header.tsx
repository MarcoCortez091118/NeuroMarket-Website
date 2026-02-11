
import React from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
        <nav className="flex items-center justify-between gap-4 py-4 lg:h-20">
          <a aria-label="NeuroMarket Homepage" href="/" className="flex items-center">
            <img 
              src="https://green-dragonfly-496875.hostingersite.com/wp-content/uploads/2026/02/cropped-Diseno-sin-titulo-2.png" 
              alt="NeuroMarket" 
              className="h-10 w-auto object-contain"
            />
          </a>
          
          <ul className="ml-3 hidden flex-grow gap-4 lg:flex">
            <li><a href="#" className="text-secondary hover:text-primary transition-colors mono-tag px-3 py-1.5 text-xs">Services</a></li>
            <li><a href="#" className="text-secondary hover:text-primary transition-colors mono-tag px-3 py-1.5 text-xs">Stack</a></li>
            <li><a href="#" className="text-secondary hover:text-primary transition-colors mono-tag px-3 py-1.5 text-xs">Cloud</a></li>
            <li><a href="#" className="text-secondary hover:text-primary transition-colors mono-tag px-3 py-1.5 text-xs">AI</a></li>
            <li><a href="#" className="text-secondary hover:text-primary transition-colors mono-tag px-3 py-1.5 text-xs">Company</a></li>
            <li><a href="#" className="text-secondary hover:text-primary transition-colors mono-tag px-3 py-1.5 text-xs">Careers</a></li>
          </ul>

          <div className="flex gap-4">
            <a 
              href="mailto:contact@neuromarket.ai" 
              className="relative isolate inline-flex items-center justify-center border border-border px-6 py-2 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Contact
            </a>
            <button className="lg:hidden p-2 text-secondary hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
