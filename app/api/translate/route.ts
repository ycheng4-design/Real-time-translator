import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { text, targetLanguage } = await req.json();

    if (!text || !targetLanguage) {
      return NextResponse.json(
        { error: "Missing text or targetLanguage" },
        { status: 400 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an accessibility-aware translation assistant. Detect the input language automatically, translate into the requested target language, preserve meaning, be natural, polite, and concise.",
        },
        {
          role: "user",
          content: `Target language: ${targetLanguage}\nText: ${text}`,
        },
      ],
    });

    const translated =
      completion.choices[0]?.message?.content?.toString().trim() ?? "";

    return NextResponse.json({ translated });
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json(
      { error: "Translation request failed" },
      { status: 500 }
    );
  }
}
