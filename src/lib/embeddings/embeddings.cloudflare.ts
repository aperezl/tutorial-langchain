import { Fetcher } from '@cloudflare/workers-types'
export interface Env {
  AI: Fetcher
}
import { CloudflareWorkersAIEmbeddings } from '@langchain/cloudflare'

// export const embedding = new CloudflareWorkersAIEmbeddings({
//   modelName: '@hf/baai/bge-base-en-v1.5',
//   binding: new Fetcher()
// })
