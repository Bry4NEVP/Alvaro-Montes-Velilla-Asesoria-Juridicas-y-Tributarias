import React from 'react';
import { ArrowUpRight, User } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="group bg-white border border-deep-slate-blue/6 rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full"
      style={{ transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease' }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(35,49,66,0.1)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(178,34,34,0.12)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(35,49,66,0.06)';
      }}
    >
      {/* Cover Image */}
      <div className="relative overflow-hidden aspect-video bg-deep-slate-blue/5">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105 filter saturate-[0.8] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-slate-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4 glass-dark text-bone-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
          {article.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-grow">
        {/* Metadata */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-soft-slate/55">{article.date}</span>
          <span className="h-1 w-1 rounded-full bg-soft-slate/25" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-soft-slate/55">{article.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="font-editorial text-xl font-bold text-deep-slate-blue group-hover:text-corporate-red transition-colors duration-300 leading-snug line-clamp-2 mb-3 flex-grow">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-[13px] text-soft-slate leading-relaxed font-sans font-light line-clamp-2 mb-6">
          {article.summary}
        </p>

        {/* Footer */}
        <div className="pt-5 border-t border-deep-slate-blue/5 flex items-center justify-between">
          <span className="flex items-center gap-2 text-[11px] font-semibold text-soft-slate">
            <User className="h-3.5 w-3.5 text-corporate-red" />
            {article.author}
          </span>
          <div className="h-8 w-8 rounded-full bg-corporate-red/8 flex items-center justify-center group-hover:bg-corporate-red transition-colors duration-300">
            <ArrowUpRight className="h-3.5 w-3.5 text-corporate-red group-hover:text-bone-white transition-colors duration-300" />
          </div>
        </div>
      </div>
    </article>
  );
};
