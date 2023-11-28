'use client';

export default function AddToCart({itemId, number}) {
    return(
        <>
            <p>item id: {itemId}</p>
            <p>number of items: {number}</p>
            <button
                onClick={() => localStorage.removeItem(itemId)}
            >remove item from cart</button>
        </>
    )
}