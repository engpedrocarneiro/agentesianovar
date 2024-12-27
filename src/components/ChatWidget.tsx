import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-[400px] h-[600px] flex flex-col">
          <div className="bg-blue-600 p-4 rounded-t-lg flex justify-between items-center">
            <span className="text-white font-semibold">Assistente IAnovar</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1">
            <iframe 
              src="https://dash.superagentes.ai/agents/cm56p1tku00h6wf00fxlqjbja/iframe" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allow="clipboard-write"
              className="rounded-b-lg"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 transition-colors flex items-center gap-2"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="font-medium">Fale com nosso Assistente</span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
