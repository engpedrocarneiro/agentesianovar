import React from 'react';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'R$ 997',
    description: 'Ideal para pequenas empresas iniciando com IA',
    features: [
      '2 Agentes IA Personalizados',
      'Suporte 8/5',
      'Até 1.000 interações/mês',
      'Integrações básicas',
      'Relatórios mensais'
    ]
  },
  {
    name: 'Professional',
    price: 'R$ 2.497',
    description: 'Para empresas em crescimento',
    features: [
      '5 Agentes IA Personalizados',
      'Suporte 24/7',
      'Até 10.000 interações/mês',
      'Integrações avançadas',
      'Relatórios semanais',
      'API personalizada',
      'Treinamento da equipe'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    description: 'Soluções sob medida para grandes operações',
    features: [
      'Agentes IA ilimitados',
      'Suporte prioritário 24/7',
      'Interações ilimitadas',
      'Integrações customizadas',
      'Relatórios em tempo real',
      'API dedicada',
      'Gerente de conta exclusivo',
      'SLA garantido'
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Planos que Crescem com Seu Negócio
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades e comece a transformar sua empresa hoje
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                plan.popular
                  ? 'border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'border-blue-700/50'
              } hover:border-blue-600/50 transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-300 mb-2">{plan.price}</div>
                <p className="text-blue-100">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-100">
                    <Check className="w-5 h-5 text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${
                plan.popular
                  ? 'bg-blue-500 text-white hover:bg-blue-400'
                  : 'bg-blue-900/50 text-white hover:bg-blue-800'
              }`}>
                Começar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}