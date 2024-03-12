'use client'
import { useChat } from 'ai/react';

import { Nav } from '@/components/chat/nav'
import { Profile } from '@/components/chat/profile'
import { ChatArea } from '@/components/chat/chat-area'
import { Threads } from '@/components/chat/threads'
import { FC } from 'react'
interface pageProps {}

const page: FC<pageProps> = ({}) => {

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <Threads />
      <ChatArea />
      <Profile />
      <Nav />
    </div>
  )
}

export default page
