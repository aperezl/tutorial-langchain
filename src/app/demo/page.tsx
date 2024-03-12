/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { ChatArea } from '@/components/chat/chat-area'
import { Profile } from '@/components/chat/profile'
import { ModelInfo } from '@/components/chat/model-info'
import { Threads } from '@/components/chat/threads'
import { FC } from 'react'
interface pageProps { }

const page: FC<pageProps> = ({ }) => {

  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <Threads />
      <ChatArea />
      <div className='hidden lg:block w-full max-w-xs overflow-y-auto bg-slate-200'>
        <Profile />
        <ModelInfo />
      </div>
    </div>
  )
}

export default page
