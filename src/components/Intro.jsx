// src/components/Intro.jsx
import React, { useState, useEffect } from "react";

const messages = [
  "Hey there 👋",
  "I'm Supriya Sukale",
  "What do I do?",
  "Well.. Building the web?",
  "Transforming ideas to code?",
  "and sometimes, gaming :)",
  "The story of me starts here - click below to read on."
];

const Intro = ({ onFinish }) => {
  const [currentMsg, setCurrentMsg] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState([]);

  useEffect(() => {
    if (currentMsg < messages.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, messages[currentMsg]]);
        setCurrentMsg(currentMsg + 1);
      }, 1500); // adjust speed here
      return () => clearTimeout(timer);
    }
  }, [currentMsg]);

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-4 font-mono">
      <div className="space-y-4 w-full max-w-xl">
        {displayedMessages.map((msg, index) => (
          <div key={index} className="bg-gray-800 rounded-md p-2">
            {msg}
          </div>
        ))}
      </div>
  <div key={index} className="bg-gray-800 rounded-md p-2 fade-in">
  {msg}
</div>

      {currentMsg >= messages.length && (
        <button
          onClick={onFinish}
          className="mt-8 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Enter Portfolio
        </button>
      )}
    </div>
  );
};

export default Intro;
