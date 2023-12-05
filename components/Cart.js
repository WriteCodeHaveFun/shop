'use client'

import { useState } from "react"

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const cartData = JSON.parse(localStorage.getItem('cart'));

    // const numberOfItems = cartData.number;
    let cart = [];
    if (cartData) {
        cart = cartData.data.map(item => (
            <li key={item.itemId}>
                <p>Item name: {item.itemName}</p>
                {/* <p>Item info: {item.itemInfo}</p> */}
                <p>number of items: {cartData[item.itemId]}</p>
            </li>
        ));
    }

    function handleToggleClick() {
        setIsOpen(!isOpen);
    }

    function handleCloseClick() {
        setIsOpen(false);
    }
    return(
        <>
            <dialog open={isOpen}>
                <p>This is your cart</p>
                {cart}
                <button onClick={handleCloseClick}>Close</button>
            </dialog>
            <button 
                className="h-[100px] w-[100px] border"
                onClick={handleToggleClick}
            >
                Open/Close
            </button>
        </>
    )
}