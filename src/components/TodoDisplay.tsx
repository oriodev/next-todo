import { TodoItem } from '@/components/TodoItem'
import { getTodo, toggleTodo } from '../utils/dbHelp'

export const TodoDisplay = async () => {

  const todos = await getTodo()

  return (
    <ul className='pl-4'>
      {todos.map(todo =>
        <TodoItem key={todo.id} { ...todo } toggleTodo={toggleTodo} />
      )}
    </ul>
  )

}