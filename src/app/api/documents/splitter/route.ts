process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

import { getRetrival } from '@/lib/documents/splitter'
export const GET = async () => {
  const response = await getRetrival()
  return new Response(JSON.stringify(response, null, 2))
}
