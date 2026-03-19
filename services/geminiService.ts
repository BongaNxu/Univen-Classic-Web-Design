
import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY is not set. Please check your environment variables or .env file.");
}
const ai = new GoogleGenAI({ apiKey: apiKey || "MISSING_API_KEY" });

export async function getChatResponse(message: string, history: { role: string, parts: { text: string }[] }[] = []) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      ...history,
      {
        role: "user",
        parts: [{ text: message }]
      }
    ],
    config: {
      systemInstruction: `You are the official AI Assistant for the University of Venda (UNIVEN). 
      Your goal is to help students, staff, and visitors with information about the university.
      
      Key areas of expertise:
      1. Academics: Recommend fields of study, explain course requirements (APS scores), and describe faculties.
      2. Admissions: Explain the application process, deadlines, and required documents.
      3. Campus Life: Information about Thohoyandou, student life, and facilities.
      4. Research: UNIVEN's impact on local communities and global science.
      
      Guidelines:
      - Be professional, welcoming, and helpful.
      - If a student's input is too broad for a course recommendation, ask a follow-up question.
      - Always return JSON with the following structure.`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          type: { type: Type.STRING, enum: ["recommendation", "question", "info"], description: "The type of response." },
          text: { type: Type.STRING, description: "The main response text or follow-up question." },
          recommendedField: { type: Type.STRING, description: "The field of study recommended (if type is recommendation)." },
          reasoning: { type: Type.STRING, description: "Why this field fits (if type is recommendation)." },
          suggestedSubjects: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Specific subjects (if type is recommendation)."
          },
          links: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                label: { type: Type.STRING },
                url: { type: Type.STRING }
              }
            },
            description: "Relevant links to UNIVEN pages."
          }
        },
        required: ["type", "text"]
      }
    }
  });

  return JSON.parse(response.text);
}
