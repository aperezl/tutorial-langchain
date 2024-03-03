import { NextRequest } from 'next/server'

import { getPromptWithParserZod } from '@/prompts/templates'

export const GET = async (req: NextRequest) => {
  try {
    const input = req.nextUrl.searchParams.get('input') as string
    const response = await getPromptWithParserZod(input ?? 'hola')
    return new Response(JSON.stringify(response, null, 1))
  } catch (error) {
    return new Response('Error!!!!')
  }
}
