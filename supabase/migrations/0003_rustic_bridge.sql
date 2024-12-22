/*
  # Add appointments and contacts tables

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key)
      - `date` (date)
      - `start_time` (time)
      - `end_time` (time)
      - `client_name` (text)
      - `client_email` (text)
      - `reason` (text)
      - `created_at` (timestamptz)
      - `status` (text) - For tracking appointment status
    
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `company` (text, optional)
      - `message` (text)
      - `created_at` (timestamptz)
      - `status` (text) - For tracking contact status

  2. Security
    - Enable RLS on both tables
    - Add policies for public access to create appointments and contacts
    - Add policies for authenticated users to view all records
*/

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  client_name text NOT NULL,
  client_email text NOT NULL,
  reason text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  CONSTRAINT valid_appointment_time CHECK (start_time < end_time)
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed'))
);

-- Enable RLS
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Policies for appointments
CREATE POLICY "Anyone can create appointments"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for contacts
CREATE POLICY "Anyone can create contacts"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS appointments_date_idx ON appointments(date);
CREATE INDEX IF NOT EXISTS appointments_status_idx ON appointments(status);
CREATE INDEX IF NOT EXISTS contacts_status_idx ON contacts(status);
CREATE INDEX IF NOT EXISTS contacts_email_idx ON contacts(email);