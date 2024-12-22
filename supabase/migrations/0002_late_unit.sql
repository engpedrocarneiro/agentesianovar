/*
  # Schedule management schema

  1. New Tables
    - `available_slots`
      - `id` (uuid, primary key)
      - `day_of_week` (int) - 3 (Wed) to 6 (Sat)
      - `start_time` (time)
      - `end_time` (time)
      - `is_active` (boolean)
    
    - `appointments`
      - `id` (uuid, primary key)
      - `date` (date)
      - `start_time` (time)
      - `end_time` (time)
      - `client_name` (text)
      - `client_email` (text)
      - `reason` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS
    - Policies for viewing and booking appointments
*/

-- Available time slots configuration
CREATE TABLE available_slots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  day_of_week int NOT NULL CHECK (day_of_week BETWEEN 3 AND 6),
  start_time time NOT NULL,
  end_time time NOT NULL,
  is_active boolean DEFAULT true,
  CONSTRAINT valid_time_range CHECK (start_time < end_time)
);

-- Appointments table
CREATE TABLE appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  client_name text NOT NULL,
  client_email text NOT NULL,
  reason text NOT NULL,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_appointment_time CHECK (start_time < end_time)
);

-- Enable RLS
ALTER TABLE available_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can view available slots"
  ON available_slots
  FOR SELECT
  TO anon
  USING (is_active = true);

CREATE POLICY "Anyone can view appointments"
  ON appointments
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can create appointments"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);