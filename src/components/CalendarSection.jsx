// src/components/CalendarSection.js
import React from 'react';
import { texts } from '../data/texts';

function CalendarSection({ language }) {
  return (
    <section>
      <h2>{texts[language].scheduleTitle}</h2>
      {texts[language].scheduleItems.map((item, i) => (
        <div className="calendar-item" key={i}>
          <h3>{item.title}</h3>
          <div className="calendar-date">{item.date}</div>
          <div className="calendar-details">{item.details}</div>
        </div>
      ))}
    </section>
  );
}

export default CalendarSection;
