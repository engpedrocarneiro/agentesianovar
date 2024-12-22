export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      appointments: {
        Row: {
          id: string
          date: string
          start_time: string
          end_time: string
          client_name: string
          client_email: string
          reason: string
          created_at: string
          status: 'pending' | 'confirmed' | 'cancelled'
        }
        Insert: {
          id?: string
          date: string
          start_time: string
          end_time: string
          client_name: string
          client_email: string
          reason: string
          created_at?: string
          status?: 'pending' | 'confirmed' | 'cancelled'
        }
        Update: {
          id?: string
          date?: string
          start_time?: string
          end_time?: string
          client_name?: string
          client_email?: string
          reason?: string
          created_at?: string
          status?: 'pending' | 'confirmed' | 'cancelled'
        }
      }
      contacts: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          company: string | null
          message: string
          created_at: string
          status: 'new' | 'contacted' | 'closed'
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone: string
          company?: string | null
          message: string
          created_at?: string
          status?: 'new' | 'contacted' | 'closed'
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          company?: string | null
          message?: string
          created_at?: string
          status?: 'new' | 'contacted' | 'closed'
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}