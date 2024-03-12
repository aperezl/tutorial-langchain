import { OllamaEmbeddings } from '@langchain/community/embeddings/ollama'
const embeddings = new OllamaEmbeddings({
  model: 'mistral',
  baseUrl: process.env.OLLAMA_BASE_URL,
  onFailedAttempt: err => console.log(err)
})

export default embeddings
