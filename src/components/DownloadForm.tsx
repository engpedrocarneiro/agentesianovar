import React, { useState } from 'react';
import { Download, FileText, Book, Bot, Loader, CheckCircle, Home, X } from 'lucide-react';

const MATERIALS = [
  {
    id: 'ebook',
    title: 'E-book: Transformando Negócios com IA',
    icon: Book,
    description: 'Guia completo sobre como a IA está revolucionando as empresas',
    filePath: '/materiais/ianovar-ebook.pdf',
    logo: '/logos/ianovar.jpg'
  },
  {
    id: 'agents',
    title: 'Catálogo de Agentes IA',
    icon: Bot,
    description: 'Conheça todos os nossos agentes IA e suas capacidades',
    filePath: '/materiais/Catalogo-Agentes.pdf',
    logo: '/logos/agents.jpeg'
  },
  {
    id: 'automations',
    title: 'Catálogo de Automações',
    icon: FileText,
    description: 'Explore nossas soluções de automação inteligente',
    filePath: '/materiais/automacao.pdf',
    logo: '/logos/data-analysis.jpeg'
  },
  {
    id: 'realestate',
    title: 'Soluções para Imobiliárias',
    icon: Home,
    description: 'Folder completo de automação e IA para o mercado imobiliário',
    filePath: '/materiais/imosmart.pdf',
    logo: '/logos/imosmart.jpeg'
  }
];

export default function DownloadForm({ onClose }: { onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    selectedMaterial: 'ebook'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Encontrar o material selecionado
      const selectedMaterial = MATERIALS.find(m => m.id === formData.selectedMaterial);
      
      if (selectedMaterial) {
        // Criar um link temporário para download
        const link = document.createElement('a');
        link.href = selectedMaterial.filePath;
        link.download = selectedMaterial.title + '.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      alert('Erro ao processar sua solicitação. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 relative max-h-[90vh] overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Download de Materiais
        </h3>
        <p className="text-gray-600">
          Preencha o formulário para acessar nossos materiais exclusivos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {MATERIALS.map((material) => (
          <label
            key={material.id}
            className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${
              formData.selectedMaterial === material.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <input
              type="radio"
              name="selectedMaterial"
              value={material.id}
              checked={formData.selectedMaterial === material.id}
              onChange={handleChange}
              className="absolute opacity-0"
            />
            <div className="flex items-center gap-3 mb-2">
              <img 
                src={material.logo} 
                alt={material.title}
                className="w-8 h-8 object-contain"
              />
              <span className="font-semibold text-gray-900">{material.title}</span>
            </div>
            <p className="text-sm text-gray-600">{material.description}</p>
          </label>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail Corporativo *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Empresa *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nome da empresa"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="(00) 00000-0000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
            Cargo *
          </label>
          <input
            type="text"
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Seu cargo"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Processando...
            </>
          ) : success ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Material Liberado!
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Baixar Material
            </>
          )}
        </button>
      </form>
    </div>
  );
}