'use client';

import { useState } from "react";

export default function AddToCart({itemId, number, fullData}) {
    const [isClickAvailable, setIsClickAvailable] = useState(true);
    const addValueTOLocalStorage = () => {
        const curItemIdInfo = localStorage.getItem('cart');

        if (curItemIdInfo) {
            const obj = JSON.parse(curItemIdInfo);

            if (!obj.hasOwnProperty(itemId)) {
                obj[itemId] = number;
                obj.data.push(fullData[0]);
                localStorage.setItem('cart', JSON.stringify(obj));
            } else {
                obj[itemId] = obj[itemId] + number;
                localStorage.setItem('cart', JSON.stringify(obj));
            }
        } else {
            const infoObj = {
                [itemId]: number,
                data: fullData
            };
            localStorage.setItem('cart', JSON.stringify(infoObj))
        }
    }

    function handleClick() {
        if (isClickAvailable) {
            setIsClickAvailable(false);
            setTimeout(
                () => setIsClickAvailable(true), 1000
            );
            addValueTOLocalStorage();
        } else {
            return false;
        }
    }
    return(
        <>
            <div className="my-4">
                <p>number of items: {number}</p>
                <button
                    onClick={handleClick}
                >
                    {isClickAvailable ? 'add to cart' : 'adding to cart...'}
                </button>
            </div>
        </>
    )
}