import { NextRequest } from 'next/server'
import { StreamingTextResponse } from 'ai'
import model from '@/llms/llm.ollama'

export const GET = async (req: NextRequest) => {
  const message = req.nextUrl.searchParams.get('message') as string
  const response = await model.stream(message ?? 'Hello')
  return new StreamingTextResponse(response)
}
