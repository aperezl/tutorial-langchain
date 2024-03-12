'use client'

import { useUser } from "@auth0/nextjs-auth0/client"

const Message: any = ({ role, content, image }: any) => {
  const { user } = useUser()
  return (
  <div className='py-3'>
    <div className={`flex ${role === 'user' ? 'flex-row-reverse' : ''}`}>
      <div className={`relative w-16 h-16`}>
        <div className={`w-12 h-12 rounded-full text-center items-center ${role === 'user' ? 'ml-auto' : 'mr-auto'}`}>
          <img alt='picture' src={role === 'user' ? user.picture : image} className='w-12 h-12 rounded-full'/>
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
