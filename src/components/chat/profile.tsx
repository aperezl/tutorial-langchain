'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Profile = ({username}: {username: string}) => (
    <div className='hidden lg:block w-full max-w-xs overflow-y-auto bg-slate-200'>
      <div className='flex items-center justify-between h-24 p-6'>
        <h2 className='text-xl font-bold'>Profile Details</h2>
        <Button>x</Button>
      </div>
      <div className='flex flex-col items-center p-6'>
        <Image src="/akira-toriyama.jpg" className='rounded-full' width={128} height={128} alt="userImage" />
        <div className='flex flex-col mb-3'>
          <h3 className='text-lg font-bold mb-1'>{username}</h3>
        </div>
      </div>
    </div>
  )

export { Profile }

