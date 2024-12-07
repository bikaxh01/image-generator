import React from "react";
import GenerateConversationInput from "../form/GenerateConversationInput";
import NavBar from "./Nav";

function GenerateConversation({onSubmit,isLoading}:any) {
  return (
    <div className=" mt-40 m-5  flex flex-col items-center justify-center">
      
      <p className=" text-xl font-semibold">
        Effortless creativity at your fingertips
      </p>
      <h1 className=" text-6xl font-bold ">
        <span className=" text-primary">
          Generate images with AI in seconds.
        </span>
      </h1>
      <p className=" text-gray-600 m-2">
        Unleash your creativity with AI-powered image generation – stunning
        visuals in just seconds!
      </p>
      <GenerateConversationInput onSubmit={onSubmit} isLoading ={isLoading}  />
    </div>
  );
}

export default GenerateConversation;
