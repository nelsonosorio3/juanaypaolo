// src/components/RsvpSection.js
import React from 'react';
import { texts } from '../data/texts';

function RsvpSection({ language, setRsvp, handleRsvp, rsvp }) {
  return (
    <section>
      <h2>{texts[language].rsvpTitle}</h2>
      <p style={{ textAlign: "center" }}>{texts[language].rsvpPrompt}</p>
      <form className="rsvp-form" onSubmit={handleRsvp}>
        <label>{texts[language].rsvpNamePlaceholder}</label>
        <input type="text" placeholder={texts[language].rsvpNamePlaceholder} onChange={(e) => setRsvp((prev) => ({...prev, name: e.target.value}))} value={rsvp.name}/>
        <label>{texts[language].emailOrPhone}</label>
        <input type="text" placeholder={texts[language].emailOrPhone} onChange={(e) => setRsvp((prev) => ({...prev, email: e.target.value}))} value={rsvp.email}/>
        <label>{texts[language].rsvpAttendLabel}</label>
        <select onChange={(e) => setRsvp((prev) => ({...prev, attendance: e.target.value}))} value={rsvp.attendace}>
          <option value="yes">{texts[language].yes}</option>
          <option value="no">No</option>
        </select>
        <label>{texts[language].rsvpPlusOneLabel}</label>
        <select onChange={(e) => setRsvp((prev) => ({...prev, plusOne: e.target.value}))} value={rsvp.plusOne}>
          <option value="no">No</option>
          <option value="yes">{texts[language].yes}</option>
        </select>
        <input type="text" placeholder={texts[language].rsvpPlusOneNamePlaceholder} onChange={(e) => setRsvp((prev) => ({...prev, plusOneName: e.target.value}))} value={rsvp.plusOneName}/>
        <label>{texts[language].foodPreferences}</label>
        <textarea placeholder={texts[language].rsvpFoodPlaceholder} onChange={(e) => setRsvp((prev) => ({...prev, food: e.target.value}))} value={rsvp.food}></textarea>
        <button
          style={{
            background: "#d68656",
            color: "#fff",
            border: "none",
            padding: "0.5rem",
            borderRadius: "4px"
          }}
        >
          {texts[language].rsvpSubmit}
        </button>
      </form>
    </section>
  );
}

export default RsvpSection;
