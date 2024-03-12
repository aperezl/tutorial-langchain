'use client'

import { Button } from '@/components/ui/button'

const Profile = ({username}: {username: string}) => (
    <div className='hidden lg:block w-full max-w-xs overflow-y-auto bg-slate-200'>
      <div className='flex items-center justify-between h-24 p-6'>
        <h2 className='text-xl font-bold'>Profile Details</h2>
        <Button>x</Button>
      </div>
      <div className='flex flex-col p-6'>
        <div className='w-32 h-32 rounded-full object-cover bg-green-600'>
          <div className='w-[128px] h-[128px]'>{username.length ? username[0] : '-'}</div>
        </div>
        <div className='flex flex-col items-center mb-3'>
          <h3 className='text-lg font-bold mb-1'>{username}</h3>
        </div>
      </div>
    </div>
  )

export { Profile }

