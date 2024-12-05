import React, { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Can be verified on any platform using docker", user: "Anderson", type: "received" },
    { text: "Your error message says permission denied, npm global installs must be given root privileges.", user: "You", type: "sent" },
    {
      text: "Command was run with root privileges. I'm sure about that.",
      user: "Anderson",
      type: "received",
    },
    { text: "Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks", user: "You", type: "sent" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { text: newMessage, user: "You", type: "sent" }]);
    setNewMessage("");
  };

  return (
    <div className="flex-1 p-1 justify-between flex flex-col h-screen">
      {/* Header */}
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <span className="absolute text-green-500 right-0 bottom-0">
              <svg width="20" height="20">
                <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
              </svg>
            </span>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
              alt=""
              className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex items-center">
              <span className="text-gray-700 mr-3">Anderson Vanhron</span>
            </div>
            <span className="text-lg text-gray-600">Junior Developer</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        id="messages"
        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message flex items-end ${
              msg.type === "sent" ? "justify-end" : ""
            }`}
          >
            <div
              className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
                msg.type === "sent" ? "order-1 items-end" : "order-2 items-start"
              }`}
            >
              <div>
                <span
                  className={`px-4 py-2 rounded-lg inline-block ${
                    msg.type === "sent"
                      ? "rounded-br-none bg-blue-600 text-white"
                      : "rounded-bl-none bg-gray-300 text-gray-600"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            </div>
            <img
              src={
                msg.type === "sent"
                  ? "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                  : "https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
              }
              alt="Profile"
              className="w-6 h-6 rounded-full"
            />
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
          />
          <button
            onClick={handleSendMessage}
            className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
          >
            <span className="font-bold">Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 ml-2 transform rotate-90"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
