// src/components/Navbar.jsx
import React from "react";
import texts from "../data/texts";

function Navbar({ language, onNavClick }) {
  return (
    <nav className="navbar">
      <button onClick={() => onNavClick("calendar")}>
        {texts[language].navbar.calendar}
      </button>
      <button onClick={() => onNavClick("gallery")}>
        {texts[language].navbar.gallery}
      </button>
      <button onClick={() => onNavClick("gifts")}>
        {texts[language].navbar.gifts}
      </button>
      <button onClick={() => onNavClick("recommendations")}>
        {texts[language].navbar.recommendations}
      </button>
      <button onClick={() => onNavClick("rsvp")}>
        {texts[language].navbar.rsvp}
      </button>
      <button onClick={() => onNavClick("message-board")}>
        {texts[language].navbar.messageBoard}
      </button>
    </nav>
  );
}

export default Navbar;
