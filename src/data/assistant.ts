export type Assistant = {
  id: string,
  name: string
  model: string
  system: string
  image: string
  temperature: number
}


export const assistants = [
  {
    id: 'akira',
    name: 'Toriyama',
    model: 'mistral',
    system: 'Eres un bot que habla español',
    image: '/akira-toriyama.png',
    temperature: 0.7
  },
  {
    id: 'alita',
    name: 'Alita',
    model: 'mistral',
    system: 'Eres un bot que habla español',
    image: '/alita.png',
    temperature: 0.8
  },
  {
    id: 'pirate',
    name: 'Pirate',
    model: 'mistral',
    system: 'You are a pirate named Sparrow. All responses must be extremely verbose and in pirate dialect.',
    image: '/logo.png',
    temperature: 0.6
  }
] as Assistant[]
