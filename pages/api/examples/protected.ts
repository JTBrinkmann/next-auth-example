// This is an example of to protect an API route
import { getSession } from "next-auth/react"
import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { nextAuthConfig } from "../../../next-auth.config"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await getSession({ req })
  const session = await getServerSession({ req, res }, nextAuthConfig)

  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  } else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}
