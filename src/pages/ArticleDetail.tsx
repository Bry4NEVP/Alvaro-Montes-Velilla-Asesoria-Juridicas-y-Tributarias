import React from 'react';
import { ArrowLeft, User, Calendar, Clock, Share2, Tag, ChevronRight } from 'lucide-react';
import { Article } from '../types';

interface ArticleDetailProps {
  articleId: string;
  articles: Article[];
  setCurrentRoute: (route: string) => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ articleId, articles, setCurrentRoute }) => {
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="text-center py-32 space-y-6 max-w-7xl mx-auto px-4">
        <h1 className="font-editorial text-4xl text-deep-slate-blue">Artículo no encontrado</h1>
        <button 
          onClick={() => setCurrentRoute('resources')}
          className="text-xs font-bold uppercase tracking-wider bg-corporate-red text-bone-white px-6 py-3 rounded-lg hover:bg-deep-slate-blue transition-all"
        >
          Volver a Publicaciones
        </button>
      </div>
    );
  }

  // Related articles (different from this one)
  const relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 2);

  // Format content body paragraphs (handling basic markdown subheadings and blockquotes)
  const renderContent = (content: string) => {
    return content.split('\n\n').map((para, idx) => {
      if (para.startsWith('### ')) {
        return (
          <h3 key={idx} className="font-editorial text-2xl font-semibold text-deep-slate-blue pt-6 pb-2">
            {para.replace('### ', '')}
          </h3>
        );
      } else if (para.startsWith('> ')) {
        const text = para.replace('> ', '').replace(/"/g, '');
        const parts = text.split(' - ');
        return (
          <blockquote key={idx} className="border-l-4 border-corporate-red pl-6 py-2 my-6 font-editorial text-lg italic text-deep-slate-blue/90 bg-corporate-red/5 pr-4 rounded-r-xl">
            <p>"{parts[0]}"</p>
            {parts[1] && <span className="block text-xs font-sans font-bold uppercase tracking-wider text-corporate-red mt-2">— {parts[1]}</span>}
          </blockquote>
        );
      } else if (para.startsWith('* ')) {
        const items = para.split('\n');
        return (
          <ul key={idx} className="space-y-2 my-4">
            {items.map((item, i) => (
              <li key={i} className="text-sm text-soft-slate font-sans font-light flex gap-3 items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-corporate-red mt-2 flex-shrink-0" />
                <span>{item.replace('* ', '')}</span>
              </li>
            ))}
          </ul>
        );
      } else {
        // Render first paragraph with a drop cap
        if (idx === 0) {
          const firstChar = para.charAt(0);
          const restText = para.slice(1);
          return (
            <p key={idx} className="text-sm text-soft-slate leading-relaxed font-sans font-light text-justify">
              <span className="float-left text-5xl font-editorial font-bold text-corporate-red mr-2 mt-1.5 line-height-none">
                {firstChar}
              </span>
              {restText}
            </p>
          );
        }
        return (
          <p key={idx} className="text-sm text-soft-slate leading-relaxed font-sans font-light text-justify">
            {para}
          </p>
        );
      }
    });
  };

  return (
    <div className="space-y-16 pb-24 page-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back breadcrumb */}
      <section className="pt-8">
        <button 
          onClick={() => setCurrentRoute('resources')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-soft-slate hover:text-corporate-red transition-colors focus:outline-none cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Publicaciones
        </button>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side: Table of Contents & Social Shares */}
        <div className="lg:col-span-3 hidden lg:block space-y-8 sticky top-24 self-start">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-deep-slate-blue border-b border-deep-slate-blue/10 pb-2">
              Secciones
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-soft-slate uppercase tracking-wider">
              <li className="hover:text-corporate-red cursor-pointer">1. Resumen Ejecutivo</li>
              <li className="hover:text-corporate-red cursor-pointer">2. Puntos Críticos</li>
              <li className="hover:text-corporate-red cursor-pointer">3. Recomendaciones</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-deep-slate-blue border-b border-deep-slate-blue/10 pb-2">
              Compartir Análisis
            </h4>
            <div className="flex gap-2">
              <button className="p-2 border border-deep-slate-blue/10 rounded-lg hover:border-corporate-red text-deep-slate-blue hover:text-corporate-red transition-all cursor-pointer">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Content: The Article */}
        <article className="lg:col-span-6 space-y-8 stagger-up">
          {/* Metadata */}
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-corporate-red px-2.5 py-1 rounded-full border border-corporate-red/10 bg-corporate-red/5">
              {article.category}
            </span>
            <h1 className="font-editorial text-4xl md:text-5xl font-semibold text-deep-slate-blue leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-xs text-soft-slate pt-2">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-corporate-red" />
                Por {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Cover image */}
          <div className="aspect-video overflow-hidden rounded-3xl shadow-md bg-deep-slate-blue/5">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover filter contrast-90 saturate-75"
            />
          </div>

          {/* Body content */}
          <div className="space-y-6">
            {renderContent(article.content)}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-deep-slate-blue/5">
            <Tag className="h-4 w-4 text-soft-slate" />
            {article.tags.map((tag) => (
              <span 
                key={tag}
                onClick={() => setCurrentRoute(`category:${tag}`)}
                className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-bone-white border border-deep-slate-blue/5 text-deep-slate-blue hover:text-corporate-red hover:border-corporate-red/35 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* Right Side: Related reads */}
        <div className="lg:col-span-3 space-y-8 stagger-up" style={{ animationDelay: '200ms' }}>
          <h4 className="text-xs font-bold uppercase tracking-widest text-deep-slate-blue border-b border-deep-slate-blue/10 pb-2">
            Lecturas Relacionadas
          </h4>
          <div className="space-y-6">
            {relatedArticles.map((rel) => (
              <div 
                key={rel.id}
                onClick={() => setCurrentRoute(`article-detail:${rel.id}`)}
                className="group cursor-pointer space-y-3"
              >
                <div className="aspect-video overflow-hidden rounded-2xl bg-deep-slate-blue/5">
                  <img 
                    src={rel.image} 
                    alt={rel.title} 
                    className="w-full h-full object-cover filter contrast-90 saturate-50 group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-corporate-red">{rel.category}</span>
                <h5 className="font-editorial text-base font-bold text-deep-slate-blue group-hover:text-corporate-red transition-colors line-clamp-2 leading-snug">
                  {rel.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
