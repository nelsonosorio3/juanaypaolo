// src/components/MessageBoardSection.js
import React from 'react';
import { texts } from '../data/texts';

function MessageBoardSection({
  language,
  messageInput,
  setMessageInput,
  messages,
  handleAddMessage
}) {
  return (
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
  );
}

export default MessageBoardSection;
