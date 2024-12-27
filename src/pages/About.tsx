import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-12">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/logos/ianovar.jpg"
                alt="IAnovar Logo"
                className="h-20 w-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Sobre Nós</h1>
            
            <div className="space-y-12">
              <div className="bg-blue-50/50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">Quem Somos</h2>
                <p className="text-gray-700 leading-relaxed">
                  A IAnovar é uma empresa pioneira em soluções de inteligência artificial, nascida da visão de
                  capacitar negócios através da tecnologia de ponta. Nossa missão é transformar o potencial da
                  IA em soluções empresariais tangíveis e mensuráveis.
                </p>
              </div>

              <div className="bg-blue-50/50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">Nossa Visão</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconhecidos globalmente como líderes em inovação de IA, moldando o futuro dos
                  negócios e criando um mundo de possibilidades ilimitadas onde a inteligência artificial e a
                  humanidade colaboram para o progresso.
                </p>
              </div>

              <div className="bg-white/80 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">O Que Fazemos</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Oferecemos consultoria estratégica, desenvolvimento e implementação de soluções de IA
                  personalizadas para empresas de médio a grande porte.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center space-x-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Otimização de processos empresariais</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Aumento da eficiência operacional</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Fornecimento de insights acionáveis</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Melhoria contínua da satisfação</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/80 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Nossa Abordagem</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mt-1">1</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">Personalização</h4>
                        <p className="text-gray-600">Soluções sob medida para cada cliente</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mt-1">2</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">Inovação Contínua</h4>
                        <p className="text-gray-600">Investimento constante em P&D</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/80 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Nossos Valores</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">Integridade</h4>
                        <p className="text-gray-600">Ética e segurança em primeiro lugar</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mt-1">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">Impacto</h4>
                        <p className="text-gray-600">Resultados reais e mensuráveis</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg shadow-xl">
                <p className="text-xl font-semibold text-white mb-4">
                  Na IAnovar, não estamos apenas implementando soluções em IA; estamos à frente, moldando
                  o futuro da inteligência empresarial e da excelência operacional.
                </p>
                <p className="text-2xl font-bold text-white">
                  Vivemos o presente. IAnovar - Ative o futuro.
                </p>
                <a 
                  href="https://ianovar.com.br/imosmartagenda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  Agendar uma Demonstração
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
