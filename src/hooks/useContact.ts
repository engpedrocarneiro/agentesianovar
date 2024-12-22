import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export function useContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContact = async (formData: ContactForm) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('contacts')
        .insert([formData]);

      if (supabaseError) throw supabaseError;

      return true;
    } catch (e) {
      const err = e as Error;
      setError(err.message);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitContact,
    isSubmitting,
    error
  };
}