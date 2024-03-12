import { NextRequest } from 'next/server'
import { StreamingTextResponse } from 'ai'
import { BytesOutputParser } from '@langchain/core/output_parsers'

import model from '@/lib/llms/llm'

export const GET = async (req: NextRequest) => {
  const message = req.nextUrl.searchParams.get('message') as string
  const stream = await model
    .pipe(new BytesOutputParser())
    .stream(message ?? 'Hello')

  return new StreamingTextResponse(stream)
}
