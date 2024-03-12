'use client'
import { Button } from "@/components/ui/button";
import { Assistant } from "@/data/assistant";
import { useRouter } from 'next/navigation';
import { FC } from "react";

interface pageProps {
  assistant: Assistant
}

export const ModelInfo: FC<pageProps> = ({ assistant }) => {
  const router = useRouter();

  return (  
    <>
      <div className='px-6 pt-20 pb-3 border-b border-gray-300'>
        <h3 className='text-lg font-bold'>Model info</h3>
      </div>
      <div className='px-6 pt-3'>
        <div className='flex mb-2'>
          <div className='flex-1 font-bold'>Name:</div>
          <div className='flex-1'>{assistant.name}</div>
        </div>
        <div className='flex mb-2'>
          <div className='flex-1 font-bold'>Model:</div>
          <div className='flex-1'>{assistant.model}</div>
        </div>
        <div className='flex mb-2'>
          <div className='flex-1 font-bold'>Temperature:</div>
          <div className='flex-1 pt-2'>
            <div className="h-3 relative rounded-full overflow-hidden">
              <div className=" w-full h-full bg-white absolute "></div>
              <div className=" h-full bg-indigo-500 sm:bg-gray-600 absolute" style={{ width: `${assistant.temperature * 100}%` }}></div>
            </div>
          </div>
        </div>
        <div className='flex mb-2'>
          <div className='flex-1 font-bold'>System:</div>
        </div>
        <div className='flex'>
          <div className='flex-1'>{assistant.system}</div>
        </div>
      </div>
      <div className='right-0 bottom-0 w-full p-5'>
        <Button onClick={() => {
          localStorage.removeItem(assistant.id)
          router.replace('/')
        }}>Clear conversation</Button>
      </div>
    </>
  )
  
}

