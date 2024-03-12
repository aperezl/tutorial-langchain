process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

import { StreamingTextResponse, Message } from 'ai'
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import model from "@/lib/llms/llm"
import { BytesOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from '@langchain/core/prompts'
import { makeTemplateWithMessages } from '@/lib/prompts/templates';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { createVectorStore, createChain } from '@/chat/chatWithHistory';
import { ChatMessageHistory } from "langchain/stores/message/in_memory";
import { PromptTemplate } from '@langchain/core/prompts';

export const runtime = "edge";

const formatMessage = (message: Message) => {
  return `${message.role}: ${message.content}`;
};

export async function POST(req: Request) {

  const TEMPLATE = `
  You are a pirate named Patchy. All responses must be extremely verbose and in pirate dialect.
 
  Current conversation:
  {chat_history}
  
  User: {input}
  AI:
`;

  console.log('init')
  const body = await req.json();
  const messages = body.messages ?? [];
  const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
  const currentMessageContent = messages[messages.length - 1].content;

  const prompt = PromptTemplate.fromTemplate(TEMPLATE);
  const outputParser = new BytesOutputParser();
  const chain = prompt.pipe(model).pipe(outputParser);
  const stream = await chain.stream({
    chat_history: formattedPreviousMessages.join('\n'),
    input: currentMessageContent,
  });

  return new StreamingTextResponse(stream);

    // const parser = new BytesOutputParser();
    // // const chain = prompt.pipe(model).invoke({ input:  })
  
    // const stream = await prompt.pipe(model)
    //   .pipe(parser)
    //   .stream(
    //     (messages as Message[]).map((m) =>
    //       m.role == "user"
    //         ? new HumanMessage(m.content)
    //         : new AIMessage(m.content)
    //     )
    //   );
  
    // return new StreamingTextResponse(stream);
}