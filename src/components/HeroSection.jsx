// src/components/HeroSection.js
import React, { useState, useEffect } from 'react';

function HeroSection({ language }) {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );
  const targetDate = new Date("2025-08-03T15:45:00");

  // State to hold the countdown
  const [countdown, setCountdown] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Scroll-based calculations
  const scrollRatio = Math.min(scrollY / windowHeight, 1);
  const translateYPercent = 100 - 100 * scrollRatio;

  // Determine text visibility
  const showFirstText = scrollRatio >= 0.25 && scrollRatio < 0.60;
  const showSecondText = scrollRatio >= 0.60 && scrollRatio < 0.99;
  // We won't actually get beyond 1.0 if the page doesn't scroll more than 1 window height:
  const showThirdText = scrollRatio >= 1;

  // Text content
  const firstText = language === "en" ? "We have a date!" : "¡Tenemos una fecha!";
  const secondText =
    language === "en"
      ? "Juana & Paolo\nMedellin - Colombia\nAugust 3, 2025"
      : "Juana & Paolo\nMedellín - Colombia\n3 de agosto, 2025";

  // Function to calculate countdown
  const calculateCountdown = () => {
    const now = new Date();
    if (now >= targetDate) {
      // Event has already passed
      return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calculate total months difference first
    let totalMonths =
      (targetDate.getFullYear() - now.getFullYear()) * 12 +
      (targetDate.getMonth() - now.getMonth());

    // Create a temporary date from current date advanced by totalMonths
    let tempDate = new Date(now.getTime());
    tempDate.setMonth(tempDate.getMonth() + totalMonths);

    // If tempDate surpasses targetDate, reduce one month
    if (tempDate > targetDate) {
      totalMonths -= 1;
      tempDate = new Date(now.getTime());
      tempDate.setMonth(tempDate.getMonth() + totalMonths);
    }

    // Now calculate the remainder of the time after removing full months
    let diff = targetDate.getTime() - tempDate.getTime(); // milliseconds

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return { months: totalMonths, days, hours, minutes, seconds };
  };

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    // Initial calculation
    setCountdown(calculateCountdown());

    return () => clearInterval(interval);
  }, []);

  const thirdText =
    language === "en"
      ? `Time until the big day:
${countdown.months} m, ${countdown.days} d, ${countdown.hours} h, ${countdown.minutes} m, ${countdown.seconds} s`
      : `Tiempo hasta el gran día:
${countdown.months} m, ${countdown.days} d, ${countdown.hours} h, ${countdown.minutes} m, ${countdown.seconds} s`;

  return (
    <div className="hero-container">
      <div className="hero-background"></div>
      <div
        className="hero-foreground"
        style={{ transform: `translateX(-50%) translateY(${translateYPercent}%)` }}
      >
        <img
          src="https://i.ibb.co/B26w7HC/FOTO-PARA-WEB-PAGE-NO-BACKGROUND.png"
          alt={language === "en" ? "Hero Image" : "Imagen Hero"}
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
        {secondText.split('\n').map((line, i) => (
          <div key={i}>
            <div>{line}</div>
          </div>
        ))}
        {/* You can comment this out or adjust if you don't want the live countdown in the second text */}
        <div>{thirdText.split('\n')[1]}</div>
      </div>
    </div>
  );
}

export default HeroSection;
