import prisma from "@/db"

const getTodo = () => {
  return prisma.todo.findMany()
}

export { getTodo }