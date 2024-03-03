import { NextRequest } from 'next/server'

import { getChain } from '@/prompts/templates'

export const GET = async (req: NextRequest) => {
  const input = req.nextUrl.searchParams.get('input') as string
  const response = await getChain(input ?? 'hola')

  return new Response(JSON.stringify(response, null, 1))
}
