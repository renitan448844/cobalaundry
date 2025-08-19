import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import "../styles/Chatbot.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <span>Chat Admin</span>
            <button className="close-btn" onClick={toggleChat}>✕</button>
          </div>
          <div className="chat-body iframe-container">
            <iframe
              src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/08/13/02/20250813023102-CXQS6IZA.json"
              title="EveWash Chatbot"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      )}

      {!isOpen && (
        <div className="chat-help" onClick={toggleChat}>
          <div className="chat-text">
            <strong>Butuh Bantuan?</strong>
            Klik untuk memulai chat
          </div>
          <div className="chat-icon">
            <MessageCircle size={36} /> 
          </div>
        </div>
      )}
    </div>
  );
}
