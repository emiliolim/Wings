import React, { useRef, useState } from "react";
import { ChatIcon } from "./icons";
import person1 from "../images/person1.png";
import sendIcon from "../images/sendicon.png";
import person2 from "../images/person2.png";
import "../styles/ChatButton.css";
import { SendArrow } from "./icons";

function ChatButton() {
  const [messages, setMessages] = useState([
    { sender: "person1", text: "hi! is anyone nearby ics2 and has a pad I can use? The bathrooms ran out.." }
  ]);
  const [showChat, setShowChat] = useState(false);
  const inputRef = useRef(null);

  const handleSend = () => {
    const input = inputRef.current.value.trim();
    if (!input) return;

    setMessages(prev => [
      ...prev,
      { sender: "me", text: input }
    ]);
    inputRef.current.value = "";
  };

  return (
    <section className="chat-section">
      <button className="chat-btn" onClick={() => setShowChat(prev => !prev)}>
        <ChatIcon />
      </button>

      {showChat && (
        <div className="chat-popup">
          <div className="badge">{messages.length}</div>
          <div className="chat-area">
            {messages.map((msg, i) => (
              msg.sender === "person1" ? (
                <div className="income-msg" key={i}>
                  <img src={person1} className="person1" alt="Person 1" />
                  <span className="msg">{msg.text}</span>
                </div>
              ) : (
                <div className="out-msg" key={i}>
                  <span className="my-msg">{msg.text}</span>
                  <img src={person2} className="person1" alt="Person 2" />
                </div>
              )
            ))}
          </div>
          <div className="input-area">
            <input type="text" ref={inputRef} />
            <button className="submit" onClick={handleSend}>
              <SendArrow/>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ChatButton;
