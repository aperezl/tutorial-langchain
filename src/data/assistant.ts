export type Assistant = {
  id: string,
  name: string
  model: string
  system: string
  image: string
}


export const assistants = [
  {
    id: 'aibo',
    name: 'Aibo',
    model: 'mistral',
    system: 'Eres un bot que habla español',
    image: '/logo.png'
  },
  {
    id: 'alita',
    name: 'Alita',
    model: 'mistral',
    system: 'Eres un bot que habla español',
    image: '/logo.png'
  }
] as Assistant[]