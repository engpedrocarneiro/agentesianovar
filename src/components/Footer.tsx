import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 border-t border-blue-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="https://drive.google.com/file/d/19mJpvSTaj0KijTpG7UNFgtjvfZpk98Eo/view"
                alt="IAnovar Logo"
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
              <li><a href="#casos" className="text-blue-200 hover:text-blue-400 transition-colors">Casos de Sucesso</a></li>
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
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-blue-200">+55 34 99998-3213</li>
              <li className="text-blue-200">agenciaianovar@gmail.com</li>
              <li className="text-blue-200">Uberaba, MG - Brasil</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com/ia_novar" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/profile.php?id=61561171407022" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ianovar-ative-o-futuro" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-400 transition-colors">
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
              <a href="/privacidade" className="text-blue-200 hover:text-blue-400 transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="/termos" className="text-blue-200 hover:text-blue-400 transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}