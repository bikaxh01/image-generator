import { generateImage } from "@/app/utils/Img-generation";

export async function POST(req: Request, res: Response) {
  const getImageUrl = await generateImage();

  
  return Response.json({
    status: "OK",
    response: getImageUrl,
  });
}
