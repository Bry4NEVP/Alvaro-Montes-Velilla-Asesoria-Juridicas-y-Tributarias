import React, { useState } from 'react';
import { Article, Resource } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { FileText, Download, Search, Tag, Eye } from 'lucide-react';

interface ResourcesProps {
  articles: Article[];
  resources: Resource[];
  setCurrentRoute: (route: string) => void;
}

export const Resources: React.FC<ResourcesProps> = ({ articles, resources, setCurrentRoute }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['all', 'Tributaria', 'Derecho Corporativo', 'Precios de Transferencia', 'Seguros corporativos'];

  const filteredArticles = articles.filter(a => {
    const matchesCat = activeCategory === 'all' || a.category === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          a.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const filteredResources = resources.filter(r => {
    const matchesCat = activeCategory === 'all' || r.category === activeCategory;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-20 pb-24 page-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="pt-16 max-w-3xl space-y-6 stagger-up">
        <span className="text-xs font-bold uppercase tracking-widest text-corporate-red">CENTRO DE CONOCIMIENTO</span>
        <h1 className="font-editorial text-5xl md:text-7xl font-semibold text-deep-slate-blue leading-none">
          Biblioteca y Recursos Editoriales
        </h1>
        <p className="text-lg text-soft-slate leading-relaxed font-sans font-light">
          Consulte los análisis técnicos de nuestros socios principales, descargue guías fiscales actualizadas y manténgase informado sobre la doctrina legal.
        </p>
      </section>

      {/* Filter and Search Section */}
      <section className="bg-white border border-deep-slate-blue/5 rounded-3xl p-6 stagger-up" style={{ animationDelay: '100ms' }}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border cursor-pointer transition-all duration-300 focus:outline-none ${
                  activeCategory === cat
                    ? 'bg-deep-slate-blue border-deep-slate-blue text-bone-white shadow-sm'
                    : 'bg-bone-white/50 border-deep-slate-blue/5 text-deep-slate-blue hover:border-corporate-red/35'
                }`}
              >
                {cat === 'all' ? 'Ver Todos' : cat}
              </button>
            ))}
          </div>

          {/* Search bar inside resources */}
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="Buscar publicaciones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-bone-white border border-deep-slate-blue/10 rounded-xl px-4 py-3 pl-10 text-sm text-deep-slate-blue focus:border-corporate-red focus:ring-1 focus:ring-corporate-red focus:outline-none"
            />
            <Search className="absolute left-3 top-3.5 h-4 w-4 text-soft-slate" />
          </div>
        </div>
      </section>

      {/* Grid of Articles & Guides */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side: Articles Feed */}
        <div className="lg:col-span-8 space-y-12 stagger-up" style={{ animationDelay: '200ms' }}>
          <h2 className="font-editorial text-3xl font-semibold text-deep-slate-blue flex items-center gap-2">
            <Tag className="h-6 w-6 text-corporate-red" />
            Análisis Doctrinarios y Notas de Interés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((art) => (
              <ArticleCard 
                key={art.id} 
                article={art} 
                onClick={() => setCurrentRoute(`article-detail:${art.id}`)}
              />
            ))}
          </div>
          {filteredArticles.length === 0 && (
            <p className="text-sm text-soft-slate py-8 font-light font-sans text-center">No se encontraron artículos con el filtro seleccionado.</p>
          )}
        </div>

        {/* Right Side: Premium PDF Downloads */}
        <div className="lg:col-span-4 space-y-12 stagger-up" style={{ animationDelay: '300ms' }}>
          <h2 className="font-editorial text-3xl font-semibold text-deep-slate-blue flex items-center gap-2">
            <Download className="h-6 w-6 text-corporate-red" />
            Guías y Descargas
          </h2>
          <div className="space-y-6">
            {filteredResources.map((res) => (
              <div 
                key={res.id}
                className="bg-white border border-deep-slate-blue/5 rounded-2xl p-6 space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="h-10 w-10 bg-corporate-red/5 text-corporate-red rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-lg font-bold text-deep-slate-blue leading-snug">
                      {res.title}
                    </h3>
                    <span className="text-[10px] text-soft-slate font-sans block mt-1">
                      {res.fileType} • {res.size} • {res.downloadCount} descargas
                    </span>
                  </div>
                </div>
                <p className="text-xs text-soft-slate leading-relaxed font-sans font-light">
                  {res.description}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button 
                    onClick={() => setCurrentRoute(`resource-detail:${res.id}`)}
                    className="text-center py-2.5 rounded-lg border border-deep-slate-blue/20 text-deep-slate-blue text-xs font-bold uppercase tracking-wider hover:bg-deep-slate-blue/5 transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Previsualizar
                  </button>
                  <button 
                    onClick={() => setCurrentRoute(`resource-detail:${res.id}`)}
                    className="text-center py-2.5 rounded-lg bg-corporate-red text-bone-white text-xs font-bold uppercase tracking-wider hover:bg-deep-slate-blue transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Descargar
                  </button>
                </div>
              </div>
            ))}
            {filteredResources.length === 0 && (
              <p className="text-sm text-soft-slate py-8 font-light font-sans text-center">No se encontraron descargas con el filtro seleccionado.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
