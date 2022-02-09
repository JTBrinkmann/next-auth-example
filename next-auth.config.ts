import CredentialsProvider from "next-auth/providers/credentials"

export const nextAuthConfig = {
  // secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "E-Mail", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        return {
          id: 1,
          email: "john@doe.com",
          name: "John Doe",
        }
      },
    }),
  ],
}
