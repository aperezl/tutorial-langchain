'use client'

import { useUser } from "@auth0/nextjs-auth0/client"

const Message: any = ({ role, content }: any) => {
  const { user } = useUser()
  return (
  <div className='py-3'>
    <div className={`flex ${role === 'user' ? 'flex-row-reverse' : ''}`}>
      <div className={`relative w-16 h-16 mx-3`}>
        <div className={`w-12 h-12 rounded-full justify-center items-center ${role === 'user' ? 'bg-green-400' : 'bg-slate-400'}`}>
          <img alt='profile picture' src={user.picture} className='w-12 h-12 rounded-full'/>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col gap-3 items-start'>
          <div className={`max-w-md p-4 rounded-2xl overflow-hidden ${role === 'user' ? 'bg-green-200' : 'bg-message'}`}>
            {content}
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export { Message }
