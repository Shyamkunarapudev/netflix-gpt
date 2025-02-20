import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constants";

const openai = new OpenAI({
        baseURL: "https://models.inference.ai.azure.com",
        apiKey: OPEN_AI_KEY,
        dangerouslyAllowBrowser: true
});

export default openai