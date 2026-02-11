
import React from 'react';

const BlogItem: React.FC<{ date: string; title: string; description: string; category: string }> = ({ date, title, description, category }) => (
  <div className="group border-b border-border py-12 lg:py-16 first:border-t">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
      <div className="lg:w-1/4">
        <p className="mono-tag text-[10px] text-secondary">{date}</p>
      </div>
      <div className="flex-grow space-y-4">
        <h3 className="text-2xl font-light group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-secondary group-hover:text-primary transition-colors text-balance">{description}</p>
        <div className="flex items-center justify-between pt-4">
           <span className="mono-tag text-[10px] text-secondary border border-border px-2 py-0.5 rounded">{category}</span>
           <button className="mono-tag text-[10px] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-[0.2em] border border-white/20 px-4 py-1.5 rounded-full">Read</button>
        </div>
      </div>
      <div className="lg:w-1/3 aspect-[16/10] bg-white/5 rounded overflow-hidden">
        {/* Mock image placeholder with noise */}
        <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-50 relative">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/400/250')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        </div>
      </div>
    </div>
  </div>
);

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-48">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="space-y-8">
            <div className="mono-tag text-xs text-secondary">[ Blog ]</div>
            <h2 className="text-4xl lg:text-6xl font-light tracking-tight">Latest news</h2>
          </div>
          <button className="mono-tag text-xs border border-white/20 px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
            Explore more
          </button>
        </div>

        <div>
          <BlogItem 
            date="February 02, 2026" 
            title="xAI joins SpaceX" 
            description="SpaceX announced today that it has acquired xAI." 
            category="company" 
          />
          <BlogItem 
            date="January 28, 2026" 
            title="Grok Imagine API" 
            description="State-of-the-art video generation across quality, cost, and latency." 
            category="grok" 
          />
          <BlogItem 
            date="January 06, 2026" 
            title="xAI Raises $20B Series E" 
            description="xAI is rapidly accelerating its progress in building advanced AI." 
            category="company" 
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
