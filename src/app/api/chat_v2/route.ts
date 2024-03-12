process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

import { StreamingTextResponse, Message } from 'ai'
import  { ollama, cloudflare } from "@/lib/llms/llm"
import { BytesOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from '@langchain/core/prompts';
import { assistants } from '@/data/assistant';

export const runtime = "edge";

const formatMessage = (message: Message) => {
  return `${message.role}: ${message.content}`;
};

export async function POST(req: Request) {
  const TEMPLATE = `
  {system}
 
  Current conversation:
  {chat_history}
  
  User: {input}
  AI:
`;


  console.log('init')
  const body = await req.json();
  const assistant = assistants.find(a => a.id === body.id)
  const messages = body.messages ?? [];
  const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
  const currentMessageContent = messages[messages.length - 1].content;

  const prompt = PromptTemplate.fromTemplate(TEMPLATE);
  const outputParser = new BytesOutputParser();
  const model = assistant?.model === 'ollama' ? ollama : cloudflare
  const chain = prompt.pipe(model).pipe(outputParser);
  const stream = await chain.stream({
    chat_history: formattedPreviousMessages.join('\n'),
    input: currentMessageContent,
    system: assistant?.system || ''
  });

  return new StreamingTextResponse(stream)
}