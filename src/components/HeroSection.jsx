// src/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import coupleIMG from '../assets/couple.png';

  // Calculate only the days left
  const calculateDaysLeft = (tar) => {
    const now = new Date();
    const diff = new Date('2025-08-03T00:00:00') - now;
    return diff <= 0 ? 0 : Math.floor(diff / (1000 * 60 * 60 * 24));
  };

function HeroSection({ language }) {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 800
  );

  const daysLeft = calculateDaysLeft();

  useEffect(() => {
    // Update scroll position
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    // Update window height
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Parallax scrolling effect
  const scrollRatio = Math.min(scrollY / windowHeight, 1);
  const translateYPercent = 100 - scrollRatio * 100;

  // Which text to show at which scroll ratio
  const showFirstText = scrollRatio >= 0.25 && scrollRatio < 0.60;
  const showSecondText = scrollRatio >= 0.60 && scrollRatio < 1.0;

  // Text content
  const firstText = language === 'en' ? 'We have a date!' : '¡Tenemos una fecha!';
  const secondText =
    language === 'en'
      ? 'Juana & Paolo\nMedellin - Colombia\nAugust 3, 2025'
      : 'Juana & Paolo\nMedellín - Colombia\n3 de agosto, 2025';

  // Single-line countdown text
  const countdownText =
    language === 'en'
      ? `${daysLeft} day${daysLeft === 1 ? '' : 's'} left`
      : `Faltan ${daysLeft} día${daysLeft === 1 ? '' : 's'}`;

  return (
    <div className="hero-container">
      {/* Parallax background (defined in CSS) */}
      <div className="hero-background"></div>

      <div
        className="hero-foreground"
        style={{
          transform: `translateX(-50%) translateY(${translateYPercent}%)`,
        }}
      >
        <img
          src={coupleIMG}
          alt={language === 'en' ? 'Hero Image' : 'Imagen Hero'}
        />
      </div>

      {/* Text overlays */}
      <div
        className="hero-text hero-text-first"
        style={{ opacity: showFirstText ? 1 : 0 }}
      >
        {firstText}
      </div>

      <div
        className="hero-text hero-text-second"
        style={{ opacity: showSecondText ? 1 : 0 }}
      >
        {/* Split the secondText by line */}
        {secondText.split('\n').map((line, i) => (
          <div key={i}>{line}</div>
        ))}

        {/* Days-only countdown */}
        <div>{countdownText}</div>
      </div>
    </div>
  );
}

export default HeroSection;
