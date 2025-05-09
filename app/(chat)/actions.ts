'use server';

import { generateText, type UIMessage } from 'ai';
import { cookies } from 'next/headers';
import {
  deleteMessagesByChatIdAfterTimestamp,
  getMessageById,
  updateChatVisiblityById,
} from '@/lib/db/queries';
import type { VisibilityType } from '@/components/visibility-selector';
import { myProvider } from '@/lib/ai/providers';


import { google } from "@ai-sdk/google"
import { openai } from "@ai-sdk/openai"
export async function saveChatModelAsCookie(model: string) {
  const cookieStore = await cookies();
  cookieStore.set('chat-model', model);
}

export async function generateTitleFromUserMessage({
  message,
}: {
  message: UIMessage;
  }) {
  
  console.log(message, 'message');

  // const model = await myProvider.languageModel('title-model');
  // console.log(model, 'model')
  // const { text } = await generateText({
  //   model: openai('gpt-3.5-turbo'),
  //   system: 'You are a friendly assistant!',
  //   prompt: 'Why is the sky blue?',
  // });

  // const { text} = await generateText({
  //   model: google("gemini-2.0-flash-exp"),
  //   prompt: "What is love?"
  // });

  const { text: title } = await generateText({
    model: google('gemini-1.5-flash'),
    system: `\n
    - you will generate a short title based on the first message a user begins a conversation with
    - ensure it is not more than 80 characters long
    - the title should be a summary of the user's message
    - do not use quotes or colons`,
    prompt: JSON.stringify(message?.content),
    // prompt: 'What is the weather today?',
  });
  // console.log(text, 'text');
  // let title = 'test title';
  console.log(title, 'title');


  // let title = 'checkkkkk';
  return title || 'No response';
}

export async function deleteTrailingMessages({ id }: { id: string }) {
  const [message] = await getMessageById({ id });

  await deleteMessagesByChatIdAfterTimestamp({
    chatId: message.chatId,
    timestamp: message.createdAt,
  });
}

export async function updateChatVisibility({
  chatId,
  visibility,
}: {
  chatId: string;
  visibility: VisibilityType;
}) {
  await updateChatVisiblityById({ chatId, visibility });
}
