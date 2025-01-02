// src/components/Navbar.jsx
import React from "react";
import { texts } from '../data/texts';

function NavBar({ language, onNavClick }) {
  return (
    <nav className="navbar">
      <button onClick={() => onNavClick("calendar")} className="button-as-link">
        {texts[language].navbar.calendar}
      </button>
      <button onClick={() => onNavClick("gallery")}  className="button-as-link">
        {texts[language].navbar.gallery}
      </button>
      <button onClick={() => onNavClick("gifts")}  className="button-as-link">
        {texts[language].navbar.gifts}
      </button>
      <button onClick={() => onNavClick("recommendations")}  className="button-as-link">
        {texts[language].navbar.recommendations}
      </button>
      <button onClick={() => onNavClick("rsvp")}  className="button-as-link">
        {texts[language].navbar.rsvp}
      </button>
      <button onClick={() => onNavClick("message-board")}  className="button-as-link">
        {texts[language].navbar.messageBoard}
      </button>
    </nav>
  );
}

export default NavBar;
