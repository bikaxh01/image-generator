"use client";
import Chat from "@/components/chat";
import { useParams } from "next/navigation";
import React from "react";

function GeneratePage() {
  const param = useParams();
  const conversationId = param.conversationId;
  return (
    <div>
      <Chat />
    </div>
  );
}

export default GeneratePage;
