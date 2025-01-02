// src/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import { texts } from '../data/texts';
import coupleIMG from '../assets/couple.png';

function HeroSection({ language }) {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 800
  );
  
  // Only calculating *days* until target date
  const [daysLeft, setDaysLeft] = useState(0);

  // Adjust this for your final date/time
  const targetDate = new Date('2025-08-03T15:45:00');

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

  // Calculate only the days left
  const calculateDaysLeft = () => {
    const now = new Date();
    const diff = targetDate - now;
    return diff <= 0 ? 0 : Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  useEffect(() => {
    // Update days left every second (could be every day if you prefer)
    const intervalId = setInterval(() => {
      setDaysLeft(calculateDaysLeft());
    }, 1000);

    // Initial call
    setDaysLeft(calculateDaysLeft());

    return () => clearInterval(intervalId);
  }, []);

  // Single-line countdown text
  const countdownText =
    language === 'en'
      ? `${daysLeft} day${daysLeft === 1 ? '' : 's'}`
      : `${daysLeft} día${daysLeft === 1 ? '' : 's'}`;

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
