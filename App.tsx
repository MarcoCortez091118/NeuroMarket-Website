
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientsToolsSection from './components/ClientsToolsSection';
import ProductSection from './components/ProductSection';
import UniverseSection from './components/UniverseSection';
import SuperGrokSection from './components/SuperGrokSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import NewsPage from './pages/NewsPage';
import BlogPostPage from './pages/BlogPostPage';
import { checkAndGenerateBlog } from './services/blogGenerator';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ClientsToolsSection />
      <ProductSection />
      <UniverseSection />
      <SuperGrokSection />
      <HowWeWorkSection />
      <BlogSection />
    </>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // AI Content Agent - check if a new blog is needed
    checkAndGenerateBlog();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Header scrolled={scrolled} />
              <main><Home /></main>
              <Footer />
            </>
          } />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<BlogPostPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
