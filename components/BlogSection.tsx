
import React from 'react';
import { Link } from 'react-router-dom';

const MOCK_BLOGS = [
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
  }
];

const BlogItem: React.FC<any> = ({ title, summary, category, createdAt, slug }) => {
  const dateStr = createdAt.toLocaleDateString('en-US', {
    month: 'long', day: '2-digit', year: 'numeric'
  });

  return (
    <div className="group border-b border-border py-12 lg:py-16 first:border-t">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="lg:w-1/4">
          <p className="mono-tag text-[10px] text-secondary">{dateStr}</p>
        </div>
        <div className="flex-grow space-y-4">
          <Link to={`/news/${slug}`}>
            <h3 className="text-2xl font-light group-hover:text-primary transition-colors cursor-pointer">{title}</h3>
          </Link>
          <p className="text-secondary group-hover:text-primary transition-colors text-balance">{summary}</p>
          <div className="flex items-center justify-between pt-4">
             <span className="mono-tag text-[10px] text-secondary border border-border px-2 py-0.5 rounded">{category}</span>
             <Link to={`/news/${slug}`} className="mono-tag text-[10px] uppercase tracking-[0.2em] border border-white/20 px-4 py-1.5 rounded-full">Read</Link>
          </div>
        </div>
        <div className="lg:w-1/3 aspect-[16/10] bg-white/5 rounded overflow-hidden relative">
          <img src={`https://picsum.photos/seed/${slug}/600/400`} alt={title} className="w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:opacity-60 transition-opacity" />
        </div>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-48">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="space-y-8">
            <div className="mono-tag text-xs text-secondary">[ Blog ]</div>
            <h2 className="text-4xl lg:text-6xl font-light tracking-tight">Latest news</h2>
          </div>
          <Link to="/news" className="mono-tag text-xs border border-white/20 px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
            Explore more
          </Link>
        </div>
        <div>
          {MOCK_BLOGS.map((blog) => <BlogItem key={blog.id} {...blog} />)}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
