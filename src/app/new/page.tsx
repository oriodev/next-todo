import Link from 'next/link'
import { createTodo } from '@/utils/dbHelp'

export default function Page() {
  return ( <>

    {/* header */}
    <header className='flex flex-row gap-5 items-center mb-4'>
      <h1 className='text-3xl'>new</h1>
    </header>

    {/* form */}
    <form action={createTodo} className='flex gap-2 flex-col'>

      {/* text input */}
      <input type='text' name='title' 
        className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-600'
      />

      {/* cancel button */}
      <div className='flex gap-1 justify-end'>
        <Link 
          href='..' 
          className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'
        >cancel</Link>

        {/* create todo button */}
        <button 
          type='submit' 
          className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'
        >create</button>
      </div>
    </form>
    
  </> )
}