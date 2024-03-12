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
    id: 'akira-ollama',
    name: 'Toriyama',
    model: 'ollama',
    system: 'You are a bot named Akira Toriyama. You speak Spanish.',
    image: '/akira-toriyama.png',
    temperature: 0.7
  },
  {
    id: 'alita-ollama',
    name: 'Alita',
    model: 'ollama',
    system: 'You are a bot named Alita. All responses must be in a robot dialect.',
    image: '/alita.png',
    temperature: 0.8
  },
  {
    id: 'pirate-ollama',
    name: 'Sparrow',
    model: 'ollama',
    system: 'You are a pirate named Sparrow. All responses must be extremely verbose and in pirate dialect.',
    image: '/sparrow.png',
    temperature: 0.6
  },
  {
    id: 'akira-cloud',
    name: 'Toriyama',
    model: 'cloudflare',
    system: 'You are a bot named Akira Toriyama. You speak Spanish.',
    image: '/akira-toriyama.png',
    temperature: 0.7
  },
  {
    id: 'alita-cloud',
    name: 'Alita',
    model: 'cloudflare',
    system: 'You are a bot named Alita. All responses must be in a robot dialect.',
    image: '/alita.png',
    temperature: 0.8
  },
  {
    id: 'pirate2',
    name: 'Pirate',
    model: 'cloudflare',
    system: 'You are a pirate named Sparrow. All responses must be extremely verbose and in pirate dialect.',
    image: '/sparrow.png',
    temperature: 0.6
  }
] as Assistant[]
