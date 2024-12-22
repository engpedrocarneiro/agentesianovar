import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'CEO, TechSolutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    content: 'Os agentes IA da IAnovar transformaram completamente nossa operação. A eficiência aumentou em 70% e nossos clientes estão mais satisfeitos do que nunca.',
    rating: 5
  },
  {
    name: 'Ana Martinez',
    role: 'Diretora de Marketing, InnovateX',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    content: 'A automação inteligente nos permitiu escalar nossa operação sem aumentar custos. O ROI superou todas as expectativas.',
    rating: 5
  },
  {
    name: 'Roberto Santos',
    role: 'COO, DataFlex',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    content: 'A implementação foi surpreendentemente rápida e o suporte é excepcional. Os resultados começaram a aparecer já na primeira semana.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="container">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Empresas que já transformaram seus negócios com nossa tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/50 hover:border-blue-600/50 transition-all hover:transform hover:scale-105"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-blue-200 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}