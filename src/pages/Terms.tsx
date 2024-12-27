import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-12">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Termos de Uso</h1>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e usar os serviços da IAnovar, você concorda em cumprir e estar vinculado a estes
                  Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá usar nossos
                  serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Uso dos Serviços</h2>
                <p className="mb-4">
                  Nossos serviços devem ser utilizados de acordo com:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Todas as leis e regulamentos aplicáveis</li>
                  <li>As diretrizes e políticas da IAnovar</li>
                  <li>Os termos específicos de cada serviço contratado</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Propriedade Intelectual</h2>
                <p>
                  Todo o conteúdo, marcas, software, designs e outros materiais usados em nossos serviços são
                  de propriedade da IAnovar ou de seus licenciadores. Estes materiais são protegidos por leis
                  de propriedade intelectual.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Responsabilidades</h2>
                <p className="mb-4">
                  Os usuários são responsáveis por:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Manter a confidencialidade de suas credenciais de acesso</li>
                  <li>Todas as atividades realizadas em sua conta</li>
                  <li>Garantir a precisão das informações fornecidas</li>
                  <li>Usar os serviços de maneira ética e legal</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Limitação de Responsabilidade</h2>
                <p>
                  A IAnovar não será responsável por quaisquer danos indiretos, incidentais, especiais,
                  consequenciais ou punitivos, incluindo perda de lucros, resultantes do uso ou incapacidade
                  de usar nossos serviços.
                </p>
              </section>

              <div className="text-center mt-12">
                <Link 
                  to="/"
                  className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors"
                >
                  Voltar para Início
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
