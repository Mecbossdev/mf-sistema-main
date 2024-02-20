'use client'

import NextAuthSessionProvider from '@/providers/sessionProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

interface DefaultProviderProps {
  children?: ReactNode
  session?: Session | null;  
}

export function DefaultProvider({ children, session }: DefaultProviderProps) {
  const client = new QueryClient()
  return (
    <NextAuthSessionProvider>
      <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
        <SessionProvider session={session}>
          <QueryClientProvider client={client}>
            {children}
          </QueryClientProvider>
        </SessionProvider>
      </ThemeProvider>
      <ToastContainer />
    </NextAuthSessionProvider>


  )
}
