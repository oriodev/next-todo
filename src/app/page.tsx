import Link from "next/link"
import { TodoDisplay } from '@/components/TodoDisplay'

export default async function Home() {
  
  return ( <>

    <header className='flex flex-row gap-5 items-center mb-4 justify-center items-center'>
      <h1 className='text-4xl select-none'>todos</h1>
      <Link className='text-4xl hover:font-bold focus-within:font-bold select-none' href='/new'>+</Link>
    </header>

    <TodoDisplay  />

  </> )
}