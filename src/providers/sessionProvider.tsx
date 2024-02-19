'use client'
import { SessionProvider } from "next-auth/react"

export interface INextAuthSessionProviderProps {
  children: React.ReactNode
}

export default function NextAuthSessionProvider ({children}: INextAuthSessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>
}
