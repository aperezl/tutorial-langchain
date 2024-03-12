import { NextRequest } from 'next/server'

import { getPromptMessages } from '@/lib/prompts/templates'

export const GET = async (req: NextRequest) => {
  const input = req.nextUrl.searchParams.get('input') as string
  const response = await getPromptMessages(input ?? 'hola')

  return new Response(JSON.stringify(response, null, 1))
}
