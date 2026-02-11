const CLUSTERS = [
  'Software Architecture',
  'Full-Stack Development',
  'APIs & Integrations',
  'AI for Business',
  'Cloud & DevOps',
  'Technology + Business',
  'NeuroMarket Brand',
];

export type SyncStatus = 'Local' | 'Generando (IA)' | 'Error';

type GeneratedBlogPost = {
  title: string;
  summary: string;
  content: string;
  category: string;
  slug: string;
};

const localCache: Record<string, GeneratedBlogPost & { createdAt: Date }> = {};
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_API_KEY;

export async function checkAndGenerateBlog(onStatusChange?: (status: SyncStatus) => void) {
  const today = new Date().toISOString().split('T')[0];

  if (localCache[today]) {
    onStatusChange?.('Local');
    return localCache[today];
  }

  if (!apiKey) {
    const staticPost = {
      title: 'Building the Future of Enterprise Software',
      summary: 'Explore how NeuroMarket is redefining the standard for scalable business infrastructure.',
      content: '# Strategic Engineering\n\nContent is being processed locally.',
      category: 'NeuroMarket Brand',
      slug: 'building-future-software',
      createdAt: new Date(),
    };
    localCache[today] = staticPost;
    return staticPost;
  }

  try {
    onStatusChange?.('Generando (IA)');
    const newPost = await generateNewBlogPost(apiKey);
    if (newPost) {
      const postWithDate = { ...newPost, createdAt: new Date() };
      localCache[today] = postWithDate;
      onStatusChange?.('Local');
      return postWithDate;
    }
  } catch {
    onStatusChange?.('Error');
  }

  onStatusChange?.('Error');
  return null;
}

async function generateNewBlogPost(geminiApiKey: string): Promise<GeneratedBlogPost | null> {
  try {
    const cluster = CLUSTERS[Math.floor(Math.random() * CLUSTERS.length)];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Generate a 1000-word deep-dive technical blog post for: "${cluster}". Return ONLY a minified JSON object with keys: title, content, category, summary, slug.`,
                },
              ],
            },
          ],
          generationConfig: {
            responseMimeType: 'application/json',
          },
        }),
      },
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) {
      return null;
    }

    const parsed = JSON.parse(rawText) as GeneratedBlogPost;
    if (!parsed.title || !parsed.slug || !parsed.content || !parsed.category || !parsed.summary) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}
