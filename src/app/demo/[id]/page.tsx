/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useChat } from 'ai/react'

import { ChatArea } from '@/components/chat/chat-area'
import { Nav } from '@/components/chat/nav'
import { Profile } from '@/components/chat/profile'
import { Threads } from '@/components/chat/threads'
import { useUser } from '@auth0/nextjs-auth0/client'
import { FC } from 'react'
import { assistants } from '@/data/assistant'
interface pageProps {
  params: { id: string }
}

const page: FC<pageProps> = ({ params }) => {

  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const { user } = useUser()
  const assistant = assistants.find(a => a.id === params.id)
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <Threads />
      <div className='flex flex-row flex-1'>
        <ChatArea assistant={assistant} />
        <Profile username={user?.name || ''} />
      </div>
    </div>
  )
}

export default page
