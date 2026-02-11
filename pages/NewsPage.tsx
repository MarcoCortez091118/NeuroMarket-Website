
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const STATIC_BLOGS = [
  {
    id: "1",
    title: "The Architecture of Scalability: Beyond Microservices",
    summary: "How to design systems that handle massive growth without technical debt.",
    category: "Architecture",
    createdAt: new Date(),
    slug: "architecture-scalability"
  },
  {
    id: "2",
    title: "AI Integration in 2025: From Hype to ROI",
    summary: "Practical strategies for businesses to implement LLMs that actually drive revenue.",
    category: "AI",
    createdAt: new Date(),
    slug: "ai-integration-2025"
  },
  {
    id: "3",
    title: "Modern DevOps for Small Teams",
    summary: "Scaling infrastructure with minimal overhead and maximum reliability.",
    category: "Cloud",
    createdAt: new Date(),
    slug: "modern-devops"
  }
];

const NewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header scrolled={true} />
      <main className="flex-grow pt-32 pb-24">
        <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
          <div className="mb-12">
            <div className="mono-tag text-xs text-secondary mb-4">[ Archive ]</div>
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight">Technical Intel</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STATIC_BLOGS.map((blog) => (
              <Link key={blog.id} to={`/news/${blog.slug}`} className="group relative flex flex-col border border-white/10 rounded-xl p-6 hover:bg-white/[0.03] transition-all hover:border-white/30">
                <div className="aspect-[16/10] bg-white/5 rounded-lg mb-6 overflow-hidden relative">
                   <img src={`https://picsum.photos/seed/${blog.slug}/500/300`} alt={blog.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700" />
                </div>
                <div className="flex-grow space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="mono-tag text-[9px] text-secondary border border-white/10 px-2 py-0.5 rounded">{blog.category}</span>
                  </div>
                  <h3 className="text-xl font-light leading-tight group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h3>
                  <p className="text-sm text-secondary line-clamp-3 leading-relaxed">{blog.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
