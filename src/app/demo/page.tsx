/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useChat } from 'ai/react';

import { ChatArea } from '@/components/chat/chat-area';
import { Nav } from '@/components/chat/nav';
import { Profile } from '@/components/chat/profile';
import { Threads } from '@/components/chat/threads';
import { useUser } from '@auth0/nextjs-auth0/client';
import { FC } from 'react';
interface pageProps { }

const page: FC<pageProps> = ({ }) => {

  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const { user } = useUser()

  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <Threads />
      <ChatArea />
      <Profile username={user?.name || ''} />
      <Nav />
    </div>
  )
}

export default page
