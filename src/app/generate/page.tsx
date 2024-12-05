'use client'
import GenerateConversation from "@/components/common/GenerateConversation";
import NavBar from "@/components/common/Nav";
import { promptSchema } from "@/components/form/GenerateConversationInput";
import React from "react";
import { z } from "zod";

import { getUser } from "../../config/getUser";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

 function Page() {
  const {isSignedIn,user} =  useUser()
  console.log("🚀 ~ Page ~ user:", user)
  console.log("🚀 ~ Page ~ isSignedIn:", isSignedIn)
  const route = useRouter()

  const handleSubmit = async (data: z.infer<typeof promptSchema>) => {
   try {
     // create conversation 
     //api call
     // get the id and prompt
   //  route.push(`generate/${conversation.id}?prompt=${data.prompt}`)
     // redirect to generate/id?prompt
     console.log("🚀 ~ Page ~ prompt:", prompt);
    
   } catch (error) {
    
   }
  };
  return (
    <div>
      <GenerateConversation onSubmit={handleSubmit} />
    </div>
  );
}

export default Page;
