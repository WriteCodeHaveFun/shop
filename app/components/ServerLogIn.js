
import { signIn, signOut } from "next-auth/react"
import { getServerSession } from 'next-auth';
import GithubProvider from "next-auth/providers/github"


export default async function CamperVanPage() {
    const session = await getServerSession({
        providers: [
            GithubProvider({
              clientId: process.env.GITHUB_ID,
              clientSecret: process.env.GITHUB_SECRET,
            }),
          ],
      })

//   if (status === "loading") {
//     return <p>Hang on there...</p>
//   }

  if (session) {
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button>Sign out</button>
        <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
      </>
    )
  }

  return (
    <>
      <p>Not signed in.</p>
      <button>Sign in</button>
    </>
  )
}