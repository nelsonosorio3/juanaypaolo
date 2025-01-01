// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import { texts } from './data/texts';
import './App.css';

function App() {
  const [language, setLanguage] = useState("es");
  const [authorized, setAuthorized] = useState(false);
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const weddingDate = new Date("2025-08-03T15:45:00");
  const [countdown, setCountdown] = useState("");

  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const audioRef = useRef(null);

  // State to track which section is currently selected
  const [selectedSection, setSelectedSection] = useState("calendar");
  
  useEffect(() => {
    if (authorized && audioRef.current) {
      // Wait a brief moment for audio to load metadata
      const playAudio = () => {
        audioRef.current.currentTime = 56; 
        audioRef.current.play();
      };
      
      // Ensure metadata is loaded before seeking
      if (audioRef.current.readyState >= 1) {
        playAudio();
      } else {
        audioRef.current.addEventListener('loadedmetadata', playAudio, { once: true });
      }
    }
  }, [authorized]);

  useEffect(() => {
    if (!authorized) return; 
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;
      if (diff <= 0) {
        setCountdown(texts[language].countdownLabel(0));
        clearInterval(timer);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        setCountdown(texts[language].countdownLabel(days));
      }
    }, 1000 * 60 * 60 * 24);
    return () => clearInterval(timer);
  }, [authorized, language]);

  function handleNavClick(section) {
    setSelectedSection(section);
  }

  function handleAddMessage(e) {
    e.preventDefault();
    if (!messageInput.trim()) return;
    setMessages([...messages, messageInput]);
    setMessageInput("");
  }

  function handleLogin(e) {
    e.preventDefault();
    // Your password validation logic
    if (loginPassword === "colombia2025") {
      setAuthorized(true);
      setLoginError("");
    } else {
      setLoginError(texts[language].loginError);
    }
  }

  return (
    <>
      {authorized && (
        <audio 
          ref={audioRef}
          src="https://pouch.jumpshare.com/preview/5FVsmVT98-rJv3nnBFK5BGo67N7YS7KcVuU8hBlkp-I87VkVqgJi-vgs3RE_jA587DH2rhYeYupp1J-DYPuxMzym97Y0VJLtmuLLt8W5CgNiXUx2lL_wYGGpcbzKe-vyXY16xcKlwby58sl4ku_FdW6yjbN-I2pg_cnoHs_AmgI.mp3"
          onTimeUpdate={() => {
            if (audioRef.current && audioRef.current.currentTime >= 82) {
              audioRef.current.currentTime = 56;
            }
          }}
        />
      )}
      {!authorized ? (
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder={texts[language].loginNamePlaceholder}
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
            />
            <label>{texts[language].loginLanguageLabel}</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
            <input
              type="password"
              placeholder={texts[language].loginPasswordPlaceholder}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button type="submit">{texts[language].loginButton}</button>
            {loginError && <div className="login-error">{loginError}</div>}
          </form>
        </div>
      ) : (
        <>
          <HeroSection language={language} />

          <nav className="navbar">
            <a onClick={() => handleNavClick("calendar")}>
              {texts[language].navbar.calendar}
            </a>
            <a onClick={() => handleNavClick("gallery")}>
              {texts[language].navbar.gallery}
            </a>
            <a onClick={() => handleNavClick("gifts")}>
              {texts[language].navbar.gifts}
            </a>
            <a onClick={() => handleNavClick("recommendations")}>
              {texts[language].navbar.recommendations}
            </a>
            <a onClick={() => handleNavClick("rsvp")}>
              {texts[language].navbar.rsvp}
            </a>
            <a onClick={() => handleNavClick("message-board")}>
              {texts[language].navbar.messageBoard}
            </a>
          </nav>

          <main>
            {selectedSection === "calendar" && (
              <section>
                <h2>{texts[language].scheduleTitle}</h2>
                {texts[language].scheduleItems.map((item, i) => (
                  <div className="calendar-item" key={i}>
                    <h3>{item.title}</h3>
                    <div className="calendar-date">{item.date}</div>
                    <div className="calendar-details">{item.details}</div>
                  </div>
                ))}
              </section>
            )}

            {selectedSection === "gallery" && (
              <section>
                <h2>{texts[language].galleryTitle}</h2>
                <div className="gallery-grid">
                  <img
                    src="https://via.placeholder.com/300?text=Photo+1"
                    alt="Gallery item"
                  />
                  <img
                    src="https://via.placeholder.com/300?text=Photo+2"
                    alt="Gallery item"
                  />
                  <img
                    src="https://via.placeholder.com/300?text=Photo+3"
                    alt="Gallery item"
                  />
                  <img
                    src="https://via.placeholder.com/300?text=Photo+4"
                    alt="Gallery item"
                  />
                  <img
                    src="https://via.placeholder.com/300?text=Photo+5"
                    alt="Gallery item"
                  />
                  <img
                    src="https://via.placeholder.com/300?text=Photo+6"
                    alt="Gallery item"
                  />
                </div>
              </section>
            )}

            {selectedSection === "gifts" && (
              <section>
                <h2>{texts[language].giftsTitle}</h2>
                <div className="gifts-text">
                  <p>{texts[language].giftsText}</p>
                  <button
                    style={{
                      background: "#d68656",
                      color: "#fff",
                      border: "none",
                      padding: "0.5rem 1rem",
                      borderRadius: "4px"
                    }}
                  >
                    {texts[language].contributeText}
                  </button>
                </div>
              </section>
            )}

            {selectedSection === "recommendations" && (
              <section>
                <h2>{texts[language].recommendationsTitle}</h2>
                <div className="rec-section">
                  <h4>Stay (Estadía)</h4>
                  <p>{texts[language].recStay}</p>
                </div>
                <div className="rec-section">
                  <h4>Food & Activities</h4>
                  <p>{texts[language].recFood}</p>
                </div>
                <div className="rec-section">
                  <h4>Transportation (Transportación)</h4>
                  <p>{texts[language].recTrans}</p>
                </div>
              </section>
            )}

            {selectedSection === "rsvp" && (
              <section>
                <h2>{texts[language].rsvpTitle}</h2>
                <p style={{ textAlign: "center" }}>{texts[language].rsvpPrompt}</p>
                <form className="rsvp-form">
                  <input type="text" placeholder={texts[language].rsvpNamePlaceholder} />
                  <label>{texts[language].rsvpAttendLabel}</label>
                  <select>
                    <option value="yes">Yes / Sí</option>
                    <option value="no">No</option>
                  </select>
                  <label>{texts[language].rsvpPlusOneLabel}</label>
                  <select>
                    <option value="no">No</option>
                    <option value="yes">Yes / Sí</option>
                  </select>
                  <input type="text" placeholder={texts[language].rsvpPlusOneNamePlaceholder} />
                  <textarea placeholder={texts[language].rsvpFoodPlaceholder}></textarea>
                  <button
                    style={{
                      background: "#d68656",
                      color: "#fff",
                      border: "none",
                      padding: "0.5rem",
                      borderRadius: "4px"
                    }}
                  >
                    {texts[language].rsvpSubmit}
                  </button>
                </form>
              </section>
            )}

            {selectedSection === "message-board" && (
              <section>
                <h2>{texts[language].msgTitle}</h2>
                <div className="message-board">
                  <form className="message-board-form" onSubmit={handleAddMessage}>
                    <input
                      type="text"
                      placeholder={texts[language].msgPlaceholder}
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <button type="submit">{texts[language].msgAddButton}</button>
                  </form>
                  <div className="message-board-list">
                    {messages.map((msg, i) => (
                      <div className="message-board-item" key={i}>
                        {msg}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </main>

          <footer>
            <p>{texts[language].footerText}</p>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
