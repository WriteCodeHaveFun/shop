'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import RemoveFromCart from "./RemoveFromCart";

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cart')));

    // const numberOfItems = cartData.number;
    let cart = [];
    if (cartData) {
        cart = cartData.data.map(item => (
            <li key={item.itemId}>
                <p>Item name: {item.itemName}</p>
                {/* <p>Item info: {item.itemInfo}</p> */}
                <p>number of items: {cartData[item.itemId]}</p>
                <RemoveFromCart
                    setCartData={setCartData}
                    itemId={item.itemId} 
                />
            </li>
        ));
    }

    function handleToggleClick() {
        setIsOpen(!isOpen);
        setCartData(JSON.parse(localStorage.getItem('cart')));
    }

    function handleCloseClick() {
        setIsOpen(false);
    }
    return(
        <>
            <dialog className="fixed top-0 left-0 z-[100] w-full h-full opacity-95" open={isOpen}>
                <p>This is your cart</p>
                {cart}
                <button onClick={handleCloseClick}>Close</button>
            </dialog>
            <button 
                
                className="h-[100px] w-[200px] flex items-center md:ml-0 ml-auto sm:mr-4 mr-0 px-4 box-border rounded border border-[#efefef] bg-white font-black text-3xl"
                onClick={handleToggleClick}
            >
                {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                <FontAwesomeIcon icon={solid("cart-shopping")} /> */}
                <FontAwesomeIcon style={{height: '70px'}} icon={faCartShopping} />
                My cart
            </button>
        </>
    )
}