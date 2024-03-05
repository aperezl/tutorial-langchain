import model from '@/llms/llm'
import { makeTemplate } from '@/prompts/templates'

export const getRetrival = async () => {
  const prompt = makeTemplate(`
  Answer the user's questions.
  Context: LangChain Expression Language, or LCEL, is a declarative way to easily compose chains together. LCEL was designed from day 1 to support putting prototypes in production, with no code changes, from the simplest “prompt + LLM” chain to the most complex chains (we’ve seen folks successfully run LCEL chains with 100s of steps in production). To highlight a few of the reasons you might want to use LCEL
  Question: {input}
`)
  const chain = prompt.pipe(model)

  return await chain.invoke({
    input: 'What is LCEL?'
  })
}
