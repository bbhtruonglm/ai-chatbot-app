import { LanguageModelV1, customProvider, wrapLanguageModel } from 'ai';

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

function wrapGeminiModel(
  modelName: string,
  options?: { middleware?: any }
): LanguageModelV1 {
  const model = genAI.getGenerativeModel({ model: modelName });
  
  return {
    modelId: modelName, // Thêm modelId
    providerId: 'google-genai', // Tùy chỉnh provider ID
    async doGenerate(prompt) {
      const result = await model.generateContent(prompt);
      return {
        text: result.response.text(),
        usage: { 
          promptTokens: 0, // Gemini không trả về token usage qua SDK
          completionTokens: 0 
        },
      };
    },
  };
}