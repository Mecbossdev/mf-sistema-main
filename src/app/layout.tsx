import './globals.css'
import type { Metadata } from 'next'
import { 
  DM_Sans,
  Bai_Jamjuree as BaiJamjuree,
 } from 'next/font/google'
import { Session } from 'next-auth'
import { DefaultProvider } from '@/components/default-provider'
import HeaderDefault from '@/components/header-default'

 const dm_sans = DM_Sans({ 
    subsets: ['latin'],
    weight: '500',
    variable: '--font-dm-sans' })
 const baiJamjuree = BaiJamjuree({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-bai-jam-juree',
 })

export const metadata: Metadata = {
  title: 'MF Sistema',
  description: 'Sistema de automação de processos',
}

interface propsApp {
  children?: React.ReactNode,
  session?: Session | null;
}

export default function RootLayout({children, session}: propsApp) {

  return (
    <html lang="pt-Br"className={dm_sans.variable}>
      <body>
        <DefaultProvider>
          {children}    
        </DefaultProvider>
      </body>
    </html>
  )
}
