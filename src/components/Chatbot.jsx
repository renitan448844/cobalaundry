import React, { useState } from "react";
import { Bot } from "lucide-react"; // ikon chatbot
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
            <button className="close-btn" onClick={toggleChat}>
              ✕
            </button>
          </div>
          <div className="chat-body iframe-container">
            <iframe
              src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/08/13/02/20250813023102-CXQS6IZA.json"
              title="EveWash Chatbot"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </div>
      )}

      {/* Ikon chatbot */}
      <div className="chat-icon" onClick={toggleChat}>
        <Bot size={28} />
      </div>
    </div>
  );
}
