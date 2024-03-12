import { createStuffDocumentsChain } from 'langchain/chains/combine_documents'
import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'

import llm from '@/lib/llms/llm'
import { makeTemplate } from '@/lib/prompts/templates'

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
  console.log(docs)

  const chain = await createStuffDocumentsChain({ llm, prompt })

  return await chain.invoke({
    input: 'What is LCEL?',
    context: docs
  })
}
