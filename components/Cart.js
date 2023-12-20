'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react"
import RemoveFromCart from "./RemoveFromCart";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession()
    const userEmail = session?.user?.email;
    const cartName = userEmail ? userEmail + '\'s-cart' : 'cart';
    const [cartData, setCartData] = useState(false);

    useEffect(() => {
        if (typeof window === undefined || typeof localStorage === undefined) return;
        setCartData(JSON.parse(localStorage.getItem(cartName)));
    }, [cartName])

    // const numberOfItems = cartData.number;
    let cart = [];
    let totalPrice = 0;
    if (cartData) {
        cart = cartData.data.map(item => {
            totalPrice += (Number(item.itemPrice) * Number(cartData[item.itemId]));

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
            return(
                <li className="grow h-[230px] [@media(max-width:320px)]:mb-4" key={item.itemId}>
                    <Image
                        className="h-[134px] object-cover bg-slate-400"
                        src={`/src/${imgName}.jpg`}
                        alt={imgName}
                        width={200}
                        height={200}
                    >
                    </Image>
                    <p>Item: {item.itemName}</p>
                    {/* <p>Item info: {item.itemInfo}</p> */}
                    <p>Number of items: {cartData[item.itemId]}</p>
                    <RemoveFromCart
                        setCartData={setCartData}
                        itemId={item.itemId} 
                    />
                </li>
            )
        });
    }

    function handleToggleClick() {
        setIsOpen(!isOpen);
        if (typeof window === undefined || typeof localStorage === undefined) return;
        setCartData(JSON.parse(localStorage.getItem(cartName)));
    }

    function handleCloseClick() {
        setIsOpen(false);
    }

    function handleBuyAllClick() {
        setIsOpen(false);
        if (typeof window === undefined || typeof localStorage === undefined) return;
        localStorage.removeItem(cartName);
    }
    return(
        <>
            <dialog className="fixed top-0 left-0 z-[100] w-full h-full opacity-100 overflow-auto" open={isOpen}>
                <div className="max-w-[1440px] mx-auto">
                    {/* <p>This is your cart</p> */}
                    <ul className="mt-4 mb-8 [@media(min-width:321px)]:flex [@media(min-width:321px)]:flex-wrap gap-4">
                        {cart}
                    </ul>
                    <p>Total Price: <strong className="text-3xl">{totalPrice.toFixed(2)}$</strong></p>
                    <button 
                        className="fixed top-0 right-0 h-[60px] w-[100px] rounded rounded-bl-[40px] border border-[#efefef] bg-white font-black text-3xl"    
                        onClick={handleCloseClick}
                    >
                        Close
                    </button>
                    {totalPrice > 0 ? (
                        <Link 
                            className="mt-4 py-4 inline-block font-bold text-6xl rounded border border-[#efefef] bg-white"
                            onClick={handleBuyAllClick}
                            href={`/about`}
                        >
                            BUY ALL
                        </Link>
                    ) : null}
                </div>
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