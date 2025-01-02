// src/components/Login.js
import React from 'react';
import { texts } from '../data/texts';

function Login({
  language,
  loginName,
  setLoginName,
  loginPassword,
  setLoginPassword,
  loginError,
  setLanguage,
  handleLogin
}) {
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <label className="login-form-label">{texts[language].loginLanguageLabel}</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
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
      </form>
    </div>
  );
}

export default Login;
