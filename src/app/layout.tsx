import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next TODO',
  description: 'a basic todo app with nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-rose-950 text-slate-950 container mx-auto p-4 flex justify-center items-center min-h-screen`}>
        <div className='flex flex-col bg-slate-100 w-1/2 p-10'>
          {children}
        </div>
      </body>
    </html>
  )
}
