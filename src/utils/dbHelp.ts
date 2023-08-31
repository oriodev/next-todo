import prisma from "@/db"

const getTodo = () => {
  return prisma.todo.findMany()
}

const toggleTodo = async (id: string, complete: boolean) => {
  'use server'

  await prisma.todo.update({ where: { id }, data: { complete } })
}

export { getTodo, toggleTodo }