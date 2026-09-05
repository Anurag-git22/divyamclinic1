import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if valid Supabase credentials are configured
export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl.startsWith('http') &&
  !supabaseUrl.includes('your-project-id')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Submit an appointment request to Supabase appointments table
 * Table schema:
 * id uuid (default gen_random_uuid())
 * created_at timestamptz (default now())
 * name text
 * phone text
 * preferred_date date
 * preferred_time text
 * appointment_type text
 * reason text
 */
export async function submitAppointment(appointmentData) {
  const payload = {
    name: appointmentData.name.trim(),
    phone: appointmentData.phone.trim(),
    preferred_date: appointmentData.preferred_date,
    preferred_time: appointmentData.preferred_time,
    appointment_type: appointmentData.appointment_type || 'Consultation',
    reason: appointmentData.reason?.trim() || null,
  };

  // If Supabase is configured, save directly to Postgres
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .insert([payload])
        .select();

      if (error) {
        console.error('Supabase insertion error:', error);
        throw new Error(error.message || 'Failed to submit appointment to database.');
      }

      return { success: true, mode: 'database', data };
    } catch (err) {
      console.warn('Database submission failed, falling back to offline demo store:', err);
      // Fall through to simulate/save locally if backend has connection error
      saveOfflineFallback(payload);
      return { 
        success: true, 
        mode: 'fallback', 
        warning: 'Submitted in offline preview mode (Database connection failed: ' + err.message + ')' 
      };
    }
  }

  // Resilient Demo Mode: If user has not yet set their Supabase credentials,
  // save to browser localStorage for demo review and return success
  await new Promise((resolve) => setTimeout(resolve, 600)); // realistic network feel
  saveOfflineFallback(payload);

  return {
    success: true,
    mode: 'demo',
    notice: 'Demo mode active: Configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env to persist directly to Postgres.',
  };
}

function saveOfflineFallback(payload) {
  try {
    const existing = JSON.parse(localStorage.getItem('divyam_appointments') || '[]');
    existing.unshift({
      id: 'demo-' + Date.now(),
      created_at: new Date().toISOString(),
      ...payload,
    });
    localStorage.setItem('divyam_appointments', JSON.stringify(existing));
  } catch (e) {
    console.error('Local fallback storage error:', e);
  }
}
