import React, { useState } from 'react';
import { BarChart3, Database, Globe, Layers, Settings, ShieldAlert, Users, LogOut, Plus, Edit2, Eye, BarChart, Calendar, FileText, Download } from 'lucide-react';
import { Service, Article, Resource, TeamMember } from '../types';

interface DashboardProps {
  setCurrentRoute: (route: string) => void;
  services: Service[];
  articles: Article[];
  resources: Resource[];
  team: TeamMember[];
  triggerToast: (msg: string, type: 'success' | 'info') => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setCurrentRoute, services, articles, resources, team, triggerToast }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'articles' | 'resources' | 'services' | 'team' | 'permissions' | 'analytics'>('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Inicio Panel', icon: <Database className="h-4.5 w-4.5" /> },
    { id: 'articles', label: 'Artículos / Blog', icon: <FileText className="h-4.5 w-4.5" /> },
    { id: 'resources', label: 'Recursos / PDFs', icon: <Download className="h-4.5 w-4.5" /> },
    { id: 'services', label: 'Servicios', icon: <Layers className="h-4.5 w-4.5" /> },
    { id: 'team', label: 'Equipo', icon: <Users className="h-4.5 w-4.5" /> },
    { id: 'permissions', label: 'Permisos & Roles', icon: <ShieldAlert className="h-4.5 w-4.5" /> },
    { id: 'analytics', label: 'Estadísticas', icon: <BarChart3 className="h-4.5 w-4.5" /> },
  ];

  const handleAction = (type: string) => {
    triggerToast(`Acción "${type}" bloqueada en modo Prototipo/Blueprint.`, 'info');
  };

  return (
    <div className="space-y-8 pb-24 page-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Upper header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-deep-slate-blue/5 rounded-3xl p-6 shadow-sm">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-corporate-red">ADMINISTRADOR</span>
          <h1 className="font-editorial text-3xl font-bold text-deep-slate-blue">Panel de Control AMV</h1>
          <p className="text-xs text-soft-slate font-sans font-light">
            Bienvenido, Administrador de Contenidos. Modere las publicaciones técnicas y el Portal del Cliente.
          </p>
        </div>
        <button
          onClick={() => {
            triggerToast('Sesión cerrada correctamente.', 'success');
            setCurrentRoute('login');
          }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider border border-deep-slate-blue/20 text-deep-slate-blue hover:bg-corporate-red hover:text-bone-white hover:border-corporate-red px-5 py-3 rounded-xl transition-all cursor-pointer focus:outline-none"
        >
          <LogOut className="h-4 w-4" />
          Cerrar Sesión
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Nav */}
        <aside className="lg:col-span-3 bg-white border border-deep-slate-blue/5 rounded-3xl p-6 shadow-sm space-y-2 font-sans text-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-soft-slate block px-3 mb-4">Administración</span>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full text-left py-3 px-4 rounded-xl font-bold uppercase tracking-wider transition-colors flex items-center gap-3 cursor-pointer focus:outline-none ${
                activeTab === item.id
                  ? 'bg-deep-slate-blue text-bone-white shadow-sm'
                  : 'text-deep-slate-blue hover:bg-deep-slate-blue/5'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </aside>

        {/* Tab Content Display */}
        <main className="lg:col-span-9 bg-white border border-deep-slate-blue/5 rounded-3xl p-8 shadow-sm">
          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-scale-up">
              <h2 className="font-editorial text-2xl font-bold text-deep-slate-blue border-b border-deep-slate-blue/10 pb-3">
                Resumen del Sistema
              </h2>
              
              {/* Analytics summary row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-bone-white/40 border border-deep-slate-blue/5 rounded-2xl p-6 space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-soft-slate">Visitas Mensuales</span>
                  <span className="font-editorial text-3xl font-bold text-deep-slate-blue block">12,450</span>
                  <span className="text-[10px] text-emerald-600 font-semibold">+14.2% respecto al mes anterior</span>
                </div>
                <div className="bg-bone-white/40 border border-deep-slate-blue/5 rounded-2xl p-6 space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-soft-slate">Descargas de PDFs</span>
                  <span className="font-editorial text-3xl font-bold text-deep-slate-blue block">864</span>
                  <span className="text-[10px] text-emerald-600 font-semibold">+8.5% esta semana</span>
                </div>
                <div className="bg-bone-white/40 border border-deep-slate-blue/5 rounded-2xl p-6 space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-soft-slate">Solicitudes de Reunión</span>
                  <span className="font-editorial text-3xl font-bold text-deep-slate-blue block">48</span>
                  <span className="text-[10px] text-corporate-red font-semibold">12 pendientes de revisión</span>
                </div>
              </div>

              {/* Action grid lists */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-corporate-red">Accesos Directos</h3>
                <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
                  <button 
                    onClick={() => handleAction('Nuevo Artículo')}
                    className="p-4 border border-deep-slate-blue/10 rounded-xl hover:border-corporate-red text-deep-slate-blue hover:text-corporate-red text-left transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span>Crear Nuevo Artículo</span>
                    <Plus className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleAction('Nueva Descarga')}
                    className="p-4 border border-deep-slate-blue/10 rounded-xl hover:border-corporate-red text-deep-slate-blue hover:text-corporate-red text-left transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span>Subir Guía PDF</span>
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARTICLES */}
          {activeTab === 'articles' && (
            <div className="space-y-6 animate-scale-up">
              <div className="flex justify-between items-center border-b border-deep-slate-blue/10 pb-3">
                <h2 className="font-editorial text-2xl font-bold text-deep-slate-blue">Artículos & Blog</h2>
                <button 
                  onClick={() => handleAction('Nuevo Artículo')}
                  className="bg-corporate-red text-bone-white hover:bg-deep-slate-blue px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="h-4 w-4" /> Nuevo
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-deep-slate-blue/10 text-soft-slate font-bold uppercase">
                      <th className="py-3">Título</th>
                      <th className="py-3">Categoría</th>
                      <th className="py-3">Fecha</th>
                      <th className="py-3">Estado</th>
                      <th className="py-3 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-deep-slate-blue/5">
                    {articles.map((art) => (
                      <tr key={art.id} className="hover:bg-bone-white/5 transition-colors">
                        <td className="py-3 font-semibold text-deep-slate-blue max-w-xs truncate">{art.title}</td>
                        <td className="py-3 text-soft-slate">{art.category}</td>
                        <td className="py-3 text-soft-slate">{art.date}</td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 uppercase">
                            Publicado
                          </span>
                        </td>
                        <td className="py-3 text-right space-x-2">
                          <button onClick={() => setCurrentRoute(`article-detail:${art.id}`)} className="p-1 text-soft-slate hover:text-corporate-red"><Eye className="h-4 w-4 inline" /></button>
                          <button onClick={() => handleAction(`Editar artículo: ${art.title}`)} className="p-1 text-soft-slate hover:text-corporate-red"><Edit2 className="h-4 w-4 inline" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: RESOURCES */}
          {activeTab === 'resources' && (
            <div className="space-y-6 animate-scale-up">
              <div className="flex justify-between items-center border-b border-deep-slate-blue/10 pb-3">
                <h2 className="font-editorial text-2xl font-bold text-deep-slate-blue">Recursos & PDFs</h2>
                <button 
                  onClick={() => handleAction('Nueva Descarga')}
                  className="bg-corporate-red text-bone-white hover:bg-deep-slate-blue px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="h-4 w-4" /> Subir PDF
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-deep-slate-blue/10 text-soft-slate font-bold uppercase">
                      <th className="py-3">Documento</th>
                      <th className="py-3">Categoría</th>
                      <th className="py-3">Tamaño</th>
                      <th className="py-3">Descargas</th>
                      <th className="py-3 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-deep-slate-blue/5">
                    {resources.map((res) => (
                      <tr key={res.id} className="hover:bg-bone-white/5 transition-colors">
                        <td className="py-3 font-semibold text-deep-slate-blue max-w-xs truncate">{res.title}</td>
                        <td className="py-3 text-soft-slate">{res.category}</td>
                        <td className="py-3 text-soft-slate">{res.size}</td>
                        <td className="py-3 text-deep-slate-blue font-bold">{res.downloadCount}</td>
                        <td className="py-3 text-right space-x-2">
                          <button onClick={() => setCurrentRoute(`resource-detail:${res.id}`)} className="p-1 text-soft-slate hover:text-corporate-red"><Eye className="h-4 w-4 inline" /></button>
                          <button onClick={() => handleAction(`Editar recurso: ${res.title}`)} className="p-1 text-soft-slate hover:text-corporate-red"><Edit2 className="h-4 w-4 inline" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-6 animate-scale-up">
              <div className="flex justify-between items-center border-b border-deep-slate-blue/10 pb-3">
                <h2 className="font-editorial text-2xl font-bold text-deep-slate-blue">Servicios / Portafolio</h2>
                <button 
                  onClick={() => handleAction('Nuevo Servicio')}
                  className="bg-corporate-red text-bone-white hover:bg-deep-slate-blue px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="h-4 w-4" /> Agregar
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-deep-slate-blue/10 text-soft-slate font-bold uppercase">
                      <th className="py-3">Título del Servicio</th>
                      <th className="py-3">Área de Práctica</th>
                      <th className="py-3 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-deep-slate-blue/5">
                    {services.map((srv) => (
                      <tr key={srv.id} className="hover:bg-bone-white/5 transition-colors">
                        <td className="py-3 font-semibold text-deep-slate-blue max-w-xs truncate">{srv.title}</td>
                        <td className="py-3 text-soft-slate capitalize">{srv.businessUnit}</td>
                        <td className="py-3 text-right space-x-2">
                          <button onClick={() => setCurrentRoute(`service-detail:${srv.id}`)} className="p-1 text-soft-slate hover:text-corporate-red"><Eye className="h-4 w-4 inline" /></button>
                          <button onClick={() => handleAction(`Editar servicio: ${srv.title}`)} className="p-1 text-soft-slate hover:text-corporate-red"><Edit2 className="h-4 w-4 inline" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: TEAM */}
          {activeTab === 'team' && (
            <div className="space-y-6 animate-scale-up">
              <div className="flex justify-between items-center border-b border-deep-slate-blue/10 pb-3">
                <h2 className="font-editorial text-2xl font-bold text-deep-slate-blue">Roster del Equipo</h2>
                <button 
                  onClick={() => handleAction('Nuevo Miembro')}
                  className="bg-corporate-red text-bone-white hover:bg-deep-slate-blue px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="h-4 w-4" /> Agregar Socio
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {team.map((member) => (
                  <div key={member.id} className="flex gap-4 border border-deep-slate-blue/5 rounded-xl p-4 bg-bone-white/20 items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <img src={member.image} alt={member.name} className="h-10 w-10 rounded-full object-cover" />
                      <div>
                        <h4 className="font-editorial text-sm font-bold text-deep-slate-blue">{member.name}</h4>
                        <span className="text-[10px] text-soft-slate block">{member.role}</span>
                      </div>
                    </div>
                    <button onClick={() => handleAction(`Editar miembro: ${member.name}`)} className="text-[10px] font-bold text-corporate-red hover:underline">
                      Editar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: PERMISSIONS */}
          {activeTab === 'permissions' && (
            <div className="space-y-6 animate-scale-up">
              <h2 className="font-editorial text-2xl font-bold text-deep-slate-blue border-b border-deep-slate-blue/10 pb-3">
                Permisos de Colaboradores
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-deep-slate-blue/10 text-soft-slate font-bold uppercase">
                      <th className="py-3">Usuario</th>
                      <th className="py-3">Rol</th>
                      <th className="py-3">Nivel de Acceso</th>
                      <th className="py-3 text-right">Modificar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-deep-slate-blue/5">
                    <tr>
                      <td className="py-3 font-semibold text-deep-slate-blue">Alberto Alvarado</td>
                      <td className="py-3">Administrador Principal</td>
                      <td className="py-3"><span className="text-emerald-600 font-bold">Lectura y Escritura</span></td>
                      <td className="py-3 text-right"><button onClick={() => handleAction('Modificar permisos de A. Alvarado')} className="text-corporate-red hover:underline font-semibold">Editar</button></td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-deep-slate-blue">Beatriz Montes</td>
                      <td className="py-3">Editor Principal Tributario</td>
                      <td className="py-3"><span className="text-emerald-600 font-bold">Lectura y Escritura</span></td>
                      <td className="py-3 text-right"><button onClick={() => handleAction('Modificar permisos de B. Montes')} className="text-corporate-red hover:underline font-semibold">Editar</button></td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-deep-slate-blue">Eduardo Gómez</td>
                      <td className="py-3">Colaborador / Autor</td>
                      <td className="py-3"><span className="text-blue-600 font-bold">Sólo Artículos</span></td>
                      <td className="py-3 text-right"><button onClick={() => handleAction('Modificar permisos de E. Gómez')} className="text-corporate-red hover:underline font-semibold">Editar</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 7: ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6 animate-scale-up">
              <h2 className="font-editorial text-2xl font-bold text-deep-slate-blue border-b border-deep-slate-blue/10 pb-3">
                Estadísticas de Descarga de Recursos (Julio 2026)
              </h2>

              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-soft-slate">Evolución de Descargas Semanales</span>
                {/* Mock Chart representation */}
                <div className="h-48 border border-deep-slate-blue/10 rounded-2xl p-6 bg-bone-white/35 flex items-end justify-between gap-2">
                  <div className="flex flex-col items-center flex-grow">
                    <div className="bg-corporate-red w-full rounded-t" style={{ height: '35px' }} />
                    <span className="text-[9px] text-soft-slate mt-2">Semana 1</span>
                  </div>
                  <div className="flex flex-col items-center flex-grow">
                    <div className="bg-corporate-red w-full rounded-t" style={{ height: '70px' }} />
                    <span className="text-[9px] text-soft-slate mt-2">Semana 2</span>
                  </div>
                  <div className="flex flex-col items-center flex-grow">
                    <div className="bg-corporate-red w-full rounded-t" style={{ height: '110px' }} />
                    <span className="text-[9px] text-soft-slate mt-2">Semana 3</span>
                  </div>
                  <div className="flex flex-col items-center flex-grow">
                    <div className="bg-corporate-red w-full rounded-t" style={{ height: '140px' }} />
                    <span className="text-[9px] text-soft-slate mt-2">Semana 4</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
