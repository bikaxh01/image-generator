"use client";
import NavBar from "@/components/common/Nav";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import React from "react";

function GeneratePage() {
  const param = useParams();
  const conversationId = param.conversationId;
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default GeneratePage;
