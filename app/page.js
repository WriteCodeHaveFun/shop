'use client'

import Link from "next/link";

//import:
const tempGroupsArr = ['iphone', 'macbook', 'samsung'];

export default function Home() {
  const list = tempGroupsArr.map((elem,i) => {

    const cssClassStr = `col-span-1 row-span-${i === 0 ? 2 : 1} border rounded-lg`;
    return (
      <li
        key={`${elem}${i}`}
        className={cssClassStr}
      >
        <Link
          href={`/items?search=${elem}`}
          className="w-full h-full block"
        >
            {elem}
        </Link>
      </li>
    )
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is main page</h1>
      <ul className="w-full grid grid-cols-2 gap-2">
        {list}
      </ul>
    </main>
  )
}
