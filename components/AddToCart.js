'use client';

import { useState } from "react";

export default function AddToCart({itemId, fullData}) {
    const [isClickAvailable, setIsClickAvailable] = useState(true);
    const [numberOfItems, setNumberOfItems] = useState(1);
    const number = numberOfItems;

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
    function handleChange(value) {
        setNumberOfItems(Number(value));
    }
    return(
        <>
            <div className="my-4">
                <p>number of items: 
                    <input 
                        type="number" 
                        min={1}
                        max={10}
                        value={numberOfItems}
                        onChange={(e) => handleChange(e.target.value)}
                        placeholder="Number of items">
                    </input>
                </p>
                <button
                    onClick={handleClick}
                >
                    {isClickAvailable ? 'add to cart' : 'adding to cart...'}
                </button>
            </div>
        </>
    )
}