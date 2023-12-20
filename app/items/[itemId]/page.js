'use client'
import { usePathname } from "next/navigation"
import AddToCart from '@/components/AddToCart'
// import RemoveFromCart from '@/components/RemoveFromCart'
import { useState, useEffect } from "react";
import fetchData from "@/lib/fetchDataById";
import Image from "next/image";

export default function Item() {
  const curPath = usePathname();
  const itemId = curPath.slice(curPath.lastIndexOf('/') + 1);
  const [curItemData, setCurItemData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function getData() {
      setIsFetching(true);
      const result = itemId ? (
          await fetchData(itemId)
      ) : (
          await fetchData('')
      );
      setIsFetching(false);
      setCurItemData(result);
      // return result;
    }
    getData();


    // async function fetchD() {
    //   const result = await getData();
    //   setIsFetching(false);
    //   setCurItemData(result);
    // }
    
    // fetchD();
  }, [itemId]);

  
  const itemInfo = curItemData.map((item, i) => {
    let imgName = '';
    if (item.itemName.toLowerCase().includes('iphone')) {
        imgName='itemId-iphone';
    }
    if (item.itemName.toLowerCase().includes('macbook')) {
        imgName='itemId-macbook';
    }
    if (item.itemName.toLowerCase().includes('samsung')) {
        imgName='itemId-samsung';
    }
    return (
      <div  key={`${item}${i}`}>
        <Image
            className="object-cover bg-slate-400"
            src={`/src/${imgName}.jpg`}
            alt={imgName}
            width={200}
            height={200}
        >
        </Image>
        <p>Name: {item.itemName}</p>
        <p>Price: {item.itemPrice}$</p>
        <p>Info: {item.itemInfo}</p>
      </div>
    )
  });
  return (
    <>
      <div className="flex flex-col items-center justify-between p-24 h-full">
        {isFetching ? (
          <p>Loading...</p>
          ) : (
          <>
            {itemInfo}
            <AddToCart itemId={itemId} fullData={curItemData}></AddToCart>
          </>
        )}
        {/* <RemoveFromCart itemId={itemId} number={2}></RemoveFromCart> */}
      </div>
    </>
  )
}