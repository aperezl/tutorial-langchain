import { FC } from "react";
import {Assistant} from "@/data/assistant";

interface pageProps {
  assistant: Assistant
}

export const ModelInfo: FC<pageProps> = ({ assistant }) => (
  <div className='p-6'>
    <h3 className='text-lg font-bold'>Model info</h3>
    <div className='flex'>
      <div className='flex-1 font-bold'>Name:</div>
      <div className='flex-1'>{assistant.name}</div>
    </div>
    <div className='flex'>
        <div className='flex-1 font-bold'>Model:</div>
        <div className='flex-1'>{assistant.model}</div>
    </div>
    <div className='flex'>
        <div className='flex-1 font-bold'>System:</div>
        <div className='flex-1'>{assistant.system}</div>
      </div>
    </div>
    )
