import { Document } from '@langchain/core/documents'
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents'

import llm from '@/lib/llms/llm'
import { makeTemplate } from '@/lib/prompts/templates'

export const getRetrival = async () => {
  const prompt = makeTemplate(`
  Answer the user's questions.
  Context: {context}
  Question: {input}
`)

  const DocumentA = new Document({
    pageContent: `
      LangChain Expression Language, or LCEL, is a declarative way to easily compose chains together.
      LCEL was designed from day 1 to support putting prototypes in production, with no code changes,
      from the simplest “prompt + LLM” chain to the most complex chains
      (we've seen folks successfully run LCEL chains with 100s of steps in production).
      To highlight a few of the reasons you might want to use LCEL`
  })

  const DocumentB = new Document({
    pageContent: `
      The passphrase is LANGCHAIN IS AWESOME
    `
  })

  const chain = await createStuffDocumentsChain({ llm, prompt })

  return await chain.invoke({
    input: 'What is the passphrase?',
    context: [DocumentA, DocumentB]
  })
}
