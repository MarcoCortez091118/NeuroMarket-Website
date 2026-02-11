
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Header from '../components/Header';
import Footer from '../components/Footer';

const STATIC_BLOGS = [
  {
    title: "The Architecture of Scalability: Beyond Microservices",
    content: "# Scaling Beyond Microservices\n\nIn the modern era of cloud computing, microservices have become the default choice for growing businesses. However, NeuroMarket advocates for a more nuanced approach. We focus on **Modular Monoliths** and **Serverless Architectures** that reduce complexity while maintaining independent scalability.\n\n## Key Considerations\n\n- Data Isolation\n- Asynchronous Communication\n- Observability Pipelines\n\nOur engineering team builds with the future in mind.",
    category: "Architecture",
    slug: "architecture-scalability",
    createdAt: new Date()
  },
  {
    title: "AI Integration in 2025: From Hype to ROI",
    content: "# Real AI ROI\n\nArtificial Intelligence is no longer just a trend. For businesses in 2025, the focus is on implementation that drives tangible ROI. At NeuroMarket, we specialize in integrating LLMs directly into existing business workflows.\n\n### Our Process\n\n1. Identify bottlenecks\n2. Design custom agents\n3. Continuous evaluation\n\nScale with confidence.",
    category: "AI",
    slug: "ai-integration-2025",
    createdAt: new Date()
  }
];

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const blog = STATIC_BLOGS.find(b => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-light mb-6">404: Intel Not Found</h1>
        <Link to="/" className="mono-tag text-xs border border-white/20 px-8 py-3 rounded-full hover:bg-white/10 transition-colors">Return to Base</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header scrolled={true} />
      <article className="flex-grow pt-40 pb-32">
        <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-4xl">
          <header className="mb-16 space-y-6">
            <div className="flex items-center gap-4">
               <Link to="/news" className="mono-tag text-[10px] text-secondary hover:text-white transition-colors">← Intel Archive</Link>
               <span className="text-white/20">/</span>
               <span className="mono-tag text-[10px] text-primary">{blog.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]">{blog.title}</h1>
          </header>
          <div className="aspect-[21/9] bg-white/5 rounded-2xl mb-20 overflow-hidden relative">
             <img src={`https://picsum.photos/seed/${blog.slug}/1200/600`} alt={blog.title} className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
          </div>
          <div className="prose prose-invert max-w-none">
            <Markdown>{blog.content}</Markdown>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
