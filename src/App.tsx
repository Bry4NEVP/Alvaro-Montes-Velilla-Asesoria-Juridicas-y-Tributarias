import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Practice } from './pages/Practice';
import { ServiceDetail } from './pages/ServiceDetail';
import { Team } from './pages/Team';
import { Resources } from './pages/Resources';
import { ArticleDetail } from './pages/ArticleDetail';
import { ResourceDetail } from './pages/ResourceDetail';
import { Faq } from './pages/Faq';
import { Contact } from './pages/Contact';
import { Search } from './pages/Search';
import { Category } from './pages/Category';
import { Testimonials } from './pages/Testimonials';
import { NotFound } from './pages/NotFound';
import { ComingSoon } from './pages/ComingSoon';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

// Mock Data
import { SERVICES, TEAM, ARTICLES, RESOURCES, FAQS, TESTIMONIALS } from './data';

// Icons
import { CheckCircle, Info, X } from 'lucide-react';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'info';
}

function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  const triggerToast = (message: string, type: 'success' | 'info' = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleGlobalSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentRoute('search');
    triggerToast(`Buscando: "${query}"`, 'info');
  };

  // Route Parser & Render Page
  const renderPage = () => {
    const baseRoute = currentRoute.split(':')[0];
    const routeParam = currentRoute.split(':')[1];

    switch (baseRoute) {
      case 'home':
        return <Home setCurrentRoute={setCurrentRoute} services={SERVICES} articles={ARTICLES} testimonials={TESTIMONIALS} />;
      
      case 'about':
        return <About team={TEAM} setCurrentRoute={setCurrentRoute} />;
      
      case 'practice':
        return (
          <Practice 
            services={SERVICES} 
            setCurrentRoute={setCurrentRoute} 
            selectedFilter={currentRoute} // e.g. "practice:tax"
          />
        );
      
      case 'service-detail':
        return (
          <ServiceDetail 
            serviceId={routeParam} 
            services={SERVICES} 
            team={TEAM} 
            setCurrentRoute={setCurrentRoute} 
          />
        );
      
      case 'team':
        return <Team team={TEAM} setCurrentRoute={setCurrentRoute} />;
      
      case 'resources':
        return (
          <Resources 
            articles={ARTICLES} 
            resources={RESOURCES} 
            setCurrentRoute={setCurrentRoute} 
          />
        );
      
      case 'article-detail':
        return (
          <ArticleDetail 
            articleId={routeParam} 
            articles={ARTICLES} 
            setCurrentRoute={setCurrentRoute} 
          />
        );
      
      case 'resource-detail':
        return (
          <ResourceDetail 
            resourceId={routeParam} 
            resources={RESOURCES} 
            setCurrentRoute={setCurrentRoute} 
            triggerToast={triggerToast}
          />
        );
      
      case 'faq':
        return <Faq faqs={FAQS} setCurrentRoute={setCurrentRoute} />;
      
      case 'contact':
        return <Contact triggerToast={triggerToast} />;
      
      case 'search':
        return (
          <Search 
            searchQuery={searchQuery} 
            services={SERVICES} 
            articles={ARTICLES} 
            setCurrentRoute={setCurrentRoute} 
          />
        );
      
      case 'category':
        return (
          <Category 
            categoryName={routeParam} 
            articles={ARTICLES} 
            setCurrentRoute={setCurrentRoute} 
          />
        );
      
      case 'testimonials':
        return <Testimonials testimonials={TESTIMONIALS} setCurrentRoute={setCurrentRoute} />;
      
      case 'login':
        return <Login setCurrentRoute={setCurrentRoute} triggerToast={triggerToast} />;
      
      case 'dashboard':
        return (
          <Dashboard 
            setCurrentRoute={setCurrentRoute} 
            services={SERVICES} 
            articles={ARTICLES} 
            resources={RESOURCES} 
            team={TEAM} 
            triggerToast={triggerToast}
          />
        );
      
      case 'privacy':
        return (
          <div className="max-w-3xl mx-auto px-4 py-16 space-y-8 font-sans font-light text-xs text-soft-slate">
            <h1 className="font-editorial text-4xl font-semibold text-deep-slate-blue border-b border-deep-slate-blue/10 pb-4">Política de Privacidad</h1>
            <p className="leading-relaxed">Última actualización: Julio 2026. De conformidad con lo establecido en la Ley 1581 de 2012 de Protección de Datos Personales (Habeas Data), Alvarado Montes Velilla se compromete a salvaguardar la privacidad de sus clientes y visitantes...</p>
          </div>
        );
      
      case 'terms':
        return (
          <div className="max-w-3xl mx-auto px-4 py-16 space-y-8 font-sans font-light text-xs text-soft-slate">
            <h1 className="font-editorial text-4xl font-semibold text-deep-slate-blue border-b border-deep-slate-blue/10 pb-4">Términos y Condiciones</h1>
            <p className="leading-relaxed">Última actualización: Julio 2026. Los presentes términos y condiciones regulan el acceso y uso de la plataforma digital de Alvarado Montes Velilla. El uso de este sitio no constituye relación abogado-cliente...</p>
          </div>
        );
      
      case 'coming-soon':
        return <ComingSoon setCurrentRoute={setCurrentRoute} triggerToast={triggerToast} />;
      
      default:
        return <NotFound setCurrentRoute={setCurrentRoute} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-bone-white text-deep-slate-blue selection:bg-corporate-red selection:text-bone-white">
      <div>
        <Header 
          currentRoute={currentRoute} 
          setCurrentRoute={setCurrentRoute} 
          onSearch={handleGlobalSearch} 
        />
        <main>
          {renderPage()}
        </main>
      </div>
      
      <Footer setCurrentRoute={setCurrentRoute} />

      {/* Floating Toast Notification Box */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3 font-sans text-xs">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-[0_16px_48px_rgba(35,49,66,0.25)] text-bone-white border backdrop-blur-sm animate-scale-up ${
              toast.type === 'success' 
                ? 'bg-deep-slate-blue/95 border-emerald-500/20' 
                : 'bg-ink-dark/95 border-corporate-red/20'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0" />
            ) : (
              <Info className="h-4.5 w-4.5 text-corporate-red flex-shrink-0" />
            )}
            <p className="font-semibold text-[12px] tracking-wide">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1.5 hover:bg-bone-white/10 rounded-full cursor-pointer ml-1 text-bone-white/50 hover:text-bone-white transition-colors"
              aria-label="Cerrar notificación"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
