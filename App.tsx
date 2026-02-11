
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientsToolsSection from './components/ClientsToolsSection';
import ProductSection from './components/ProductSection';
import UniverseSection from './components/UniverseSection';
import SuperGrokSection from './components/SuperGrokSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <ClientsToolsSection />
        <ProductSection />
        <UniverseSection />
        <SuperGrokSection />
        <HowWeWorkSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
