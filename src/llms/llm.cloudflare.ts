import { ChatCloudflareWorkersAI } from '@langchain/cloudflare'

const model = new ChatCloudflareWorkersAI({
  // model: '@cf/meta/llama-2-7b-chat-int8',
  model: '@cf/mistral/mistral-7b-instruct-v0.1',
  cloudflareAccountId: process.env.CLOUDFLARE_ACCOUNT_ID,
  cloudflareApiToken: process.env.CLOUDFLARE_API_TOKEN
})

export default model
