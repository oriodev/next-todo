import prisma from "@/db"
import { redirect } from 'next/navigation'


const getTodo = () => {
  return prisma.todo.findMany()
}

const toggleTodo = async (id: string, complete: boolean) => {
  'use server'

  await prisma.todo.update({ where: { id }, data: { complete } })
}

const createTodo = async (data: FormData) => {
  'use server'

  const title = data.get('title')?.valueOf()
  if (typeof(title) !== 'string' || title.length === 0) {
    throw new Error('invalid title')
  }

  await prisma.todo.create({ data: { title, complete: false} })
  redirect('/')
  
} 

const deleteTodo = async (id: string) => {
  'use server'

  await prisma.todo.delete({ where: { id }})
}

export { getTodo, toggleTodo, createTodo, deleteTodo }