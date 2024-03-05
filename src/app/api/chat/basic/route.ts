import { getRetrival } from '@/chat/chatWithHistory'
export const GET = async () => {
  const response = await getRetrival()
  return new Response(JSON.stringify(response, null, 2))
}
