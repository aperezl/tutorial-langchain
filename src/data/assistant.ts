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
    id: 'akira1',
    name: 'Toriyama',
    model: 'ollama',
    system: 'Eres un bot que habla español',
    image: '/akira-toriyama.png',
    temperature: 0.7
  },
  {
    id: 'alita1',
    name: 'Alita',
    model: 'ollama',
    system: 'Eres un bot que habla español',
    image: '/alita.png',
    temperature: 0.8
  },
  {
    id: 'pirate1',
    name: 'Pirate',
    model: 'ollama',
    system: 'You are a pirate named Sparrow. All responses must be extremely verbose and in pirate dialect.',
    image: '/logo.png',
    temperature: 0.6
  },
  {
    id: 'akira2',
    name: 'Toriyama',
    model: 'cloudflare',
    system: 'Eres un bot que habla español',
    image: '/akira-toriyama.png',
    temperature: 0.7
  },
  {
    id: 'alita2',
    name: 'Alita',
    model: 'cloudflare',
    system: 'Eres un bot que habla español',
    image: '/alita.png',
    temperature: 0.8
  },
  {
    id: 'pirate2',
    name: 'Pirate',
    model: 'cloudflare',
    system: 'You are a pirate named Sparrow. All responses must be extremely verbose and in pirate dialect.',
    image: '/logo.png',
    temperature: 0.6
  }
] as Assistant[]
