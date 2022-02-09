// This is an example of how to access a session from an API route
import { getSession } from "next-auth/react"
import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { nextAuthConfig } from "../../../next-auth.config"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await getSession({ req })
  const session = await getServerSession({ req, res }, nextAuthConfig)
  res.send(JSON.stringify(session, null, 2))
}
