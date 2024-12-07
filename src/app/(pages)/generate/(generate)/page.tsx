"use client";
import GenerateConversation from "@/components/common/GenerateConversation";
import { useMutation } from "@tanstack/react-query";
import { promptSchema } from "@/components/form/GenerateConversationInput";
import React from "react";
import { z } from "zod";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { createConversationApi } from "@/config/ApiService";


function Page() {
  const { isSignedIn, user } = useUser();
  const route = useRouter();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: createConversationApi,
  });

  const handleSubmit = async (data: z.infer<typeof promptSchema>) => {
    try {
      const response = await mutateAsync();
      const conversationId = response.data.id;

      route.push(`generate/${conversationId}?prompt=${data.prompt}`);
    } catch (error) {

    }
  };
  return (
    <div>
      
      <GenerateConversation onSubmit={handleSubmit} isLoading={isPending} />
    </div>
  );
}

export default Page;
