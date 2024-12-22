import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface AppointmentForm {
  date: Date;
  start_time: string;
  end_time: string;
  client_name: string;
  client_email: string;
  reason: string;
}

export function useSchedule() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkAvailability = async (date: string) => {
    const { data: appointments, error } = await supabase
      .from('appointments')
      .select('start_time, end_time')
      .eq('date', date);

    if (error) throw error;
    return appointments;
  };

  const submitAppointment = async (formData: AppointmentForm) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Save to Supabase
      const { error: supabaseError } = await supabase
        .from('appointments')
        .insert([{
          date: format(formData.date, 'yyyy-MM-dd'),
          start_time: formData.start_time,
          end_time: formData.end_time,
          client_name: formData.client_name,
          client_email: formData.client_email,
          reason: formData.reason
        }]);

      if (supabaseError) throw supabaseError;

      toast.success('Agendamento realizado com sucesso!', {
        description: 'Entraremos em contato com os detalhes da reunião.'
      });

      return true;
    } catch (e) {
      const err = e as Error;
      setError(err.message);
      toast.error('Erro ao agendar reunião', {
        description: err.message
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    checkAvailability,
    submitAppointment,
    isSubmitting,
    error
  };
}