import React, { useState } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Agentes IA', href: '#agentes' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logos/logo2ianovar.jpeg"
              alt="IAnovar Logo"
              className="h-12 w-auto object-contain rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== '/') {
                      window.location.href = '/' + item.href;
                    } else {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            <button
              onClick={() => {
                if (window.location.pathname === '/sobre') {
                  window.location.href = '/#contato';
                } else {
                  const contactSection = document.getElementById('contato');
                  if (contactSection) {
                    const headerOffset = 100;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-500 transition-colors"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.location.pathname !== '/') {
                        window.location.href = '/' + item.href;
                      } else {
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <button
                onClick={() => {
                  if (window.location.pathname === '/sobre') {
                    window.location.href = '/#contato';
                  } else {
                    const contactSection = document.getElementById('contato');
                    if (contactSection) {
                      const headerOffset = 100;
                      const elementPosition = contactSection.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }
                  setIsMenuOpen(false);
                }}
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-500 transition-colors"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
