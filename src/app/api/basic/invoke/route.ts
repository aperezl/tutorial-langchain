import { NextRequest } from 'next/server'
import model from '@/llms/llm.ollama'

export const GET = async (req: NextRequest) => {
  const message = req.nextUrl.searchParams.get('message') as string
  const response = await model.invoke(message ?? 'Hello')
  return new Response(JSON.stringify(response, null, 2))
}
