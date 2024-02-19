import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        name: {label: 'name', type: 'text'},
        password: {label: 'password', type: 'password'},
      },

      async authorize(credentials, req) {
        const response = await fetch("https://localhost:8000/user/auth/", {
          method: 'POST',
          headers: {
            'Context-type': 'application/json'
          },
          body: JSON.stringify({
            name: credentials?.name,
            password: credentials?.password
          })
        })

        const user = await response.json()

        if (user && response.ok) {
          return user
        }
        
        return null
      }, 
    })
  ],

  pages: {
    signIn: '/'
  }
}


const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }