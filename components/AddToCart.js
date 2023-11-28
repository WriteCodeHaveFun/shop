'use client';

export default function AddToCart({itemId, number}) {
    const addValueTOLocalStorage = () => {
        const curItemIdInfo = localStorage.getItem(itemId)
        if (curItemIdInfo) {
            localStorage.setItem(itemId, Number(curItemIdInfo) + number)
        } else {
            localStorage.setItem(itemId, number)
        }
    }
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