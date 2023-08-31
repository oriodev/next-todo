'use client'

type TodoItemProps = {
  id: string,
  title: string,
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
}

export const TodoItem = ({ id, title, complete, toggleTodo }: TodoItemProps ) => {
  return <li className='flex gap-1 items-center'>
    <input 
      id={id} 
      type='checkbox' 
      className='cursor-pointer peer'
      defaultChecked={complete}
      onChange={e => toggleTodo(id, e.target.checked)}
    />

    <label htmlFor={id} className='peer-checked:line-through cursor-pointer peer-checked:text-stone-700 select-none p-1 text-1xl'>{title}</label>

    <button>X</button>

  </li>
}