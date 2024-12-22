import React, { useState } from 'react';
import { format, addDays, isEqual, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar, Clock, User, Mail, MessageSquare } from 'lucide-react';
import { useSchedule } from '../hooks/useSchedule';
import { Toaster } from 'sonner';
import { DatePicker } from '../components/schedule/DatePicker';
import { TimeSlots } from '../components/schedule/TimeSlots';
import { AppointmentForm } from '../components/schedule/AppointmentForm';
import type { AppointmentFormData } from '../types/appointment';

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { checkAvailability, submitAppointment, isSubmitting } = useSchedule();

  const handleSubmit = async (formData: AppointmentFormData) => {
    if (!selectedTime) return;
    
    const [startTime] = selectedTime.split('-');
    const endTime = format(addMinutes(parseISO(`2000-01-01T${startTime}`), 30), 'HH:mm');
    
    await submitAppointment({
      ...formData,
      date: selectedDate,
      start_time: startTime,
      end_time: endTime
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Agende uma Demonstração</h1>
          
          <div className="space-y-8">
            <DatePicker 
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
            />
            
            <TimeSlots
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onTimeSelect={setSelectedTime}
              checkAvailability={checkAvailability}
            />
            
            {selectedTime && (
              <AppointmentForm
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}