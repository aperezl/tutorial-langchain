const Message: any = ({ role, content }: any) => (
  <div className='py-3'>
    <div className={`flex ${role === 'user' ? 'justify-end' : ''}`}>
      <div className={`relative w-16 h-16 shrink-0 ${role === 'user' ? 'ml-auto' : ''}`}>
        <div className={`w-12 h-12 rounded-full justify-center items-center ${role === 'user' ? 'bg-green-400' : 'bg-slate-400'}`}>
          {role}
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

export { Message }