import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/activeSectionContext';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/themeSwitch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Raphael Fratel | Portfolio',
  description: 'Raphael é um desenvolvedor fullstack Next.js e React.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} body-style`}>
        <div className='home-bg-rigth'></div>
        <div className='home-bg-left'></div>
        <ThemeContextProvider>
        <ActiveSectionContextProvider>
        <Header />
        {children}
        <Footer />
        <Toaster position='top-right' />
        <ThemeSwitch />
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
