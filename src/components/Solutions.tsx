import React from 'react';
import { Bot, MessageSquare, LineChart, Zap, Users, ShieldCheck } from 'lucide-react';

const solutions = [
  {
    icon: MessageSquare,
    title: 'Atendimento ao Cliente',
    description: 'Automatize o suporte 24/7 com agentes IA que entendem e resolvem as necessidades dos seus clientes.',
  },
  {
    icon: LineChart,
    title: 'Automação de Vendas',
    description: 'Potencialize seu funil de vendas com agentes IA que qualificam leads e fazem follow-up automatizado.',
  },
  {
    icon: Zap,
    title: 'Marketing Digital',
    description: 'Otimize suas campanhas com IA que personaliza conteúdo e automatiza interações em múltiplos canais.',
  },
  {
    icon: Users,
    title: 'Gestão de RH',
    description: 'Simplifique processos de recrutamento e onboarding com agentes IA especializados.',
  },
  {
    icon: Bot,
    title: 'Automação de Processos',
    description: 'Elimine tarefas repetitivas e aumente a produtividade com automação inteligente.',
  },
  {
    icon: ShieldCheck,
    title: 'Análise de Dados',
    description: 'Tome decisões baseadas em dados com insights gerados por IA em tempo real.',
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
      <div className="container">
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
              <div className="w-12 h-12 bg-blue-700/50 rounded-xl flex items-center justify-center mb-6">
                <solution.icon className="w-6 h-6 text-blue-200" />
              </div>
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