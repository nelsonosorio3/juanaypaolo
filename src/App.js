// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import { texts } from './data/texts';
import HeroSection from './components/HeroSection';
import Login from './components/Login';
import CalendarSection from './components/CalendarSection';
import GallerySection from './components/GallerySection';
import GiftsSection from './components/GiftsSection';
import RecommendationsSection from './components/RecommendationsSection';
import RsvpSection from './components/RsvpSection';
import MessageBoardSection from './components/MessageBoardSection';
import NavBar from './components/Navbar';
import song from './assets/audio/cancion.mp3'

import './App.css';


function App() {
  const [language, setLanguage] = useState("es");
  const [authorized, setAuthorized] = useState(false);
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const audioRef = useRef(null);

  const [selectedSection, setSelectedSection] = useState("calendar");

  useEffect(() => {
    if (authorized && audioRef.current) {
      const playAudio = () => {
        audioRef.current.currentTime = 56;
        audioRef.current.play();
      };

      if (audioRef.current.readyState >= 1) {
        playAudio();
      } else {
        audioRef.current.addEventListener('loadedmetadata', playAudio, { once: true });
      }
    }
  }, [authorized]);

  const handleNavClick = (section) => {
    setSelectedSection(section);
  };

  const handleAddMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    setMessages([...messages, messageInput]);
    setMessageInput("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginPassword === "colombia2025") {
      setAuthorized(true);
      setLoginError("");
    } else {
      setLoginError(texts[language].loginError);
    }
  };

  return (
    <>
      {authorized && (
        <audio
          ref={audioRef}
          src={song}
          onTimeUpdate={() => {
            if (audioRef.current && audioRef.current.currentTime >= 82) {
              audioRef.current.currentTime = 56;
            }
          }}
        />
      )}

      {!authorized ? (
        <Login
          language={language}
          loginName={loginName}
          setLoginName={setLoginName}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
          loginError={loginError}
          setLanguage={setLanguage}
          handleLogin={handleLogin}
        />
      ) : (
        <>
          <HeroSection language={language} />
          <NavBar language={language} onNavClick={handleNavClick} />

          <main>
            {selectedSection === "calendar" && (
              <CalendarSection language={language} />
            )}
            {selectedSection === "gallery" && (
              <GallerySection language={language} />
            )}
            {selectedSection === "gifts" && (
              <GiftsSection language={language} />
            )}
            {selectedSection === "recommendations" && (
              <RecommendationsSection language={language} />
            )}
            {selectedSection === "rsvp" && (
              <RsvpSection language={language} />
            )}
            {selectedSection === "message-board" && (
              <MessageBoardSection
                language={language}
                messageInput={messageInput}
                setMessageInput={setMessageInput}
                messages={messages}
                handleAddMessage={handleAddMessage}
              />
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
