process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

import { StreamingTextResponse, Message } from 'ai'
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import model from "@/lib/llms/llm"
import { BytesOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from '@langchain/core/prompts'
import { makeTemplateWithMessages } from '@/lib/prompts/templates';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { createVectorStore, createChain } from '@/chat/chatWithHistory';

export const runtime = "edge";

export async function POST(req: Request) {
  console.log('init')

  const { messages } = await req.json();
  console.log(messages)
  const vectorStore = await createVectorStore()
  console.log('create_vector')

  const chain = await createChain(vectorStore)
  console.log('create_chain')

  const chatHistory = messages

  const response = await chain.invoke({
    input: chatHistory,
    // chat_history: chatHistory
  })

  console.log(response)
  
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