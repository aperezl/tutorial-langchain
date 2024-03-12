import { ChatOllama } from '@langchain/community/chat_models/ollama'

const model = new ChatOllama({
  model: 'spa',
  temperature: 0.7
})

export default model
