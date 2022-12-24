import { z } from "zod";
import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

// setup OpenAI connection
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// On Vercel, Next.js Middleware and API Routes are deployed globally
// using Vercel Edge Functions for the lowest possible latency
// export const config = {
//   runtime: "edge",
// };

// use zod to validate body text (the dream)
const schema = z.string().min(10);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // validate body first
  const response = schema.safeParse(req.body.text);

  if (!response.success) {
    return res
      .status(400)
      .send({ result: "error", message: "Try a longer dream." });
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `analyze my dream:\n\n${req.body.text}`,
      temperature: 0.8, // Higher values means the model will take more risks.
      max_tokens: 512,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
    });

    return res.status(200).json({ result: completion.data });
  } catch (e) {
    // logger.error(e);
    return res
      .status(500)
      .send({ result: "error", message: "Internal error." });
  }
}
