import React from 'react';
import { Service, Article } from '../types';
import { ArrowUpRight, Search as SearchIcon } from 'lucide-react';

interface SearchProps {
  searchQuery: string;
  services: Service[];
  articles: Article[];
  setCurrentRoute: (route: string) => void;
}

export const Search: React.FC<SearchProps> = ({ searchQuery, services, articles, setCurrentRoute }) => {
  const query = searchQuery.toLowerCase();

  const matchedServices = services.filter(
    s => s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)
  );

  const matchedArticles = articles.filter(
    a => a.title.toLowerCase().includes(query) || a.summary.toLowerCase().includes(query) || a.content.toLowerCase().includes(query)
  );

  const totalResults = matchedServices.length + matchedArticles.length;

  return (
    <div className="space-y-16 pb-24 page-fade-in max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="pt-16 space-y-6 stagger-up">
        <span className="text-xs font-bold uppercase tracking-widest text-corporate-red">BÚSQUEDA INTEGRADA</span>
        <h1 className="font-editorial text-5xl md:text-6xl font-semibold text-deep-slate-blue leading-none">
          Resultados de Búsqueda
        </h1>
        <p className="text-sm text-soft-slate leading-relaxed font-sans font-light">
          Se encontraron <span className="font-bold text-corporate-red">{totalResults}</span> coincidencias para "<span className="font-semibold text-deep-slate-blue">{searchQuery}</span>".
        </p>
      </section>

      {/* Results lists */}
      <section className="space-y-12 stagger-up" style={{ animationDelay: '100ms' }}>
        {totalResults === 0 ? (
          <div className="text-center py-20 bg-white border border-deep-slate-blue/5 rounded-3xl space-y-4">
            <SearchIcon className="h-12 w-12 text-soft-slate/40 mx-auto" />
            <p className="text-soft-slate text-sm font-sans font-light">No se encontraron resultados en el portal. Pruebe con términos generales como "tributaria", "renta" o "empresa".</p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Services Results */}
            {matchedServices.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-corporate-red border-b border-deep-slate-blue/10 pb-2">
                  Servicios y Prácticas Asociadas
                </h3>
                <ul className="divide-y divide-deep-slate-blue/5">
                  {matchedServices.map((s) => (
                    <li key={s.id} className="py-6">
                      <button
                        onClick={() => setCurrentRoute(`service-detail:${s.id}`)}
                        className="w-full text-left group cursor-pointer focus:outline-none flex justify-between items-start gap-6"
                      >
                        <div className="space-y-2">
                          <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-blue-100 text-blue-600 bg-blue-50">
                            {s.businessUnit}
                          </span>
                          <h4 className="font-editorial text-xl font-bold text-deep-slate-blue group-hover:text-corporate-red transition-colors">
                            {s.title}
                          </h4>
                          <p className="text-xs text-soft-slate leading-relaxed font-sans font-light">
                            {s.description}
                          </p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-corporate-red opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Articles Results */}
            {matchedArticles.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-corporate-red border-b border-deep-slate-blue/10 pb-2">
                  Artículos y Guías Doctrinarias
                </h3>
                <ul className="divide-y divide-deep-slate-blue/5">
                  {matchedArticles.map((a) => (
                    <li key={a.id} className="py-6">
                      <button
                        onClick={() => setCurrentRoute(`article-detail:${a.id}`)}
                        className="w-full text-left group cursor-pointer focus:outline-none flex justify-between items-start gap-6"
                      >
                        <div className="space-y-2">
                          <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-red-100 text-corporate-red bg-red-50">
                            {a.category}
                          </span>
                          <h4 className="font-editorial text-xl font-bold text-deep-slate-blue group-hover:text-corporate-red transition-colors">
                            {a.title}
                          </h4>
                          <p className="text-xs text-soft-slate leading-relaxed font-sans font-light">
                            {a.summary}
                          </p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-corporate-red opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};
