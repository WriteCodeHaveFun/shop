'use client';

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function AddToCart({itemId, fullData}) {
    const [isClickAvailable, setIsClickAvailable] = useState(true);
    const [numberOfItems, setNumberOfItems] = useState(1);
    const { data: session } = useSession()
    const userEmail = session?.user?.email;
    const cartName = userEmail ? userEmail + '\'s-cart' : 'cart';
    const number = numberOfItems;
    const minValue = 0;
    const maxValue = 10;

    useEffect(() => {
    }, []);

    const addValueTOLocalStorage = () => {
        // localStorage fix
        if (typeof window === undefined || typeof localStorage === undefined) return;
        const curItemIdInfo = localStorage.getItem(cartName);

        if (curItemIdInfo) {
            const obj = JSON.parse(curItemIdInfo);

            if (!obj.hasOwnProperty(itemId)) {
                obj[itemId] = number;
                obj.data.push(fullData[0]);
                localStorage.setItem(cartName, JSON.stringify(obj));
            } else {
                obj[itemId] = obj[itemId] + number;
                localStorage.setItem(cartName, JSON.stringify(obj));
            }
        } else {
            const infoObj = {
                [itemId]: number,
                data: fullData
            };

            // localStorage fix
            if (typeof window === undefined || typeof localStorage === undefined) return;
            localStorage.setItem(cartName, JSON.stringify(infoObj))
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
        if (value > maxValue) value = maxValue;
        if (Number(value) < minValue) value = Number(minValue);
        setNumberOfItems(Number(value));
    }
    return(
        <>
            <div className="my-4">
                <p className="text-xl font-bold mr-4">Number of items: <input 
                        className="text-center rounded border border-[#efefef]"
                        type="number" 
                        min={minValue}
                        max={maxValue}
                        value={numberOfItems}
                        onChange={(e) => handleChange(e.target.value)}
                        placeholder="Number of items">
                    </input>
                </p>
                <button
                    className="p-4 mt-4 bg-white block border border-[#efefef] rounded box-border font-black md:text-3xl text-[1.5rem] capitalize"
                    onClick={handleClick}
                >
                    {isClickAvailable ? 'add to cart' : 'adding to cart...'}
                </button>
            </div>
        </>
    )
}