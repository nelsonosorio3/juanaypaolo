import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
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

  const [messageInput, setMessageInput] = useState({name: "", message: "", date: new Date().toISOString().split('T')[0].slice(5)});
  const [messages, setMessages] = useState([]);
  const audioRef = useRef(null);

  const [rsvp, setRsvp] = useState({name: '', email: '', attendance: 'yes', plusOne: 'no', plusOneName: '', food: ''});

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

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        'https://juanaypaolo-api.onrender.com/pass',
        {
          Pass: loginPassword
        }
      );
  
      if (response.status === 200) {
        setAuthorized(true);
        setLoginPassword('');
        await handleGetMessages();
      }
    } catch (error) {
      // If an error occurs (e.g., 401 Unauthorized), handle error logic
      if (error.response && error.response.data) {
        console.error(error.response.data.error);
        setLoginError(error.response.data.error);
      } else {
        console.error('An unexpected error occurred:', error);
      }
    }
  };

  const handleRsvp = async (e) => {
    e.preventDefault();
    console.log(rsvp)
    try {
      const response = await axios.post(
        'https://juanaypaolo-api.onrender.com/submit',
        rsvp
      );
      if (response.status === 200) {
        console.log('success')
      }
    } catch (error) {
      console.error("An error ocurred: ", error)
    }
  }

  const handleAddMessage = async (e) => {
    e.preventDefault();
    if (!messageInput.message.trim() || !messageInput.message.trim()) return;
    try {

      const response = await axios.post(
        'https://juanaypaolo-api.onrender.com/messages',
        messageInput
      );
      if (response.status === 200) {
        setMessageInput({name: "", message: "", date: new Date().toISOString().split('T')[0].slice(5)});
        await handleGetMessages()
      }
    } catch (error) {
      console.error("An error ocurred: ", error)
    }
  }

  const handleGetMessages = async () => {
    try {
      const response = await axios.get(
        'https://juanaypaolo-api.onrender.com/messages'
      );
      if (response.status === 200) {
        setMessages(response.data)
      }
    } catch (error) {
      console.error("An error ocurred: ", error)
    }
  }

  useEffect(() => {
    if (selectedSection === 'message-board') {
      handleGetMessages();
    }
  }, [selectedSection])

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
              <RsvpSection language={language} setRsvp={setRsvp} handleRsvp={handleRsvp} rsvp={rsvp}/>
            )}
            {selectedSection === "message-board" && (
              <MessageBoardSection
                language={language}
                messageInput={messageInput}
                setMessageInput={setMessageInput}
                messages={messages}
                handleAddMessage={handleAddMessage}
                handleGetMessages={handleGetMessages}
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
