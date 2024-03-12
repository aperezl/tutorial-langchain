import { getRetrival } from '@/chat/chatWithHistory'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const GET = async () => {
  const response = await getRetrival()
  return new Response(JSON.stringify(response, null, 2))
}
