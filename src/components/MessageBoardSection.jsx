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
          <textarea
            type="text"
            placeholder={texts[language].msgPlaceholder}
            value={messageInput.message}
            onChange={(e) => setMessageInput((current) => ({...current, message: e.target.value}))}
          />
          <input
            type="text"
            placeholder={texts[language].msgPlaceholderName}
            value={messageInput.name}
            onChange={(e) => setMessageInput((current) => ({...current, name: e.target.value}))}
          />
          <button type="submit" disabled={!messageInput.message.trim() || !messageInput.name.trim()} className={!messageInput.message.trim() || !messageInput.name.trim()? 'button-message-disabled' : 'button-message'}>{texts[language].msgAddButton}</button>
        </form>
        <div className="message-board-list">
        {messages.map((msg, i) => (
        <div
            key={i}
            className={`chat-bubble ${i % 2 === 0 ? 'left' : 'right'}`}
        >
            <div className="chat-header">
            <span className="chat-name">{msg.name}</span>
            <span className="chat-date">{msg.date}</span>
            </div>
            <div className="chat-message">{msg.message}</div>
        </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default MessageBoardSection;
