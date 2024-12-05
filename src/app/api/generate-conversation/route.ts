import { prisma_client } from "@/config/DBClient";
import { getUser } from "@/config/getUser";
export async function POST(req: Request) {
  try {
    const userId = await getUser();

    const conversation = await prisma_client.conversation.create({
      data: {
        userId: userId,
      },
    });

    return Response.json(
      {
        success: true,
        message: "successfully created",
        data: conversation,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("🚀 ~ createConversation ~ error:", error);
    return Response.json(
      {
        success: false,
        message: "something went wrong ",
        data: [],
      },
      { status: 500 }
    );
  }
}
