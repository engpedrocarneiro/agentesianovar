import React from 'react';
import { format, addDays, isEqual } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar } from 'lucide-react';

interface DatePickerProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

export function DatePicker({ selectedDate, onDateSelect }: DatePickerProps) {
  const nextFiveDays = Array.from({ length: 5 }, (_, i) => addDays(new Date(), i));

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-blue-600" />
        Selecione uma Data
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {nextFiveDays.map((date) => (
          <button
            key={date.toISOString()}
            onClick={() => onDateSelect(date)}
            className={`p-4 rounded-xl border-2 transition-all ${
              isEqual(date, selectedDate)
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <div className="text-sm text-gray-600">
              {format(date, 'EEEE', { locale: ptBR })}
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {format(date, 'd', { locale: ptBR })}
            </div>
            <div className="text-sm text-gray-600">
              {format(date, 'MMM', { locale: ptBR })}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}