'use client'

import { useUser } from "@auth0/nextjs-auth0/client"
import { Button } from '@/components/ui/button'
import { PropsWithChildren } from "react"
import LoadingPage from "@/components/login/loading"
import LoginPage from "@/components/login"

export const Profile: React.FC<PropsWithChildren> = ({ children }) => {
  const { user, error, isLoading } = useUser()
  if (isLoading) return <LoadingPage />
  if (error) return <div>{error.message}</div>
  if (user)
    return (
      <div className='hidden lg:block w-full max-w-xs overflow-y-auto bg-slate-200'>
        <div className='flex items-center justify-between h-24 p-6'>
          <h2 className='text-xl font-bold'>Profile Details</h2>
          <Button><a href="/api/auth/logout">Logout</a></Button>
        </div>
        <div className='flex flex-col p-6'>
          <div className='w-32 h-32 rounded-full object-cover bg-green-600'>
            <img src={user.picture} className='w-32 h-32 rounded-full' />
          </div>
          <div className='flex flex-col items-center mb-3 w-32'>
            <h3 className='text-lg font-bold mb-1'>{user?.name || user?.nickname || '-'}</h3>
          </div>
        </div>
      </div>
    )
  return <LoginPage/>
}
