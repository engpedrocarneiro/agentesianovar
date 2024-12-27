import React from 'react';

const solutions = [
  {
    icon: '/logos/atendimento.jpeg',
    title: 'Atendimento ao Cliente',
    description: 'Automatize o suporte 24/7 com agentes IA que entendem e resolvem as necessidades dos seus clientes.',
  },
  {
    icon: '/logos/crmestrategia.jpeg',
    title: 'Automação de Vendas',
    description: 'Potencialize seu funil de vendas com agentes IA que qualificam leads e fazem follow-up automatizado.',
  },
  {
    icon: '/logos/mktautomacao.jpeg',
    title: 'Marketing Digital',
    description: 'Otimize suas campanhas com IA que personaliza conteúdo e automatiza interações em múltiplos canais.',
  },
  {
    icon: '/logos/analisesatisfacaofeedback.jpeg',
    title: 'Gestão de RH',
    description: 'Simplifique processos de recrutamento e onboarding com agentes IA especializados.',
  },
  {
    icon: '/logos/sistemaapi.jpeg',
    title: 'Automação de Processos',
    description: 'Elimine tarefas repetitivas e aumente a produtividade com automação inteligente.',
  },
  {
    icon: '/logos/estrategiasavancadas.jpeg',
    title: 'Análise de Dados',
    description: 'Tome decisões baseadas em dados com insights gerados por IA em tempo real.',
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Soluções Inteligentes para Cada Área
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Nossos agentes IA são especializados em diferentes áreas do seu negócio, 
            garantindo eficiência e resultados em cada setor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/50 hover:border-blue-600/50 transition-all"
            >
              <img 
                src={solution.icon}
                alt={solution.title}
                className="w-16 h-16 object-contain mb-6"
              />
              <h3 className="text-xl font-semibold text-white mb-3">
                {solution.title}
              </h3>
              <p className="text-blue-100">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}