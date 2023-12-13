'use client'

import Link from "next/link";
import Image from "next/image";
// import srcImg from '@/app/src/iphone.jpg'
// import imgFolderSrc from '@/app/src/'

//import:
const tempGroupsArr = ['iphone', 'macbook', 'samsung'];

export default function Home() {
  const list = tempGroupsArr.map((elem,i) => {

    const cssClassStr = `my-4 md:my-0 w-fit min-w-full ${i === 0 ? 'h-full':'h-fit'} overflow-hidden col-span-1 row-span-${i === 0 ? 2 : 1} ${i===0?'row-start-1 row-end-3':''} border rounded-lg`;
    return (
      <li
        key={`${elem}${i}`}
        className={cssClassStr}
      >
        <Link
          href={`/items?search=${elem}`}
          className={`w-full ${i === 0 ? 'h-full':'h-fit'} block`}
        >
          <p
            className="font-black text-4xl p-2 capitalize text-center"
          >{elem}{elem !== 'samsung' ? 's':''}</p>
          <div
            className="h-full bg-[#9ca3af]"
          >
            <Image
              className="w-full h-full object-cover"
              src={`/src/${elem}.jpg`}
              alt={elem}
              width={1000}
              height={1000}
            ></Image>
          </div>
        </Link>
      </li>
    )
  })
  return (
    <main className="flex flex-col items-center justify-between md:p-24 py-4">
      {/* <h1>This is main page</h1> */}
      <ul className="w-full max-w-[1440px] h-auto md:grid grid-cols-2 gap-2 auto-rows-fr">
        {list}
      </ul>
    </main>
  )
}
