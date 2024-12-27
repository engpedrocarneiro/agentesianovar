import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-blue-900 border-t border-blue-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logos/logo2ianovar.jpeg"
                alt="IAnovar - Ative o Futuro"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-blue-200">
              Transformando empresas através da inteligência artificial e automação inteligente.
            </p>
          </div>

          {/* Rest of the footer content remains the same */}
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-blue-200 hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#solucoes" className="text-blue-200 hover:text-blue-400 transition-colors">Soluções</a></li>
              <li><a href="#depoimentos" className="text-blue-200 hover:text-blue-400 transition-colors">Casos de Sucesso</a></li>
              <li><a href="#sobre" className="text-blue-200 hover:text-blue-400 transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2">
              <li><a href="#atendimento" className="text-blue-200 hover:text-blue-400 transition-colors">Atendimento ao Cliente</a></li>
              <li><a href="#vendas" className="text-blue-200 hover:text-blue-400 transition-colors">Automação de Vendas</a></li>
              <li><a href="#marketing" className="text-blue-200 hover:text-blue-400 transition-colors">Marketing Digital</a></li>
              <li><a href="#processos" className="text-blue-200 hover:text-blue-400 transition-colors">Otimização de Processos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contato">
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://wa.me/5534999983213" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-blue-200 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +55 34 99998-3213
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@ianovar.com.br" 
                  className="flex items-center text-blue-200 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  contato@ianovar.com.br
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.facebook.com/ianovar-ative-o-futuro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-200 hover:text-blue-400 transition-colors bg-blue-800/30 p-2 rounded-full hover:bg-blue-800/50"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/ia_novar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-200 hover:text-blue-400 transition-colors bg-blue-800/30 p-2 rounded-full hover:bg-blue-800/50"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/ianovar-ative-o-futuro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-200 hover:text-blue-400 transition-colors bg-blue-800/30 p-2 rounded-full hover:bg-blue-800/50"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 IAnovar. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacidade" className="text-blue-200 hover:text-blue-400 transition-colors text-sm">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-blue-200 hover:text-blue-400 transition-colors text-sm">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
