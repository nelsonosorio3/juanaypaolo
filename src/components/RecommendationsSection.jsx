// src/components/RecommendationsSection.js
import React from 'react';
import { texts } from '../data/texts';

function RecommendationsSection({ language }) {
  return (
    <section>
      <h2>{texts[language].recommendationsTitle}</h2>
      <div className="rec-section">
        <h4>{texts[language].hotels}</h4>
        <p>{texts[language].recStay}</p>
      </div>
      <div className="rec-section">
        <h4>{texts[language].activities}</h4>
        <p>{texts[language].recFood}</p>
      </div>
      <div className="rec-section">
        <h4>{texts[language].transportation}</h4>
        <p>{texts[language].recTrans}</p>
      </div>
    </section>
  );
}

export default RecommendationsSection;
