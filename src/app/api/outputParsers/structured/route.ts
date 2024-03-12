import { NextRequest } from 'next/server'

import { getPromptWithParserStructured } from '@/lib/prompts/templates'

export const GET = async (req: NextRequest) => {
  try {
    const input = req.nextUrl.searchParams.get('input') as string
    const response = await getPromptWithParserStructured(input ?? 'hola')
    return new Response(JSON.stringify(response, null, 1))
  } catch (error) {
    return new Response('Error!!!!')
  }
}
