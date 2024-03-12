import { OllamaEmbeddings } from '@langchain/community/embeddings/ollama'
const embeddings = new OllamaEmbeddings({
  model: 'mistral',
  baseUrl: 'http://localhost:11434',
  onFailedAttempt: err => console.log(err)
})

export default embeddings
