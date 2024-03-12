import { NextRequest } from 'next/server'

import { getPromptWithParserCommaSeparated } from '@/lib/prompts/templates'

export const GET = async (req: NextRequest) => {
  const input = req.nextUrl.searchParams.get('input') as string
  const response = await getPromptWithParserCommaSeparated(
    input ?? 'Max is 30 years old'
  )

  return new Response(JSON.stringify(response, null, 1))
}
