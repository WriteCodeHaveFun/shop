'use client';
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";

export default function ShowItems({itemsData}) {
    /* 
        {
            "itemId": {"$oid": "617eef2a8cfc97000165d073"},
            "itemName": "Samsung Galaxy S21",
            "itemPrice": "899.99",
            "itemShortInfo": "Capture every moment with the Samsung Galaxy S21's versatile camera system and enjoy a vibrant AMOLED display.",
            "itemInfo": "The Galaxy S21 boasts a powerful Exynos 2100 or Snapdragon 888 processor, 8K video recording, and a sleek design with a 120Hz refresh rate display. Stay connected and productive with this flagship smartphone."
        }
    */
    let maxPrice = 0, minPrice = 0;
    const list = itemsData.map((item, i) => {
        if (i === 0) minPrice = Number(item.itemPrice);
        if (Number(item.itemPrice) > maxPrice) maxPrice = Number(item.itemPrice);
        if (Number(item.itemPrice) < minPrice) minPrice = Number(item.itemPrice);
        let imgName = '';
        if (item.itemName.toLowerCase().includes('iphone')) {
            imgName='items-iphone';
        }
        if (item.itemName.toLowerCase().includes('macbook')) {
            imgName='items-macbook';
        }
        if (item.itemName.toLowerCase().includes('samsung')) {
            imgName='items-samsung';
        }
        return (
            <li
                key={item.itemId}
                className="md:w-[calc(50%-0.5rem)] md:my-0 my-4 grow relative pb-4 mb-4"
            >
                <div className="h-full">
                    <div className="md:h-96 h-84">
                        <Link
                            className="block h-full"
                            href={`/items/${item.itemId}`}
                        >
                            <div className="bg-[#9ca3af] w-full h-full">
                                <Image
                                    className="h-full object-cover"
                                    src={`/src/${imgName}.jpg`}
                                    alt={imgName}
                                    width={2000}
                                    height={2000}
                                >
                                </Image>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full">
                        <p className="text-center">{item.itemName}</p>
                        <p className="text-center">{item.itemPrice}$</p>
                        <br></br>
                        <p className="h-20">{item.itemShortInfo}</p>
                        <br></br>
                        <div className="">
                            <Link
                                className="inline-block bottom-0 rounded p-4 bg-black text-white font-black text-xl"
                                href={`/items/${item.itemId}`}
                            >
                                More info
                            </Link>
                        </div>
                    </div>
                </div>
            </li>
        );
    })
    if (itemsData.length === 0) {
        return (
            <>
                <div className="p-4">
                    <h1 className="text-center text-5xl font-bold">No match found</h1>
                </div>
            </>
        )
    }
    
    return(
        <>
            <ul className="max-w-[1440px] mx-auto my-4 md:flex flex-wrap gap-4 md:p-4">
                {/* <FilteredList list={list}></FilteredList> */}
                {list}
            </ul>
        </>
    )
}