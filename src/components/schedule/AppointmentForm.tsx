import React, { useState } from 'react';
import { User, Mail, MessageSquare } from 'lucide-react';
import type { AppointmentFormData } from '../../types/appointment';

interface AppointmentFormProps {
  onSubmit: (data: AppointmentFormData) => Promise<void>;
  isSubmitting: boolean;
}

export function AppointmentForm({ onSubmit, isSubmitting }: AppointmentFormProps) {
  const [formData, setFormData] = useState<AppointmentFormData>({
    client_name: '',
    client_email: '',
    reason: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Seus Dados</h2>
      
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          <User className="w-4 h-4" />
          Nome Completo
        </label>
        <input
          type="text"
          name="client_name"
          required
          value={formData.client_name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          <Mail className="w-4 h-4" />
          E-mail
        </label>
        <input
          type="email"
          name="client_email"
          required
          value={formData.client_email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          <MessageSquare className="w-4 h-4" />
          Motivo da Reunião
        </label>
        <textarea
          name="reason"
          required
          value={formData.reason}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Agendando...' : 'Confirmar Agendamento'}
      </button>
    </form>
  );
}