
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientsToolsSection from './components/ClientsToolsSection';
import ProductSection from './components/ProductSection';
import UniverseSection from './components/UniverseSection';
import SuperGrokSection from './components/SuperGrokSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import EnterpriseSoftwarePage from './components/EnterpriseSoftwarePage';
import FullStackWebPage from './components/FullStackWebPage';
import MobileAppPage from './components/MobileAppPage';
import APIDevelopmentPage from './components/APIDevelopmentPage';
import AISolutionsPage from './components/AISolutionsPage';
import CloudInfrastructurePage from './components/CloudInfrastructurePage';
import StackPage from './components/StackPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'home' | 'about' | 'services' | 'enterprise-software' | 'fullstack-web' | 'mobile-app' | 'api-development' | 'ai-solutions' | 'cloud-infrastructure' | 'stack'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header scrolled={scrolled} setView={setView} currentView={view} />
      <main>
        {view === 'home' && (
          <>
            <Hero />
            <ClientsToolsSection />
            <ProductSection setView={setView} />
            <UniverseSection />
            <SuperGrokSection />
            <HowWeWorkSection />
          </>
        )}
        {view === 'about' && <AboutPage />}
        {view === 'services' && <ServicesPage setView={setView} />}
        {view === 'enterprise-software' && <EnterpriseSoftwarePage />}
        {view === 'fullstack-web' && <FullStackWebPage />}
        {view === 'mobile-app' && <MobileAppPage />}
        {view === 'api-development' && <APIDevelopmentPage />}
        {view === 'ai-solutions' && <AISolutionsPage />}
        {view === 'cloud-infrastructure' && <CloudInfrastructurePage />}
        {view === 'stack' && <StackPage />}
      </main>
      <Footer setView={setView} />
    </div>
  );
};

export default App;
