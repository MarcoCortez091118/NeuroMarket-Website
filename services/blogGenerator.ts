
import { GoogleGenAI, Type } from "@google/genai";

const CLUSTERS = [
  "Software Architecture",
  "Full-Stack Development",
  "APIs & Integrations",
  "AI for Business",
  "Cloud & DevOps",
  "Technology + Business",
  "NeuroMarket Brand"
];

export type SyncStatus = "Local" | "Generando (IA)" | "Error";

const localCache: Record<string, any> = {};

export async function checkAndGenerateBlog(onStatusChange?: (status: SyncStatus) => void) {
  const today = new Date().toISOString().split('T')[0];
  
  if (localCache[today]) {
    onStatusChange?.("Local");
    return localCache[today];
  }

  if (typeof process === 'undefined' || !process.env.API_KEY) {
    const staticPost = {
      title: "Building the Future of Enterprise Software",
      summary: "Explore how NeuroMarket is redefining the standard for scalable business infrastructure.",
      content: "# Strategic Engineering\n\nContent is being processed locally.",
      category: "NeuroMarket Brand",
      slug: "building-future-software",
      createdAt: new Date()
    };
    localCache[today] = staticPost;
    return staticPost;
  }

  try {
    onStatusChange?.("Generando (IA)");
    const newPost = await generateNewBlogPost();
    if (newPost) {
      const postWithDate = { ...newPost, createdAt: new Date() };
      localCache[today] = postWithDate;
      onStatusChange?.("Local");
      return postWithDate;
    }
  } catch (error) {
    onStatusChange?.("Error");
  }
}

async function generateNewBlogPost() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const cluster = CLUSTERS[Math.floor(Math.random() * CLUSTERS.length)];
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a 1000-word deep-dive technical blog post for: "${cluster}". Return JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            content: { type: Type.STRING },
            category: { type: Type.STRING },
            summary: { type: Type.STRING },
            slug: { type: Type.STRING }
          },
          required: ["title", "content", "category", "slug", "summary"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (e) {
    return null;
  }
}
