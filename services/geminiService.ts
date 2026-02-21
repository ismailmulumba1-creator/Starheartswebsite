import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// In a real app, ensure process.env.API_KEY is defined. 
// For this demo, we handle the missing key gracefully in the UI.
const apiKey = process.env.API_KEY || ''; 
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateAcademyContent = async (topic: string, type: 'blog' | 'announcement' | 'training'): Promise<string> => {
  if (!ai) {
    console.warn("Gemini API Key missing");
    return "API Key is missing. Please configure the environment variable to use AI features.";
  }

  const modelId = "gemini-2.5-flash";
  
  let prompt = "";
  if (type === 'blog') {
    prompt = `Write a short, engaging blog post (approx 200 words) for Star Hearts Sports Academy about: "${topic}". Focus on youth player development and values.`;
  } else if (type === 'announcement') {
    prompt = `Write a formal yet exciting announcement for parents regarding: "${topic}". Include a call to action.`;
  } else {
    prompt = `Create a brief training drill plan for "${topic}". Include setup, instructions, and coaching points.`;
  }

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });
    return response.text || "No content generated.";
  } catch (error) {
    console.error("Error generating content:", error);
    return "Error generating content. Please try again.";
  }
};