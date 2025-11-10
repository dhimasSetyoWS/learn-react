import { useState, useEffect } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessage } from "./components/ChatMessage";
import ChatMessages from "./components/ChatMessages";
import LoadingSpinner from "./assets/loading-spinner.gif";
import { Chatbot } from "supersimpledev";

import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem("messages")) || []);
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   Chatbot.addResponses({
  //     walawe : "Alamak jang"
  //   });
  //   console.log("New Response Added!");
  // }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);
  return (
    <div className="chatbot-container">
      <ChatMessages chatMessages={chatMessages} />

      {isLoading && <ChatMessage message={<img className="spinner" src={LoadingSpinner}></img>} sender="robot" id="loading" />}

      {chatMessages.length === 0 && <span className="welcome-text">Welcome to chatbot project! Send a message using textbox below!</span>}
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
  );
}

export default App;
