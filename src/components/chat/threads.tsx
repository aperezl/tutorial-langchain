'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Threads = () => (
    <div className='grow lg:shrink-0 overflow-y-auto lg:max-w-xs'>
      <div className='flex flex-col gap-3 p-6 bg-chat md:bg-white sticky top-0 z-10 border-b'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-xl'>Chats</h1>
          <div className='flex items-center gap-3 text-gray-400'>
            <Link href='/' className='block w-5 h-5'>
              Ico
            </Link>
            <Link href='/' className='block w-5 h-5'>
              Ico
            </Link>
          </div>
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
          <div>Ico</div>
          <span className='uppercase text-sm font-medium ml-3'>Bookmarked</span>
        </div>
        <div>
          <div className='flex py-3 border-b border-gray-100 hover:bg-gray-100 hover:-mx-6 transition-all cursor-pointer'>
            <div className='relative w-12 h-12 shrink-0 before:absolute before:w-3 before:h-3 before:rounded-full before:bg-green-500 before:border-2 before:border-white'>
              xxx
            </div>
          </div>
        </div>
      </div>
    </div>
  )

export { Threads }