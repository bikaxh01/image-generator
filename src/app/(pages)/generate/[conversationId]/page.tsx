"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ChatComponent from "@/components/ChatComponent";
import { Card } from "@/components/ui/card";

function GeneratePage() {
  const [prompt, setPrompt] = useState<string | null>("");

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const prompt = searchParams.get("prompt");
    if (prompt) {
      setPrompt(prompt);

      const newUrl = window.location.pathname; // Keep only the path
      router.replace(newUrl);
    }
  }, []);

  const param = useParams();
  const conversationId = param.conversationId;
  return (
    <Card className=" w-screen h-screen ">
      <ChatComponent />
    </Card>
  );
}

export default GeneratePage;
