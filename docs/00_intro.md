# Requisitos

## Instalar ollama

[https://ollama.com/download](https://ollama.com/download)

```
curl -fsSL https://ollama.com/install.sh | sh
```



# Instalar next
```
npx create-next-app@latest tutorial-langchain
```
(Configurarlo como typescript)

# Instalar paquetes necesarios

```
npm i langchain @langchain/community
```

# Primer ejemplo


```javascript
# /src/llms/llm.ollama.ts 

import { ChatOllama } from '@langchain/community/chat_models/ollama'

const model = new ChatOllama({
  model: 'gemma'
})

export default model
```

```javascript
# /src/app/api/basic/invoke/route.ts

import { NextRequest } from 'next/server'
import model from '@/llms/llm.ollama'

export const GET = async (req: NextRequest) => {
  const message = req.nextUrl.searchParams.get('message') as string
  const response = await model.invoke(message ?? 'Hello')
  return new Response(JSON.stringify(response, null, 2))
}

```

Una vez arrancado el proyecto `npm run dev` podemos navegar a la dirección `http://localhost:3000/api/basic/invoke` y deberíamos obtener el siguiente mensaje:

```json
{
  "lc": 1,
  "type": "constructor",
  "id": [
    "langchain_core",
    "messages",
    "AIMessage"
  ],
  "kwargs": {
    "content": "Hello! 👋 I'm happy to hear from you. What can I do for you today?",
    "additional_kwargs": {}
  }
}
```

También podemos modificar el mensaje que invocaremos usando el parámetro `message`, por ejemplo, con `http://localhost:3000/api/basic/invoke?message=Hola,%20como%20est%C3%A1s%20hoy` deberíamos obtener algo parecido a esto:

```json
{
  "lc": 1,
  "type": "constructor",
  "id": [
    "langchain_core",
    "messages",
    "AIMessage"
  ],
  "kwargs": {
    "content": "Hola! Soy un modelo lingüístico extenso y puedo ayudarte en cualquier tema que te interesa. ¿Qué puedo hacer para ayudarte hoy?",
    "additional_kwargs": {}
  }
}
```

También podemos procesar varios mensajes a la vez usando `model.batch`:

```javascript
import { NextRequest } from 'next/server'
import model from '@/llms/llm.ollama'

export const GET = async (req: NextRequest) => {
  const message1 = req.nextUrl.searchParams.get('message1') as string
  const message2 = req.nextUrl.searchParams.get('message2') as string

  const response = await model.batch([message1, message2])
  return new Response(JSON.stringify(response, null, 2))
}

```

Para comprobarlo sólo tenemos que ir a `http://localhost:3000/api/basic/batch?message1=Hola&message2=Como+est%C3%A1s` donde obtendremos un mensaje de este tipo:

```json
[
  {
    "lc": 1,
    "type": "constructor",
    "id": [
      "langchain_core",
      "messages",
      "AIMessage"
    ],
    "kwargs": {
      "content": "¡Hola! Soy un modelo lingüístico que está aquí para ayudarte. ¿Qué puedo hacer para ti hoy?",
      "additional_kwargs": {}
    }
  },
  {
    "lc": 1,
    "type": "constructor",
    "id": [
      "langchain_core",
      "messages",
      "AIMessage"
    ],
    "kwargs": {
      "content": "Como un modelo lingüístico extenso, estoy en constante aprendizaje y evolución. Soy capaz de entender el lenguaje humano, responder preguntas y generar contenido original.",
      "additional_kwargs": {}
    }
  }
]
```

## Haciendo stream

```
npm i ai
```

