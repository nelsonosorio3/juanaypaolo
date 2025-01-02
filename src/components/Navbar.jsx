// src/components/Navbar.jsx
import React from "react";
import { texts } from '../data/texts';

function NavBar({ language, onNavClick, selectedSection }) {
  return (
    <nav className="navbar">
      <button onClick={() => onNavClick("calendar")} className={selectedSection === "calendar" ? "button-as-link button-active": "button-as-link"}>
        {texts[language].navbar.calendar}
      </button>
      <button onClick={() => onNavClick("gallery")}  className={selectedSection === "gallery" ? "button-as-link button-active": "button-as-link"}>
        {texts[language].navbar.gallery}
      </button>
      <button onClick={() => onNavClick("gifts")}  className={selectedSection === "gifts" ? "button-as-link button-active": "button-as-link"}>
        {texts[language].navbar.gifts}
      </button>
      <button onClick={() => onNavClick("recommendations")}  className={selectedSection === "recommendations" ? "button-as-link button-active": "button-as-link"}>
        {texts[language].navbar.recommendations}
      </button>
      <button onClick={() => onNavClick("rsvp")}  className={selectedSection === "rsvp" ? "button-as-link button-active": "button-as-link"}>
        {texts[language].navbar.rsvp}
      </button>
      <button onClick={() => onNavClick("message-board")}  className={selectedSection === "message-board" ? "button-as-link button-active": "button-as-link"}>
        {texts[language].navbar.messageBoard}
      </button>
    </nav>
  );
}

export default NavBar;
