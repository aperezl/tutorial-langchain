import { OllamaEmbeddings } from '@langchain/community/embeddings/ollama'
const embeddings = new OllamaEmbeddings({
  model: 'spa',
  baseUrl: 'http://localhost:11434'
})

export default embeddings
