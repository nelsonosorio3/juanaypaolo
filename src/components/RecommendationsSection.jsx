// src/components/RecommendationsSection.js
import React from 'react';
import { texts } from '../data/texts';
import Gallery from './Gallery.tsx';

const images = { en: [
  {src: '/images/dress_en_1.jpeg', alt: 'Dress code 1'}, 
  {src: '/images/dress_en_2.jpeg', alt: 'Dress code 2'}, 
  {src: '/images/dress_en_3.jpeg', alt: 'Dress code 3'}
], es: [
  {src: '/images/dress_es_1.png', alt: 'Dress code 1'},
  {src: '/images/dress_es_2.png', alt: 'Dress code 2'},
  {src: '/images/dress_es_3.png', alt: 'Dress code 3'}
]};

function RecommendationsSection({ language }) {

  return (
    <section>
      <h2>{texts[language].recommendationsTitle}</h2>
      <div className="rec-section">
        <h3>{texts[language].arrival}</h3>
        <p>{texts[language].recArrival}</p>
      </div>
      <div className="rec-section">
        <h3>{texts[language].hotels}</h3>
        <p>{texts[language].recStay1}</p>
        <p><a href={"https://search.app/YJ5cumRcGso4GzYP8"} target={'_blank'} rel="noreferrer">{texts[language].recStay2}</a>{texts[language].recStay3}</p>
        <p>{texts[language].recStay4}</p>
        <p>{texts[language].recStay5}</p>
        <p>{texts[language].recStay6}</p>
      </div>
      <div className="rec-section">
        <h3>{texts[language].transportation}</h3>
        <p>{texts[language].recTransportation1}</p>
        <p>{texts[language].recTransportation2}</p>
      </div>
      <div className="rec-section">
        <h3>{texts[language].nightlife}</h3>
        <p>{texts[language].recNightlife1}<b>{texts[language].recNightlife2}</b>{texts[language].recNightlife3}</p>
      </div>
      <div className="rec-section">
        <h3>{texts[language].activities}</h3>
        <p>{texts[language].recActivities1}</p>
        <p>{texts[language].recActivities2}</p>
      </div>
      <div className="rec-section">
        <h3>{texts[language].dresscode}</h3>
        <Gallery   
          images={images[language]}
          autoPlay={false}
          autoPlayInterval={15000}
          showThumbnails={true}
          showCaption={false}
        />
      </div>
    </section>
  );
}

export default RecommendationsSection;
