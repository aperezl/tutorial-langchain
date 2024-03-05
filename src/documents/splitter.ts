import { createStuffDocumentsChain } from 'langchain/chains/combine_documents'
import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { createRetrievalChain } from 'langchain/chains/retrieval'
import llm from '@/llms/llm'
import embeddings from '@/embeddings'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { makeTemplate } from '@/prompts/templates'

export const getRetrival = async () => {
  const prompt = makeTemplate(`
    Answer the user's questions.
    Context: {context}
    Question: {input}
  `)

  const loader = new CheerioWebBaseLoader(
    'https://js.langchain.com/docs/expression_language/'
  )

  const docs = await loader.load()
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 20
  })
  const splitDocs = await splitter.splitDocuments(docs)
  console.log(splitDocs)

  const vectorStore = await MemoryVectorStore.fromDocuments(
    splitDocs,
    embeddings
  )
  console.log('Store')
  const retriever = vectorStore.asRetriever({
    k: 2
  })
  console.log('Load retriever')

  const chain = await createStuffDocumentsChain({ llm, prompt })

  const retrievalChain = await createRetrievalChain({
    combineDocsChain: chain,
    retriever
  })
  console.log('combine')

  const r = await retrievalChain.invoke({
    input: 'What is LCEL?'
  })
  console.log('end')
  return r
}
