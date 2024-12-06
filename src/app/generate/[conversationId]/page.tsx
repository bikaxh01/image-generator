"use client";
import Chat from "@/components/chat";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

function GeneratePage() {
  const searchParams = useSearchParams();
  const prompt = searchParams.get('prompt');  


  
  const param = useParams();
  const conversationId = param.conversationId;
  return (
    <div>
      <Chat />
    </div>
  );
}

export default GeneratePage;
