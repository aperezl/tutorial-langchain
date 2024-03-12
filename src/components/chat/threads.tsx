'use client'

import { Button } from '@/components/ui/button'
import { assistants } from '@/data/assistant'
import Link from 'next/link'

const Assistant = ({ id, name, model }: any) => {
  return (
    <Link href={`/demo/${id}`}>
      <div className='flex py-3 border-b border-gray-100 hover:bg-gray-100 hover:-mx-6 transition-all cursor-pointer'>
        <div className='px-3'>
          {name} <span className='text-xs text-gray-400'>({model})</span>
        </div>
      </div>
    </Link>
  )
}
const Threads = () => (
    <div className='grow lg:shrink-0 overflow-y-auto lg:max-w-xs'>
      <div className='flex flex-col gap-3 p-6 bg-chat md:bg-white sticky top-0 z-10 border-b'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-xl'>Chats</h1>
        </div>
        <div className='flex items-center gap-3'>
          <Button>All Chats</Button>
          <div className='relative w-full'>
            <label>
              <input
                className='w-full py-1 px-2 pr-6 border border-gray-400 rounded-md'
                placeholder='Search Assistant'
                type='text'
              />
            </label>
          </div>
        </div>
      </div>
      <div className='p-6'>
        <div className='flex items-center text-gray-400'>
          <span className='uppercase text-sm font-medium ml-3'>Assistants</span>
        </div>
        {assistants.map(({ id, name, model }) => <Assistant key={id} id={id} name={name} model={model} />)}
      </div>
    </div>
  )

export { Threads }
