import React, { useState, useEffect } from 'react';
import './Message.css';

function Message({ adminId, loggedInUserId }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`/api/messages?adminId=${adminId}`);
        const data = await response.json();
        setMessages(data.messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [adminId]);

  const handleMessageSend = async () => {
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senderId: loggedInUserId, // Use the logged-in user's ID as the sender ID
          receiverId: 'all', // Specify 'all' as the receiver to send the message to all admins
          messageText: message,
        }),
      });

      if (response.status === 201) {
        console.log('Message sent successfully');
        // Update the messages state by fetching the updated list of messages
        fetchMessages();
        // Clear the message input
        setMessage('');
      } else {
        console.log('Error sending message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="up">
      <div className="message-section">
        <h2>Message Section</h2>
        <div className="message-list">
          {messages.map((message) => (
            <div className="message-item" key={message.MessageID}>
              <p>{message.MessageText}</p>
              <span>{message.SentDate}</span>
            </div>
          ))}
        </div>
        <div className="message-input">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          ></textarea>
          <button onClick={handleMessageSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Message;
