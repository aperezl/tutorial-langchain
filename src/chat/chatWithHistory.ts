import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import embeddings from '@/embeddings'
import llm from '@/llms/llm'
import {
  makeRetrieverPrompt,
  makeTemplate,
  makeTemplateWithMessages
} from '@/prompts/templates'
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { createRetrievalChain } from 'langchain/chains/retrieval'
import { createHistoryAwareRetriever } from 'langchain/chains/history_aware_retriever'

import { AIMessage, HumanMessage } from '@langchain/core/messages'

const createVectorStore = async () => {
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

const createChain = async (vectorStore: MemoryVectorStore) => {
  const prompt = makeTemplateWithMessages()

  const retriever = vectorStore.asRetriever({
    k: 8
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
  const vectorStore = await createVectorStore()
  const chain = await createChain(vectorStore)

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
