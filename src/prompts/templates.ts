import { ChatPromptTemplate } from '@langchain/core/prompts'
import {
  StringOutputParser,
  CommaSeparatedListOutputParser
} from '@langchain/core/output_parsers'
import { StructuredOutputParser } from 'langchain/output_parsers'
import { z } from 'zod'

import model from '@/llms/llm.ollama'

const prompt = ChatPromptTemplate.fromTemplate(
  'Eres un cómico que hablas en español. Cuenta un chiste relacionado con {input}'
)

// getChain
const chain = prompt.pipe(model)
export const getChain = async (input: string) => chain.invoke({ input })

// getPromptMessages
const promptMessages = ChatPromptTemplate.fromMessages([
  ['system', 'Generate a joke based on a word provided by the user'],
  ['human', '{input}']
])

export const getPromptMessages = async (input: string) =>
  promptMessages.pipe(model).invoke({ input })

// getPromptWithParser
const parser = new StringOutputParser()
export const getPromptWithParser = async (input: string) =>
  prompt.pipe(model).pipe(parser).invoke({ input })

// getPromptWithParserCommaSeparated
const promptSynonyms = ChatPromptTemplate.fromTemplate(
  'Provide 5 synonyms, separated by commas, for the followind word {input}'
)
export const getPromptWithParserCommaSeparated = async (input: string) =>
  promptSynonyms
    .pipe(model)
    .pipe(new CommaSeparatedListOutputParser())
    .invoke({ input })

// getPromptWithParserStructured
const promptStructured = ChatPromptTemplate.fromTemplate(`
  Extract information from the following phrase.
  Formatting Instructionns: {format_instructions}
  Phrase: {phrase}
`)

const outputParser = StructuredOutputParser.fromNamesAndDescriptions({
  name: 'the name of the person',
  age: 'the age of the person'
})
export const getPromptWithParserStructured = async (phrase: string) =>
  promptStructured.pipe(model).pipe(outputParser).invoke({
    phrase,
    format_instructions: outputParser.getFormatInstructions()
  })

// getPromptWithParserZod
const outputParserZod = StructuredOutputParser.fromZodSchema(
  z.object({
    recipe: z.string().describe('name of recipe'),
    ingredients: z.array(z.string().describe('ingredients'))
  })
)
export const getPromptWithParserZod = async (phrase: string) =>
  promptStructured.pipe(model).pipe(outputParserZod).invoke({
    phrase,
    format_instructions: outputParserZod.getFormatInstructions()
  })

// Make Template
export const makeTemplate = (template: string) =>
  ChatPromptTemplate.fromTemplate(template)
