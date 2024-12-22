export interface AppointmentFormData {
  client_name: string;
  client_email: string;
  reason: string;
}

export interface Appointment extends AppointmentFormData {
  date: Date;
  start_time: string;
  end_time: string;
}