// src/components/GallerySection.js
import React from 'react';
import { texts } from '../data/texts';
import photo1 from '../assets/gallery/1.jpg';
import photo2 from '../assets/gallery/2.heic';
import photo3 from '../assets/gallery/3.HEIC';
import photo4 from '../assets/gallery/4.jpeg';
import photo5 from '../assets/gallery/5.HEIC';
import photo6 from '../assets/gallery/6.jpg';
import photo7 from '../assets/gallery/7.jpg';
import photo8 from '../assets/gallery/8.HEIC';
import photo9 from '../assets/gallery/9.JPG';
import photo10 from '../assets/gallery/10.HEIC';
import photo11 from '../assets/gallery/11.HEIC';
import photo12 from '../assets/gallery/12.HEIC';
import photo13 from '../assets/gallery/13.jpg';
import photo14 from '../assets/gallery/14.HEIC';
import photo15 from '../assets/gallery/15.HEIC';
import photo16 from '../assets/gallery/16.HEIC';
import photo17 from '../assets/gallery/17.HEIC';
import photo18 from '../assets/gallery/18.HEIC';
import photo19 from '../assets/gallery/19.JPG';
import photo20 from '../assets/gallery/20.HEIC';
import photo21 from '../assets/gallery/21.jpg';
import photo22 from '../assets/gallery/22.jpg';
import photo23 from '../assets/gallery/23.jpg';
import photo24 from '../assets/gallery/24.jpg';
import photo25 from '../assets/gallery/25.HEIC';
import photo26 from '../assets/gallery/26.HEIC';
import photo27 from '../assets/gallery/27.HEIC';
import photo28 from '../assets/gallery/28.jpg';

function GallerySection({ language }) {
  return (
    <section>
      <h2>{texts[language].galleryTitle}</h2>
      <div className="gallery-grid">
        <img
          src={photo1}
          alt="Gallery item"
        />
        <img
          src={photo2}
          alt="Gallery item"
        />
        <img
          src={photo3}
          alt="Gallery item"
        />
        <img
          src={photo4}
          alt="Gallery item"
        />
                <img
          src={photo5}
          alt="Gallery item"
        />
        <img
          src={photo6}
          alt="Gallery item"
        />
        <img
          src={photo7}
          alt="Gallery item"
        />
        <img
          src={photo8}
          alt="Gallery item"
        />
        <img
          src={photo9}
          alt="Gallery item"
        />
        <img
          src={photo10}
          alt="Gallery item"
        />
        <img
          src={photo11}
          alt="Gallery item"
        />
        <img
          src={photo12}
          alt="Gallery item"
        />
                <img
          src={photo13}
          alt="Gallery item"
        />
        <img
          src={photo14}
          alt="Gallery item"
        />
        <img
          src={photo15}
          alt="Gallery item"
        />
        <img
          src={photo16}
          alt="Gallery item"
        />
                <img
          src={photo17}
          alt="Gallery item"
        />
        <img
          src={photo18}
          alt="Gallery item"
        />
                <img
          src={photo19}
          alt="Gallery item"
        />
        <img
          src={photo20}
          alt="Gallery item"
        />
        <img
          src={photo21}
          alt="Gallery item"
        />
        <img
          src={photo22}
          alt="Gallery item"
        />
        <img
          src={photo23}
          alt="Gallery item"
        />
        <img
          src={photo24}
          alt="Gallery item"
        />
        <img
          src={photo25}
          alt="Gallery item"
        />
        <img
          src={photo26}
          alt="Gallery item"
        />
        <img
          src={photo27}
          alt="Gallery item"
        />
        <img
          src={photo28}
          alt="Gallery item"
        />
      </div>
    </section>
  );
}

export default GallerySection;
