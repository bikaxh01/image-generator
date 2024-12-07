import React from "react";
import InputPromptComponent from "./form/InputPrompt";
import { Card } from "./ui/card";

function ChatComponent() {
  return (
    <div className=" w-full flex  h-full justify-center items-end bg-gray-800">

     
        <Card className=" w-[80%] flex  bg-green-300 ">
          <InputPromptComponent />
        </Card>
     
    </div>
  );
}

export default ChatComponent;
