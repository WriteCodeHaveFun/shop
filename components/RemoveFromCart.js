'use client';

import { useSession } from "next-auth/react";

export default function RemoveFromCart({itemId, setCartData}) {
    const { data: session } = useSession()
    const userEmail = session?.user?.email;
    const cartName = userEmail ? userEmail + '\'s-cart' : 'cart';

    function handleClick() {
        if (window === undefined) return;
        let cartData = JSON.parse(localStorage.getItem(cartName));
        delete cartData[itemId];
        cartData.data = cartData.data.filter(function(obj) {
            return obj.itemId !== itemId
        });
        localStorage.setItem(cartName, JSON.stringify(cartData));
        setCartData(JSON.parse(localStorage.getItem(cartName)));
    }
    return(
        <>
            <div className="my-4">
                <button
                    onClick={handleClick}
                >
                    <strong className="">Remove item(s) from cart</strong>
                </button>
            </div>
        </>
    )
}