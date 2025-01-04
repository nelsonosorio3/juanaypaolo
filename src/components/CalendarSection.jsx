// src/components/CalendarSection.js
import React from 'react';
import { texts } from '../data/texts';

function CalendarSection({ language, calendarData }) {
  return (
    <section>
      <h2>{texts[language].scheduleTitle}</h2>
      {calendarData?.map((item, i) => (
        <div className="calendar-item" key={i}>
          <h4>{item.title}</h4>
          <div className="calendar-date">{item.date}</div>
          <div className="calendar-details">{item.details}</div>
        </div>
      ))}
    </section>
  );
}

export default CalendarSection;
