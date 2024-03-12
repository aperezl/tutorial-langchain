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
      <div className='flex flex-row flex-1'>
        <div className='translate-x-full lg:translate-x-0 fixed inset-0 h-full lg:relative lg:inset-auto flex flex-col grow w-full border-x border-gray-100 bg-white z-10 transition'></div>
        <div className='hidden lg:block w-full max-w-xs overflow-y-auto bg-slate-200'>
          <Profile />
        </div>
      </div>
    </div>
  )
}

export default page
