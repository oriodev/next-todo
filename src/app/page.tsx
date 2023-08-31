import prisma from "@/db"
import Link from "next/link"

export default async function Home() {

  const todos = await prisma.todo.findMany()

  return ( <>

    <header className='flex flex-row gap-5 items-center mb-4'>
      <h1 className='text-3xl'>todos</h1>
      <Link className='text-3xl hover:font-bold focus-within:font-bold' href='/new'>+</Link>
    </header>
      
    <ul className='pl-4'>

    </ul>

  </> )
}