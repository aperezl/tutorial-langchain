import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FC } from 'react'

interface pageProps {}

const Nav = () => (
  <nav className='relative flex lg:flex-col items-center justify-between p-3 lg:px-6 lg:py-12 bg-nav lg:order-first'>
    <div className='w-8 h-8 text-white hidden lg:block bg-slate-500 rounded-full'>
      -
    </div>
    <div className='flex grow lg:justify-between lg:flex-col lg:my-12 lg:px-3 lg:pb-12 lg:border-b-2 lg:border-white lg:border-opacity-10'>
      <ul className='flex lg:flex-col items-center justify-between lg:justify-start gap-6 text-white/50 w-2/3 lg:w-auto'>
        <li className='hidden lg:block'>Ico</li>
        <li className='hidden lg:block'>Ico</li>
        <li className='hidden lg:block'>Ico</li>
        <li className='hidden lg:block'>Ico</li>
      </ul>
      <ul className='flex lg:flex-col items-center justify-between lg:justify-start gap-6 text-white/50 w-2/3 lg:w-auto'>
        <li className='hidden lg:block'>Ico</li>
        <li className='hidden lg:block'>Ico</li>
      </ul>
    </div>
    <div className='w-10 h-10 rounded-lg overflow-hidden text-white hidden lg:block bg-slate-400'>
      User
    </div>
  </nav>
)

const Profile = () => (
  <div className='hidden lg:block w-full max-w-xs overflow-y-auto bg-slate-200'>
    <div className='flex items-center justify-between h-24 p-6'>
      <h2 className='text-xl font-bold'>Profile Details</h2>
      <Button>x</Button>
    </div>
    <div className='flex flex-col p-6'>
      <div className='w-32 h-32 rounded-full object-cover bg-green-600'>
        <div className='w-[128px] h-[128px]'>AP</div>
      </div>
      <div className='flex flex-col items-center mb-3'>
        <h3 className='text-lg font-bold mb-1'>Antonio Perez</h3>
      </div>
    </div>
  </div>
)

const Message = () => (
  <div className='py-3'>
    <div className='flex'>
      <div className='relative w-16 h-16 shrink-0'>
        <div className='w-12 h-12 rounded-full justify-center items-center bg-slate-400'>
          AP
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col gap-3 items-start'>
          <div className='max-w-md p-4 rounded-2xl overflow-hidden bg-message'>
            Look at this field! Beautiful!
          </div>
        </div>
      </div>
    </div>
  </div>
)

const ChatArea = () => (
  <div className='translate-x-full lg:translate-x-0 fixed inset-0 h-full lg:relative lg:inset-auto flex flex-col grow w-full border-x border-gray-100 bg-white z-10 transition'>
    <div className='flex items-center h-24 p-6'>
      <Button className='flex items-center justify-center mr-6 lg:hidden'>
        Back to
      </Button>
      <div className='w-12 h-12 shrink-0'>Image</div>
      <div className='flex flex-col ml-4'>
        <div className='font-bold text-xl'>Bot</div>
        <span className='text-xs text-gray-400'>12 agents, 3 documents</span>
      </div>
      <div className='flex items-center space-x-6 ml-auto text-gray-400'>
        <Button className=''>add Document</Button>
        <Button className=''>add Tool</Button>
      </div>
    </div>

    <div className='flex flex-col grow p-6 bg-chat overflow-y-auto'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>

    <div className='flex items-center p-6 gap-3 bg-cyan-900'>
      <div className='flex flex-col flex-1 ml-4 h-24 p-1'>
        <textarea className='border-2 w-full h-full bg-gray-200 rounded-md' defaultValue='Hola' />
      </div>
      <div className='flex items-center space-x-6 ml-auto text-gray-400'>
        <Button className=''>Send</Button>
      </div>
    </div>
  </div>
)

const Threads = () => (
  <div className='grow lg:shrink-0 overflow-y-auto lg:max-w-xs'>
    <div className='flex flex-col gap-3 p-6 bg-chat md:bg-white sticky top-0 z-10 border-b'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-xl'>Chats</h1>
        <div className='flex items-center gap-3 text-gray-400'>
          <Link href='/' className='block w-5 h-5'>
            Ico
          </Link>
          <Link href='/' className='block w-5 h-5'>
            Ico
          </Link>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <Button>All Chats</Button>
        <div className='relative w-full'>
          <label>
            <input
              className='w-full py-1 px-2 pr-6 border border-gray-400 rounded-md'
              placeholder='Search Assistant'
              type='text'
            />
          </label>
        </div>
      </div>
    </div>
    <div className='p-6'>
      <p className='flex items-center text-gray-400'>
        <span>Ico</span>
        <span className='uppercase text-sm font-medium ml-3'>Bookmarked</span>
      </p>
      <div>
        <div className='flex py-3 border-b border-gray-100 hover:bg-gray-100 hover:-mx-6 transition-all cursor-pointer'>
          <div className='relative w-12 h-12 shrink-0 before:absolute before:w-3 before:h-3 before:rounded-full before:bg-green-500 before:border-2 before:border-white'>
            xxx
          </div>
        </div>
      </div>
    </div>
  </div>
)

const page: FC<pageProps> = ({}) => {
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <Threads />
      <ChatArea />
      <Profile />
      <Nav />
    </div>
  )
}

export default page
