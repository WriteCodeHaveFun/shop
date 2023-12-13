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
                className="md:w-[calc(50%-0.5rem)] md:my-0 my-4 grow"
            >
                <div className="flex flex-wrap h-full">
                    <div className="">
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
                        <p>{item.itemShortInfo}</p>
                        <br></br>
                        <Link
                            href={`/items/${item.itemId}`}
                        >
                            More info
                        </Link>
                    </div>
                </div>
            </li>
        );
    })
    if (itemsData.length === 0) {
        return (
            <>
                <h1>No match found</h1>
            </>
        )
    }
    
    return(
        <>
            <ul className="max-w-[1440px] mx-auto my-4 md:flex flex-wrap gap-4">
                {/* <FilteredList list={list}></FilteredList> */}
                {list}
            </ul>
        </>
    )
}