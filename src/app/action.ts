"use server";

import { prisma_client } from "../config/DBClient";

export async function createConversation(userId: string) {
  try {
    const conversation = await prisma_client.conversation.create({
      data: {
        userId: userId,
      },
    });

    return conversation
  } catch (error) {
    console.log("🚀 ~ createConversation ~ error:", error)
    throw new Error("Something went wrong")
  }
}
