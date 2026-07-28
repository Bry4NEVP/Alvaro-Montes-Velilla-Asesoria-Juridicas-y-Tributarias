import React, { useState, useEffect, useCallback } from 'react';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { Service, Article } from '../types';
import { SERVICES, ARTICLES } from '../data';

interface HeaderProps {
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, setCurrentRoute, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<{ services: Service[]; articles: Article[] }>({ services: [], articles: [] });
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 32);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { label: 'Inicio', route: 'home' },
    { label: 'La Firma', route: 'about' },
    { label: 'Áreas de Práctica', route: 'practice' },
    { label: 'Publicaciones', route: 'resources' },
    { label: 'FAQ', route: 'faq' },
    { label: 'Contacto', route: 'contact' },
  ];

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const q = searchQuery.toLowerCase();
      const filteredServices = SERVICES.filter(
        s => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
      );
      const filteredArticles = ARTICLES.filter(
        a => a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q) || a.content.toLowerCase().includes(q)
      );
      setSearchResults({ services: filteredServices.slice(0, 3), articles: filteredArticles.slice(0, 3) });
    } else {
      setSearchResults({ services: [], articles: [] });
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
      setCurrentRoute('search');
    }
  };

  const handleResultClick = (route: string, id?: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    if (id) {
      setCurrentRoute(`${route}:${id}`);
    } else {
      setCurrentRoute(route);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(35,49,66,0.08)]'
          : 'bg-transparent'
      }`}
      style={{ borderBottom: scrolled ? '1px solid rgba(35,49,66,0.06)' : '1px solid transparent' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => { setCurrentRoute('home'); setIsMenuOpen(false); }}
            className="flex items-center text-left focus:outline-none cursor-pointer group shrink-0"
          >
            <img
              src="/Logo.png"
              alt="Alvarado Montes Velilla"
              className="h-12 w-auto object-contain transition-all duration-300 group-hover:opacity-75"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => setCurrentRoute(link.route)}
                className={`relative px-3 py-2 text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 rounded-lg cursor-pointer focus:outline-none ${
                  currentRoute === link.route
                    ? 'text-corporate-red'
                    : 'text-deep-slate-blue/70 hover:text-deep-slate-blue hover:bg-deep-slate-blue/4'
                }`}
              >
                {link.label}
                {currentRoute === link.route && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-corporate-red rounded-full"
                    style={{ animation: 'fade-in 0.3s ease-out' }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 text-deep-slate-blue/60 hover:text-deep-slate-blue hover:bg-deep-slate-blue/6 rounded-full transition-all duration-200 focus:outline-none cursor-pointer"
              aria-label="Buscar"
            >
              <Search className="h-4.5 w-4.5" />
            </button>

            {/* Client Portal */}
            <button
              onClick={() => setCurrentRoute('login')}
              className="text-[11px] font-bold uppercase tracking-[0.12em] text-deep-slate-blue border border-deep-slate-blue/20 px-5 py-2.5 rounded-full hover:bg-deep-slate-blue hover:text-bone-white hover:border-deep-slate-blue transition-all duration-300 cursor-pointer focus:outline-none"
            >
              Portal Clientes
            </button>

            {/* Consultation CTA */}
            <button
              onClick={() => setCurrentRoute('contact')}
              className="btn-accent text-[11px] px-5 py-2.5"
              style={{ borderRadius: '100px', padding: '10px 20px', fontSize: '11px' }}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Consulta
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 text-deep-slate-blue focus:outline-none rounded-lg hover:bg-deep-slate-blue/5"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 text-deep-slate-blue focus:outline-none rounded-lg hover:bg-deep-slate-blue/5"
              aria-label="Abrir Menú"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Panel */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-bone-white/98 backdrop-blur-xl border-b border-deep-slate-blue/8 shadow-[0_16px_48px_rgba(35,49,66,0.12)] z-40 py-6 animate-scale-up">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-soft-slate/60 pointer-events-none" />
              <input
                type="text"
                placeholder="Busque servicios, artículos, guías tributarias..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-deep-slate-blue/12 rounded-2xl px-5 py-4 pl-12 pr-28 text-[13px] text-deep-slate-blue placeholder-soft-slate/40 focus:border-corporate-red focus:ring-2 focus:ring-corporate-red/10 focus:outline-none transition-all duration-200 shadow-sm"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-deep-slate-blue text-bone-white hover:bg-corporate-red transition-all duration-200 px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider cursor-pointer"
              >
                Buscar
              </button>
            </form>

            {searchQuery.trim().length > 1 && (
              <div className="mt-3 bg-white rounded-2xl border border-deep-slate-blue/8 shadow-lg p-4 max-h-[380px] overflow-y-auto">
                {searchResults.services.length === 0 && searchResults.articles.length === 0 ? (
                  <p className="text-[13px] text-soft-slate text-center py-4">No se encontraron resultados.</p>
                ) : (
                  <div className="space-y-5">
                    {searchResults.services.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-corporate-red mb-2.5 px-2">Servicios</h4>
                        <ul className="divide-y divide-deep-slate-blue/5">
                          {searchResults.services.map(s => (
                            <li key={s.id}>
                              <button
                                onClick={() => handleResultClick('service-detail', s.id)}
                                className="w-full text-left py-2.5 px-3 hover:bg-bone-white/80 rounded-xl transition-colors flex items-center justify-between group cursor-pointer"
                              >
                                <div>
                                  <span className="text-[13px] font-semibold text-deep-slate-blue block">{s.title}</span>
                                  <span className="text-[11px] text-soft-slate block truncate max-w-[500px]">{s.description}</span>
                                </div>
                                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-corporate-red transition-all shrink-0 ml-2" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {searchResults.articles.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-corporate-red mb-2.5 px-2">Artículos y Guías</h4>
                        <ul className="divide-y divide-deep-slate-blue/5">
                          {searchResults.articles.map(a => (
                            <li key={a.id}>
                              <button
                                onClick={() => handleResultClick('article-detail', a.id)}
                                className="w-full text-left py-2.5 px-3 hover:bg-bone-white/80 rounded-xl transition-colors flex items-center justify-between group cursor-pointer"
                              >
                                <div>
                                  <span className="text-[13px] font-semibold text-deep-slate-blue block">{a.title}</span>
                                  <span className="text-[11px] text-soft-slate block truncate max-w-[500px]">{a.summary}</span>
                                </div>
                                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-corporate-red transition-all shrink-0 ml-2" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-bone-white/98 backdrop-blur-xl border-b border-deep-slate-blue/10 shadow-[0_24px_48px_rgba(35,49,66,0.12)] z-30 animate-fade-in">
          <div className="px-4 pt-5 pb-8 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => { setCurrentRoute(link.route); setIsMenuOpen(false); }}
                className={`flex w-full items-center justify-between py-3.5 px-5 rounded-2xl text-[13px] font-semibold tracking-wide transition-all duration-200 ${
                  currentRoute === link.route
                    ? 'bg-corporate-red text-bone-white'
                    : 'text-deep-slate-blue hover:bg-deep-slate-blue/5'
                }`}
              >
                {link.label}
                {currentRoute === link.route && <ArrowUpRight className="h-4 w-4" />}
              </button>
            ))}

            <div className="h-px bg-deep-slate-blue/8 my-4 mx-2" />

            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                onClick={() => { setCurrentRoute('login'); setIsMenuOpen(false); }}
                className="w-full text-center py-3.5 rounded-2xl border-2 border-deep-slate-blue/20 text-deep-slate-blue text-[11px] font-bold uppercase tracking-wider hover:bg-deep-slate-blue hover:text-bone-white hover:border-deep-slate-blue transition-all cursor-pointer"
              >
                Portal Clientes
              </button>
              <button
                onClick={() => { setCurrentRoute('contact'); setIsMenuOpen(false); }}
                className="w-full text-center py-3.5 rounded-2xl bg-corporate-red text-bone-white text-[11px] font-bold uppercase tracking-wider hover:bg-deep-slate-blue transition-all cursor-pointer"
              >
                Consulta
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
