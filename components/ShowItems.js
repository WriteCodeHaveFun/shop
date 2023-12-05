'use client';
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
        return (
            <li
                key={item.itemId}
                className="w-[calc(50%-0.5rem)]"
            >
                <p>Name: {item.itemName}</p>
                <p>Price: {item.itemPrice}$</p>
                <p>Info: {item.itemShortInfo}</p>
                <Link
                    href={`/items/${item.itemId}`}
                    // as={`/items/${item.itemId}?data=someData`}
                >
                    More info
                </Link>
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
            <ul className="my-4 flex flex-wrap gap-4">
                {/* <FilteredList list={list}></FilteredList> */}
                {list}
            </ul>
        </>
    )
}