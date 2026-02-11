
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  scrolled: boolean;
  setView: (view: any) => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ scrolled, setView, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Services', view: 'services' },
    { label: 'Stack', view: 'stack' },
    { label: 'Cloud', view: 'cloud-infrastructure' },
    { label: 'AI', view: 'ai-solutions' },
    { label: 'Company', view: 'about' },
  ];

  const handleNavClick = (view: string) => {
    setView(view);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
          scrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto w-full px-6 lg:px-12">
          <nav className="flex items-center justify-between gap-4 py-4 lg:h-20">
            {/* Logo */}
            <button 
              aria-label="NeuroMarket Homepage" 
              onClick={() => handleNavClick('home')}
              className="flex items-center outline-none focus:outline-none"
            >
              <img 
                src="https://green-dragonfly-496875.hostingersite.com/wp-content/uploads/2026/02/cropped-Diseno-sin-titulo-2.png" 
                alt="NeuroMarket" 
                className="h-8 md:h-10 w-auto object-contain brightness-110"
              />
            </button>
            
            {/* Desktop Navigation */}
            <ul className="ml-8 hidden flex-grow gap-6 lg:flex">
              {navItems.map((item) => (
                <li key={item.view}>
                  <button 
                    onClick={() => handleNavClick(item.view)} 
                    className={`transition-all duration-300 mono-tag text-[10px] tracking-[0.2em] ${currentView === item.view ? 'text-white' : 'text-secondary hover:text-white'}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Actions & Hamburger */}
            <div className="flex gap-6 items-center">
              <a 
                href="mailto:contact@neuromarket.ai" 
                className="relative hidden md:inline-flex items-center justify-center border border-white/10 px-6 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-colors"
              >
                Contact
              </a>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white/80 hover:text-white transition-colors outline-none focus:outline-none lg:hidden"
                aria-label="Toggle Menu"
              >
                <div className="relative w-6 h-5">
                  <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                  <span className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black flex flex-col pt-32 pb-12 transition-all duration-700 ease-in-out lg:hidden ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex-grow flex flex-col items-center justify-center space-y-12 px-6 overflow-y-auto">
          {navItems.map((item, index) => (
            <button 
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`text-3xl font-light tracking-tighter uppercase font-sans transition-all duration-500 delay-[${index * 50}ms] ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } ${currentView === item.view ? 'text-white' : 'text-white/40 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
          
          <div className={`pt-12 transition-all duration-700 delay-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a 
              href="mailto:contact@neuromarket.ai" 
              className="border border-white/20 px-16 py-5 rounded-full font-mono text-[11px] uppercase tracking-[0.3em] bg-white/[0.03] active:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Footer in Mobile Menu */}
        <div className="text-center px-6 pt-12">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
            © 2026 NEUROMARKET
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
