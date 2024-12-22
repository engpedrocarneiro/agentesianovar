import { google } from '@googleapis/calendar';
import { OAuth2Client } from 'google-auth-library';

const SCOPES = ['https://www.googleapis.com/auth/calendar.events'];

const oauth2Client = new OAuth2Client(
  import.meta.env.VITE_GOOGLE_CLIENT_ID,
  import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
  import.meta.env.VITE_GOOGLE_REDIRECT_URI
);

// Set credentials from environment variables
oauth2Client.setCredentials({
  refresh_token: import.meta.env.VITE_GOOGLE_REFRESH_TOKEN
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

export async function createCalendarEvent(appointment: {
  date: string;
  start_time: string;
  end_time: string;
  client_name: string;
  client_email: string;
  reason: string;
}) {
  const startDateTime = `${appointment.date}T${appointment.start_time}:00`;
  const endDateTime = `${appointment.date}T${appointment.end_time}:00`;

  try {
    const event = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: {
        summary: `Demonstração IAnovar - ${appointment.client_name}`,
        description: appointment.reason,
        start: {
          dateTime: startDateTime,
          timeZone: 'America/Sao_Paulo',
        },
        end: {
          dateTime: endDateTime,
          timeZone: 'America/Sao_Paulo',
        },
        attendees: [
          { email: appointment.client_email },
          { email: import.meta.env.VITE_CALENDAR_EMAIL }
        ],
        conferenceData: {
          createRequest: {
            requestId: Math.random().toString(36).substring(7),
            conferenceSolutionKey: { type: 'hangoutsMeet' }
          }
        }
      },
      conferenceDataVersion: 1
    });

    return event.data;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw error;
  }
}