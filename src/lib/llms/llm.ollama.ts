import { ChatOllama } from '@langchain/community/chat_models/ollama'

const model = new ChatOllama({
  model: 'mistral',
  temperature: 0.7,
  baseUrl: process.env.OLLAMA_BASE_URL
})

export default model
