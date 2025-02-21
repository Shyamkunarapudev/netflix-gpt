import OpenAI from "openai";

const openai = new OpenAI({
        baseURL: "https://models.inference.ai.azure.com",
        apiKey: import.meta.env.VITE_OPEN_AI_KEY,
        dangerouslyAllowBrowser: true
});

export default openai