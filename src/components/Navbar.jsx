// src/components/Navbar.jsx
import React from "react";
import { texts } from '../data/texts';

function NavBar({ language, onNavClick }) {
  return (
    <nav className="navbar">
      <a onClick={() => onNavClick("calendar")}>
        {texts[language].navbar.calendar}
      </a>
      <a onClick={() => onNavClick("gallery")}>
        {texts[language].navbar.gallery}
      </a>
      <a onClick={() => onNavClick("gifts")}>
        {texts[language].navbar.gifts}
      </a>
      <a onClick={() => onNavClick("recommendations")}>
        {texts[language].navbar.recommendations}
      </a>
      <a onClick={() => onNavClick("rsvp")}>
        {texts[language].navbar.rsvp}
      </a>
      <a onClick={() => onNavClick("message-board")}>
        {texts[language].navbar.messageBoard}
      </a>
    </nav>
  );
}

export default NavBar;
