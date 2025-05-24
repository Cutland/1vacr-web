import React, { useMemo } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

// Generate recurring Thursday events
function generateThursdayEvents(weeksAhead = 12, startHour = 19, endHour = 21) {
  const events = [];
  const today = new Date();
  // Find next Thursday
  const nextThursday = new Date(today);
  const day = nextThursday.getDay();
  const delta = (4 + 7 - day) % 7; // 4 = Thursday
  nextThursday.setDate(nextThursday.getDate() + (delta === 0 ? 7 : delta));

  for (let i = 0; i < weeksAhead; i++) {
    const start = new Date(nextThursday);
    start.setDate(nextThursday.getDate() + i * 7);
    start.setHours(startHour, 0, 0, 0);

    const end = new Date(start);
    end.setHours(endHour, 0, 0, 0);

    events.push({
      title: 'Air Operation',
      start,
      end,
    });
  }
  return events;
}

export default function OperationsCalendar() {
  // Memoize events to avoid recalculating on each render
  const events = useMemo(() => {
    const recurring = generateThursdayEvents(12, 19, 21);
    // You can mix other one-off events here
    const oneOff = [
      { title: 'Ground Training', start: new Date(2025, 4, 30, 18, 0), end: new Date(2025, 4, 30, 20, 0) },
    ];
    return [...recurring, ...oneOff];
  }, []);

  return (
    <section id="calendar" className="w-full px-4 py-12 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Operations Calendar
        </h3>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          className="rbc-calendar bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-md"
          culture="en-au"
        />
      </div>
    </section>
  );
}