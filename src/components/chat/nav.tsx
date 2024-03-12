'use client'

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

export { Nav }