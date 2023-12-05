'use client';
import { useSession, signIn, signOut } from "next-auth/react"

export default function CamperVanPage() {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email;
  const containerCss = 'w-fit ml-auto my-4 sm:mr-4 mr-0';
  const userNameMaxAvailableLength = 20;

  if (status === "loading") {
    return (
      <>
        <div className={containerCss}>
          <p>Hang on there...</p>
        </div>
      </>
    )
  }

  if (status === "authenticated") {
    return (
      <>
        <div className={containerCss}>
          <p>Signed in as {userEmail.length < userNameMaxAvailableLength ? userEmail : userEmail.slice(0,userNameMaxAvailableLength-3) + '...'}</p>
          <button className="block ml-auto border rounded border-[#efefef] p-1 mt-1 text-[1.1rem]" onClick={() => signOut()}>Sign out</button>
        </div>
        {/* <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" /> */}
      </>
    )
  }

  return (
    <>
      <div className={containerCss}>
        <p>You are not signed in.</p>
        <button className="block ml-auto border rounded border-[#efefef] p-1 mt-1 text-[1.1rem]" onClick={() => signIn("github")}>Sign in</button>
      </div>
    </>
  )
}