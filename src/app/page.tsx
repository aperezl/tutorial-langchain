/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { ChatArea } from '@/components/chat/chat-area'
import { Profile } from '@/components/chat/profile'
import { ModelInfo } from '@/components/chat/model-info'
import { Threads } from '@/components/chat/threads'
import { FC } from 'react'
interface pageProps { }

const page: FC<pageProps> = ({ }) => {

  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <Threads />
      <div className='flex flex-row flex-1'>
        <div className='grow p-6 flex flex-col relative overflow-y-auto'>
          <div className='border-b border-gray-300'>
            <h1 className='text-2xl font-bold'>PiedPiper</h1>
            <h2 className='text-xl'>An Open Source RAG</h2>
          </div>
          <div className='grow relative overflow-y-auto'>
            <div className='my-6'>
              <h2 className='text-lg font-bold'>Opportunity</h2>
              <p>Dependending on a single supplier (currently OpenAI) may generate certain risks</p>
              <ul className='list-disc list-inside ml-2'>
                <li>
                  <strong>Security:</strong> It is complicated to know if the information will be used to retrain your model.
                </li>
                <li>
                  <strong>Vendor lock-in:</strong> It is possible to be trapped in the vendor's infrastructure.
                </li>
                <li>
                  <strong>Costs:</strong> By using free models in different vendors or even on-premise, costs can be optimized
                </li>
                <li>
                  <strong>Versatility:</strong> The use of different LLMs allows you to find the one that best suits your needs.
                </li>
              </ul>
            </div>
            <div className='my-6'>
              <h2 className='text-lg font-bold'>Solution overview</h2>
              <p className='mb-2'>The frameworks used were <strong>NextJs</strong> (for frontend/backend), <strong>langchainJs</strong> (inferences) and <strong>vercel AI SDK</strong> (frontend/backend interaction).</p>
              <p className='mb-2'>The choice of <strong>javascript</strong> comes from its isomorphic capability (it can run on client/server) which facilitates the work of the development team.</p>
              <p className='mb-2'><strong>Ollama</strong> has been used to run models locally.</p>
              <p className='mb-2'>Unfortunately the equipment we have is not powerful enough (it does not have an Nvidia GPU), so we have also integrated external providers that make use of free models.</p>
            </div>
            <div className='my-6'>
              <h2 className='text-lg font-bold'>Impact</h2>
              <p className='mb-2'>A <strong>local RAG</strong> using open source can be very useful to create customized assistants. Such assistants can be restricted by departments or groups, protecting confidential information to a certain group of people.</p>
              <p className='mb-2'>In addition, the information will never leave the company's servers, so there would be no danger of information leakage.</p>
            </div>
          </div>
        </div>
        <div className='hidden lg:block w-full max-w-xs overflow-y-auto bg-slate-200'>
          <Profile />
        </div>
      </div>
    </div>
  )
}

export default page
