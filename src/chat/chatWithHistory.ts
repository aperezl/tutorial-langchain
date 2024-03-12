import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import embeddings from '@/lib/embeddings'
import llm from '@/lib/llms/llm'
import {
  makeRetrieverPrompt,
  makeTemplate,
  makeTemplateWithMessages
} from '@/lib/prompts/templates'
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { createRetrievalChain } from 'langchain/chains/retrieval'
import { createHistoryAwareRetriever } from 'langchain/chains/history_aware_retriever'

import { AIMessage, HumanMessage } from '@langchain/core/messages'

export const createVectorStore = async () => {
  const loader = new CheerioWebBaseLoader(
    'https://js.langchain.com/docs/expression_language/'
  )

  const docs = await loader.load()
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 20
  })
  const splitDocs = await splitter.splitDocuments(docs)
  const vectorStore = await MemoryVectorStore.fromDocuments(
    splitDocs,
    embeddings
  )
  return vectorStore
}

export const createChain = async (vectorStore: MemoryVectorStore) => {
  const prompt = makeTemplateWithMessages()

  const retriever = vectorStore.asRetriever({
    k: 1
  })

  const historyAwareRetriever = await createHistoryAwareRetriever({
    llm,
    retriever,
    rephrasePrompt: makeRetrieverPrompt()
  })

  const chain = await createStuffDocumentsChain({ llm, prompt })
  const conversationChain = await createRetrievalChain({
    combineDocsChain: chain,
    retriever: historyAwareRetriever
  })
  return conversationChain
}

export const getRetrival = async () => {

  console.log('init')
  const vectorStore = await createVectorStore()
  console.log('create_vector')

  const chain = await createChain(vectorStore)
  console.log('create_chain')

  const chatHistory = [
    new HumanMessage('Hola'),
    new AIMessage('Hola, ¿En qué puedo ayudarte?'),
    new HumanMessage('Me llamo Antonio'),
    new AIMessage('Hola Antonio, ¿Cómo puedo ayudarte?'),
    new HumanMessage('¿Qué es LCEL?'),
    new AIMessage('LCEL son las siglas de Langchain Expression Language')
  ]
  const response = await chain.invoke({
    input: '¿Qué es esto?',
    chat_history: chatHistory
  })

  return response
}
