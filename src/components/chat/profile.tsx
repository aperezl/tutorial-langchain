'use client'

import { useUser } from "@auth0/nextjs-auth0/client"
import { Button } from '@/components/ui/button'
import LoadingPage from "@/components/login/loading"
import LoginPage from "@/components/login"

export const Profile: any = () => {
  const { user, error, isLoading } = useUser()
  if (isLoading) return <LoadingPage />
  if (error) return <div>{error.message}</div>
  if (user)
    return (
      <div className='p-6 border-b border-gray-400'>
        <div className='flex items-center justify-between mb-3'>
          <div className='w-10 h-10 rounded-full object-cover bg-green-600'>
            <img src={user.picture} className='w-10 h-10 rounded-full'/>
          </div>
          <Button><a href="/api/auth/logout">Logout</a></Button>
        </div>
        <h3 className='text-lg font-bold'>{user?.name || user?.nickname || '-'}</h3>
      </div>
    )
  return <LoginPage/>
}
