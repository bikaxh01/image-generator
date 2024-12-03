import OpenAI from "openai";

const openAiClient = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

export async function generateImage() {
  const response = await openAiClient.images.generate({
    model: "dall-e-3",
    prompt:
      "a boy sitting near river view of mountains",
    n: 1,
    size: "1024x1024",
    response_format:"b64_json",
    quality: "hd",
    style:"vivid",
    
  });

  

  return response;
}
