import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './style.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord Server Cloner 2',
  description: 'By joaokristani & Infinite Community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}