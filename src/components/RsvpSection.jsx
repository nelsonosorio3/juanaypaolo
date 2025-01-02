// src/components/RsvpSection.js
import React from 'react';
import { texts } from '../data/texts';

function RsvpSection({ language }) {
  return (
    <section>
      <h2>{texts[language].rsvpTitle}</h2>
      <p style={{ textAlign: "center" }}>{texts[language].rsvpPrompt}</p>
      <form className="rsvp-form">
        <label>{texts[language].rsvpNamePlaceholder}</label>
        <input type="text" placeholder={texts[language].rsvpNamePlaceholder} />
        <label>{texts[language].emailOrPhone}</label>
        <input type="text" placeholder={texts[language].emailOrPhone} />
        <label>{texts[language].rsvpAttendLabel}</label>
        <select>
          <option value="yes">{texts[language].yes}</option>
          <option value="no">No</option>
        </select>
        <label>{texts[language].rsvpPlusOneLabel}</label>
        <select>
          <option value="no">No</option>
          <option value="yes">{texts[language].yes}</option>
        </select>
        <input type="text" placeholder={texts[language].rsvpPlusOneNamePlaceholder} />
        <label>{texts[language].foodPreferences}</label>
        <textarea placeholder={texts[language].rsvpFoodPlaceholder}></textarea>
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
