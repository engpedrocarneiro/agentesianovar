import React from 'react';
import { Bot, MessageSquare, LineChart, Users, Zap, Brain, Mail, Calendar, FileText, Target, Phone, Layout, Briefcase, Book, CheckCircle, Globe, Search, PenTool, Settings, UserPlus, Copy, HeartHandshake, Headphones } from 'lucide-react';

const agentCategories = [
  {
    title: 'Inbound Leads',
    agents: [
      {
        id: 'inbound-leads',
        name: 'Agente IA de INBOUND LEADS',
        description: 'Gerencia seus leads de entrada 24 horas por dia, aplicando suas regras de negócio e distribuindo-os de forma personalizada.',
        benefits: [
          'Gerenciamento 24/7 de leads',
          'Distribuição personalizada',
          'Otimização do fluxo inbound',
          'Zero perda de oportunidades'
        ],
        icon: MessageSquare
      },
      {
        id: 'follow-up',
        name: 'Agente IA de Follow-up Personalizado',
        description: 'Mantém o engajamento constante com seus leads, realizando follow-ups personalizados de acordo com sua estratégia de comunicação.',
        benefits: [
          'Aumenta taxa de conversão',
          'Acompanhamento automático',
          'Comunicação personalizada',
          'Integração com CRM'
        ],
        icon: Mail
      },
      {
        id: 'scheduling',
        name: 'Agente IA de Agendamentos',
        description: 'Otimiza sua agenda comercial, marcando reuniões e compromissos automaticamente, maximizando as conversões.',
        benefits: [
          'Redução de tempo em agendamentos',
          'Minimização de conflitos',
          'Sincronização com calendários',
          'Melhor experiência do cliente'
        ],
        icon: Calendar
      }
    ]
  },
  {
    title: 'Prospecção Outbound',
    agents: [
      {
        id: 'outbound-prospection',
        name: 'Agente IA de PROSPECÇÃO OUTBOUND',
        description: 'Automatiza a prospecção ativa de novos clientes, identificando e abordando potenciais clientes de forma eficiente.',
        benefits: [
          'Prospecção automatizada',
          'Identificação de leads qualificados',
          'Abordagem personalizada',
          'Escalabilidade do processo'
        ],
        icon: Target
      },
      {
        id: 'sdr',
        name: 'Agente IA SDR',
        description: 'Realiza o primeiro contato com leads outbound, qualifica oportunidades e agenda reuniões para a equipe de vendas.',
        benefits: [
          'Qualificação automática de leads',
          'Agendamento de reuniões',
          'Follow-up consistente',
          'Pipeline sempre atualizado'
        ],
        icon: Phone
      },
      {
        id: 'bdr',
        name: 'Agente IA BDR',
        description: 'Focado em desenvolver negócios, este agente acelera seu processo de vendas específico e aumenta as conversões.',
        benefits: [
          'Desenvolvimento de negócios',
          'Relacionamentos estratégicos',
          'Aumento do ticket médio',
          'Expansão de mercado'
        ],
        icon: Briefcase
      }
    ]
  },
  {
    title: 'Conteúdo e Marketing',
    agents: [
      {
        id: 'content-manager',
        name: 'Agente IA de CONTEÚDO',
        description: 'Gerencia e otimiza toda a estratégia de conteúdo digital da sua empresa.',
        benefits: [
          'Criação de conteúdo estratégico',
          'Otimização para SEO',
          'Gestão de redes sociais',
          'Análise de performance'
        ],
        icon: PenTool
      },
      {
        id: 'social-media',
        name: 'Agente IA para Redes Sociais',
        description: 'Desenvolve e gerencia conteúdo para suas redes sociais, mantendo engajamento constante.',
        benefits: [
          'Posts otimizados',
          'Calendário editorial',
          'Monitoramento de métricas',
          'Engajamento orgânico'
        ],
        icon: Globe
      },
      {
        id: 'seo',
        name: 'Agente IA para SEO',
        description: 'Otimiza seu conteúdo para mecanismos de busca, aumentando sua visibilidade orgânica.',
        benefits: [
          'Análise de palavras-chave',
          'Otimização on-page',
          'Link building',
          'Relatórios de performance'
        ],
        icon: Search
      }
    ]
  },
  {
    title: 'Agentes Especiais',
    agents: [
      {
        id: 'clone',
        name: 'Agente Clone',
        description: 'Atua como uma extensão do profissional, replicando tarefas e decisões com base em parâmetros definidos.',
        benefits: [
          'Multiplicação de produtividade',
          'Consistência nas ações',
          'Personalização avançada',
          'Aprendizado contínuo'
        ],
        icon: Copy
      },
      {
        id: 'hr',
        name: 'Agente RH',
        description: 'Automatiza processos de recrutamento, seleção e gestão de colaboradores.',
        benefits: [
          'Recrutamento otimizado',
          'Onboarding automatizado',
          'Gestão de performance',
          'Feedback contínuo'
        ],
        icon: UserPlus
      },
      {
        id: 'support',
        name: 'Agente Especialista em Atendimento',
        description: 'Oferece suporte ao cliente 24/7, resolvendo dúvidas e problemas técnicos básicos.',
        benefits: [
          'Atendimento ininterrupto',
          'Resolução rápida',
          'Escalamento inteligente',
          'Satisfação do cliente'
        ],
        icon: HeartHandshake
      }
    ]
  }
];

export default function AgentDetails() {
  return (
    <section id="agentes" className="py-20 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Bot className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossos Agentes IA
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Conheça nossa equipe de agentes IA especializados, projetados para transformar 
            e otimizar cada aspecto do seu negócio.
          </p>
        </div>

        {agentCategories.map((category, index) => (
          <div key={index} className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.agents.map((agent) => (
                <div
                  key={agent.id}
                  className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/50 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-blue-700/50 rounded-xl flex items-center justify-center mb-6">
                    <agent.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    {agent.name}
                  </h4>
                  <p className="text-blue-100 mb-6">
                    {agent.description}
                  </p>
                  <ul className="space-y-3">
                    {agent.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-blue-200">
                        <CheckCircle className="w-5 h-5 text-blue-400" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 transition-all hover:transform hover:scale-105"
          >
            Solicite uma Demonstração
          </button>
        </div>
      </div>
    </section>
  );
}