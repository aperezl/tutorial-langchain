import { NextRequest } from 'next/server'
import model from '@/lib/llms/llm'

export const GET = async (req: NextRequest) => {
  const message1 = req.nextUrl.searchParams.get('message1') as string
  const message2 = req.nextUrl.searchParams.get('message2') as string

  const response = await model.batch([message1, message2])
  return new Response(JSON.stringify(response, null, 2))
}
