import React from 'react';
import { Brain, Gauge, Lock, Globe } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-700 to-blue-900">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Tecnologia de Ponta para Impulsionar seu Negócio
            </h2>
            <p className="text-xl text-blue-100">
              Nossa plataforma combina o que há de mais avançado em IA com facilidade de uso e resultados comprovados.
            </p>
            
            {/* Floating stats card */}
            <div className="bg-blue-800/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-blue-700/50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-blue-100">Eficiência</span>
                <span className="text-blue-200 font-semibold">+85%</span>
              </div>
              <div className="w-full bg-blue-900/50 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">IA Avançada</h3>
                </div>
                <p className="text-blue-100">
                  Algoritmos de última geração para automação inteligente
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Gauge className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Alta Performance</h3>
                </div>
                <p className="text-blue-100">
                  Resultados rápidos e escaláveis para seu negócio
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Segurança Total</h3>
                </div>
                <p className="text-blue-100">
                  Proteção de dados e conformidade com LGPD
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Integração Global</h3>
                </div>
                <p className="text-blue-100">
                  Compatível com suas ferramentas favoritas
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
              alt="IA em ação"
              className="rounded-2xl w-full h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}