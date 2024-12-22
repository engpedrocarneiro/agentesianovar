import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';

interface TimeSlotsProps {
  selectedDate: Date;
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
  checkAvailability: (date: string) => Promise<any[]>;
}

export function TimeSlots({ selectedDate, selectedTime, onTimeSelect, checkAvailability }: TimeSlotsProps) {
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadAvailableSlots() {
      setIsLoading(true);
      try {
        const dateStr = format(selectedDate, 'yyyy-MM-dd');
        const bookedSlots = await checkAvailability(dateStr);
        
        // Generate time slots between 9:00 and 17:00
        const slots = [];
        for (let hour = 9; hour < 17; hour++) {
          const timeStr = `${hour.toString().padStart(2, '0')}:00`;
          if (!bookedSlots.some(slot => slot.start_time === timeStr)) {
            slots.push(timeStr);
          }
        }
        setAvailableSlots(slots);
      } catch (error) {
        console.error('Error loading slots:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadAvailableSlots();
  }, [selectedDate]);

  if (isLoading) {
    return <div className="text-gray-600">Carregando horários disponíveis...</div>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-blue-600" />
        Selecione um Horário
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {availableSlots.map((time) => (
          <button
            key={time}
            onClick={() => onTimeSelect(time)}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedTime === time
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <div className="text-lg font-semibold text-gray-900">{time}</div>
          </button>
        ))}
      </div>
    </div>
  );
}