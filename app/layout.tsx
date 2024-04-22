import Header from '@/components/header/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Raphael Fratel | Portfolio',
  description: 'Raphael é um desenvolvedor fullstack Next.js e React.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} body-style`}>
        <div className='home-bg-rigth'>
        </div>
        <div className='home-bg-left'>
        </div>
        <Header />
        {children}
      </body>
    </html>
  )
}
