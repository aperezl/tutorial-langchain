process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

import { StreamingTextResponse, Message } from 'ai'
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import model from "@/lib/llms/llm"
import { BytesOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from '@langchain/core/prompts'

export const runtime = "edge";

export async function POST(req: Request) {

  const prompt = ChatPromptTemplate.fromTemplate(
    'Eres un cómico que hablas en español. Cuenta un chiste relacionado con {input}'
  )



    const { messages } = await req.json();
  
    const parser = new BytesOutputParser();
  
    const stream = await model
      .pipe(parser)
      .stream(
        (messages as Message[]).map((m) =>
          m.role == "user"
            ? new HumanMessage(m.content)
            : new AIMessage(m.content)
        )
      );
  
    return new StreamingTextResponse(stream);
  }