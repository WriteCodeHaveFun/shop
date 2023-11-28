'use client'
import { usePathname } from "next/navigation"

export default function Item() {
    const curPath = usePathname();
    const itemId = curPath.slice(curPath.lastIndexOf('/') + 1)
    return (
      <>
        <div className="flex flex-col items-center justify-between p-24">
          <p>this is dynamic page</p>
          <p>item id is: {itemId}</p>
        </div>
      </>
    )
  }