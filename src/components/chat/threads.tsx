'use client'

import { Button } from '@/components/ui/button'
import { Assistant, assistants } from '@/data/assistant'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Marker } from 'react-mark.js'

const regexEscape = (str: string) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&').trim()

const searchAssistants = (search: string, assistants: Assistant[]) => {
  if (!search) {
    return assistants
  }
  const regexp = new RegExp(regexEscape(search), 'i')
  return assistants.filter((assistant) => regexp.test(assistant.name) || regexp.test(assistant.model) || regexp.test(assistant.system))
}

const AssistantThread = ({ assistant, search }: { assistant: Assistant, search: string }) => {

  const [foundInSystem, setFoundInSystem] = useState<JSX.Element[]>([])

  useEffect(() => {
    let result = []
    if (search) {
      const regexp = new RegExp(regexEscape(search), 'i')
      const m = assistant.system.match(regexp)
      if (m) {
        console.log(m)
        let startEllip = <></>
        let endEllip = <></>
        let start = 0
        let end = m.index + 10
        if (m.index > 10) {
          start = m.index - 10
          startEllip = <span key="startEllip">&hellip;</span>
        }
        const found = <span key="found">{assistant.system.slice(start, end)}</span>
        if (end < assistant.system.length) {
          endEllip = <span key="endEllip">&hellip;</span>
        }
        result = [startEllip, found, endEllip]
      }
    }
    setFoundInSystem(result)
  }, [search])

  return (
    <Link href={`/${assistant.id}`}>
      <div className='flex py-3 border-b border-gray-100 hover:bg-gray-100 hover:-mx-6 transition-all cursor-pointer'>
        <div className='px-3'>
          <Marker mark={search}>{assistant.name}</Marker>
          <Marker mark={search}><span className='text-xs text-gray-400'>({assistant.model})</span></Marker>
          {foundInSystem.length > 0 &&
            <div className='text-xs flex'>
              <span className='font-bold'>System:&nbsp;</span><Marker mark={search}>{foundInSystem}</Marker>
            </div>
          }
        </div>
      </div>
    </Link>
  )
}
const Threads = () => {
  const [search, setSearch] = useState('')
  return (<div className='grow lg:shrink-0 overflow-y-auto lg:max-w-xs'>
    <div className='flex flex-col gap-3 p-6 bg-chat md:bg-white sticky top-0 z-10 border-b'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-xl'>Chats</h1>
      </div>
      <div className='flex items-center gap-3'>
        <div className='relative w-full'>
          <label>
            <input
              className='w-full py-1 px-2 border border-gray-400 rounded-md'
              placeholder='Search Assistant'
              type='search'
              onInput={(e) => setSearch(e.currentTarget.value)}
            />
          </label>
        </div>
      </div>
    </div>
    <div className='p-6'>
      <div className='flex items-center text-gray-400'>
        <span className='uppercase text-sm font-medium ml-3'>Assistants</span>
      </div>
      {searchAssistants(search, assistants).map((assistant) => <AssistantThread key={assistant.id} assistant={assistant} search={search} />)}
    </div>
  </div>
  )
}

export { Threads }

