// src/components/GiftsSection.js
import React from 'react';
import { texts } from '../data/texts';

function GiftsSection({ language }) {
  return (
    <section>
      <h2>{texts[language].giftsTitle}</h2>
      <div className="gifts-text">
        <p>{texts[language].giftsText}</p>
        <p>{texts[language].gifts}</p>
        <img src="/images/envelops.jpg" alt="envelops" style={{ width: "300px", height: "300px" }} />
        <p>Paypal @JuaniOsorio1 </p>
        <img src="/images/paypal.jpeg" alt="paypal" style={{ width: "300px", height: "300px" }} />
        <p>Venmo @JuanaOsorio 9223</p>
        <img src="/images/venmo.jpg" alt="venmo" style={{ width: "300px", height: "300px" }} />
      </div>
    </section>
  );
}

export default GiftsSection;
