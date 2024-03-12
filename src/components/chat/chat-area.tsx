'use client'

import { Button } from '@/components/ui/button'
import { Message } from '@/components/chat/message'

const ChatArea = () => (
    <div className='translate-x-full lg:translate-x-0 fixed inset-0 h-full lg:relative lg:inset-auto flex flex-col grow w-full border-x border-gray-100 bg-white z-10 transition'>
      <div className='flex items-center h-24 p-6'>
        <Button className='flex items-center justify-center mr-6 lg:hidden'>
          Back to
        </Button>
        <div className='w-12 h-12 shrink-0'>Image</div>
        <div className='flex flex-col ml-4'>
          <div className='font-bold text-xl'>Bot</div>
          <span className='text-xs text-gray-400'>12 agents, 3 documents</span>
        </div>
        <div className='flex items-center space-x-6 ml-auto text-gray-400'>
          <Button className=''>add Document</Button>
          <Button className=''>add Tool</Button>
        </div>
      </div>
  
      <div className='flex flex-col grow p-6 bg-chat overflow-y-auto'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
  
      <div className='flex items-center p-6 gap-3 bg-cyan-900'>
        <div className='flex flex-col flex-1 ml-4 h-24 p-1'>
          <textarea defaultValue={''} className='border-2 w-full h-full bg-gray-200 rounded-md' />
            
        </div>
        <div className='flex items-center space-x-6 ml-auto text-gray-400'>
          <Button className=''>Send</Button>
        </div>
      </div>
    </div>
  )

  export { ChatArea }