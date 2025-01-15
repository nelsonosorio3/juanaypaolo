import React, { useState, useEffect, useRef, useCallback } from 'react';
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
import song from './assets/audio/cancion.mp3';
import logo from './assets/logo.png';

import './App.css';

function App() {
  const [language, setLanguage] = useState("es");
  const [authorized, setAuthorized] = useState(false);
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [messageInput, setMessageInput] = useState({
    name: "",
    message: "",
    date: new Date().toISOString().split('T')[0].slice(5),
  });
  const [messages, setMessages] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const audioRef = useRef(null);

  const [rsvp, setRsvp] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: 'yes',
    plusOne: 'no',
    plusOneName: '',
    welcomePart: 'no',
    plusOneWelcomeParty: 'no',
    food: ''
  });

  const [selectedSection, setSelectedSection] = useState("calendar");

  // === NEW STATES FOR LOADER AND SNACKBAR ===
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success', // or 'error'
  });

  // Close snackbar after 3 seconds automatically
  useEffect(() => {
    if (snackbar.open) {
      const timer = setTimeout(() => {
        setSnackbar((prev) => ({ ...prev, open: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [snackbar.open]);

  // Audio effect
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

  // === UPDATED handleLogin WITH LOADER & SNACKBAR ===
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // show loader

    try {
      const response = await axios.post('https://juanaypaolo-api.onrender.com/pass', {
        Pass: loginPassword,
      });

      if (response.status === 200) {
        setAuthorized(true);
        setLoginPassword('');
        await handleGetMessages();

        // Show success snackbar
        setSnackbar({
          open: true,
          message: texts[language].loginSuccess || 'Login successful!',
          severity: 'success',
        });
      }
    } catch (error) {
      // Show error message in snackbar if any error occurs
      setSnackbar({
        open: true,
        message:
          (error.response && error.response.data && error.response.data.error) ||
          texts[language].loginError ||
          'An unexpected error occurred',
        severity: 'error',
      });
      if (error.response && error.response.data) {
        setLoginError(error.response.data.error);
      } else {
        console.error('An unexpected error occurred:', error);
      }
    } finally {
      setLoading(false); // hide loader
    }
  };

  // === UPDATED handleRsvp WITH LOADER & SNACKBAR ===
  const handleRsvp = async (e) => {
    e.preventDefault();
    if (
      rsvp.name.trim().length < 5 ||
      rsvp.email.trim().length < 5 ||
      (rsvp.plusOne === 'yes' && rsvp.plusOneName.trim().length < 3)
    ) {
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post('https://juanaypaolo-api.onrender.com/submit', rsvp);
      if (response.status === 200) {
        setRsvp({
          name: "",
          email: "",
          attendance: "yes",
          plusOne: "no",
          plusOneName: "",
          food: ""
        });

        setSnackbar({
          open: true,
          message: texts[language].rsvpSuccess || 'RSVP submitted!',
          severity: 'success',
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: texts[language].rsvpError || 'Error submitting RSVP',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  // === UPDATED handleAddMessage WITH LOADER & SNACKBAR ===
  const handleAddMessage = async (e) => {
    e.preventDefault();
    if (!messageInput.message.trim() || !messageInput.name.trim()) return;

    setLoading(true);

    try {
      const response = await axios.post('https://juanaypaolo-api.onrender.com/messages', messageInput);
      if (response.status === 200) {
        setMessageInput({
          name: "",
          message: "",
          date: new Date().toISOString().split('T')[0].slice(5),
        });
        await handleGetMessages();

        setSnackbar({
          open: true,
          message: texts[language].messageSuccess || 'Message posted!',
          severity: 'success',
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: texts[language].messageError || 'Error posting message',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  // === UPDATED handleGetMessages WITH LOADER & SNACKBAR (optional) ===
  const handleGetMessages = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://juanaypaolo-api.onrender.com/messages');
      if (response.status === 200) {
        setMessages(response.data);
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: texts[language].fetchMessagesError || 'Error fetching messages',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  }, [language]);

  useEffect(() => {
    if (selectedSection === 'message-board') {
      handleGetMessages();
    }
  }, [selectedSection, handleGetMessages]);

  const handleGetCalendar = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://juanaypaolo-api.onrender.com/calendar?lang=${language}`);
      if (response.status === 200) {
        setCalendarData(response.data);
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: texts[language].fetchCalendarError || 'Error fetching messages',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  }, [language]);

  useEffect(() => {
    if (authorized) {
      handleGetCalendar()
    }
  }, [handleGetCalendar, authorized, language])

  return (
    <>
      {/* === LOADER OVERLAY === */}
      {loading && (
        <div className="loader-overlay">
          <div className="loader-spinner"></div>
          <p>{texts[language].loading || 'Loading...'}</p>
        </div>
      )}

      {/* === SNACKBAR === */}
      {snackbar.open && (
        <div className={`snackbar ${snackbar.severity}`}>
          {snackbar.message}
        </div>
      )}

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
          <NavBar language={language} onNavClick={handleNavClick} selectedSection={selectedSection} />

          <main>
            {selectedSection === "calendar" && <CalendarSection language={language} calendarData={calendarData} />}
            {selectedSection === "gallery" && <GallerySection language={language} />}
            {selectedSection === "gifts" && <GiftsSection language={language} />}
            {selectedSection === "recommendations" && <RecommendationsSection language={language} />}
            {selectedSection === "rsvp" && (
              <RsvpSection
                language={language}
                setRsvp={setRsvp}
                handleRsvp={handleRsvp}
                rsvp={rsvp}
              />
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
            <div>{texts[language].footerText}</div>
            <img src={logo} alt={"logo"} width={160} height={160}/>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
