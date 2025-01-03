// src/components/RecommendationsSection.js
import React from 'react';
import { texts } from '../data/texts';

function RecommendationsSection({ language }) {
  return (
    <section>
      <h2>{texts[language].recommendationsTitle}</h2>
      <div className="rec-section">
        <h4>{texts[language].arrival}</h4>
        <p>{texts[language].recArrival}</p>
      </div>
      <div className="rec-section">
        <h4>{texts[language].hotels}</h4>
        <p>{texts[language].recStay1}</p>
        <p><a href={"https://search.app/YJ5cumRcGso4GzYP8"} target={'_blank'} rel="noreferrer">{texts[language].recStay2}</a>{texts[language].recStay3}</p>
        <p>{texts[language].recStay4}</p>
        <p>{texts[language].recStay5}</p>
        <p>{texts[language].recStay6}</p>
      </div>
      <div className="rec-section">
        <h4>{texts[language].transportation}</h4>
        <p>{texts[language].recTransportation1}</p>
        <p>{texts[language].recTransportation2}</p>
      </div>
      <div className="rec-section">
        <h4>{texts[language].nightlife}</h4>
        <p>{texts[language].recNightlife1}<b>{texts[language].recNightlife2}</b>{texts[language].recNightlife3}</p>
      </div>
      <div className="rec-section">
        <h4>{texts[language].activities}</h4>
        <p>{texts[language].recActivities1}</p>
        <p>{texts[language].recActivities2}</p>
      </div>
    </section>
  );
}

export default RecommendationsSection;
