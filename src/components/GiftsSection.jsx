// src/components/GiftsSection.js
import React from 'react';
import { texts } from '../data/texts';

function GiftsSection({ language }) {
  return (
    <section>
      <h2>{texts[language].giftsTitle}</h2>
      <div className="gifts-text">
        <p>{texts[language].giftsText}</p>
        <button
          style={{
            background: "#d68656",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px"
          }}
        >
          {texts[language].contributeText}
        </button>
      </div>
    </section>
  );
}

export default GiftsSection;
