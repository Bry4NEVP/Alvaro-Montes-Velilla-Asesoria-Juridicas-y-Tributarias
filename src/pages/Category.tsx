import React from 'react';
import { Article } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { ArrowLeft, Tag } from 'lucide-react';

interface CategoryProps {
  categoryName: string;
  articles: Article[];
  setCurrentRoute: (route: string) => void;
}

export const Category: React.FC<CategoryProps> = ({ categoryName, articles, setCurrentRoute }) => {
  const filteredArticles = articles.filter(a => 
    a.tags.some(t => t.toLowerCase() === categoryName.toLowerCase()) ||
    a.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="space-y-16 pb-24 page-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <section className="pt-8">
        <button 
          onClick={() => setCurrentRoute('resources')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-soft-slate hover:text-corporate-red transition-colors focus:outline-none cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Recursos
        </button>
      </section>

      {/* Page Header */}
      <section className="max-w-3xl space-y-6 stagger-up">
        <span className="text-xs font-bold uppercase tracking-widest text-corporate-red flex items-center gap-1.5">
          <Tag className="h-4 w-4" />
          Etiqueta / Categoría
        </span>
        <h1 className="font-editorial text-5xl md:text-6xl font-semibold text-deep-slate-blue leading-none">
          Publicaciones en "{categoryName}"
        </h1>
        <p className="text-sm text-soft-slate leading-relaxed font-sans font-light">
          Se encontraron <span className="font-bold text-corporate-red">{filteredArticles.length}</span> notas y análisis doctrinarios clasificados en esta área técnica.
        </p>
      </section>

      {/* Articles Feed Grid */}
      <section className="stagger-up" style={{ animationDelay: '100ms' }}>
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-white border border-deep-slate-blue/5 rounded-2xl">
            <p className="text-soft-slate text-sm font-sans font-light">No se encontraron artículos asociados.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <ArticleCard 
                key={art.id} 
                article={art} 
                onClick={() => setCurrentRoute(`article-detail:${art.id}`)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
