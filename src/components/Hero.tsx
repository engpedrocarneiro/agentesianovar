import React, { useState } from 'react';
import { ArrowRight, Bot, Zap, BarChart, Download } from 'lucide-react';
import DownloadForm from './DownloadForm';

export default function Hero() {
  const [showDownloadForm, setShowDownloadForm] = useState(false);

  const handleDemoClick = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="inicio" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/98 via-blue-800/95 to-blue-700/98"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Bot className="w-8 h-8 text-blue-200" />
            <span className="text-blue-200 font-semibold">Inteligência Artificial para Negócios</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Automatize Processos e Potencialize Resultados com IA
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Transforme sua empresa com agentes de IA personalizados que automatizam tarefas, 
            melhoram a eficiência operacional e impulsionam o crescimento do seu negócio.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 text-white">
              <Bot className="w-5 h-5 text-blue-200" />
              <span>Agentes IA Inteligentes</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Zap className="w-5 h-5 text-blue-200" />
              <span>Automação Avançada</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <BarChart className="w-5 h-5 text-blue-200" />
              <span>Resultados Mensuráveis</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleDemoClick}
              className="flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 transition-all hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              Solicite uma Demonstração
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => setShowDownloadForm(true)}
              className="flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              Baixar Materiais
              <Download className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {showDownloadForm && (
          <div className="fixed inset-0 bg-blue-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="max-w-4xl w-full relative">
              <button
                onClick={() => setShowDownloadForm(false)}
                className="absolute -top-12 right-0 text-white hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 rounded-full"
              >
                Fechar
              </button>
              <DownloadForm onClose={() => setShowDownloadForm(false)} />
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
}