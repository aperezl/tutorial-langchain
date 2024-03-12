import { StreamingTextResponse, Message } from 'ai'
import { AIMessage, HumanMessage } from "langchain/schema";
import model from "@/lib/llms/llm"
import { BytesOutputParser } from "langchain/schema/output_parser";

export const runtime = "edge";

export async function POST(req: Request) {
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