export function checkEnvVariables() {
  const required = [
    'VITE_SUPABASE_URL',
    'VITE_SUPABASE_ANON_KEY',
    'VITE_GOOGLE_CLIENT_ID',
    'VITE_GOOGLE_CLIENT_SECRET',
    'VITE_GOOGLE_REDIRECT_URI',
    'VITE_GOOGLE_REFRESH_TOKEN',
    'VITE_CALENDAR_EMAIL'
  ];

  const missing = required.filter(key => !import.meta.env[key]);

  if (missing.length > 0) {
    console.error('Missing environment variables:', missing.join(', '));
    throw new Error('Missing required environment variables');
  }
}