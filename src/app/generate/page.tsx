'use client'
import GenerateConversation from "@/components/common/GenerateConversation";
import NavBar from "@/components/common/Nav";
import { promptSchema } from "@/components/form/GenerateConversationInput";
import React from "react";
import { z } from "zod";

function Page() {

  const handleSubmit = (prompt: z.infer<typeof promptSchema>) => {
    console.log("🚀 ~ Page ~ prompt:", prompt);
  };
  return (
    <div>
      <GenerateConversation onSubmit={handleSubmit} />
    </div>
  );
}

export default Page;
