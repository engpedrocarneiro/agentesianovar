import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-900/95 backdrop-blur-sm border-t border-blue-800 p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-blue-100 text-sm">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{' '}
          <a href="/privacidade" className="text-blue-400 hover:text-blue-300">
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-400 transition-colors"
          >
            Aceitar
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-blue-400 hover:text-blue-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}