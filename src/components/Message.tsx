"use client";
import { useState } from "react";
const Message = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  interface Message {
    type: string;
    content: string;
    fileName?: string;
    sender: string;
    senderImage: string;
    time: string;
  }

  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  // Handle file upload (PDF)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files ? e.target.files[0] : null;
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };


  // Handle text message submission
  const sendMessage = () => {
    if (message.trim()) {
      const textMessage = {
        type: "text",
        content: message,
        sender: "me", // Sent by "me"
        senderImage: "/logo.png",
        time: new Date().toLocaleTimeString(),
      };
      setChatHistory([textMessage, ...chatHistory]);
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <div className="">
      {/* header */}
      <div className="w-full fixed flex justify-between items-center mb-4 px-4 py-2 border-y bg-white">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Profile"
            className="rounded-full w-12 h-12 mr-3"
          />
          <h1 className="text-black font-semibold text-lg">AI</h1>
        </div>
      </div>

      {/* messages */}
      <div className="flex flex-col-reverse h-screen p-4 pb-14 bg-gray-100 rounded-lg overflow-y-auto">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-2 ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender !== "me" && (
              <img
                className="w-10 h-10 rounded-full mr-2"
                src={msg.senderImage}
                alt="Receiver Avatar"
              />
            )}

            <div
              className={`flex flex-col ${
                msg.sender === "me" ? "items-end" : "items-start"
              }`}
            >
              {msg.type === "file" ? (
                <div className="max-w-[20rem] rounded-md bg-gray-400 p-1 text-gray-800 shadow-lg">
                  <div>
                    <img className="h-10 w-10" src="" alt="" />
                  </div>
                </div>
              ) : (
                <div
                  className={`${
                    msg.sender === "me"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                  } rounded-lg p-2 shadow mb-1 max-w-sm`}
                >
                  {msg.content}
                </div>
              )}
              <p className="text-[10px]">{msg.time}</p>
            </div>

            {msg.sender === "me" && (
              <img
                className="w-10 h-10 rounded-full ml-2"
                src={msg.senderImage}
                alt="Sender Avatar"
              />
            )}
          </div>
        ))}
      </div>

      {/* input field */}
      <div className="sticky bottom-0 w-full flex justify-center items-center py-3  text-black">
        <div className="flex w-1/2 items-center bg-gray-100 rounded-lg shadow-lg p-2">
          <textarea
            rows={1}
            placeholder="Type a message"
            className="w-full resize-none px-4 py-2 bg-transparent border-none outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="ml-2 p-2 text-gray-400"
            aria-label="Send message"
            onClick={sendMessage}
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.75 21.75 23.25 12 .75 2.25v7.5l15 2.25-15 2.25v7.5Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
