import React, { useState } from "react";
import { GrTextAlignLeft } from "react-icons/gr";
import { MdOutlineRefresh } from "react-icons/md";
import Conversation from "./Conversation";

const ConversationDashboard = () => {
  const [message, setMessage] = useState([
    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },
    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },
    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },
    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },
    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },
    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },
    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },
    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },
    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },
    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },

    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },
    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },
    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },
    {
      type: Math.random() < 0.5 ? "user" : "",
      message: "This is a message ",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let paylaod = {
      type: Math.random() < 0.5 ? "user" : "",
      message: input,
      timestamp: new Date(),
    };
    setInput("");
    setMessage((prev) => [...prev, paylaod]);
  };
  return (
    <div className="bg-white h-full w-full">
      <div className="flex flex-row h-full w-full  ">
        <div className="Conversation w-72 border-b-2 border-r-2">
          <div className="header p-3 flex flex-row items-center border-b-2">
            <GrTextAlignLeft className="mr-2" />
            <h1 className="text-2xl font-bold flex-grow mr-16">
              Conversations
            </h1>
            <MdOutlineRefresh className="text-2xl" />
          </div>
          <div>
            <Conversation isActive />
            <Conversation />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className=" p-3 w-full border-b-2 ">
            <h1 className="text-2xl font-bold">Amit RG</h1>
          </div>
          <div className="bg-slate-100  px-5 py-5 flex flex-col h-full justify-between overflow-hidden ">
            <div className="flex flex-col  overflow-y-scroll no-scrollbar">
              {message.map(({ type, message }, idx) => {
                return (
                  <div
                    key={idx}
                    className={`p-2 bg-white h-min w-fit m-1 rounded-lg text-black ${
                      type === "user" ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    {message}
                  </div>
                );
              })}
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full p-2 rounded "
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationDashboard;
