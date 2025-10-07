import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface ContactSubmission {
  id: string
  name: string
  email: string
  company?: string
  phone?: string
  project_type: string
  budget_range: string
  message: string
  status: 'new' | 'contacted' | 'in_progress' | 'completed' | 'rejected'
  created_at: string
  updated_at: string
}
