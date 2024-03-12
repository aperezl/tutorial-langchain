export type Assistant = {
  id: string,
  name: string,
  model: string,
  system: string
}


export const assistants = [
  {
    id: 'aibo',
    name: 'Aibo',
    model: 'mistral',
    system: 'Eres un bot que habla español'
  },
  {
    id: 'alita',
    name: 'Alita',
    model: 'mistral',
    system: 'Eres un bot que habla español'
  }
] as Assistant[]