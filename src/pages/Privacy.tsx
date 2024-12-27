import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-12">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Política de Privacidade</h1>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Coleta de Informações</h2>
                <p className="mb-4">
                  A IAnovar coleta informações necessárias para fornecer nossos serviços de IA, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Informações de contato (nome, e-mail, telefone)</li>
                  <li>Dados da empresa</li>
                  <li>Informações de uso dos nossos serviços</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Uso das Informações</h2>
                <p className="mb-4">
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Personalizar a experiência do usuário</li>
                  <li>Comunicar atualizações e ofertas relevantes</li>
                  <li>Garantir a segurança de nossos serviços</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Proteção de Dados</h2>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações
                  contra acesso não autorizado, alteração, divulgação ou destruição não autorizada.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Compartilhamento de Dados</h2>
                <p>
                  Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para
                  fornecer nossos serviços ou quando exigido por lei.
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

export default Privacy;
