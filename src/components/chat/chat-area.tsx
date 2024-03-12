'use client'
import { FC, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Message } from '@/components/chat/message'
import { useChat } from 'ai/react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Assistant } from '@/data/assistant'
interface pageProps {
  assistant: Assistant

}

const ChatArea: FC<pageProps> = ({ assistant }) => {
  
  const { messages, setMessages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat_v2',
    body: {
      id: assistant.id
    },
    sendExtraMessageFields: true
  })
  const { user } = useUser()
  useEffect(() => {
    console.log('load')
    console.log(localStorage.getItem(assistant.id))
    setMessages(JSON.parse(localStorage.getItem(assistant.id)))
  }, [])
  useEffect(() => {
    if (messages.length !== 0) {
      localStorage.setItem(assistant.id, JSON.stringify(messages))
    }
  }, [messages])

  const handleFileUpload = () => {
    const inputFile = document.createElement('input')
    inputFile.type = 'file'
    //inputFile.accept = 'image/*, .pdf, .txt, .md'
    inputFile.onchange = (event) => {
      const file = event.target.files[0]
      console.log('Selected file:', file)
      const fileName = file.name
      setMessages([...messages, { id: messages.length+1, content: `Uploaded: ${fileName}`, role: 'user'}])
    }
    inputFile.click()
  }

  return (
    <div className='translate-x-full lg:translate-x-0 fixed inset-0 h-full lg:relative lg:inset-auto flex flex-col grow w-full border-x border-gray-100 bg-white z-10 transition'>
      <div className='flex items-center h-24 p-6'>
        <div className='w-12 h-12 shrink-0'>
          <img alt='picture' src={ assistant.image } className='w-12 h-12 rounded-full'/>
        </div>
        <div className='flex flex-col ml-4'>
          <div className='font-bold text-xl'>{ assistant.name }</div>
          <span className='text-xs text-gray-400'>{ assistant.model }</span>
        </div>
        <div className='flex items-center space-x-6 ml-auto text-gray-400'>
          <Button className='' onClick={handleFileUpload}>Add document</Button>
        </div>
      </div>

      <div className='flex flex-col grow p-6 bg-chat overflow-y-auto'>
        {messages.map(m => (
          <div key={m.id}>
            <Message content={m.content} role={m.role} image={assistant.image} />
          </div>
        ))}

      </div>

      <div className='flex items-center p-6 gap-3 bg-cyan-900'>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='flex'>
            <img alt='picture' src={user.picture} className='w-10 h-10 rounded-full'/>
            <div className='flex w-full mx-3'>
              <input className='w-full py-1 px-2 pr-6 border border-gray-200 rounded-md'
                     placeholder='Enter message'
                     value={input}
                     onChange={handleInputChange}/>
            </div>
            <Button type='submit'>Send</Button>
          </div>
        </form>
      </div>
    </div>
  )

}

export {
  ChatArea
}
