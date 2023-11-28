'use client';

export default function AddToCart({itemId, number}) {
    const addValueTOLocalStorage = () => localStorage.setItem(itemId, number)
    return(
        <>
            <div className="my-4">
                <p>item id: {itemId}</p>
                <p>number of items: {number}</p>
                <button
                    onClick={() => addValueTOLocalStorage()}
                >
                    add to cart
                </button>
            </div>
        </>
    )
}