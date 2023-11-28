'use client'
import { usePathname } from "next/navigation"
import AddToCart from '@/components/AddToCart'
import RemoveFromCart from '@/components/RemoveFromCart'

export default function Item() {
    const curPath = usePathname();
    const itemId = curPath.slice(curPath.lastIndexOf('/') + 1)
    return (
      <>
        <div className="flex flex-col items-center justify-between p-24">
          <p>this is dynamic page</p>
          <p>item id is: {itemId}</p>
          <AddToCart itemId={itemId} number={2}></AddToCart>
          <RemoveFromCart itemId={itemId} number={2}></RemoveFromCart>
        </div>
      </>
    )
  }