export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
  provider: 'gemini' | 'openai' | 'xai';
  modelName: string;

}

export const chatModels: Array<ChatModel> = [
  // {
  //   id: 'chat-model',
  //   name: 'Chat model',
  //   description: 'Primary model for all-purpose chat',
  // },
  // {
  //   id: 'chat-model-reasoning',
  //   name: 'Reasoning model',
  //   description: 'Uses advanced reasoning',
  // },
  {
    id: 'chat-model',
    name: 'Chat model',
    description: 'General chat model using Gemini',
    provider: 'gemini',
    modelName: 'gemini-pro',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning (Gemini)',
    provider: 'gemini',
    modelName: 'gemini-pro',
  },
  {
    id: 'title-model',
    name: 'Title generator',
    description: 'Generates titles (OpenAI GPT-4)',
    provider: 'openai',
    modelName: 'gpt-4',
  },
  {
    id: 'artifact-model',
    name: 'Artifact generator',
    description: 'Artifact generation (xAI)',
    provider: 'xai',
    modelName: 'grok-2-1212',
  },
];
