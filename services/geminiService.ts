import { GoogleGenAI, Type } from "@google/genai";
import { Position, Difficulty, Category, ClimaxGoal } from "../types";

const generateId = () => `pos-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export const generatePositionImage = async (name: string, baseDescription: string): Promise<string | null> => {
  if (!process.env.API_KEY) return null;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Use a very simple, direct prompt to match the app's new "Doctor/Vector" style
  const imagePrompt = `
    white line art drawing on dark background, minimalist vector diagram, clear anatomy, high contrast, sexual position: ${name}. ${baseDescription}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: imagePrompt }]
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (e) {
    console.error("Failed to generate image", e);
  }
  return null;
};

export const suggestPosition = async (mood: string, currentPositions: Position[]): Promise<Position | null> => {
  if (!process.env.API_KEY) {
    console.error("API Key missing");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const existingNames = currentPositions.map(p => p.name).join(", ");

  const textPrompt = `
    Suggest a unique, creative, and safe intimacy position (Kamasutra style) based on the user's mood: "${mood}".
    The position should NOT be one of these: ${existingNames}.
    Provide a name, a detailed but tasteful description, a difficulty level, a category, and some tags.
    Also include step-by-step instructions, an intensity level (1-5), and climax goals.
    
    Difficulty levels: Beginner, Intermediate, Advanced, Expert.
    Categories: Face to Face, Rear Entry, Standing, Side by Side, Acrobatic, Other.
    Climax Goals: Intimacy, Deep Penetration, Clitoral, Visual, G-Spot, Power, Oral Pleasure, Control.
  `;

  try {
    // 1. Generate Text details
    const textResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: textPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            description: { type: Type.STRING },
            difficulty: { type: Type.STRING, enum: Object.values(Difficulty) },
            category: { type: Type.STRING, enum: Object.values(Category) },
            tags: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            instructions: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
            },
            intensity: { type: Type.INTEGER },
            climaxGoals: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
            }
          },
          required: ["name", "description", "difficulty", "category", "tags", "instructions", "intensity", "climaxGoals"]
        }
      }
    });

    const textData = textResponse.text ? JSON.parse(textResponse.text) : null;
    if (!textData) return null;

    // 2. Generate Image based on text details
    const generatedImage = await generatePositionImage(textData.name, textData.description);

    return {
      id: generateId(),
      name: textData.name,
      description: textData.description,
      difficulty: textData.difficulty as Difficulty,
      category: textData.category as Category,
      tags: textData.tags,
      instructions: textData.instructions || [],
      intensity: textData.intensity || 3,
      climaxGoals: (textData.climaxGoals as ClimaxGoal[]) || [],
      imageUrl: generatedImage || undefined
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};