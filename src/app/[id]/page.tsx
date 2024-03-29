/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useChat } from 'ai/react'

import { ChatArea } from '@/components/chat/chat-area'
import { Nav } from '@/components/chat/nav'
import { Profile } from '@/components/chat/profile'
import { Threads } from '@/components/chat/threads'
import { useUser } from '@auth0/nextjs-auth0/client'
import { FC } from 'react'
import { Assistant, assistants } from '@/data/assistant'
import { ModelInfo } from '@/components/chat/model-info'
interface pageProps {
  params: { id: string }
}


const page: FC<pageProps> = ({ params }) => {

  const assistant: Assistant = assistants.find(a => a.id === params.id) || assistants[0]
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <Threads />
      <div className='flex flex-row flex-1'>
        <ChatArea assistant={assistant} />
        <div className='hidden lg:flex w-full max-w-xs h-full flex-col bg-slate-200'>
          <Profile />
          <ModelInfo assistant={assistant} />
        </div>
      </div>
    </div>
  )
}

export default page
