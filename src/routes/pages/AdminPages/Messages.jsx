import React, { useState, useEffect } from 'react';
import './Messages.css';

function Messages() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState('');

  useEffect(() => {
    // Fetch messages from the server/database
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data.messages);
      } else {
        console.log('Error fetching messages');
      }
    } catch (error) {
      console.log('Error fetching messages:', error);
    }
  };

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
    setReply('');
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/messages/reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messageId: selectedMessage.id,
          reply,
        }),
      });

      if (response.ok) {
        console.log('Reply sent successfully');
        // Clear reply input and refresh messages
        setReply('');
        fetchMessages();
      } else {
        console.log('Error sending reply');
      }
    } catch (error) {
      console.log('Error sending reply:', error);
    }
  };

  return (
    <div className='ap'>
      <div className="messages">
      <div className="messages__sidebar">
        <h2 className="messages__heading">Messages</h2>
        <ul className="messages__list">
          {messages.map((message) => (
            <li
              key={message.id}
              className={`messages__item ${selectedMessage === message ? 'selected' : ''}`}
              onClick={() => handleSelectMessage(message)}
            >
              {message.subject}
            </li>
          ))}
        </ul>
      </div>
      <div className="messages__content">
        {selectedMessage ? (
          <div className="message-details">
            <h3 className="message-details__subject">{selectedMessage.subject}</h3>
            <p className="message-details__sender">{selectedMessage.sender}</p>
            <p className="message-details__message">{selectedMessage.message}</p>
            <form className="message-details__reply-form" onSubmit={handleReplySubmit}>
              <textarea
                className="message-details__reply-input"
                value={reply}
                onChange={handleReplyChange}
                placeholder="Reply to the message"
                required
              />
              <button type="submit" className="message-details__reply-button">
                Send Reply
              </button>
            </form>
          </div>
        ) : (
          <p className="messages__placeholder">Select a message to view details and reply.</p>
        )}
      </div>
    </div>
    </div>
    
  );
}

export default Messages;
