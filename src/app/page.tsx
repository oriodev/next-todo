import Link from "next/link"
import { getTodo, toggleTodo } from '../utils/dbHelp'
import { TodoItem } from '@/components/TodoItem'

export default async function Home() {
  
  const todos = await getTodo()

  return ( <>

    <header className='flex flex-row gap-5 items-center mb-4'>
      <h1 className='text-3xl'>todos</h1>
      <Link className='text-3xl hover:font-bold focus-within:font-bold' href='/new'>+</Link>
    </header>
      
    <ul className='pl-4'>
      {todos.map(todo =>
        <TodoItem key={todo.id} { ...todo } toggleTodo={toggleTodo} />
      )}
    </ul>

  </> )
}